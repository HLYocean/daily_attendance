<template>
    <div class="box">
        <div class="header">
            <img @click="back" style="width: 20px" src="../assets/images/ic_black_return.png"/>
            <span>新的习惯</span>
            <img @click="check" src="../assets/images/ic_check_black.png"/>
        </div>
        <div style="height: 92vh;overflow: hidden" ref="box">
            <div style="padding-bottom: 90px">
                <div class="habits_name">
                    <div :style="{backgroundColor:habitBgColor}">
                        <img :src="require(`../assets/images/habit_${habitImg}.png`)"/>
                    </div>
                    <input class="ipt" v-model="habitName" type="text" placeholder="给习惯命名"/>
                </div>
                <div class="icon_color">
                    <h2>挑选颜色和图标:</h2>
                    <div ref="banner">
                        <ul>
                            <li v-for="(c,i) in colorList" :key="i">
                                <span @click.stop="changeColor(c.color)" class="bgColor"
                                      :style="{backgroundColor:c.color}"></span>
                            </li>
                        </ul>
                    </div>
                    <div ref="w">
                        <ul class="colorImg">
                            <li @click="changeImg(s)" v-for="(s,i) in colorImg" :key="i">
                                <img :src="require(`../assets/images/habit_${s}.png`)"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--                <div class="when">-->
                <!--                    <h2>在一天的什么时候:</h2>-->
                <!--                    <div class="when_list" ref="when_1" style="height: 20px">-->
                <!--                        <ul @click.stop="changWhen">-->
                <!--                            <li :class="{'when_bg':habitWhen==='任意'}">任意</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='起床'}">起床</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='早餐'}">早餐</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='中午'}">中午</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='下午'}">下午</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='晚上'}">晚上</li>-->
                <!--                            <li :class="{'when_bg':habitWhen==='睡前'}">睡前</li>-->
                <!--                        </ul>-->
                <!--                    </div>-->
                <!--                </div>-->
                <div class="frequency">
                    <div class="top">
                        <h2>设置每天的打卡次数:</h2>
                        <ul @click="everyFrequency">
                            <li :class="{'every_once':habitFrequency==='每日'}">每日</li>
                            <li :class="{'every_once':habitFrequency==='每周'}">每周</li>
                            <li :class="{'every_once':habitFrequency==='每月'}">每月</li>
                        </ul>
                    </div>
                    <!--                    <div>-->
                    <!--                        每日 <input v-model="once" type="number"/> 次-->
                    <!--                    </div>-->
                </div>
                <!--                <div v-show="show" class="when">-->
                <!--                    <h2>在一周的什么时候:</h2>-->
                <!--                    <div class="when_list week" ref="when">-->
                <!--                        <ul @click="weekWhen">-->
                <!--                            <li data-number=0 :class="{'week_bg':weekTitle[0]}">周一</li>-->
                <!--                            <li data-number=1 :class="{'week_bg':weekTitle[1]}">周二</li>-->
                <!--                            <li data-number=2 :class="{'week_bg':weekTitle[2]}">周三</li>-->
                <!--                            <li data-number=3 :class="{'week_bg':weekTitle[3]}">周四</li>-->
                <!--                            <li data-number=4 :class="{'week_bg':weekTitle[4]}">周五</li>-->
                <!--                            <li data-number=5 :class="{'week_bg':weekTitle[5]}">周六</li>-->
                <!--                            <li data-number=6 :class="{'week_bg':weekTitle[6]}">周日</li>-->
                <!--                        </ul>-->
                <!--                    </div>-->
                <!--                </div>-->
                <div class="remind">
                    <h2>设置提醒时间:</h2>
                    <el-time-picker
                            v-model="value"
                            :picker-options="{
      selectableRange: '01:00:00 - 23:00:00'
    }"
                            placeholder="任意时间点">
                    </el-time-picker>
                </div>
