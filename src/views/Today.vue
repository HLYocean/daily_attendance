<template>
    <div>
        <div class="header">
            <img @click="card" src="../assets/images/invitation.png"/>
            <span>今日习惯</span>
            <img @click="goDailyNews" src="../assets/images/ic_user_time_line.png"/>
        </div>
        <div style="height: 80vh;overflow: hidden" ref="banner">
            <ul class="habit_list">
                <li v-for="(h,i) in getHabit" :key="'v'+i">
                    <div :style="{backgroundColor:h.color}">
                        <img @click.stop="ckeckin(h,i)" style="width: 30px"
                             :src="require(`../assets/images/habit_${h.img}.png`)"/>
                    </div>

                    <p  style="font-size: 15px">{{h.name.substr(0,4)}}</p>
                    <p @click.stop="callOff(h,i)" style="font-size: 14px ;margin-top: 5px">完成{{h.checkOnce}}次</p>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        computed: {
            ...mapState(['getHabit', 'reception'])
        },
        methods: {
            ...mapMutations(['addReception']),
            card() {
                this.$router.push({name: 'DayCard'})
            },
            goDailyNews() {
                this.$router.push({name: 'DailyNews'})
            },

            ckeckin(h, i) {
                // console.log(h);
                this.$store.commit('addReception', h);

                this.$store.commit('changeTexGetHabit', i);
                this.$toast({
                    message: '已签到',
                    duration: 500
                });
            },
            callOff(h, i) {
                // console.log(h, i);
                // this.$store.commit('addReception', h);
                this.$store.commit('addReception', h);

                this.$store.commit('changeTexGetHabit', [i, 'cut']);
            }
        },
        created() {
            this.$nextTick(() => {
                if (this.bannerlist) {
                    this.bannerlist.refresh();
                } else {
                    this.bannerlist = new BScroll(this.$refs.banner, {
                        click: true,
                        bounce: false, // 不允许弹簧效果
                    });
                }
            });
        },
        beforeDestory() {
            // BScroll不属于vue,他是一个有副作用的DOM操作,所以当前组件被卸载时请回收该实例
            if (this.bannerlist) {
                this.bannerlist.destroy();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;

        img {
            width: 30px;
        }

        span {
            font-weight: 700;
        }
    }

    .habit_list {
        overflow: hidden;
        margin: 30px 10px 10px 10px;

        li {
            float: left;
            text-align: center;
            margin-bottom: 10px;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #000;
                border-radius: 50%;
                margin: 10px;
                width: 58px;
                height: 58px;
                box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
            }
        }
    }

</style>