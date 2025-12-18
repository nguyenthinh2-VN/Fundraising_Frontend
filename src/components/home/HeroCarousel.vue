<script setup>
import { RouterLink } from "vue-router";

const slides = [
  {
    id: 1,
    title: "Thắp sáng nụ cười,",
    subtitle: "ươm mầm tương lai",
    description:
      "Chúng tôi cam kết 100% minh bạch trong từng khoản đóng góp, mang lại sự hỗ trợ thiết thực nhất cho trẻ em có hoàn cảnh khó khăn tại Việt Nam.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80",
    alt: "Trẻ em vui chơi",
  },
  {
    id: 2,
    title: "Giáo dục",
    subtitle: "là chìa khóa tương lai",
    description:
      "Hỗ trợ học bổng, xây dựng trường học và cung cấp tài liệu học tập cho hàng nghìn trẻ em vùng cao.",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&q=80",
    alt: "Trẻ em đến trường",
  },
  {
    id: 3,
    title: "Sức khỏe",
    subtitle: "cho mọi trẻ em",
    description:
      "Chương trình khám bệnh, phát thuốc miễn phí và hỗ trợ chi phí điều trị cho các em nhỏ cần giúp đỡ.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80",
    alt: "Hoạt động y tế",
  },
];
</script>

<template>
  <section class="hero-carousel">
    <div
      id="heroCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          type="button"
          data-bs-target="#heroCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <!-- Background Image -->
          <div
            class="carousel-bg"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>

          <!-- Overlay -->
          <div class="carousel-overlay"></div>

          <!-- Content -->
          <div class="carousel-caption-custom">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8 text-center">
                  <h1 class="carousel-title">
                    {{ slide.title }}<br />
                    <span class="carousel-subtitle">{{ slide.subtitle }}</span>
                  </h1>
                  <p class="carousel-description">
                    {{ slide.description }}
                  </p>
                  <div class="carousel-buttons">
                    <RouterLink
                      to="/quyen-gop"
                      class="btn btn-donate-hero me-3"
                    >
                      Quyên góp ngay
                    </RouterLink>
                    <RouterLink to="/gioi-thieu" class="btn btn-learn-more">
                      Tìm hiểu thêm
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls - Hidden by default, show on hover -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="control-icon">
          <i class="bi bi-chevron-left"></i>
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="control-icon">
          <i class="bi bi-chevron-right"></i>
        </span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-carousel {
  position: relative;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 1000px;
}

.carousel-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.carousel-caption-custom {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  padding: 0 var(--spacing-md);
}

.carousel-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.carousel-subtitle {
  display: block;
  color: var(--color-white);
}

.carousel-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.6;
}

.carousel-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.btn-donate-hero {
  background-color: var(--color-primary);
  color: var(--color-white) !important;
  font-weight: var(--font-weight-semibold);
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  border: none;
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
  text-decoration: none;
}

.btn-donate-hero:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(177, 32, 41, 0.4);
}

.btn-learn-more {
  background-color: transparent;
  color: var(--color-white) !important;
  font-weight: var(--font-weight-semibold);
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-white);
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
  text-decoration: none;
}

.btn-learn-more:hover {
  background-color: var(--color-white);
  color: var(--color-text) !important;
  transform: translateY(-3px);
}

.carousel-indicators {
  margin-bottom: 2rem;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  transition: all var(--transition-base);
}

.carousel-indicators button.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}

/* Carousel Controls - Hidden by default, show on hover */
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-control-prev {
  left: 20px;
}

.carousel-control-next {
  right: 20px;
}

.hero-carousel:hover .carousel-control-prev,
.hero-carousel:hover .carousel-control-next {
  opacity: 1;
}

.control-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.control-icon i {
  font-size: 1rem;
  color: var(--color-white);
}

.carousel-control-prev:hover .control-icon,
.carousel-control-next:hover .control-icon {
  background: rgba(255, 255, 255, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-item {
    height: 80vh;
    min-height: 500px;
  }

  .carousel-title {
    display: none;
  }

  .btn-donate-hero,
  .btn-learn-more {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-base);
  }

  /* Hide controls on mobile - use swipe instead */
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
}
</style>