<!--                <div class="success">-->
<!--                    <span>完成打卡弹出打卡日志:</span>-->
<!--                    <van-switch size="20px" v-model="checked"/>-->
<!--                </div>-->
                <div class="inspire">
                    <h2>写一句激励自己的话:</h2>
                    <input v-model="inspire" type="text" placeholder="对自己说,每天都要加油 !">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import {mapState, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapState(['getHabit']),
        },
        data() {
            return {
                colorList: [],
                colorImg: [],
                checked: true,
                habitName: "",
                habitBgColor: '#6caadd',
                habitImg: '1',
                // habitWhen: '任意',
                habitFrequency: "每日",
                // once: 1,
                weekTitle: [false, false, false, false, false, false],
                show: true,
                value: new Date(),
                inspire: null
            }
        },
        methods: {
            check() {
                this.$toast({
                    message: '保存成功',
                    position: 'top',
                });
                if (this.$route.query.index != null) {
                    this.$store.commit('changeTexGetHabit', [this.$route.query.index, {
                        color: this.habitBgColor,
                        img: this.habitImg,
                        when: this.habitFrequency,
                        // once: this.once,
                        time: new Date(this.value).getTime(),
                        inspire: this.inspire,
                        name: this.habitName,
                        id: this.$route.params.id,
                        checkOnce: 0
                    }, 0]);
                    return;
                }
                if (this.habitName) {
                    this.$store.commit('changGetHabit', {
                        color: this.habitBgColor,
                        img: this.habitImg,
                        when: this.habitFrequency,
                        // once: this.once,
                        time: new Date(this.value).getTime(),
                        inspire: this.inspire,
                        name: this.habitName,
                        id: new Date(this.value).getTime(),
                        checkOnce: 0
                    })
                }
            },
            back() {
                this.$router.back();
            },
            changeColor(c) {
                this.habitBgColor = c;
            },
            changeImg(img) {
                this.habitImg = img;
            },
            // changWhen(e) {
            //     this.habitWhen = e.target.innerText;
            // },
            everyFrequency(e) {
                this.habitFrequency = e.target.innerText;
                if (e.target.innerText === '每月') {
                    this.show = false
                } else {
                    this.show = true;
                }
            },
            // weekWhen(e) {
            //     let n = parseInt(e.target.getAttribute('data-number'));
            //     this.$set(this.weekTitle, n, !this.weekTitle[n]);
            // },
            ...mapMutations(['changGetHabit', 'changeTexGetHabit'])
        },
        mounted() {
            // window.localStorage.setItem('remaintime', JSON.stringify(this.getHabit))
            this.$nextTick(() => {
                if (this.box) {
                    this.box.refresh();
                } else {
                    this.box = new BScroll(this.$refs.box, {
                        click: true,
                    });
                }
            });
            if (this.$route.params.img !== undefined) {
                this.habitBgColor = this.$route.params.color;
                this.habitImg = this.$route.params.img;
                this.habitName = this.$route.params.name;
            }
            if (this.$route.params.time !== undefined) {
                this.value = new Date(this.$route.params.time)
            } else {
                this.value = new Date()
            }
            if (this.$route.params.when !== undefined) {
                this.habitFrequency = this.$route.params.when
            } else {
                this.habitFrequency = '每日'
            }
        },
        created() {
            this.$http("/colorlist").then((res) => {
                this.colorList = res.data.data;
            });
            this.$nextTick(() => {
                if (this.banner) {
                    this.banner.refresh();
                } else {
                    this.banner = new BScroll(this.$refs.banner, {
                        startX: 0,
                        click: false,
                        scrollX: true,
                        scrollY: false,
                        preventDefault: false
                    });
                }
                if (this.w) {
                    this.w.refresh();
                } else {
                    this.w = new BScroll(this.$refs.w, {
                        startX: 0,
                        click: false,
                        scrollX: true,
                        scrollY: false,
                        preventDefault: false
                    });
                }
                // if (this.when) {
                //     this.when.refresh();
                // } else {
                //     this.when = new BScroll(this.$refs.when, {
                //         startX: 0,
                //         click: false,
                //         scrollX: true,
                //         scrollY: false,
                //         preventDefault: false
                //     });
                // }
                // if (this.when_1) {
                //     this.when_1.refresh();
                // } else {
                //     this.when_1 = new BScroll(this.$refs.when_1, {
                //         startX: 0,
                //         click: false,
                //         scrollX: true,
                //         scrollY: false,
                //         preventDefault: false
                //     });
                // }
            });
            for (let i = 1; i < 129; i++) {
                this.colorImg.push(String(i));
            }
        },
        beforeDestory() {
            // BScroll不属于vue,他是一个有副作用的DOM操作,所以当前组件被卸载时请回收该实例
            if (this.banner) {
                this.banner.destroy();
            }
            if (this.w) {
                this.w.destroy();
            }
            // if (this.when) {
            //     this.when.destroy();
            // }
            // if (this.when_1) {
            //     this.when.destroy();
            // }

        },
    }
