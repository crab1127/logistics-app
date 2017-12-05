import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const routerMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'index',
    children: [
      { path: 'index', component: _import('index') },
      { path: 'news', name: 'news', component: _import('news/list') },
      { path: 'news/:id', name: 'news-content', component: _import('news/content') },
      {
        path: 'mail',
        name: 'mail',
        component: _import('mail/index'),
        children: [
          { path: 'step/1', name: 'step-1', component: _import('mail/step1') },
          { path: 'step/2', name: 'step-2', component: _import('mail/step2') },
          { path: 'step/3', name: 'step-3', component: _import('mail/step3') },
          { path: 'step/4', name: 'step-4', component: _import('mail/step4') },
          { path: 'step/5', name: 'step-5', component: _import('mail/step5') },
          { path: 'step/6', name: 'step-6', component: _import('mail/step6') }
        ]
      },
      {
        path: 'about',
        name: 'about',
        // redirect: '/intro',
        component: _import('about/index'),
        children: [
          { path: 'intro', component: _import('about/intro') },
          { path: 'culture', name: 'culture', component: _import('about/culture') },
          { path: 'contact', name: 'contact', component: _import('about/contact') }
        ]
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
