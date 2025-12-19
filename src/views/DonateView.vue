<script setup>
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";
import donateQrImage from "@/assets/img/donatelrf.png";
import ProcessSteps from "@/components/donate/ProcessSteps.vue";
import Testimonials from "@/components/donate/Testimonials.vue";
import FAQ from "@/components/donate/FAQ.vue";

// Router
const router = useRouter();
const goBack = () => router.back();

// Active tab
const activeTab = ref("info");

// Total donation
const totalRaised = "3.809.128.440";

// Bank info
const bankInfo = {
  bankName: "Ngân hàng Sacombank",
  accountNumber: "060289990456",
  accountName: "Quỹ Từ Thiện Bông Hồng Nhỏ",
  branch: "Tân Định",
};

// Copy function
const copied = ref(false);
const copyAccountNumber = () => {
  navigator.clipboard.writeText(bankInfo.accountNumber);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

// Generate 60 fake donors
const allDonors = [];
const names = [
  "Công ty Trương Hoàng Phát",
  "CTY TNHH TMDV Tân Hiệp Phát",
  "Bùi Quang Nam",
  "Nguyễn Đức Thạch Diễm",
  "Trương Hoàng Thảo Nhi",
  "Hoàng Thị Lệ Trinh",
  "Ms. Hải Lý",
  "Nguyễn Mai Chinh",
  "Hoàng Quốc Anh Tuấn",
  "Trần Duy Cảnh",
  "Cha Trần Lê Khánh",
  "Hoàng Nguyễn Thu Thảo",
  "Nguyễn Hoàng Phi",
  "Lê Văn Minh",
  "Phạm Thị Hương",
  "Võ Thanh Tùng",
  "Đỗ Hoàng Nam",
  "Trịnh Văn Hải",
  "Ngô Thị Lan",
  "Đặng Quốc Việt",
];
const companies = [
  "",
  "Sacombank",
  "Cty Luật Việt",
  "Phụ huynh Brian Nguyễn UKA Bình Thạnh",
  "",
];
const notes = [
  "",
  "Đấu giá tượng Đức Mẹ và BST Hoa hồng",
  "Đấu giá chuỗi hạt hoa hồng",
  "Đấu giá áo dài",
  "Sách",
  "",
];
const amounts = [
  750000000, 650000000, 510000000, 500000000, 300000000, 121000000, 120000000,
  100000000, 50000000, 30000000, 20000000, 10000000, 5000000, 2000000, 1000000,
];

for (let i = 0; i < 60; i++) {
  allDonors.push({
    id: i + 1,
    name: names[i % names.length],
    company: companies[Math.floor(Math.random() * companies.length)],
    phone:
      Math.random() > 0.5
        ? "*"
        : `*******${Math.floor(Math.random() * 900 + 100)}`,
    amount: amounts[i % amounts.length],
    note: notes[Math.floor(Math.random() * notes.length)],
  });
}

// Pagination
const currentPage = ref(1);
const itemsPerPage = 30;
const totalPages = computed(() => Math.ceil(allDonors.length / itemsPerPage));

const paginatedDonors = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return allDonors.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const formatAmount = (amount) => {
  return amount.toLocaleString("vi-VN") + " đ";
};
</script>

<template>
  <div class="donate-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
          <button class="back-btn" @click="goBack" title="Quay lại">
            <i class="bi bi-arrow-left"></i>
          </button>
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active">Quyên góp</li>
          </ol>
        </nav>
        <h1 class="page-title">Đóng góp cho Quỹ</h1>
        <p class="page-subtitle">
          Mỗi đóng góp của bạn là một nụ cười cho trẻ em
        </p>
      </div>
    </section>

    <!-- Tabs Navigation -->
    <section class="tabs-section">
      <div class="container">
        <div class="tabs-nav">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'info' }"
            @click="activeTab = 'info'"
          >
            <i class="bi bi-info-circle me-2"></i>Thông tin
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'donors' }"
            @click="activeTab = 'donors'"
          >
            <i class="bi bi-list-ul me-2"></i>Danh sách Đóng Góp
          </button>
        </div>
      </div>
    </section>

    <!-- Tab: Thông tin -->
    <section v-if="activeTab === 'info'" class="page-content section-padding">
      <div class="container">
        <!-- QR & Bank Info -->
        <div class="payment-card mb-5">
          <h3 class="card-title">
            <i class="bi bi-qr-code me-2"></i>
            Quét mã QR để chuyển khoản
          </h3>
          <div class="row align-items-center">
            <div class="col-md-4 text-center">
              <div class="qr-container">
                <img
                  :src="donateQrImage"
                  alt="QR Code Donate"
                  class="qr-image"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="bank-info">
                <div class="info-row">
                  <span class="label">Ngân hàng:</span>
                  <span class="value">{{ bankInfo.bankName }}</span>
                </div>
                <div class="info-row">
                  <span class="label">Số tài khoản:</span>
                  <span class="value account-number-row">
                    <span class="account-number">{{
                      bankInfo.accountNumber
                    }}</span>
                    <button
                      class="copy-btn"
                      @click="copyAccountNumber"
                      :title="copied ? 'Đã copy!' : 'Copy số tài khoản'"
                    >
                      <i :class="copied ? 'bi bi-check-lg' : 'bi bi-copy'"></i>
                    </button>
                  </span>
                </div>
                <div class="info-row">
                  <span class="label">Chủ tài khoản:</span>
                  <span class="value">{{ bankInfo.accountName }}</span>
                </div>
                <div class="info-row">
                  <span class="label">Chi nhánh:</span>
                  <span class="value">{{ bankInfo.branch }}</span>
                </div>
              </div>
              <div class="transfer-note mt-3">
                <p class="mb-0">
                  <i class="bi bi-info-circle me-2"></i>
                  <strong>Nội dung chuyển khoản:</strong> Tên cá nhân đóng góp
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Stats -->
        <div class="total-stats-section">
          <h2 class="total-title">TỔNG SỐ TIỀN</h2>
          <div class="total-divider"></div>
          <p class="total-quote">
            "Mọi đóng góp của bạn đều được chúng tôi trân trọng, sử dụng đúng
            mục đích và công khai minh bạch."
          </p>
          <p class="total-update">Cập nhật đến ngày: 19/12/2025</p>
          <div class="total-amount-box">
            <span class="total-number">{{ totalRaised }}</span>
            <span class="total-currency">đ</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <ProcessSteps v-if="activeTab === 'info'" />

    <!-- Testimonials & FAQ Section -->
    <section
      v-if="activeTab === 'info'"
      class="feedback-section section-padding"
    >
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <Testimonials />
          </div>
          <div class="col-lg-6">
            <FAQ />
          </div>
        </div>
      </div>
    </section>

    <!-- Tab: Danh sách Đóng Góp -->
    <section v-if="activeTab === 'donors'" class="page-content section-padding">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="donors-title">DANH SÁCH ĐÓNG GÓP</h2>
          <p class="donors-subtitle">
            "Không nên bỏ lỡ bất cứ cơ hội nào mà không làm một hy sinh nhỏ, ở
            đây bằng gương mặt tươi cười, ở kia bằng một lời khả ái, luôn luôn
            làm việc đúng đắn dù nhỏ bé nhất và làm vì tình yêu."
          </p>
          <div class="total-stats-inline">
            <span class="total-label">Tổng quyên góp:</span>
            <span class="total-amount-inline">{{ totalRaised }} VNĐ</span>
          </div>
        </div>

        <!-- Donors Table -->
        <div class="donors-table-wrapper">
          <table class="donors-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ tên</th>
                <th>Đơn vị</th>
                <th>Điện thoại</th>
                <th>Số tiền ủng hộ</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(donor, index) in paginatedDonors" :key="donor.id">
                <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                <td class="donor-name-cell">{{ donor.name }}</td>
                <td>{{ donor.company }}</td>
                <td>{{ donor.phone }}</td>
                <td class="amount-cell">{{ formatAmount(donor.amount) }}</td>
                <td>{{ donor.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination-wrapper">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="goToPage(1)"
          >
            « Trang trước
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            class="page-btn page-number"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            Trang tiếp theo »
          </button>
          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(totalPages)"
          >
            Trang cuối »
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Page Header */
.page-header {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  padding: var(--spacing-2xl) 0;
  color: var(--color-white);
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.back-btn {
  background: transparent;
  border: none;
  color: var(--color-white);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.breadcrumb-item.active {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb-nav .breadcrumb {
  margin-bottom: 0;
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
  color: var(--color-white);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: 0;
}

/* Tabs */
.tabs-section {
  background: var(--color-white);
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 95px;
  z-index: 100;
}

.tabs-nav {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) 0;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: var(--color-text-light);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  color: var(--color-primary);
  background: rgba(177, 32, 41, 0.05);
}

.tab-btn.active {
  background: var(--color-primary);
  color: var(--color-white);
}

/* Payment Card */
.payment-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.card-title i {
  color: var(--color-primary);
}

.qr-container {
  padding: var(--spacing-md);
}

.qr-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
}

.bank-info {
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid #eee;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row .label {
  color: var(--color-text-light);
}

.info-row .value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.account-number-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.account-number {
  font-family: monospace;
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

.copy-btn {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

.transfer-note {
  background: rgba(177, 32, 41, 0.05);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
}

/* Feedback Section (Testimonials & FAQ) */
.feedback-section {
  background: var(--color-background-alt);
  padding: 90px 0;
}

/* Donors Table */
.donors-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.donors-subtitle {
  color: var(--color-text-light);
  font-style: italic;
  max-width: 800px;
  margin: 10px auto;
}

/* Total Stats Section */
.total-stats-section {
  text-align: center;
  padding: var(--spacing-3xl) 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: var(--spacing-xl) 0;
}

.total-title {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.total-divider {
  width: 60px;
  height: 3px;
  background: var(--color-primary);
  margin: 0 auto var(--spacing-lg);
}

.total-quote {
  font-style: italic;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.8;
}

.total-update {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.total-amount-box {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.total-number {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 1;
}

.total-currency {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-left: 4px;
  position: relative;
  top: 5px;
}

/* Tab Donors - inline stats */
.total-stats-inline {
  margin-top: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.total-amount-inline {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.donors-table-wrapper {
  overflow-x: auto;
  margin-top: var(--spacing-xl);
}

.donors-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-white);
}

.donors-table th,
.donors-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid #eee;
}

.donors-table th {
  background: var(--color-background-alt);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}

.donor-name-cell {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.amount-cell {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xl);
  flex-wrap: wrap;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: var(--color-white);
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.page-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn.active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* Responsive */
@media (max-width: 767.98px) {
  .tabs-nav {
    flex-direction: column;
  }

  .tab-btn {
    width: 100%;
    text-align: center;
  }

  .pagination-wrapper {
    gap: var(--spacing-xs);
  }

  .page-btn {
    padding: 0.4rem 0.8rem;
    font-size: var(--font-size-sm);
  }
}
</style>