</script>

<style lang="scss" scoped>

    .box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0 10px;
        background-color: #fff;

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
    }

    .habits_name {
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            border: 1px solid #000;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            text-align: center;
            background-color: #6caadd;

            img {
                width: 30px;
            }
        }

        .ipt {
            display: inline-block;
            padding: 10px;
            border: none;
            width: 80px;
            font-size: 14px;
            text-align: center;
            caret-color: rgba(blue, 0.4);
            background-color: #f0eeef;

        }

    }

    .icon_color {
        margin-top: 20px;

        h2 {
            font-size: 14px;
            font-weight: 700;
        }

        div {
            width: 100%;
            overflow: hidden;
        }

        ul {
            width: 310%;
            height: 40px;

            li {
                overflow: hidden;
                margin: 20px;
                float: left;
            }

            span {
                display: inline-block;
                border-radius: 50%;
                width: 20px;
                height: 20px;
            }
        }

        .colorImg {
            overflow: hidden;
            width: 680%;
            height: 194px;

            li {
                margin: 5px;
                padding: 10px;
                background-color: #e5e5e5;
            }

            img {
                width: 30px;
            }
        }

    }

    .when {
        margin-top: 30px;
        height: 70px;
        font-size: 14px;

        h2 {
            margin-bottom: 10px;
            font-size: 14px;
            font-weight: 700;
        }

        ul {
            width: 160%;

            li {
                margin-right: 20px;
                padding: 8px 15px;
                border: 1px solid #000;
                border-radius: 30px;
                box-sizing: border-box;
                float: left;
            }

            li.when_bg {
                background-color: #6baadb;
                color: #fff;
                border: none
            }
        }

        .week {

            li {
                border: none;
                color: #fff;
                background-color: #6baadb;
            }

            li.week_bg {
                background-color: #fff;
                color: #000;
                border: 1px solid #000;
            }
        }

    }

    .frequency {
        margin-top: 10px;

        .top {
            display: flex;
            margin-bottom: 10px;
            justify-content: space-between;
            align-items: center;

            h2 {
                font-size: 14px;
                font-weight: 700;
            }

            ul {
                display: flex;
                margin-right: 16vw;
                border: 1px solid #6caadc;
                border-radius: 5px;
                font-size: 14px;

                li:last-child {
                    border: none;
                }
            }

            li {
                padding: 5px 10px;
                margin-right: -1px;
                border-right: 1px solid #6caadc;
            }

            li.every_once {
                background-color: #6baadb;
                color: #fff;
            }


        }

        div {
            font-size: 14px;

            input {
                border: none;
                border-radius: 5px;
                width: 30px;
                height: 30px;
                outline: none;
                text-align: center;
                caret-color: #6caadd;
                background-color: #efedee;
            }
        }

    }

    .remind {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;

        h2 {
            padding-bottom: 15px;
        }

        div {
            display: inline-block;
            padding: 8px;
            border-radius: 5px;
            background-color: #f0eeef;
        }

    }

    .success {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;

        span {
            margin-right: 20px;
            vertical-align: 6px;
        }
    }

    .inspire {
        margin-top: 20px;
        font-size: 14px;


        h2 {
            font-weight: 700;
            margin-bottom: 10px;
        }

        input {
            border: none;
            border-radius: 5px;
            padding: 5px;
            width: 98%;
            height: 30px;
            text-indent: 10px;
            background-color: #efedee;
            caret-color: #6baadb;
        }

    }


</style>