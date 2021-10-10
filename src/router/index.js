import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LikeOrDislike from '../views/LikeOrDislike.vue';
import Gallery from '../views/Gallery.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/like-or-dislike',
    name: 'LikeOrDislike',
    component: LikeOrDislike,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
