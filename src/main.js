import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vantConfig from './vant.config'
import element from './element'
import quillEditor from "./quillEditor";
import Echarts from 'echarts'

Vue.prototype.echarts = Echarts;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(vantConfig);
Vue.use(element);
Vue.use(quillEditor);
Vue.use(Echarts)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
