<template>
  <div class="vision-mission">
    <h2 class="content-title">Tầm nhìn & Sứ mệnh</h2>

    <!-- Vision -->
    <div class="content-block mb-5">
      <h3 class="block-title"><i class="bi bi-eye me-2"></i>Tầm nhìn</h3>
      <p class="block-content">
        Trở thành tổ chức từ thiện hàng đầu tại Việt Nam, mang lại cơ hội phát
        triển toàn diện cho mọi trẻ em có hoàn cảnh khó khăn, giúp các em tự tin
        bước vào tương lai tươi sáng.
      </p>
    </div>

    <!-- Mission -->
    <div class="content-block mb-5">
      <h3 class="block-title"><i class="bi bi-bullseye me-2"></i>Sứ mệnh</h3>
      <p class="block-content">Quỹ Bông Hồng Nhỏ cam kết:</p>
      <ul class="mission-list">
        <li>Hỗ trợ giáo dục, y tế và nhu cầu thiết yếu cho trẻ em khó khăn</li>
        <li>Xây dựng cộng đồng yêu thương, sẻ chia và tương trợ</li>
        <li>
          Minh bạch 100% trong mọi hoạt động quyên góp và sử dụng tài chính
        </li>
        <li>Kết nối các nhà hảo tâm với những hoàn cảnh cần được giúp đỡ</li>
      </ul>
    </div>

    <!-- Core Values -->
    <div class="content-block">
      <h3 class="block-title">
        <i class="bi bi-heart me-2"></i>Giá trị cốt lõi
      </h3>
      <div class="row g-4 mt-2">
        <div class="col-md-6">
          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-shield-check"></i>
            </div>
            <h5 class="value-title">Minh bạch</h5>
            <p class="value-desc">
              Công khai mọi khoản thu chi, báo cáo tài chính định kỳ
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-people"></i>
            </div>
            <h5 class="value-title">Nhân văn</h5>
            <p class="value-desc">
              Đặt lợi ích của trẻ em và cộng đồng lên hàng đầu
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-lightning"></i>
            </div>
            <h5 class="value-title">Hiệu quả</h5>
            <p class="value-desc">
              Sử dụng nguồn lực một cách tối ưu và có trách nhiệm
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-hand-thumbs-up"></i>
            </div>
            <h5 class="value-title">Tận tâm</h5>
            <p class="value-desc">
              Luôn nỗ lực hết mình vì sứ mệnh của tổ chức
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
}

.block-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.block-content {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.8;
}

.mission-list {
  padding-left: var(--spacing-lg);
}

.mission-list li {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
  line-height: 1.7;
}

.value-card {
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  height: 100%;
  transition: all var(--transition-base);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.value-icon i {
  font-size: 1.5rem;
  color: var(--color-white);
}

.value-title {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.value-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: 0;
}
</style>
