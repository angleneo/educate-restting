import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Student from '@/views/student/index.vue';
import Teacher from '@/views/teacher/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'student',
          component: Student
        },
        {
          path: '/teacher',
          name: 'teacher',
          component: Teacher
        }
      ]
    }
  ]
});
