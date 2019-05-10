// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/iconfont/iconfont.css'

import VueResource from 'vue-resource'
// import axios from 'axios'
// import ajax from './util/Ajax'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(iView)

Vue.prototype.curPoi = {
  id: 1,
  name: 'Lorem ipsum dolor sit.',
  catagory: 'Category01',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consequuntur dicta, eaque eos expedita illum iste non numquam perferendis placeat porro praesentium quam quasi reprehenderit sed temporibus, totam, voluptas.',
  lng: null,
  lat: null,
  img: null,
  audio: null,
  showRoute: false,
  highLight: false
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // this.$http.get('https://jsonplaceholder.typicode.com/users')
    //   .then((data) => {
    //     console.log(data.body)
    //     this.users = data.body
    //   })
    // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
    //   // console.log(res)
    //   res = ''
    // })
    //
    // ajax({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/users'
    // }).then(res => {
    //   console.log('ajax...')
    //   console.log(res.data)
    // })
  }
})
