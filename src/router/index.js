import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const beforeAuth = (isAuth) => (to, from, next) => {
  //token이 없으면 login 페이지를 이동
  if ((window.sessionStorage.getItem("accessToken") && isAuth) || !isAuth) {
    next()
  } else {
    // 로그인 화면으로 이동
    next("/login")
  }
}

//AuthenticationLayout: header와 aside(메뉴)가 없는 백지 레이아웃 (로그인, 회원가입, 비밀번호 찾기등의 페이지에 사용)
//DefaultLayout: 기본적인 header와 aside(메뉴)가 있는 레이아웃 (거의 모든 메뉴에 적용)
const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/auth/Login.vue"),
    beforeEnter: beforeAuth(false)
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import("@/views/auth/SignUp.vue"),
    beforeEnter: beforeAuth(false)
  },
  {
    path: '/main/botList',
    name: 'BotList',
    component: () => import("@/views/main/BotList.vue"),
    beforeEnter: beforeAuth(true)
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});


export default router;