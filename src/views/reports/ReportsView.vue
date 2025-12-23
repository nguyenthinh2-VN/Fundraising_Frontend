<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import BackButton from "@/components/common/BackButton.vue";
import CategoryLegend from "@/components/common/CategoryLegend.vue";
import PdfExport from "@/components/reports/PdfExport.vue";

// PDF Modal state
const showPdfModal = ref(false);

// Selected filters
const selectedYear = ref("2025");
const selectedCategory = ref("all");

const years = ["2025", "2024", "2023", "2022", "2021"];
const categories = [
  { key: "all", label: "Tất cả các quý" },
  { key: "q1", label: "Quý 1" },
  { key: "q2", label: "Quý 2" },
  { key: "q3", label: "Quý 3" },
  { key: "q4", label: "Quý 4" },
];

// Stats data
const stats = ref({
  totalIncome: "12,500,000,000",
  incomeChange: "+8%",
  totalExpense: "9,200,000,000",
  expensePercent: "73.6%",
  remaining: "3,300,000,000",
  remainingNote: "Sẵn sàng cho dự án Quý 4",
});

// Fund distribution for pie chart
const distribution = ref([
  { label: "Giáo dục & Học bổng", percent: 45, color: "#3b82f6" },
  { label: "Y tế & Sức khỏe", percent: 30, color: "#10b981" },
  { label: "Cứu trợ khẩn cấp", percent: 15, color: "#f59e0b" },
  { label: "Vận hành & QL", percent: 10, color: "#6b7280" },
]);

// Monthly income/expense chart data
const monthlyData = ref([
  { month: "T1", income: 80, expense: 60 },
  { month: "T2", income: 70, expense: 55 },
  { month: "T3", income: 90, expense: 70 },
  { month: "T4", income: 85, expense: 65 },
  { month: "T5", income: 100, expense: 80 },
  { month: "T6", income: 75, expense: 60 },
  { month: "T7", income: 80, expense: 65 },
  { month: "T8", income: 78, expense: 62 },
  { month: "T9", income: 82, expense: 68 },
  { month: "T10", income: 88, expense: 72 },
  { month: "T11", income: 92, expense: 75 },
  { month: "T12", income: 95, expense: 78 },
]);

// Transaction log
const transactions = ref([
  {
    id: 1,
    date: "20/08/2024",
    description: "Mua vật tư xây dựng điểm trường Hà Giang",
    category: "Giáo dục",
    categoryType: "education",
    amount: "- 45,000,000 đ",
    amountType: "expense",
    document: "CT-2024-089",
  },
  {
    id: 2,
    date: "18/06/2024",
    description: "Quyên góp từ Công ty XYZ",
    category: "Ủng hộ",
    categoryType: "donation",
    amount: "+ 100,000,000 đ",
    amountType: "income",
    document: "PT-2024-156",
  },
  {
    id: 3,
    date: "15/06/2024",
    description: "Hỗ trợ viện phí bé Nguyễn Văn A",
    category: "Y tế",
    categoryType: "health",
    amount: "- 12,500,000 đ",
    amountType: "expense",
    document: "CT-2024-078",
  },
  {
    id: 4,
    date: "10/06/2024",
    description: "Tài trợ học bổng tháng 6",
    category: "Giáo dục",
    categoryType: "education",
    amount: "- 30,000,000 đ",
    amountType: "expense",
    document: "CT-2024-067",
  },
]);

// Featured projects
const featuredProjects = ref([
  {
    id: 1,
    title: "Xây trường vùng cao Hà Giang",
    description:
      "Dự án xây mới 5 phòng học và khu vệ sinh cho điểm trường Xín Mần.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format",
    status: "Đang thực hiện",
    statusType: "active",
    progress: 75,
    raised: "850tr (1.2 tỷ)",
  },
  {
    id: 2,
    title: "Trái tim cho em 2024",
    description: "Hỗ trợ chi phí phẫu thuật tim bẩm sinh cho 20 em nhỏ.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&auto=format",
    status: "Hoàn thành 90%",
    statusType: "completing",
    progress: 90,
    raised: "1.8 tỷ / 2 tỷ",
  },
  {
    id: 3,
    title: "Bữa cơm 0 đồng",
    description: "Duy trì bếp ăn từ thiện phục vụ 500 suất cơm mỗi ngày.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format",
    status: "Đã hoàn thành",
    statusType: "completed",
    progress: 75,
    raised: "45tr / 60tr",
  },
]);

