import DashboardView from '@/views/dashboard/index.vue'
import BannerView from '@/views/banner/index.vue'

import DashboardLayout from '@/layouts/DashboardLayout.vue';


// middleware
import AuthMiddleware from '@/middleware/auth.middleware.js';

export default [{
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'dashboard',
      layout: DashboardLayout,
      // middleware: [AuthMiddleware],
    },
  },{
    path: '/banner',
    name: 'banner',
    component: BannerView,
    meta: {
      title: 'banner',
      layout: DashboardLayout,
      // middleware: [AuthMiddleware],
    },
  }
]
