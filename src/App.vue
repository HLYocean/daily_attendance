<template>
    <div id="app">
        <div class="app">
            <router-link ref="img" @click="toggle" tag="div" class="footer_nav border-1px" to="/"><span class="img_1">
               ></span><span>今日</span></router-link>
            <router-link ref="img" @click="toggle" tag="div" class="footer_nav border-1px" to="/all"><span
                    class="img_2">
               ></span><span>全部</span></router-link>
            <router-link ref="img" @click="toggle" tag="div" class="footer_nav border-1px" to="/pomodoro"><span
                    class="img_3">
               ></span><span>番茄钟</span></router-link>
            <router-link ref="img" @click="toggle" tag="div" class="footer_nav border-1px" to="/my"><span class="img_4">
               ></span><span>我的</span></router-link>
        </div>
        <router-view/>
        <KindlyReminder v-show="$store.state.show"/>
    </div>
</template>

<script>
    import KindlyReminder from './components/KindlyReminder'
    import {mapMutations, mapState, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                img: 'normal',
                data: new Date("Tue Oct 13 2020 16:41:00 GMT+0800 (中国标准时间)").getTime()
            }
        },
        computed: {
            ...mapState(['getHabit']),
            ...mapGetters(['getRemainTime']),
        },
        created() {
            this.upgetRemainTime(this.getRemainTime);
        },
        watch: {
            getRemainTime: {
                handler(o) {
                    this.upgetRemainTime(o);
                }
            }
        },
        methods: {
            ...mapMutations(['toogleShow']),
            toggle() {
                if (this.img === "normal") {
                    this.img = "select"
                } else {
                    this.img = "normal"
                }
            },
            upgetRemainTime(o) {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                this.timer = setInterval(() => {
                    let now = Date.now();
                    o.forEach((t, i) => {
                        if (Math.abs(now - t) < 500) {
                            this.$store.commit('toogleShow', i);
                            clearInterval(this.timer);
                            this.upgetRemainTime(o);
                        }
                    });
                }, 1000);
            }
        },
        components: {
            KindlyReminder
        },
        destroyed() {
            clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>

    @import "assets/styles/border_1px";

    .app {
        display: flex;
        position: fixed;
        padding-top: 10px;
        justify-content: space-around;
        align-items: center;
        bottom: 10px;
        width: 100vw;

        &:after {
            display: inline-block;
            position: absolute;
            top: 0;
            height: 1px;
            width: 100vw;
            content: "";
            border-top: 1px solid #f9f9f9;
            @include border_1px();
        }

        .footer_nav {
            width: 40px;
            text-align: center;

            @for $i from 1 through 4 {
                .img_#{$i} {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-size: 25px 25px;
                    background-repeat: no-repeat;
                    background-image: url("./assets/images/ic_#{$i}_normal.png");
                    background-position: center;
                }
            }

            @for $i from 1 through 4 {
                &.router-link-exact-active .img_#{$i} {
                    background-image: url("./assets/images/ic_#{$i}_select.png");
                }
            }

            span {
                display: inline-block;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #989898;
            }
        }

    }

</style>