// Computed max for chart
const maxChartValue = computed(() => {
  return Math.max(
    ...monthlyData.value.map((d) => Math.max(d.income, d.expense))
  );
});

// Category legend items for transactions
const categoryLegendItems = ref([
  { key: "education", label: "Giáo dục", color: "#3b82f6" },
  { key: "donation", label: "Ủng hộ", color: "#10b981" },
  { key: "health", label: "Y tế", color: "#ef4444" },
]);

// Report data for PDF
const reportData = computed(() => ({
  stats: stats.value,
  distribution: distribution.value,
  transactions: transactions.value,
  projects: featuredProjects.value,
}));

// Open PDF Modal
const downloadReport = () => {
  showPdfModal.value = true;
};
</script>

<template>
  <div class="reports-page">
    <section class="content-section">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb-nav">
          <BackButton variant="default" />
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active">Báo cáo tài chính</li>
          </ol>
        </nav>

        <!-- Page Header -->
        <div class="page-header-row">
          <div>
            <h1 class="page-title">Báo cáo Quỹ {{ selectedYear }}</h1>
            <p class="page-subtitle">
              Minh bạch tài chính và hiệu quả hoạt động là ưu tiên hàng đầu.
            </p>
          </div>
          <button class="btn-download" @click="downloadReport">
            <i class="bi bi-download"></i> Tải báo cáo (PDF)
          </button>
        </div>

        <!-- Filters -->
        <div class="filters-row">
          <select v-model="selectedYear" class="filter-select">
            <option v-for="year in years" :key="year" :value="year">
              Năm {{ year }}
            </option>
          </select>
          <select v-model="selectedCategory" class="filter-select">
            <option v-for="cat in categories" :key="cat.key" :value="cat.key">
              {{ cat.label }}
            </option>
          </select>
          <button class="btn-apply">
            <i class="bi bi-funnel"></i> Áp dụng
          </button>
        </div>

        <!-- Stats Cards -->
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon green">
              <i class="bi bi-arrow-down-circle"></i>
            </div>
            <div>
              <p class="stat-label">TỔNG THU NĂM NAY</p>
              <h2 class="stat-value">{{ stats.totalIncome }} đ</h2>
              <span class="stat-change green"
                >{{ stats.incomeChange }} so với cùng kỳ</span
              >
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon orange">
              <i class="bi bi-arrow-up-circle"></i>
            </div>
            <div>
              <p class="stat-label">TỔNG CHI DỰ ÁN</p>
              <h2 class="stat-value">{{ stats.totalExpense }} đ</h2>
              <span class="stat-note"
                >{{ stats.expensePercent }} tổng ngân sách</span
              >
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon blue"><i class="bi bi-wallet2"></i></div>
            <div>
              <p class="stat-label">SỐ DƯ HIỆN TẠI</p>
              <h2 class="stat-value">{{ stats.remaining }} đ</h2>
              <span class="stat-note">{{ stats.remainingNote }}</span>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-row">
          <!-- Pie Chart -->
          <div class="chart-box">
            <h3 class="chart-title">Phân bổ nguồn vốn</h3>
            <div class="pie-chart-container">
              <div class="pie-wrapper">
                <svg viewBox="0 0 36 36" class="pie-svg">
                  <circle cx="18" cy="18" r="15.9" class="pie-bg" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    class="pie-segment seg1"
                    stroke-dasharray="45 100"
                    stroke-dashoffset="0"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    class="pie-segment seg2"
                    stroke-dasharray="30 100"
                    stroke-dashoffset="-45"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    class="pie-segment seg3"
                    stroke-dasharray="15 100"
                    stroke-dashoffset="-75"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    class="pie-segment seg4"
                    stroke-dasharray="10 100"
                    stroke-dashoffset="-90"
                  />
                </svg>
                <div class="pie-center">
                  <span class="pie-percent">100%</span>
                  <span class="pie-label">Tổng chi</span>
                </div>
              </div>
              <div class="pie-legend">
                <div
                  v-for="item in distribution"
                  :key="item.label"
                  class="legend-row"
                >
                  <span
                    class="legend-dot"
                    :style="{ background: item.color }"
                  ></span>
                  <span class="legend-text">{{ item.label }}</span>
                  <span class="legend-value">{{ item.percent }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="chart-box">
            <div class="chart-header">
              <h3 class="chart-title">Xu hướng Thu/Chi (12 tháng)</h3>
              <div class="chart-legend">
                <span class="legend-item"
                  ><span class="dot green"></span>Thu</span
                >
                <span class="legend-item"
                  ><span class="dot orange"></span>Chi</span
                >
              </div>
            </div>
            <div class="bar-scroll-container">
              <div class="bar-chart">
                <div
                  v-for="item in monthlyData"
                  :key="item.month"
                  class="bar-group"
                >
                  <div class="bar-pair">
                    <div
                      class="bar green"
                      :style="{
                        height: (item.income / maxChartValue) * 100 + '%',
                      }"
                    ></div>
                    <div
                      class="bar orange"
                      :style="{
                        height: (item.expense / maxChartValue) * 100 + '%',
                      }"
                    ></div>
                  </div>
                  <span class="bar-label">{{ item.month }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Transaction Log -->
        <div class="transactions-box">
          <div class="section-header">
            <h3>Nhật ký giao dịch gần đây</h3>
            <RouterLink to="#" class="link-all">Xem tất cả →</RouterLink>
          </div>
          <div class="table-scroll">
            <table class="tx-table">
              <thead>
                <tr>
                  <th>NGÀY</th>
                  <th>MÔ TẢ</th>
                  <th>DANH MỤC</th>
                  <th>SỐ TIỀN</th>
                  <th class="hide-mobile">CHỨNG TỪ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tx in transactions" :key="tx.id">
                  <td>{{ tx.date }}</td>
                  <td>{{ tx.description }}</td>
                  <td>
                    <span class="cat-dot" :class="tx.categoryType"></span>
                    <span class="cat-text desktop-only">{{ tx.category }}</span>
                  </td>
                  <td :class="tx.amountType">{{ tx.amount }}</td>
                  <td class="hide-mobile">{{ tx.document }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Category Legend for Mobile -->
          <CategoryLegend :items="categoryLegendItems" class="mobile-only" />
        </div>

        <!-- Projects -->
        <div class="projects-section">
          <h3>Tiến độ dự án trọng điểm</h3>
          <div class="projects-grid">
            <div
              v-for="project in featuredProjects"
              :key="project.id"
              class="project-card"
            >
              <div class="project-img">
                <img :src="project.image" :alt="project.title" />
                <span class="status-badge" :class="project.statusType">{{
                  project.status
                }}</span>
              </div>
              <div class="project-body">
                <h4>{{ project.title }}</h4>
                <p>{{ project.description }}</p>
                <div class="progress-row">
                  <span>Đã quyên góp: {{ project.raised }}</span>
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>
                  <span>{{ project.progress }}%</span>
                </div>
                <RouterLink to="#" class="btn-detail">Xem chi tiết</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PDF Export Modal -->
    <PdfExport
      v-if="showPdfModal"
      :report-data="reportData"
      :year="selectedYear"
      @close="showPdfModal = false"
    />
  </div>
</template>

<style scoped>
.reports-page {
  min-height: 100vh;
  background: #f8fafc;
}

.content-section {
  padding: 2rem 0 4rem;
}

/* Breadcrumb */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.breadcrumb {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}

.breadcrumb-item a {
  color: #6b7280;
  text-decoration: none;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "›";
  padding: 0 0.5rem;
  color: #9ca3af;
}

.breadcrumb-item.active {
  color: #374151;
}

/* Page Header */
.page-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem;
}

.page-subtitle {
  color: #6b7280;
  margin: 0;
}

.btn-download {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;
}

/* Filters */
.filters-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.filter-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  font-size: 0.85rem;
}

