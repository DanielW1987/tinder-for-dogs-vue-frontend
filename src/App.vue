<template>
  <navbar></navbar>
  <main role="main" class="content-wrapper mt-3">
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
