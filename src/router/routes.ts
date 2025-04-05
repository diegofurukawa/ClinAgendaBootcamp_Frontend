export const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/DashboardPage.vue')
  },
  //============================================================================================
    // Status
  //============================================================================================
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
  //============================================================================================
    // Specialty
  //============================================================================================
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
  
  // Patient
  {
    path: '/patient',
    name: 'patient-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/patient/PatientListPage.vue')
  },
  {
    path: '/patient/insert',
    name: 'patient-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/patient/PatientFormPage.vue')
  },
  {
    path: '/patient/update/:id',
    name: 'patient-update',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/patient/PatientFormPage.vue')
  },
  // Doctor
  {
    path: '/doctor',
    name: 'doctor-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/doctor/DoctorListPage.vue')
  },
  {
    path: '/doctor/insert',
    name: 'doctor-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/doctor/DoctorFormPage.vue')
  }
]
