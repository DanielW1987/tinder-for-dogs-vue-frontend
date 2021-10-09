<template>
  <tinder-navbar></tinder-navbar>
  <main role="main" class="content-wrapper mt-3">
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
import TinderNavbar from '@/components/TinderNavbar.vue';

export default {
  components: {
    TinderNavbar,
  },
};
</script>
