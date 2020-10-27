<template>
    <div class="box">
        <div class="header">
            <div class="top">
                <img @click="backHome" src="../assets/images/ic_black_return.png"/>
                <span>习惯库</span>
            </div>
        </div>
        <div style="padding-bottom: 10px">
            <div @click="toNewHabits" class="custom">
                <div><img src="../assets/images/habit_1.png"/></div>
                <span>自定义一个习惯</span>
            </div>
        </div>
        <div class="banner" ref="banner">
            <div style="padding-bottom: 20px">
                <div class="list">
                    <div class="title">
                        <img src="../assets/images/dot_red.png">
                        <span>健康</span>
                    </div>
                    <ul>
                        <li @click="toNewHabitEditor({name:'醒来喝水',img:'12',color:'#dad9e9'})">
                            <div>
                                <img src="../assets/images/habit_12.png"/>
                            </div>
                            <span>醒来喝水</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'吃早饭',img:'51',color:'#f9d9da'})">
                            <div style="background-color:#f9d9da">
                                <img src="../assets/images/habit_51.png"/>
                            </div>
                            <span>吃早饭</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'睡前刷牙',img:'56',color:'#d0eadd'})">
                            <div style="background-color:#d0eadd">
                                <img src="../assets/images/habit_56.png"/>
                            </div>
                            <span>睡前刷牙</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'吃药',img:'16',color:'#b2e1eb'})">
                            <div style="background-color:#b2e1eb">
                                <img src="../assets/images/habit_16.png"/>
                            </div>
                            <span>吃药</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'跑步',img:'57',color:'#f8d7a1'})">
                            <div style="background-color:#f8d7a1">
                                <img src="../assets/images/habit_57.png"/>
                            </div>
                            <span>跑步</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'早睡',img:'62',color:'#fcd9bc'})">
                            <div style="background-color:#fcd9bc">
                                <img src="../assets/images/habit_62.png"/>
                            </div>
                            <span>早睡</span>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <div class="title">
                        <img src="../assets/images/dot_red.png">
                        <span>学习</span>
                    </div>
                    <ul>
                        <li @click="toNewHabitEditor({name:'阅读',img:'8',color:'#c8d1d6'})">
                            <div style="background-color: #c8d1d6">
                                <img src="../assets/images/habit_8.png"/>
                            </div>
                            <span>阅读</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'背单词',img:'3',color:'#d0c5bf'})">
                            <div style="background-color:#d0c5bf">
                                <img src="../assets/images/habit_3.png"/>
                            </div>
                            <span>背单词</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'练习新技能',img:'4',color:'#eaebef'})">
                            <div style="background-color:#eaebef">
                                <img src="../assets/images/habit_4.png"/>
                            </div>
                            <span>练习新技能</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'休息一下',img:'9',color:'#ebe7e4'})">
                            <div style="background-color:#ebe7e4">
                                <img src="../assets/images/habit_9.png"/>
                            </div>
                            <span>休息一下</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'转眼运动',img:'48',color:'#ecf1bb'})">
                            <div style="background-color:#ecf1bb">
                                <img src="../assets/images/habit_48.png"/>
                            </div>
                            <span>转眼运动</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'弹乐器',img:'43',color:'#d4e9c0'})">
                            <div style="background-color:#d4e9c0">
                                <img src="../assets/images/habit_43.png"/>
                            </div>
                            <span>弹乐器</span>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <div class="title">
                        <img src="../assets/images/dot_red.png">
                        <span>工作</span>
                    </div>
                    <ul>
                        <li @click="toNewHabitEditor({name:'站立',img:'22',color:'#c0e1c2'})">
                            <div style="background-color: #c0e1c2">
                                <img src="../assets/images/habit_22.png"/>
                            </div>
                            <span>站立</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'清查邮件',img:'5',color:'#a8e7ee'})">
                            <div style="background-color:#a8e7ee">
                                <img src="../assets/images/habit_5.png"/>
                            </div>
                            <span>清查邮件</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'休息一下',img:'52',color:'#a9e1fa'})">
                            <div style="background-color:#a9e1fa">
                                <img src="../assets/images/habit_52.png"/>
                            </div>
                            <span>休息一下</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'打卡',img:'58',color:'#b3d8fa'})">
                            <div style="background-color:#b3d8fa">
                                <img src="../assets/images/habit_58.png"/>
                            </div>
                            <span>打卡</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'写待办事项',img:'2',color:'#c8bce4'})">
                            <div style="background-color:#c8bce4">
                                <img src="../assets/images/habit_2.png"/>
                            </div>
                            <span>写待办事项</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'使用番茄钟',img:'13',color:'#f6b2c9'})">
                            <div style="background-color:#f6b2c9">
                                <img src="../assets/images/habit_13.png"/>
                            </div>
                            <span>使用番茄钟</span>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <div class="title">
                        <img src="../assets/images/dot_red.png">
                        <span>日常</span>
                    </div>
                    <ul>
                        <li @click="toNewHabitEditor({name:'打坐冥想',img:'35',color:'#fec5b3'})">
                            <div style="background-color: #fec5b3">
                                <img src="../assets/images/habit_35.png"/>
                            </div>
                            <span>打坐冥想</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'记账',img:'68',color:'#fddbab'})">
                            <div style="background-color:#fddbab">
                                <img src="../assets/images/habit_68.png"/>
                            </div>
                            <span>记账</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'写日记',img:'7',color:'#fde9a8'})">
                            <div style="background-color:#fde9a8">
                                <img src="../assets/images/habit_7.png"/>
                            </div>
                            <span>写日记</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'浇花',img:'14',color:'#f7f9d4'})">
                            <div style="background-color:#f7f9d4">
                                <img src="../assets/images/habit_14.png"/>
                            </div>
                            <span>浇花</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'遛狗',img:'64',color:'#eefad8'})">
                            <div style="background-color:#eefad8">
                                <img src="../assets/images/habit_64.png"/>
                            </div>
                            <span>遛狗</span>
                        </li>
                        <li @click="toNewHabitEditor({name:'探望朋友',img:'54',color:'#e9fbe5'})">
                            <div style="background-color:#e9fbe5">
                                <img src="../assets/images/habit_54.png"/>
                            </div>
                            <span>探望朋友</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";

    export default {
        methods: {
            backHome() {
                this.$router.push("/all");
            },
            toNewHabits() {
                this.$router.push('/newhabits')
            },
            toNewHabitEditor(obj) {
                this.$router.push({name: 'NewHabits', params: obj})
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
    .box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0 10px;
        background-color: #fff;

        .banner {
            height: 73vh;
            overflow: hidden;
        }

        .header {
            display: flex;
            padding: 10px 0;
            justify-content: flex-start;

            .top {
                width: 60%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 700;

                img {
                    width: 20px;
                }
            }
        }

    }

    .custom {
        display: flex;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 10px;
        border-radius: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;

        div {
            display: flex;
            border: 1px solid #000;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background-color: #d9d8e8;

            img {
                width: 26px;
                height: 26px;
            }
        }

        span {
            padding: 10px;
            font-size: 16px;
        }
    }


    .list {
        display: flex;
        flex-direction: column;

        .title {
            display: flex;
            align-items: center;
            padding: 10px;

            img {
                width: 15px;
            }

            span {
                font-size: 16px;
                margin-left: 5px;
            }
        }

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 5px;
            padding: 10px 0;
            border-radius: 5px;
            width: 30%;
            background-color: #f5f5f5;

            div {
                padding: 8px;
                border: 1px solid #000;
                border-radius: 50%;
                background-color: #dad9e9;
            }

            img {
                width: 30px;
            }

            span {
                font-size: 14px;
                margin-top: 10px;
            }
        }
    }


</style>