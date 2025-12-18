import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gioi-thieu',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        path: '',
        name: 'about-overview',
        component: () => import('@/views/about/VisionMissionView.vue')
      },
      {
        path: 'doi-ngu',
        name: 'team',
        component: () => import('@/views/about/TeamView.vue')
      }
    ]
  },
  {
    path: '/hoat-dong',
    name: 'programs',
    component: () => import('@/views/ProgramsView.vue'),
    children: [
      {
        path: 'giao-duc',
        name: 'education',
        component: () => import('@/views/programs/EducationView.vue')
      },
      {
        path: 'y-te',
        name: 'health',
        component: () => import('@/views/programs/HealthView.vue')
      },
      {
        path: 'bac-ai',
        name: 'social',
        component: () => import('@/views/programs/SocialView.vue')
      },
      {
        path: 'gay-quy',
        name: 'fundraising',
        component: () => import('@/views/programs/FundraisingView.vue')
      }
    ]
  },
  {
    path: '/bao-cao-tai-chinh',
    name: 'reports',
    component: () => import('@/views/ReportsView.vue'),
    children: [
      {
        path: 'bao-cao',
        name: 'financial-reports',
        component: () => import('@/views/reports/FinancialReportsView.vue')
      },
      {
        path: 'cau-chuyen',
        name: 'stories',
        component: () => import('@/views/reports/StoriesView.vue')
      },
      {
        path: 'tai-lieu',
        name: 'documents',
        component: () => import('@/views/reports/DocumentsView.vue')
      }
    ]
  },
  {
    path: '/lien-he',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/quyen-gop',
    name: 'donate',
    component: () => import('@/views/DonateView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
