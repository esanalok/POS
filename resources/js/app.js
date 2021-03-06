/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//Sweet Alert
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})
window.toast = toast;

//Vform
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



//Vue Progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px',
})

// Select Search
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)



//Fire
window.Fire = new Vue();


//Vue routes
let routes = [
  	{ path: '/settings', component: require('./components/Setting.vue').default },
    { path: '/stores', component: require('./components/Store.vue').default },
    { path: '/store/create', component: require('./components/Store-create.vue').default },
  	{ path: '/brands', component: require('./components/Brand.vue').default },
  	{ path: '/boxes', component: require('./components/Box.vue').default },
  	{ path: '/units', component: require('./components/Unit.vue').default },
]

const router = new VueRouter({
    mode: "history",
    routes
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('pagination', require('laravel-vue-pagination'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
