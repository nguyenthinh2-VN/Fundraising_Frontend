<template>
  <div class="impact-stories">
    <h2 class="content-title">Câu chuyện Tác động</h2>
    <p class="content-intro">
      Những câu chuyện thực tế về sự thay đổi tích cực mà Quỹ Bông Hồng Nhỏ đã
      mang lại cho các em nhỏ và gia đình.
    </p>

    <div class="stories-list mt-4">
      <div class="story-card">
        <div class="story-image">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80"
            alt="Em Minh"
          />
        </div>
        <div class="story-content">
          <h5>Em Minh - Giấc mơ đến trường</h5>
          <p>
            Em Minh (12 tuổi, Hà Giang) đã được học bổng của Quỹ hỗ trợ suốt 3
            năm qua. Từ một em nhỏ phải nghỉ học phụ giúp gia đình, nay em đã là
            học sinh giỏi của trường.
          </p>
          <a href="#" class="read-more">Đọc tiếp →</a>
        </div>
      </div>

      <div class="story-card">
        <div class="story-image">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80"
            alt="Gia đình chị Lan"
          />
        </div>
        <div class="story-content">
          <h5>Gia đình chị Lan - Mái ấm mới</h5>
          <p>
            Gia đình chị Lan (Bình Phước) đã được Quỹ hỗ trợ xây nhà tình thương
            sau cơn bão. Giờ đây, 4 đứa con của chị đã có nơi che mưa che nắng.
          </p>
          <a href="#" class="read-more">Đọc tiếp →</a>
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
  margin-bottom: var(--spacing-md);
}

.content-intro {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: 1.7;
}

.story-card {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.story-image {
  width: 200px;
  height: 150px;
  border-radius: var(--radius-md);
  overflow: hidden;
  flex-shrink: 0;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-content {
  flex: 1;
}

.story-content h5 {
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.story-content p {
  color: var(--color-text-light);
  line-height: 1.7;
}

.read-more {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.read-more:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 767.98px) {
  .story-card {
    flex-direction: column;
  }

  .story-image {
    width: 100%;
    height: 200px;
  }
}
</style>
