<script setup>
const teamMembers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    position: "Chủ tịch Quỹ",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description:
      "Hơn 15 năm kinh nghiệm trong lĩnh vực từ thiện và phát triển cộng đồng.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    position: "Phó Chủ tịch",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    description: "Chuyên gia về quản lý dự án và huy động nguồn lực cộng đồng.",
  },
  {
    id: 3,
    name: "Lê Văn C",
    position: "Giám đốc Chương trình",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "Phụ trách điều phối các chương trình giáo dục và y tế.",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    position: "Kế toán trưởng",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "Quản lý tài chính và đảm bảo minh bạch trong mọi hoạt động.",
  },
];
</script>

<template>
  <div class="team-page">
    <h2 class="content-title">Đội ngũ nhân sự</h2>
    <p class="content-intro">
      Đội ngũ Quỹ Bông Hồng Nhỏ bao gồm những người có tâm huyết và kinh nghiệm
      trong lĩnh vực từ thiện và phát triển cộng đồng.
    </p>

    <div class="row g-4 mt-4">
      <div v-for="member in teamMembers" :key="member.id" class="col-md-6">
        <div class="team-card">
          <div class="member-image">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div class="member-info">
            <h5 class="member-name">{{ member.name }}</h5>
            <span class="member-position">{{ member.position }}</span>
            <p class="member-desc">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="join-team mt-5 p-4 bg-light rounded">
      <h4>Tham gia cùng chúng tôi</h4>
      <p class="mb-0">
        Bạn muốn đóng góp sức mình cho cộng đồng? Hãy liên hệ với chúng tôi để
        trở thành tình nguyện viên của Quỹ Bông Hồng Nhỏ.
      </p>
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

.team-card {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  height: 100%;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.member-image {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  flex: 1;
}

.member-name {
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.member-position {
  display: inline-block;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.member-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: 0;
  line-height: 1.6;
}

.join-team h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.join-team p {
  color: var(--color-text-light);
}

@media (max-width: 575.98px) {
  .team-card {
    flex-direction: column;
    text-align: center;
  }

  .member-image {
    margin: 0 auto;
  }
}
</style>
