import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由可以重复点击
const originlPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originlPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history',
  scrollBehavior(to, from, savePosition) {
    // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (savePosition) {
      return savePosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  // 路由懒加载
  routes: [{
      path: '/',
      name: 'shouye',
      component: resolve => require(['@/views/Home'], resolve),
    },
    {
      path: "/connection",
      component: resolve => require(['@/views/Connection'], resolve),
    },
    {
      path: "/introduction",
      component: resolve => require(['@/views/Introduction'], resolve),
    },
    {
      path: "/joinus",
      component: resolve => require(['@/views/Joinus'], resolve),
    },
    {
      path: "/iteminfo",
      name: "产品展示",
      redirect: "/iteminfo/xiuxian",
      meta: {
        item: true
      },
      component: resolve => require(['@/views/Iteminfo'], resolve),
      children: [{
          path: "xiuxian",
          meta: {
            item: true,
            index: 0
          },
          component: resolve => require(['@/views/Iteminfo/Xiuxian'], resolve),
        },
        {
          path: "douququ",
          component: resolve => require(['@/views/Iteminfo/Douququ'], resolve),
          meta: {
            item: true,
            index: 1
          }
        },
        {
          path: "saiche",
          component: resolve => require(['@/views/Iteminfo/Saiche'], resolve),
          meta: {
            item: true,
            index: 2
          }
        },
        {
          path: "seabed",
          component: () => import("../views/Iteminfo/Seabed.vue"),
          meta: {
            item: true,
            index: 3
          }
        },
        {
          path: "ar",
          component: () => import("../views/Iteminfo/Ar.vue"),
          meta: {
            item: true,
            index: 4
          }
        },
        {
          path: "zzdaifa",
          component: () => import("../views/Iteminfo/Zzdaifa.vue"),
          meta: {
            item: true,
            index: 5
          }
        },
        {
          path: "kongl",
          component: () => import("../views/Iteminfo/Kongl.vue"),
          meta: {
            item: true,
            index: 6
          }
        },
        {
          path: "shenqi",
          component: () => import("../views/Iteminfo/Shenqi.vue"),
          meta: {
            item: true,
            index: 7
          }
        },
        {
          path: "jingsu",
          component: () => import("../views/Iteminfo/Jingsu.vue"),
          meta: {
            item: true,
            index: 8
          }
        },
        {
          path: "baishou",
          component: () => import("../views/Iteminfo/Baishou.vue"),
          meta: {
            item: true,
            index: 9
          }
        },
      ],
    }
  ]
})
