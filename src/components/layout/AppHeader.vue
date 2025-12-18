<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const navItems = [
  { name: "Giới thiệu", path: "/gioi-thieu" },
  { name: "Hoạt động", path: "/hoat-dong" },
  { name: "Báo cáo tài chính", path: "/bao-cao-tai-chinh" },
  { name: "Liên hệ", path: "/lien-he" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="app-header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container">
        <!-- Logo -->
        <RouterLink class="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://littlerosesfoundation.org/wp-content/uploads/2022/08/df.png"
            alt="Little Roses Foundation"
            class="logo-img"
          />
        </RouterLink>

        <!-- Mobile Toggle Button -->
        <button
          class="navbar-toggler border-0"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Menu -->
        <div
          class="collapse navbar-collapse"
          :class="{ show: isMenuOpen }"
          id="navbarNav"
        >
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li v-for="item in navItems" :key="item.path" class="nav-item">
              <RouterLink
                class="nav-link px-3"
                :to="item.path"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </RouterLink>
            </li>
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
              <RouterLink
                class="btn btn-donate"
                to="/quyen-gop"
                @click="isMenuOpen = false"
              >
                Quyên góp ngay
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  box-shadow: var(--shadow-sm);
  z-index: var(--z-sticky);
}

.logo-img {
  height: 60px;
  width: auto;
}

.nav-link {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  color: var(--color-text) !important;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary) !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

.btn-donate {
  background-color: var(--color-primary);
  color: var(--color-white) !important;
  font-weight: var(--font-weight-semibold);
  padding: 0.625rem 1.5rem;
  border-radius: var(--radius-full);
  border: none;
  transition: all var(--transition-base);
  text-decoration: none;
  display: inline-block;
}

.btn-donate:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Mobile styles */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: var(--spacing-md) 0;
  }

  .nav-link {
    padding: var(--spacing-sm) 0 !important;
  }

  .nav-link::after {
    display: none;
  }

  .btn-donate {
    width: 100%;
    text-align: center;
  }
}
</style>