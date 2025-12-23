<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import BackButton from "@/components/common/BackButton.vue";

// Stats data
const stats = ref({
  totalDonations: "5.230.000.000",
  totalDonors: "12.450",
  activeCampaigns: 45,
  donationGrowth: "+12%",
  donorGrowth: "+5%",
});

// Selected year for chart
const selectedYear = ref("2023");

// Chart data (visual representation using CSS)
const monthlyData = ref([
  { month: "T1", value: 30 },
  { month: "T2", value: 35 },
  { month: "T3", value: 40 },
  { month: "T4", value: 38 },
  { month: "T5", value: 55 },
  { month: "T6", value: 70 },
  { month: "T7", value: 85 },
  { month: "T8", value: 100 },
]);

// Fund distribution
const distribution = ref([
  { label: "Giáo dục", percent: 45, color: "#3b82f6" },
  { label: "Cộng đồng", percent: 35, color: "#10b981" },
  { label: "Khẩn", percent: 20, color: "#f59e0b" },
]);

// Featured campaigns
const campaigns = ref([
  {
    id: 1,
    name: "Xây trường cho em",
    location: "Hà Giang",
    status: "Hoàn thành",
    statusType: "completed",
    progress: 100,
    raised: "500T đ",
  },
  {
    id: 2,
    name: "Cơm trưa vùng cao",
    location: "Lai Châu",
    status: "Đang chạy",
    statusType: "active",
    progress: 65,
    raised: "130T đ",
  },
  {
    id: 3,
    name: "Mổ tim miễn phi",
    location: "Toàn quốc",
    status: "Đang chạy",
    statusType: "active",
    progress: 42,
    raised: "840T đ",
  },
  {
    id: 4,
    name: "Tết ấm cho em",
    location: "Sơn La",
    status: "Mới bắt đầu",
    statusType: "new",
    progress: 25,
    raised: "184T đ",
  },
]);

// Recent donors
const recentDonors = ref([
  {
    id: 1,
    name: "Nguyễn Văn A.",
    company: "VND 2024C",
    amount: "+ 500.000đ",
    initial: "N",
    color: "#1a1a1a",
  },
  {
    id: 2,
    name: "Trần Thị B.",
    time: "2 phút trước",
    amount: "+ 2.000.000đ",
    initial: "T",
    color: "#b12029",
  },
  {
    id: 3,
    name: "Ẩn danh",
    time: "5 phút trước",
    amount: "+ 100.000đ",
    initial: "A",
    color: "#6b7280",
  },
  {
    id: 4,
    name: "Công ty XYZ",
    time: "10 phút trước",
    amount: "+ 50.000.000đ",
    initial: "C",
    color: "#3b82f6",
  },
  {
    id: 5,
    name: "Lê Văn C.",
    time: "15 phút trước",
    amount: "+ 200.000đ",
    initial: "L",
    color: "#10b981",
  },
]);

// Computed for max chart value
const maxChartValue = computed(() =>
  Math.max(...monthlyData.value.map((d) => d.value))
);
</script>

