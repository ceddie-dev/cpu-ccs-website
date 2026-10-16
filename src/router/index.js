import { createRouter, createWebHistory } from 'vue-router'

// Eager load primary views and lazy-load sub views for optimal performance
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BsItView from '@/views/programs/BsItView.vue'
import BsCsView from '@/views/programs/BsCsView.vue'
import BsDmiaView from '@/views/programs/BsDmiaView.vue'
import BlisView from '@/views/programs/BlisView.vue'
import FacultyView from '@/views/FacultyView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home | CPU College of Computer Studies'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About the College | CPU College of Computer Studies'
    }
  },
  {
    path: '/programs/bsit',
    name: 'program-bsit',
    component: BsItView,
    meta: {
      title: 'BS Information Technology (BSIT) | CPU College of Computer Studies'
    }
  },
  {
    path: '/programs/bscs',
    name: 'program-bscs',
    component: BsCsView,
    meta: {
      title: 'BS Computer Science (BSCS) | CPU College of Computer Studies'
    }
  },
  {
    path: '/programs/bsdmia',
    name: 'program-bsdmia',
    component: BsDmiaView,
    meta: {
      title: 'BS Digital Media & Interactive Arts (BSDMIA) | CPU College of Computer Studies'
    }
  },
  {
    path: '/programs/blis',
    name: 'program-blis',
    component: BlisView,
    meta: {
      title: 'BS Library & Information Science (BLIS) | CPU College of Computer Studies'
    }
  },
  {
    path: '/faculty',
    name: 'faculty',
    component: FacultyView,
    meta: {
      title: 'Faculty & Staff Directory | CPU College of Computer Studies'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: {
      title: 'News, Events & Announcements | CPU College of Computer Studies'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact Dean\'s Office | CPU College of Computer Studies'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: '404 Page Not Found | CPU College of Computer Studies'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  const baseTitle = 'CPU College of Computer Studies | Central Philippine University'
  document.title = to.meta.title ? `${to.meta.title}` : baseTitle
})

export default router
