<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="donate-cta section-padding">
    <div class="container">
      <div class="cta-wrapper text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="cta-title">
              Hãy cùng chúng tôi<br />
              <span class="text-highlight">thắp sáng nụ cười</span>
            </h2>
            <p class="cta-description">
              Mỗi đóng góp của bạn, dù lớn hay nhỏ, đều mang lại hy vọng và
              tương lai tươi sáng cho các em nhỏ có hoàn cảnh khó khăn.
            </p>
            <div class="cta-buttons">
              <RouterLink to="/quyen-gop" class="btn btn-donate-cta">
                <i class="bi bi-heart-fill me-2"></i>
                Quyên góp ngay
              </RouterLink>
              <RouterLink to="/lien-he" class="btn btn-contact-cta">
                Liên hệ với chúng tôi
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-cta {
  background-color: var(--color-background);
  position: relative;
}

.cta-wrapper {
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

.cta-wrapper::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(177, 32, 41, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.cta-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.3;
}

.text-highlight {
  color: var(--color-primary);
}

.cta-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.btn-donate-cta {
  background-color: var(--color-primary);
  color: var(--color-white) !important;
  font-weight: var(--font-weight-semibold);
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  border: none;
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-donate-cta:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(177, 32, 41, 0.3);
}

.btn-contact-cta {
  background-color: transparent;
  color: var(--color-text) !important;
  font-weight: var(--font-weight-semibold);
  padding: 1rem 2rem;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-text);
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
  text-decoration: none;
}

.btn-contact-cta:hover {
  background-color: var(--color-text);
  color: var(--color-white) !important;
  transform: translateY(-3px);
}

@media (max-width: 767.98px) {
  .cta-title {
    font-size: var(--font-size-3xl);
  }

  .btn-donate-cta,
  .btn-contact-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
