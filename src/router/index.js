import store from '../store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp'
import User from '../views/User'
import SurveyList from '../views/SurveyList'
import WriteSurvey from '../views/WriteSurvey'
import SurveyDetail from '../views/SurveyDetail'
import Response from '../views/Response'
Vue.use(VueRouter)

const rejectAuthUser = (to, from, next) => {
  if (store.state.login_success === true) {
    alert("이미 로그인을 하였습니다.")
    next("/")
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.login_success === true) {
    next()
  } else {
    alert("로그인이 필요합니다.")
    next('/login')
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: rejectAuthUser,
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/user',
    name: 'User',
    beforeEnter: onlyAuthUser,
    component: User
  },
  {
    path: '/surveylist',
    name: 'SurveyList',
    component: SurveyList
  },
  {
    path: '/writesurvey',
    name: 'WriteSurvey',
    component: WriteSurvey
  },
  {
    path: '/surveydetail',
    name: 'SurveyDetail',
    component: SurveyDetail
  },
  {
    path: '/response',
    name: 'Response',
    component: Response
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
