import DashboardView from '@/views/dashboard/index.vue'

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
  },
]
