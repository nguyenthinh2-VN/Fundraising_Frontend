<script setup>
import { RouterLink, RouterView } from "vue-router";

const reportTypes = [
  {
    name: "Báo cáo tài chính",
    path: "/bao-cao-tai-chinh/bao-cao",
    icon: "file-earmark-bar-graph",
  },
  {
    name: "Câu chuyện tác động",
    path: "/bao-cao-tai-chinh/cau-chuyen",
    icon: "heart",
  },
  {
    name: "Tài liệu tham khảo",
    path: "/bao-cao-tai-chinh/tai-lieu",
    icon: "file-earmark-text",
  },
];
</script>

<template>
  <div class="reports-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2">
            <li class="breadcrumb-item">
              <RouterLink to="/">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active">Báo cáo tài chính</li>
          </ol>
        </nav>
        <h1 class="page-title">Báo cáo & Tài liệu</h1>
        <p class="page-subtitle">Minh bạch trong từng hoạt động</p>
      </div>
    </section>

    <!-- Content -->
    <section class="page-content section-padding">
      <div class="container">
        <div class="row g-5">
          <!-- Sidebar -->
          <div class="col-lg-3">
            <div class="sidebar-nav">
              <h5 class="sidebar-title">Danh mục</h5>
              <ul class="nav flex-column">
                <li
                  v-for="report in reportTypes"
                  :key="report.path"
                  class="nav-item"
                >
                  <RouterLink
                    class="nav-link d-flex align-items-center"
                    :to="report.path"
                  >
                    <i :class="`bi bi-${report.icon} me-2`"></i>
                    {{ report.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Main Content -->
          <div class="col-lg-9">
            <RouterView>
              <div class="reports-overview">
                <h2>Báo cáo tài chính</h2>
                <p class="lead">
                  Quỹ Bông Hồng Nhỏ cam kết minh bạch 100% trong mọi hoạt động.
                  Tất cả báo cáo tài chính được công khai định kỳ.
                </p>

                <div class="row g-4 mt-4">
                  <div
                    v-for="report in reportTypes"
                    :key="report.path"
                    class="col-md-4"
                  >
                    <RouterLink :to="report.path" class="report-card-link">
                      <div class="report-card text-center">
                        <div class="report-icon">
                          <i :class="`bi bi-${report.icon}`"></i>
                        </div>
                        <h5>{{ report.name }}</h5>
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </RouterView>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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

.sidebar-nav {
  background: var(--color-background-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  position: sticky;
  top: 100px;
}

.sidebar-title {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-primary);
}

.sidebar-nav .nav-link {
  color: var(--color-text-light);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.sidebar-nav .nav-link:hover,
.sidebar-nav .nav-link.router-link-active {
  color: var(--color-primary);
  background: rgba(177, 32, 41, 0.1);
}

.report-card-link {
  text-decoration: none;
}

.report-card {
  background: var(--color-background-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
}

.report-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.report-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
}

.report-icon i {
  font-size: 1.5rem;
  color: var(--color-white);
}

.report-card h5 {
  color: var(--color-text);
  margin-bottom: 0;
}

@media (max-width: 991.98px) {
  .sidebar-nav {
    position: static;
    margin-bottom: var(--spacing-xl);
  }
}
</style>
