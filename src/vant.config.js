import {
    CountDown,
    Toast,
    Grid,
    GridItem,
    DatetimePicker,
    Icon,
    Calendar,
    Switch,
    SwipeCell,
    Button,
    ShareSheet
} from 'vant'

const vants = [CountDown, Toast, Grid, GridItem, DatetimePicker, Icon, Calendar, Switch, SwipeCell, Button, ShareSheet];

export default {
    /**
     * Vue.use 方法会自动调用install函数
     * Install Vant Component plugin
     * @param Vue
     */
    install(Vue) {
        vants.forEach(Component => {
            Vue.use(Component)
        })
    }

}