.btn-apply {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  display: flex;
  gap: 1rem;
  background: #fff;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.stat-icon.green {
  background: #d1fae5;
  color: #059669;
}
.stat-icon.orange {
  background: #fed7aa;
  color: #ea580c;
}
.stat-icon.blue {
  background: #dbeafe;
  color: #2563eb;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.5px;
  margin: 0;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0.25rem 0;
}

.stat-change {
  font-size: 0.75rem;
}
.stat-change.green {
  color: #10b981;
}
.stat-note {
  font-size: 0.75rem;
  color: #9ca3af;
}

/* Charts Row */
.charts-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.chart-box {
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.chart-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #1f2937;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.chart-header .chart-title {
  margin: 0;
}

.chart-legend {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.dot.green {
  background: #10b981;
}
.dot.orange {
  background: #f97316;
}

/* Pie Chart */
.pie-chart-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.pie-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
}

.pie-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.pie-bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 3;
}

.pie-segment {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
}

.seg1 {
  stroke: #3b82f6;
}
.seg2 {
  stroke: #10b981;
}
.seg3 {
  stroke: #f59e0b;
}
.seg4 {
  stroke: #6b7280;
}

.pie-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.pie-percent {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

.pie-label {
  font-size: 0.75rem;
  color: #9ca3af;
}

.pie-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-text {
  flex: 1;
  font-size: 0.8rem;
  color: #374151;
}

.legend-value {
  font-weight: 600;
  font-size: 0.8rem;
  color: #1f2937;
}

/* Bar Chart with Horizontal Scroll */
.bar-scroll-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
}

