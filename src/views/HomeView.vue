<script setup>
import HeroCarousel from "@/components/home/HeroCarousel.vue";
import DonationStats from "@/components/home/DonationStats.vue";
import ProgramsHighlight from "@/components/home/ProgramsHighlight.vue";
import TransparencySection from "@/components/home/TransparencySection.vue";
import AboutPreview from "@/components/home/AboutPreview.vue";
import ImpactStats from "@/components/home/ImpactStats.vue";
import DonateCallToAction from "@/components/home/DonateCallToAction.vue";
import ActivitiesSlider from "@/components/home/ActivitiesSlider.vue";
</script>

<template>
  <div class="home-page">
    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- About Preview Section -->
    <AboutPreview />

    <!-- Donation Stats (Tổng tiền + Auto-scroll donors) -->
    <DonationStats />

    <!-- Programs Highlight (3 chương trình chính) -->
    <ProgramsHighlight />

    <!-- Transparency Section -->
    <TransparencySection />

    <!-- Activities Slider -->
    <ActivitiesSlider />

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

