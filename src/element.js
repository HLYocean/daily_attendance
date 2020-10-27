import {TimePicker, TimeSelect, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

const elements = [TimePicker, TimeSelect, Button];

export default {
    /**
     * Vue.use 方法会自动调用install函数
     * Install Vant Component plugin
     * @param Vue
     */
    install(Vue) {
        elements.forEach(Component => {
            Vue.use(Component)
        })
    }

}