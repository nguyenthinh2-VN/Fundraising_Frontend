<template>
  <div class="vision-mission">
    <h2 class="content-title">Tầm nhìn & Sứ mệnh</h2>

    <!-- About LRF -->
    <div class="content-block mb-5">
      <div class="row align-items-center g-4">
        <div class="col-lg-6">
          <img
            src="https://littlerosesfoundation.org/wp-content/uploads/2023/03/about-us-lrf-1-2048x1365.jpg"
            alt="Little Roses Foundation"
            class="img-fluid rounded-4 shadow"
          />
        </div>
        <div class="col-lg-6">
          <h3 class="block-title">
            <i class="bi bi-info-circle me-2"></i>Về Quỹ
          </h3>
          <p class="block-content">
            Quỹ từ thiện Bông hồng nhỏ (Little Roses Foundation) là quỹ từ thiện
            không vì mục tiêu lợi nhuận, hướng đến các hoạt động thiện nguyện đa
            dạng phục vụ cộng đồng. Được thúc đẩy bởi truyền thống gia đình và
            tấm lòng người Mẹ, NHG là thành viên sáng lập chủ chốt của Quỹ.
          </p>
          <p class="block-content">
            Quỹ chính thức được thành lập vào ngày
            <strong>01/11/2021</strong> theo quyết định số 1151/QĐ-BNV và được
            cấp phép hoạt động ngày <strong>22/04/2022</strong> theo quyết định
            số 316/QĐ-BNV.
          </p>
          <p class="block-content mb-0">
            Quỹ phục vụ chủ yếu trên các lĩnh vực
            <strong>sức khỏe – giáo dục</strong>, được cấp phép bởi Bộ Nội Vụ để
            hoạt động trên phạm vi toàn quốc và đón nhận sự trợ giúp của quốc
            tế.
          </p>
        </div>
      </div>
    </div>

    <!-- Vision -->
    <div class="content-block mb-5">
      <h3 class="block-title"><i class="bi bi-eye me-2"></i>Tầm nhìn</h3>
      <p class="block-content">
        Quỹ từ thiện Bông hồng nhỏ là quỹ từ thiện của nền văn minh tình thương
        và các giá trị nhân bản toàn diện dành cho tất cả những ai đang trong
        hoàn cảnh nghèo khó cả về vật chất cũng như tinh thần.
      </p>
    </div>

    <!-- Mission -->
    <div class="content-block mb-5">
      <h3 class="block-title"><i class="bi bi-bullseye me-2"></i>Sứ mệnh</h3>
      <p class="block-content">
        Quỹ từ thiện Bông hồng nhỏ giúp những người đang lâm cảnh ngặt nghèo do
        hoàn cảnh khách quan vượt qua nghịch cảnh, cải thiện đời sống vật chất
        và tinh thần các nhóm xã hội; tạo cơ hội để mọi người không phân biệt
        thu nhập hay số lượng tài sản sở hữu đều có thể chia sẻ giá trị bản thân
        cho sự phát triển cộng đồng.
      </p>
    </div>

    <!-- Core Values -->
    <div class="content-block">
      <h3 class="block-title">
        <i class="bi bi-heart me-2"></i>Giá trị cốt lõi
      </h3>
      <p class="block-content mb-4">
        Quỹ từ thiện Bông hồng nhỏ chọn và trung thành trong hoạt động theo các
        giá trị:
      </p>
      <div class="row g-4">
        <div class="col-6 col-md-3">
          <div class="value-card text-center">
            <div class="value-icon" style="background-color: #e91e63">
              <i class="bi bi-heart-fill"></i>
            </div>
            <h5 class="value-title">Yêu thương</h5>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="value-card text-center">
            <div class="value-icon" style="background-color: #2196f3">
              <i class="bi bi-shield-check"></i>
            </div>
            <h5 class="value-title">Chính trực</h5>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="value-card text-center">
            <div class="value-icon" style="background-color: #4caf50">
              <i class="bi bi-people-fill"></i>
            </div>
            <h5 class="value-title">Tôn trọng</h5>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="value-card text-center">
            <div class="value-icon" style="background-color: #ff9800">
              <i class="bi bi-star-fill"></i>
            </div>
            <h5 class="value-title">Tận tâm</h5>
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
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  line-height: 1.8;
}

.value-card {
  background: var(--color-background-alt);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
}

.value-icon i {
  font-size: 1.5rem;
  color: var(--color-white);
}

.value-title {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: 0;
}
</style>
