import DashboardView from '@/views/dashboard/index.vue'
import BannerView from '@/views/banner/index.vue'
import AboutUsView from '@/views/aboutUs/index.vue'
import ArtikelView from '@/views/artikel/index.vue'
import DetailArtikelView from '@/views/artikel/detail.vue'
import AddArtikelView from '@/views/artikel/add.vue'

import DashboardLayout from '@/layouts/DashboardLayout.vue';


// middleware
import AuthMiddleware from '@/middleware/auth.middleware.js';

export default [{
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'Dashboard',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  },{
    path: '/dashboard/banner',
    name: 'banner',
    component: BannerView,
    meta: {
      title: 'Banner',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  },{
    path: '/dashboard/about-us',
    name: 'about-us',
    component: AboutUsView,
    meta: {
      title: 'About-us',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  },{
    path: '/dashboard/artikel',
    name: 'artikel',
    component: ArtikelView,
    meta: {
      title: 'Artikel',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  },{
    path: '/dashboard/artikel/:id',
    name: 'detail.artikel',
    component: DetailArtikelView,
    meta: {
      title: 'Detail Artikel',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  },{
    path: '/dashboard/artikel/add',
    name: 'add.artikel',
    component: AddArtikelView,
    meta: {
      title: 'Add Artikel',
      layout: DashboardLayout,
      middleware: [AuthMiddleware],
    },
  }
]
