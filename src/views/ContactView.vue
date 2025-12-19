<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active">Liên hệ</li>
          </ol>
        </nav>
        <h1 class="page-title">Liên hệ với chúng tôi</h1>
        <p class="page-subtitle">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-content section-padding">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="contact-form-wrapper">
              <h3 class="mb-4">Gửi tin nhắn cho chúng tôi</h3>
              <form @submit.prevent class="contact-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Họ và tên *</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Email *</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Nhập email"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Số điện thoại</label>
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Chủ đề</label>
                    <select class="form-select">
                      <option value="">Chọn chủ đề</option>
                      <option value="donate">Quyên góp</option>
                      <option value="volunteer">Tình nguyện viên</option>
                      <option value="partnership">Hợp tác</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Nội dung *</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Nhập nội dung tin nhắn"
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary-custom">
                      <i class="bi bi-send me-2"></i>
                      Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-5">
            <div class="contact-info">
              <h3 class="mb-4">Thông tin liên hệ</h3>

              <div class="info-item">
                <div class="info-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="info-content">
                  <h6>Địa chỉ</h6>
                  <p>
                    49 Pham Ngoc Thach St., Vo Thi Sau Ward, District 3, HCMC,
                    Vietnam
                  </p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <div class="info-content">
                  <h6>Email</h6>
                  <p>
                    <a href="mailto:info@littlerosesfoundation.org"
                      >info@littlerosesfoundation.org</a
                    >
                  </p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <i class="bi bi-telephone"></i>
                </div>
                <div class="info-content">
                  <h6>Điện thoại</h6>
                  <p><a href="tel:+84906220422">(+84) 906.22.04.22</a></p>
                  <p><a href="tel:+84896622422">(+84) 896.62.24.22</a></p>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-section mt-4">
                <h6>Kết nối với chúng tôi</h6>
                <div class="social-links d-flex gap-3 mt-3">
                  <a
                    href="https://www.facebook.com/littlerosesfoundation/"
                    class="social-link"
                    aria-label="Facebook"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@littlerosesfoundation"
                    class="social-link"
                    aria-label="YouTube"
                  >
                    <i class="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
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
}

.page-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: 0;
}

.contact-form-wrapper {
  background: var(--color-background-alt);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
}

.form-control,
.form-select {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid #e0e0e0;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 0.2rem rgba(177, 32, 41, 0.1);
}

.contact-info {
  background: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.info-item {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: rgba(177, 32, 41, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon i {
  font-size: 1.25rem;
  color: var(--color-primary);
}

.info-content h6 {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.info-content p {
  color: var(--color-text-light);
  margin-bottom: 0;
}

.info-content a {
  color: var(--color-text-light);
  text-decoration: none;
}

.info-content a:hover {
  color: var(--color-primary);
}

.social-link {
  width: 45px;
  height: 45px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-3px);
}

.social-link i {
  font-size: 1.25rem;
}
</style>
