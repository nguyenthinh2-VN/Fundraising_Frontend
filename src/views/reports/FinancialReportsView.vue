<template>
  <div class="financial-reports">
    <h2 class="content-title">Báo cáo Tài chính</h2>
    <p class="content-intro">
      Quỹ Bông Hồng Nhỏ cam kết minh bạch 100% trong mọi hoạt động thu chi. Dưới
      đây là các báo cáo tài chính được công khai định kỳ.
    </p>

    <div class="reports-list mt-4">
      <div class="report-item">
        <div class="report-icon">
          <i class="bi bi-file-earmark-pdf"></i>
        </div>
        <div class="report-info">
          <h5>Báo cáo tài chính Quý 4/2024</h5>
          <p>Tổng thu: 150,000,000 VNĐ | Tổng chi: 145,000,000 VNĐ</p>
        </div>
        <a href="#" class="btn btn-outline-primary btn-sm">
          <i class="bi bi-download me-1"></i>Tải xuống
        </a>
      </div>

      <div class="report-item">
        <div class="report-icon">
          <i class="bi bi-file-earmark-pdf"></i>
        </div>
        <div class="report-info">
          <h5>Báo cáo tài chính Quý 3/2024</h5>
          <p>Tổng thu: 120,000,000 VNĐ | Tổng chi: 118,000,000 VNĐ</p>
        </div>
        <a href="#" class="btn btn-outline-primary btn-sm">
          <i class="bi bi-download me-1"></i>Tải xuống
        </a>
      </div>

      <div class="report-item">
        <div class="report-icon">
          <i class="bi bi-file-earmark-pdf"></i>
        </div>
        <div class="report-info">
          <h5>Báo cáo thường niên 2023</h5>
          <p>Tổng kết hoạt động và tài chính năm 2023</p>
        </div>
        <a href="#" class="btn btn-outline-primary btn-sm">
          <i class="bi bi-download me-1"></i>Tải xuống
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.content-intro {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.7;
}

.report-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.report-icon {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.report-icon i {
  font-size: 1.5rem;
  color: var(--color-white);
}

.report-info {
  flex: 1;
}

.report-info h5 {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
}

.report-info p {
  margin-bottom: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

@media (max-width: 767.98px) {
  .report-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
