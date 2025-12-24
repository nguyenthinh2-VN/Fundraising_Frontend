<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="scroll-to-top-btn"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-primary, #b12029) 0%,
    var(--color-primary-dark, #8a1820) 100%
  );
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(177, 32, 41, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-to-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(177, 32, 41, 0.5);
}

.scroll-to-top-btn:active {
  transform: translateY(-1px);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
