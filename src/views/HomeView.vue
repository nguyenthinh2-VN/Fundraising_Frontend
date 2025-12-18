<script setup>
import HeroCarousel from "@/components/home/HeroCarousel.vue";
import DonationStats from "@/components/home/DonationStats.vue";
import ProgramsHighlight from "@/components/home/ProgramsHighlight.vue";
import AboutPreview from "@/components/home/AboutPreview.vue";
import ImpactStats from "@/components/home/ImpactStats.vue";
import DonateCallToAction from "@/components/home/DonateCallToAction.vue";
</script>

<template>
  <div class="home-page">
    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- Donation Stats (Tổng tiền + Auto-scroll donors) -->
    <DonationStats />

    <!-- Programs Highlight (3 chương trình chính) -->
    <ProgramsHighlight />

    <!-- About Preview Section -->
    <AboutPreview />

    <!-- Impact Statistics -->
    <ImpactStats />

    <!-- Donate CTA -->
    <DonateCallToAction />
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>
