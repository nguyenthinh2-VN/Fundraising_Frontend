<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import donateQrImage from "@/assets/img/donatelrf.png";

// Placeholder data - will be replaced with real data
const bankInfo = {
  bankName: "Ngân hàng Sacombank",
  accountNumber: "060289990456",
  accountName: "Quỹ Từ Thiện Bông Hồng Nhỏ",
  branch: "Tân Định",
};

const donationStats = {
  totalRaised: "3.809.128.440",
  totalDonors: 1250,
  recentDonations: [
    { name: "Ẩn danh", amount: "500,000", time: "2 giờ trước" },
    { name: "Nguyễn Văn A", amount: "1,000,000", time: "5 giờ trước" },
    { name: "Trần Thị B", amount: "200,000", time: "1 ngày trước" },
    { name: "Ẩn danh", amount: "2,000,000", time: "2 ngày trước" },
    { name: "Lê Văn C", amount: "500,000", time: "3 ngày trước" },
  ],
};

const copied = ref(false);

const copyAccountNumber = () => {
  navigator.clipboard.writeText(bankInfo.accountNumber);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="donate-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
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

    <!-- Main Content -->
    <section class="page-content section-padding">
      <div class="container">
        <div class="row g-5">
          <!-- Payment Info -->
          <div class="col-lg-7">
            <!-- QR Code Section -->
            <div class="payment-card mb-4">
              <h3 class="card-title">
                <i class="bi bi-qr-code me-2"></i>
                Quét mã QR để chuyển khoản
              </h3>
              <div class="row align-items-center">
                <div class="col-md-5 text-center">
                  <div class="qr-container">
                    <img
                      :src="donateQrImage"
                      alt="QR Code Donate"
                      class="qr-image"
                    />
                  </div>
                </div>
                <div class="col-md-7">
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
                          <i
                            :class="copied ? 'bi bi-check-lg' : 'bi bi-copy'"
                          ></i>
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
                      <strong>Nội dung chuyển khoản:</strong> Tên cá nhân đóng
                      góp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Donation Guidelines -->
            <div class="payment-card">
              <h4 class="card-title">
                <i class="bi bi-shield-check me-2"></i>
                Cam kết minh bạch
              </h4>
              <ul class="commitment-list">
                <li>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  100% số tiền quyên góp được sử dụng cho các chương trình hỗ
                  trợ
                </li>
                <li>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  Báo cáo tài chính công khai định kỳ hàng quý
                </li>
                <li>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  Thông báo đến nhà tài trợ khi khoản đóng góp được sử dụng
                </li>
                <li>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  Cấp giấy xác nhận quyên góp theo yêu cầu
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-5">
            <!-- Donation Progress -->
            <div class="stats-card mb-4">
              <h4 class="card-title">Tổng quan quyên góp</h4>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-value">
                    {{ donationStats.totalRaised }} VNĐ
                  </div>
                  <div class="stat-label">Tổng số tiền đã quyên góp</div>
                </div>
              </div>
            </div>

            <!-- Recent Donations -->
            <div class="donors-card">
              <h4 class="card-title">Đóng góp gần đây</h4>
              <ul class="donors-list">
                <li
                  v-for="(donation, index) in donationStats.recentDonations"
                  :key="index"
                  class="donor-item"
                >
                  <div class="donor-avatar">
                    <i class="bi bi-person-heart"></i>
                  </div>
                  <div class="donor-info">
                    <span class="donor-name">{{ donation.name }}</span>
                    <span class="donor-time">{{ donation.time }}</span>
                  </div>
                  <div class="donor-amount">{{ donation.amount }} VNĐ</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  padding: var(--spacing-3xl) 0;
  color: var(--color-white);
}

.breadcrumb-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.breadcrumb-item.active {
  color: rgba(255, 255, 255, 0.6);
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
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

.payment-card,
.stats-card,
.donors-card {
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
  display: flex;
  align-items: center;
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
  font-size: var(--font-size-sm);
}

.info-row .value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  text-align: right;
  font-size: var(--font-size-sm);
}

.account-number-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.account-number {
  font-family: monospace;
  font-size: var(--font-size-base) !important;
  color: var(--color-primary) !important;
  font-weight: var(--font-weight-bold) !important;
}

.copy-btn {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  background: var(--color-primary-dark);
  transform: scale(1.05);
}

.copy-btn i {
  font-size: 0.875rem;
}

.transfer-note {
  background: rgba(177, 32, 41, 0.05);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.commitment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.commitment-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  color: var(--color-text-light);
}

.commitment-list li i {
  margin-top: 3px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-md);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-md);
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
}

.stat-value {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.donors-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.donor-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid #eee;
}

.donor-item:last-child {
  border-bottom: none;
}

.donor-avatar {
  width: 40px;
  height: 40px;
  background: rgba(177, 32, 41, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.donor-avatar i {
  color: var(--color-primary);
}

.donor-info {
  flex: 1;
}

.donor-name {
  display: block;
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.donor-time {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.donor-amount {
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
}

@media (max-width: 767.98px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
