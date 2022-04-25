/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import type { RouterOptions } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  title: '首页',
  path: '/',
  name: 'Index',
  component: () => import('./pages/README.md'),
}, {
  title: '图表',
  name: 'Charts',
  path: '/components/Charts',
  component: () => import('@/src/components/Charts/docs/README.md'),
}, {
  title: '胶囊柱图',
  name: 'CapsuleChart',
  path: '/components/CapsuleChart',
  component: () => import('@/src/components/CapsuleChart/docs/README.md'),
}, {
  title: '动态环图',
  name: 'ActiveRingChart',
  path: '/components/ActiveRingChart',
  component: () => import('@/src/components/ActiveRingChart/docs/README.md'),
}, {
  title: '数字翻牌器',
  name: 'DigitalFlop',
  path: '/components/DigitalFlop',
  component: () => import('@/src/components/DigitalFlop/docs/README.md'),
}, {
  title: '全屏容器',
  name: 'FullScreenContainer',
  path: '/components/FullScreenContainer',
  component: () => import('@/src/components/FullScreenContainer/docs/README.md'),
}, {
  title: '装饰1',
  name: 'Decoration1',
  path: '/components/Decoration1',
  component: () => import('@/src/components/Decoration1/docs/README.md'),
}, {
  title: '装饰2',
  name: 'Decoration2',
  path: '/components/Decoration2',
  component: () => import('@/src/components/Decoration2/docs/README.md'),
}, {
  title: '装饰3',
  name: 'Decoration3',
  path: '/components/Decoration3',
  component: () => import('@/src/components/Decoration3/docs/README.md'),
}, {
  title: '装饰4',
  name: 'Decoration4',
  path: '/components/Decoration4',
  component: () => import('@/src/components/Decoration4/docs/README.md'),
}, {
  title: '装饰5',
  name: 'Decoration5',
  path: '/components/Decoration5',
  component: () => import('@/src/components/Decoration5/docs/README.md'),
}, {
  title: '装饰6',
  name: 'Decoration6',
  path: '/components/Decoration6',
  component: () => import('@/src/components/Decoration6/docs/README.md'),
}, {
  title: '装饰7',
  name: 'Decoration7',
  path: '/components/Decoration7',
  component: () => import('@/src/components/Decoration7/docs/README.md'),
}, {
  title: '装饰8',
  name: 'Decoration8',
  path: '/components/Decoration8',
  component: () => import('@/src/components/Decoration8/docs/README.md'),
}, {
  title: '装饰9',
  name: 'Decoration9',
  path: '/components/Decoration9',
  component: () => import('@/src/components/Decoration9/docs/README.md'),
}, {
  title: '装饰10',
  name: 'Decoration10',
  path: '/components/Decoration10',
  component: () => import('@/src/components/Decoration10/docs/README.md'),
}, {
  title: '装饰11',
  name: 'Decoration11',
  path: '/components/Decoration11',
  component: () => import('@/src/components/Decoration11/docs/README.md'),
}, {
  title: '装饰12',
  name: 'Decoration12',
  path: '/components/Decoration12',
  component: () => import('@/src/components/Decoration12/docs/README.md'),
}, {
  title: '边框1',
  name: 'BorderBox1',
  path: '/components/BorderBox1',
  component: () => import('@/src/components/BorderBox1/docs/README.md'),
}, {
  title: '边框2',
  name: 'BorderBox2',
  path: '/components/BorderBox2',
  component: () => import('@/src/components/BorderBox2/docs/README.md'),
}, {
  title: '边框3',
  name: 'BorderBox3',
  path: '/components/BorderBox3',
  component: () => import('@/src/components/BorderBox3/docs/README.md'),
}, {
  title: '边框4',
  name: 'BorderBox4',
  path: '/components/BorderBox4',
  component: () => import('@/src/components/BorderBox4/docs/README.md'),
}, {
  title: '边框5',
  name: 'BorderBox5',
  path: '/components/BorderBox5',
  component: () => import('@/src/components/BorderBox5/docs/README.md'),
}, {
  title: '边框6',
  name: 'BorderBox6',
  path: '/components/BorderBox6',
  component: () => import('@/src/components/BorderBox6/docs/README.md'),
}, {
  title: '边框7',
  name: 'BorderBox7',
  path: '/components/BorderBox7',
  component: () => import('@/src/components/BorderBox7/docs/README.md'),
}, {
  title: '边框8',
  name: 'BorderBox8',
  path: '/components/BorderBox8',
  component: () => import('@/src/components/BorderBox8/docs/README.md'),
}, {
  title: '边框9',
  name: 'BorderBox9',
  path: '/components/BorderBox9',
  component: () => import('@/src/components/BorderBox9/docs/README.md'),
}, {
  title: '边框10',
  name: 'BorderBox10',
  path: '/components/BorderBox10',
  component: () => import('@/src/components/BorderBox10/docs/README.md'),
}]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path)
      return { top: 0 }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router