<template>
  <div class="stats-page">
    <!-- Content -->
    <section class="content-section">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb-nav" aria-label="breadcrumb">
          <BackButton variant="default" />
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Thống kê</li>
          </ol>
        </nav>

        <!-- Page Title -->
        <div class="page-title-section">
          <h1 class="page-title">Thống kê Quyên góp</h1>
          <p class="page-subtitle">
            Minh bạch tài chính là cam kết hàng đầu của Quỹ Bông Hồng Nhỏ. Dưới
            đây là báo cáo chi tiết theo thời gian thực về các hoạt động thiện
            nguyện, đảm bảo mọi đóng góp đều đến đúng nơi cần đến.
          </p>
        </div>

        <!-- Stats Cards -->
        <div class="stats-cards">
          <div class="stat-card stat-blue">
            <div class="stat-content">
              <p class="stat-label">Tổng số tiền đã nhận</p>
              <h2 class="stat-value">
                {{ stats.totalDonations }} <span class="stat-unit">VNĐ</span>
              </h2>
              <span class="stat-change positive"
                >{{ stats.donationGrowth }} so với tháng trước</span
              >
            </div>
            <div class="stat-icon">
              <i class="bi bi-piggy-bank"></i>
            </div>
          </div>

          <div class="stat-card stat-pink">
            <div class="stat-content">
              <p class="stat-label">Tổng số lượt ủng hộ</p>
              <h2 class="stat-value">{{ stats.totalDonors }}</h2>
              <span class="stat-change positive"
                >{{ stats.donorGrowth }} so với tháng trước</span
              >
            </div>
            <div class="stat-icon">
              <i class="bi bi-heart"></i>
            </div>
          </div>

          <div class="stat-card stat-purple">
            <div class="stat-content">
              <p class="stat-label">Chiến dịch đang chạy</p>
              <h2 class="stat-value">{{ stats.activeCampaigns }}</h2>
              <span class="stat-subtext"
                >Đang hoạt động tích cực trên 12 tỉnh thành</span
              >
            </div>
            <div class="stat-icon">
              <i class="bi bi-flag"></i>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-section">
          <div class="section-header">
            <h3 class="section-title">Biểu đồ tăng trưởng & Phân bổ</h3>
            <select v-model="selectedYear" class="year-select">
              <option value="2023">Năm 2023</option>
              <option value="2022">Năm 2022</option>
              <option value="2021">Năm 2021</option>
            </select>
          </div>

          <div class="charts-grid">
            <!-- Growth Chart -->
            <div class="chart-card">
              <div class="chart-header">
                <span class="chart-label">TĂNG TRƯỞNG QUYÊN GÓP</span>
                <div class="chart-value">
                  <span class="value-main">5.2 Tỷ VNĐ</span>
                  <span class="value-change positive">▲ 15%</span>
                </div>
              </div>
              <div class="bar-chart">
                <div class="bars-container">
                  <div
                    v-for="item in monthlyData"
                    :key="item.month"
                    class="bar-item"
                  >
                    <div class="bar-wrapper">
                      <div
                        class="bar"
                        :style="{
                          height: (item.value / maxChartValue) * 100 + '%',
                        }"
                      ></div>
                    </div>
                    <span class="bar-label">{{ item.month }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Distribution Chart -->
            <div class="chart-card">
              <div class="chart-header">
                <span class="chart-label">PHÂN BỔ NGUỒN QUỸ</span>
                <div class="chart-value">
                  <span class="value-main">100%</span>
                  <span class="value-sub">Theo danh mục</span>
                </div>
              </div>
              <div class="distribution-chart">
                <div class="donut-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle segment-1"
                      stroke-dasharray="45, 100"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle segment-2"
                      stroke-dasharray="35, 100"
                      stroke-dashoffset="-45"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle segment-3"
                      stroke-dasharray="20, 100"
                      stroke-dashoffset="-80"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <div class="distribution-legend">
                  <div
                    v-for="item in distribution"
                    :key="item.label"
                    class="legend-item"
                  >
                    <span
                      class="legend-dot"
                      :style="{ background: item.color }"
                    ></span>
                    <span class="legend-label">{{ item.label }}</span>
                    <span class="legend-value">{{ item.percent }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="bottom-grid">
          <!-- Campaigns Table -->
          <div class="campaigns-section">
            <div class="section-header">
              <h3 class="section-title">Chiến dịch nổi bật</h3>
              <RouterLink to="/hoat-dong" class="view-all-link">
                Xem tất cả <i class="bi bi-arrow-right"></i>
              </RouterLink>
            </div>

            <div class="campaigns-table">
              <div class="table-header">
                <span>TÊN CHIẾN DỊCH</span>
                <span class="hide-mobile">TRẠNG THÁI</span>
                <span>TIẾN ĐỘ</span>
                <span class="hide-mobile">ĐÃ ĐẠT</span>
              </div>
              <div
                v-for="campaign in campaigns"
                :key="campaign.id"
                class="table-row"
              >
                <div class="campaign-info">
                  <div class="campaign-icon">
                    <i class="bi bi-heart-fill"></i>
                  </div>
                  <div class="campaign-details">
                    <p class="campaign-name">{{ campaign.name }}</p>
                    <span class="campaign-location">{{
                      campaign.location
                    }}</span>
                  </div>
                </div>
                <!-- Desktop: Text status -->
                <span
                  class="campaign-status desktop-only"
                  :class="campaign.statusType"
                >
                  {{ campaign.status }}
                </span>
                <!-- Mobile: Colored dot -->
                <span
                  class="status-dot mobile-only"
                  :class="campaign.statusType"
                ></span>
                <div class="progress-cell">
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :style="{ width: campaign.progress + '%' }"
                    ></div>
                  </div>
                  <span class="progress-text">{{ campaign.progress }}%</span>
                </div>
                <span class="campaign-raised hide-mobile">{{
                  campaign.raised
                }}</span>
              </div>
            </div>

            <!-- Status Legend (Mobile) -->
            <div class="status-legend mobile-only">
              <div class="legend-title">Chú thích:</div>
              <div class="legend-items">
                <div class="legend-item">
                  <span class="status-dot completed"></span>
                  <span>Hoàn thành</span>
                </div>
                <div class="legend-item">
                  <span class="status-dot active"></span>
                  <span>Đang chạy</span>
                </div>
                <div class="legend-item">
                  <span class="status-dot new"></span>
                  <span>Mới bắt đầu</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Donors -->
          <div class="donors-section">
            <div class="section-header">
              <h3 class="section-title">Nhà hảo tâm mới nhất</h3>
            </div>

            <div class="donors-list">
              <div
                v-for="donor in recentDonors"
                :key="donor.id"
                class="donor-item"
              >
                <div class="donor-avatar" :style="{ background: donor.color }">
                  {{ donor.initial }}
                </div>
                <div class="donor-info">
                  <p class="donor-name">{{ donor.name }}</p>
                  <span class="donor-time">{{
                    donor.company || donor.time
                  }}</span>
                </div>
                <span class="donor-amount">{{ donor.amount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stats-page {
  min-height: 100vh;
  background: #f8fafc;
}

.nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo img {
  height: 50px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #3b82f6;
}

.nav-dropdown-trigger {
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-dropdown-trigger.active {
  color: #3b82f6;
}

.btn-donate-header {
  background: #3b82f6;
  color: #fff !important;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-donate-header:hover {
  background: #2563eb;
}

/* Content */
.content-section {
  padding: 2rem 0 4rem;
}

/* Breadcrumb */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}

.breadcrumb-item a {
  color: #6b7280;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #3b82f6;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "›";
  margin-right: 0.5rem;
  color: #9ca3af;
}

.breadcrumb-item.active {
  color: #374151;
}

/* Page Title */
.page-title-section {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem;
}

.page-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
  max-width: 700px;
  line-height: 1.6;
  margin: 0;
}

/* Stats Cards */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.stat-blue::before {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.stat-pink::before {
  background: linear-gradient(90deg, #ec4899, #f472b6);
}

.stat-purple::before {
  background: linear-gradient(90deg, #8b5cf6, #a78bfa);
}

.stat-blue {
  background: linear-gradient(135deg, #eff6ff, #fff);
}

.stat-pink {
  background: linear-gradient(135deg, #fdf2f8, #fff);
}

.stat-purple {
  background: linear-gradient(135deg, #f5f3ff, #fff);
}

.stat-label {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem;
}

.stat-unit {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 500;
}

.stat-change.positive {
  color: #10b981;
}

.stat-subtext {
  font-size: 0.75rem;
  color: #9ca3af;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.stat-blue .stat-icon {
  background: #dbeafe;
  color: #3b82f6;
}

.stat-pink .stat-icon {
  background: #fce7f3;
  color: #ec4899;
}

.stat-purple .stat-icon {
  background: #ede9fe;
  color: #8b5cf6;
}

/* Charts Section */
.charts-section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.year-select {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
}

.charts-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
}

.chart-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.chart-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.5px;
}

.chart-value {
  text-align: right;
}

.value-main {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.value-change {
  font-size: 0.875rem;
  font-weight: 500;
}

.value-change.positive {
  color: #10b981;
}

.value-sub {
  display: block;
  font-size: 0.75rem;
  color: #9ca3af;
}

/* Bar Chart */
.bar-chart {
  padding-top: 1rem;
}

.bars-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 130px;
  gap: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.bar-wrapper {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bar {
  width: 80%;
  max-width: 30px;
  background: linear-gradient(180deg, #3b82f6, #60a5fa);
  border-radius: 4px 4px 0 0;
  min-height: 8px;
  transition: height 0.3s ease;
}

.bar-label {
  font-size: 0.7rem;
  color: #9ca3af;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

/* Distribution Chart */
.distribution-chart {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.donut-chart {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.circular-chart {
  display: block;
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 3;
}

.circle {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.segment-1 {
  stroke: #3b82f6;
}

.segment-2 {
  stroke: #10b981;
}

.segment-3 {
  stroke: #f59e0b;
}

.distribution-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-label {
  flex: 1;
  font-size: 0.875rem;
  color: #374151;
}

.legend-value {
  font-weight: 600;
  color: #1f2937;
}

/* Bottom Grid */
.bottom-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
}

/* Campaigns Section */
.campaigns-section {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.view-all-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.view-all-link:hover {
  text-decoration: underline;
}

.campaigns-table {
  margin-top: 1rem;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 0.8fr;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.7rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 0.8fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
}

.table-row:last-child {
  border-bottom: none;
}

.campaign-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.campaign-icon {
  width: 40px;
  height: 40px;
  background: #fef2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  flex-shrink: 0;
}

.campaign-details {
  min-width: 0;
}

.campaign-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  font-size: 0.9rem;
}

.campaign-location {
  font-size: 0.75rem;
  color: #9ca3af;
}

/* Status Badge (Desktop) */
.campaign-status {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.1rem;
  border-radius: 50px;
  white-space: nowrap;
  text-align: center;
}

.campaign-status.completed {
  background: #d1fae5;
  color: #059669;
}

.campaign-status.active {
  background: #dbeafe;
  color: #2563eb;
}

.campaign-status.new {
  background: #fef3c7;
  color: #d97706;
}

/* Status Dot (Mobile) */
.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.completed {
  background: #10b981;
}

.status-dot.active {
  background: #3b82f6;
}

.status-dot.new {
  background: #f59e0b;
}

/* Status Legend */
.status-legend {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.status-legend .legend-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.status-legend .legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.status-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #4b5563;
}

.progress-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  min-width: 40px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: #6b7280;
  min-width: 35px;
  text-align: right;
}

.campaign-raised {
  font-weight: 600;
  color: #1f2937;
}

/* Mobile/Desktop visibility utilities */
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
}

/* Donors Section */
.donors-section {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.donors-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.donor-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
  transition: background 0.2s;
}

.donor-item:hover {
  background: #f3f4f6;
}

.donor-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
}

.donor-info {
  flex: 1;
}

.donor-name {
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  font-size: 0.9rem;
}

.donor-time {
  font-size: 0.75rem;
  color: #9ca3af;
}

.donor-amount {
  font-weight: 600;
  color: #10b981;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-cards {
    grid-template-columns: 1fr;
  }

  .charts-grid {
    grid-template-columns: 1fr;
  }

  .bottom-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .page-title {
    font-size: 1.5rem;
  }

  /* Mobile table layout */
  .table-header,
  .table-row {
    grid-template-columns: 2fr auto 1.2fr;
  }

  .hide-mobile {
    display: none !important;
  }

  .mobile-only {
    display: flex;
  }

  .desktop-only {
    display: none !important;
  }

  .progress-cell {
    gap: 0.3rem;
  }

  .progress-text {
    min-width: 30px;
    font-size: 0.7rem;
  }

  .campaign-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }

  .campaign-name {
    font-size: 0.8rem;
  }
}
</style>
