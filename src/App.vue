<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <div id="app-wrapper" class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-grow-1">
      <router-view />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* App-specific styles */
#app-wrapper {
  min-height: 100vh;
}
</style>
