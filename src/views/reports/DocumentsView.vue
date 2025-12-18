<template>
  <div class="documents-page">
    <h2 class="content-title">Tài liệu Tham khảo</h2>
    <p class="content-intro">
      Các tài liệu chính thức của Quỹ Bông Hồng Nhỏ bao gồm điều lệ, quy định và
      các văn bản pháp lý liên quan.
    </p>

    <div class="documents-list mt-4">
      <div class="document-item">
        <div class="doc-icon">
          <i class="bi bi-file-earmark-text"></i>
        </div>
        <div class="doc-info">
          <h5>Điều lệ Quỹ Bông Hồng Nhỏ</h5>
          <p>Văn bản pháp lý về tổ chức và hoạt động của Quỹ</p>
        </div>
        <a href="#" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-eye me-1"></i>Xem
        </a>
      </div>

      <div class="document-item">
        <div class="doc-icon">
          <i class="bi bi-file-earmark-text"></i>
        </div>
        <div class="doc-info">
          <h5>Quy định tiếp nhận quyên góp</h5>
          <p>Hướng dẫn chi tiết về cách thức quyên góp và sử dụng</p>
        </div>
        <a href="#" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-eye me-1"></i>Xem
        </a>
      </div>

      <div class="document-item">
        <div class="doc-icon">
          <i class="bi bi-file-earmark-text"></i>
        </div>
        <div class="doc-info">
          <h5>Chính sách bảo mật thông tin</h5>
          <p>Cam kết bảo vệ thông tin cá nhân của nhà tài trợ</p>
        </div>
        <a href="#" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-eye me-1"></i>Xem
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

.document-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.doc-icon {
  width: 50px;
  height: 50px;
  background: var(--color-secondary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.doc-icon i {
  font-size: 1.5rem;
  color: var(--color-white);
}

.doc-info {
  flex: 1;
}

.doc-info h5 {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
}

.doc-info p {
  margin-bottom: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

@media (max-width: 767.98px) {
  .document-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
