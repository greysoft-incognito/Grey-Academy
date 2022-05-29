const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Homepage.vue") },
      { path: "/login", component: () => import("pages/Login.vue") },
      { path: "/signup", component: () => import("pages/Signup.vue") },
      {
        path: "/learn/:type/:course",
        component: () => import("pages/LearnMore.vue"),
      },
      { path: "/ourstory", component: () => import("pages/Ourstory.vue") },
      {
        path: "/programming",
        component: () => import("pages/Courses/Programming.vue"),
      },
      {
        path: "/design",
        component: () => import("pages/Courses/DesignSchool.vue"),
      },
      {
        path: "/creative",
        component: () => import("src/pages/Courses/Creative.vue"),
      },
      {
        path: "/business",
        component: () => import("src/pages/Courses/BusinessSchool.vue"),
      },
      // { path: "/training", component: () => import("pages/Trainings.vue") },
      // { path: "/booking", component: () => import("src/pages/Booking.vue") },
      // {
      //   path: "/bookinginner",
      //   component: () => import("src/pages/BookingInner.vue"),
      // },
      // { path: "/profile", component: () => import("src/pages/Profile.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
