export const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/DashboardPage.vue')
  },
  {
    path: '/status',
    name: 'status-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/status/StatusListPage.vue')
  },
  {
    path: '/status/insert',
    name: 'status-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/status/StatusFormPage.vue')
  },
  {
    path: '/specialty',
    name: 'specialty-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/specialty/SpecialtyListPage.vue')
  },
  {
    path: '/specialty/insert',
    name: 'specialty-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/specialty/SpecialtyFormPage.vue')
  },
  {
    path: '/patient',
    name: 'patient-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/patient/PatientListPage.vue')
  },
  {
    path: '/patient/insert',
    name: 'patient-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/patient/PatientFormPage.vue')
  }
]
