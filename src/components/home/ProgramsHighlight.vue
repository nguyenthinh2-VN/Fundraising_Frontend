<script setup>
import { RouterLink } from "vue-router";

const programs = [
  {
    id: 1,
    title: "Chương trình sức khỏe học đường và cộng đồng",
    description:
      "Phối hợp với Hội Bảo trợ người khuyết tật, Hội Chữ thập đỏ Việt Nam và các trường đại học thực hiện khám, chăm sóc sức khỏe cho trẻ em, người khuyết tật và người nghèo tại vùng sâu vùng xa.",
    budget: "2 tỷ VNĐ",
    image:
      "https://t3.ftcdn.net/jpg/01/55/60/16/360_F_155601656_lRZeta9aLJQ0yeqjrWSyWw4iXqsmTlF5.jpg",
    category: "y-te",
    path: "/hoat-dong/y-te",
  },
  {
    id: 2,
    title: "Nâng cao nhận thức phòng ngừa tật bệnh",
    description:
      "Phối hợp với WHO, UNESCO, UNDP, Unicef triển khai các chương trình giáo dục sức khỏe, tham vấn y tế học đường miễn phí, hướng đến phát triển bền vững theo UNSGD17.",
    budget: "2 tỷ VNĐ",
    image:
      "https://littlerosesfoundation.org/wp-content/uploads/2023/06/Dear-Future-1024x683.jpg",
    category: "giao-duc",
    path: "/hoat-dong/giao-duc",
  },
  {
    id: 3,
    title: "Chương trình cứu trợ khẩn cấp",
    description:
      "Đáp ứng nhanh chóng các nhu cầu cấp bách trong thiên tai, bão lũ, dịch bệnh: cung cấp thực phẩm, y tế, nơi ở tạm thời, hỗ trợ tâm lý và xây dựng cơ sở hạ tầng.",
    budget: "2 tỷ VNĐ/năm",
    image:
      "https://littlerosesfoundation.org/wp-content/uploads/2023/06/Remini20210628065621328sdsd-1024x683.jpg",
    category: "bac-ai",
    path: "/hoat-dong/bac-ai",
  },
];
</script>

<template>
  <section class="programs-highlight section-padding">
    <div class="container">
      <div class="section-header mb-5">
        <div class="header-content text-center">
          <span class="section-label">Chương trình nổi bật</span>
          <h2 class="section-title">Hoạt động của chúng tôi</h2>
        </div>
        <RouterLink to="/hoat-dong" class="view-more-link">
          Xem thêm <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>

      <div class="programs-list">
        <div
          v-for="(program, index) in programs"
          :key="program.id"
          class="program-item"
          :class="{ reverse: index % 2 === 1 }"
        >
          <div class="row g-0 align-items-stretch">
            <!-- Image -->
            <div class="col-lg-6" :class="{ 'order-lg-2': index % 2 === 1 }">
              <div class="program-image">
                <img :src="program.image" :alt="program.title" />
                <div class="program-badge">
                  <span class="budget-label">Mục tiêu</span>
                  <span class="budget-value">{{ program.budget }}</span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="col-lg-6" :class="{ 'order-lg-1': index % 2 === 1 }">
              <div class="program-content">
                <span class="program-number">0{{ index + 1 }}</span>
                <h3 class="program-title">{{ program.title }}</h3>
                <p class="program-description">{{ program.description }}</p>
                <RouterLink :to="program.path" class="btn btn-program">
                  Xem chi tiết
                  <i class="bi bi-arrow-right ms-2"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs-highlight {
  background-color: var(--color-background-alt);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.header-content {
  flex: 1;
}

.section-label {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.view-more-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: all var(--transition-fast);
  padding-bottom: var(--spacing-sm);
}

.view-more-link:hover {
  color: var(--color-primary-dark);
  transform: translateX(5px);
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.program-item {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.program-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.program-image {
  position: relative;
  height: 100%;
  min-height: 350px;
  overflow: hidden;
}

.program-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.program-item:hover .program-image img {
  transform: scale(1.05);
}

.program-badge {
  position: absolute;
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
}

.budget-label {
  display: block;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  opacity: 0.9;
}

.budget-value {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.program-content {
  padding: var(--spacing-2xl);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.program-number {
  display: inline-block;
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: rgba(177, 32, 41, 0.1);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.program-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.program-description {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.btn-program {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--color-white) !important;
  font-weight: var(--font-weight-semibold);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--transition-base);
  width: fit-content;
}

.btn-program:hover {
  background-color: var(--color-primary-dark);
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 991.98px) {
  .program-image {
    min-height: 250px;
  }

  .program-content {
    padding: var(--spacing-xl);
  }

  .program-title {
    font-size: var(--font-size-xl);
  }
}
</style>
