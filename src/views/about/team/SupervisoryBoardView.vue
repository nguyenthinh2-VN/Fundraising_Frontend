<script setup>
// Ban kiểm soát - Supervisory Board
const members = [
  {
    name: "Nguyễn Đức Thạch Diễm",
    role: "TGĐ Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - Phó Chủ tịch Quỹ",
    image:
      "https://littlerosesfoundation.org/wp-content/uploads/2022/08/co-diem-hd-300x300.jpg",
  },
];
</script>

<template>
  <div class="team-members">
    <h3 class="team-category-title">Ban kiểm soát</h3>
    <div class="row g-4">
      <div
        v-for="member in members"
        :key="member.name"
        class="col-md-6 col-lg-4"
      >
        <div class="member-card">
          <div class="member-image">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div class="member-info">
            <h5 class="member-name">{{ member.name }}</h5>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-category-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.member-card {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.member-image {
  width: 150px;
  height: 150px;
  margin: 0 auto var(--spacing-md);
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-primary);
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.member-role {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: 0;
  line-height: 1.5;
}
</style>