.bar-scroll-container::-webkit-scrollbar {
  height: 6px;
}

.bar-scroll-container::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 3px;
}

.bar-scroll-container::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 3px;
}

.bar-chart {
  display: flex;
  gap: 0.5rem;
  min-width: max-content;
  height: 140px;
  align-items: flex-end;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 45px;
}

.bar-pair {
  display: flex;
  gap: 3px;
  height: 110px;
  align-items: flex-end;
}

.bar {
  width: 14px;
  border-radius: 3px 3px 0 0;
  min-height: 4px;
}

.bar.green {
  background: #10b981;
}
.bar.orange {
  background: #f97316;
}

.bar-label {
  font-size: 0.7rem;
  color: #9ca3af;
  margin-top: 0.4rem;
}

/* Transactions */
.transactions-box {
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.link-all {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.85rem;
}

.table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tx-table {
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
}

.tx-table th {
  text-align: left;
  font-size: 0.65rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.5px;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.tx-table td {
  padding: 0.75rem;
  font-size: 0.85rem;
  border-bottom: 1px solid #f3f4f6;
  color: #374151;
}

.cat-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  vertical-align: middle;
}

.cat-dot.education {
  background: #3b82f6;
}
.cat-dot.donation {
  background: #10b981;
}
.cat-dot.health {
  background: #ef4444;
}

.cat-text {
  margin-left: 0.5rem;
  font-size: 0.85rem;
  color: #374151;
}

/* Mobile / Desktop utilities */
.mobile-only {
  display: none;
}
.desktop-only {
  display: inline;
}
.hide-mobile {
  display: table-cell;
}

.tx-table .income,
td.income {
  color: #10b981 !important;
  font-weight: 600;
}

.tx-table .expense,
td.expense {
  color: #ef4444 !important;
  font-weight: 600;
}

/* Projects */
.projects-section {
  margin-bottom: 2rem;
}

.projects-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.project-img {
  position: relative;
  height: 140px;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
}

.status-badge.active {
  background: #dbeafe;
  color: #2563eb;
}
.status-badge.completing {
  background: #fef3c7;
  color: #d97706;
}
.status-badge.completed {
  background: #d1fae5;
  color: #059669;
}

.project-body {
  padding: 1rem;
}

.project-body h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.project-body p {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
  line-height: 1.4;
}

.progress-row {
  margin-bottom: 0.75rem;
}

.progress-row span {
  font-size: 0.75rem;
  color: #6b7280;
}

.progress-bar {
  height: 5px;
  background: #e5e7eb;
  border-radius: 3px;
  margin: 0.25rem 0;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 3px;
}

.btn-detail {
  display: block;
  text-align: center;
  padding: 0.5rem;
  background: #f3f4f6;
  color: #374151;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Mobile */
@media (max-width: 768px) {
  .page-header-row {
    flex-direction: column;
  }

  .btn-download {
    width: 100%;
    justify-content: center;
  }

  .pie-chart-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .pie-wrapper {
    margin: 0 auto;
  }

  .pie-legend {
    width: 100%;
  }

  /* Show/hide utilities on mobile */
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none !important;
  }
  .hide-mobile {
    display: none !important;
  }
}
</style>
