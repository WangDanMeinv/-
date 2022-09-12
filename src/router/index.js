import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshlf from '../views/Bookshelf.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bookshelf',
  },
  // 书架
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: Bookshlf,
    meta: {
      showTab: true,
    }
  },
  // 书城
  {
    path: '/bookshop',
    name: 'Bookshop',
    component: () => import("../views/Bookshop.vue"),
    children: [
      //书城子路由跳转
      {
        path: '/bookshop',
        redirect: '/bookshop/nan',
      },
      {
        path: '/bookshop/nan',
        name: 'Nan',
        component: () => import("../views/BookShop/nan.vue"),
        meta: {
          showTab: true,
        }
      },
      {
        path: '/bookshop/nv',
        name: 'Nv',
        component: () => import("../views/BookShop/nv.vue"),
        meta: {
          showTab: true,
        }
      },
    ],
    meta: {
      showTab: true,
    }

  },
  // 分类路由
  {
    path: '/bookCategory',
    name: 'BookCategory',
    component: () => import("../views/BookCategory.vue"),
    meta: {
      showTab: true,
    }
  },
  {
    path: '/theme',
    name: "Theme",
    component: () => import("../components/category/Theme.vue"),
    meta: {
      showTab: false
    }
  },
  {
    path: '/role',
    name: "Role",
    component: () => import("../components/category/Role.vue"),
    meta: {
      showTab: false
    }
  },
  {
    path: '/plot',
    name: "Plot",
    component: () => import("../components/category/Plot.vue"),
    meta: {
      showTab: false
    }
  },
  {
    path: '/newbooks',
    name: "NewBooks",
    component: () => import("../components/NewBooks.vue"),
    meta: {
      showTab: false
    }
  },

  {
    path: "/read",
    name: "Read",
    component: () => import("../views/Rank/Read.vue"),
    meta: {
      showTab: false
    },
    children: [
      {
        path: '/read',
        redirect: '/read/nan',
      },
      {
        path: '/read/nan',
        name: 'Readnan',
        component: () => import("../views/Rank/nan.vue"),
        meta: {
          // showTab: true,
        }
      },
      {
        path: '/read/nv',
        name: 'Readnv',
        component: () => import("../views/Rank/nv.vue"),
        meta: {
          // showTab: true,
        }
      },
    ]
  },
  // 用户
  {
    path: '/person',
    name: 'Person',
    component: () => import("../views/Person.vue"),
    meta: {
      showTab: true,
    },
    /*  children: [{
       path: '/person/logging',
       name: 'Logging',
       component: () => import("../components/Person/My/Logging.vue"),
       meta: {
         showTab: false,
       },
     }] */
  },
  {
    path: '/logging',
    name: 'Logging',
    component: () => import("../components/Person/My/Logging.vue"),
    meta: {
      showTab: false,
    },

  },
  {
    path: '/invest',
    name: 'Invest',
    component: () => import("../components/Person/My/Invest.vue"),
    meta: {
      showTab: false,
    }
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import("../components/Person/My/Vip.vue"),
    meta: {
      showTab: false,
    }
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import("../components/Person/My/Sign.vue"),
    meta: {
      showTab: false,
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import("../views/detail.vue"),
    meta: {
      showTab: false,
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
