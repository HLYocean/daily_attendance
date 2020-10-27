<template>
    <div class="box">
        <div class="header">
            <img @click="back" style="width: 20px" src="../assets/images/ic_black_return.png"/>
            <span>习惯统计</span>
            <div></div>
        </div>
        <div class="w" ref="w">
            <ul>
                <li v-for="(h,i) in reception" :key="h.id">
                    <div @click="showE(i)">
                        <img :src="require(`../assets/images/habit_${h.img}.png`)" alt="">
                        <div class="title">
                            <span>{{...h.name.match(/\S{1,4}/)}}</span>
                            <ol>
                                <li :class="[{'active':new Date(h.time).getDay()===num}]"
                                    v-for="num in 6">
                                </li>
                                <li :class="[{'active':new Date(h.time).getDay()===0}]"></li>
                            </ol>
                        </div>
                        <div><span>{{h.checkOnce}}</span>次</div>
                    </div>
                    <div v-show="!show"
                         :class="[{'Ecahrs_active':currentIndex===i },'echart']"
                         :id="'echarts'+i" :style="{width: '200px', height: '200px'}"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from "better-scroll";

    export default {
        data() {
            return {
                show: false,
                currentIndex: null
            }
        },
        computed: {
            ...mapState(['reception'])
        },
        methods: {
            back() {
                this.$router.back();
            },
            showE(i) {
                if (this.currentIndex > 0 || this.currentIndex === 0) {
                    this.currentIndex = null;
                } else {
                    this.currentIndex = i;
                }
            }
        },
        mounted() {
            if (this.reception.length > 0) {
                let dom = [];
                let num = [];
                for (let x = this.reception.length - 1; x >= 0; x--) {
                    if (document.getElementById('echarts' + x)) {
                        dom[x] = document.getElementById('echarts' + x);
                    }
                }
                if (dom.length > 0) {
                    for (let y = 0; y < dom.length; y++) {
                        // 绘制图表
                        num[y] = (this.reception[y].when) === '每日' ? 1 : (this.reception[y].when) === '每周' ? 7 : 31;

                        this.echarts.init(dom[y]).setOption({
                            series: [{
                                name: '访问来源',
                                type: 'pie',
                                radius: '30%',
                                label: {
                                    emphasis: {
                                        show: false, //文字至于中间时，这里需为true
                                        textStyle: { //设置文字样式
                                            fontSize: '12',
                                            color: "#333"
                                        }
                                    }
                                },
                                data: [{
                                    value: this.reception[y].checkOnce,
                                    name: '已打卡'
                                },
                                    {
                                        value: num[y] - this.reception[y].checkOnce,
                                        name: '未打卡'
                                    }
                                ]
                            }]
                        });
                    }
                }

            }
            this.$nextTick(() => {
                if (this.banner) {
                    this.banner.refresh();
                } else {
                    this.banner = new BScroll(this.$refs.w, {
                        click: false,
                        preventDefault: false
                    });
                }
            })
        },
        beforeDestory() {
            // BScroll不属于vue,他是一个有副作用的DOM操作,所以当前组件被卸载时请回收该实例
            if (this.w) {
                this.w.destroy();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;

        .header {
            display: flex;
            padding: 10px;
            justify-content: space-between;
            margin-bottom: 30px;
            align-items: center;

            img {
                width: 30px;
            }

            span {
                font-weight: 700;
            }
        }

        .w {
            height: 90vh;
            overflow: hidden;
        }


        img {
            width: 30px;
        }

        ul > li {
            display: flex;
            flex-direction: column;
            align-items: center;

            .echart.Ecahrs_active {
                display: block;
            }

            .echart {
                display: none;
            }

            canvas {
                margin-right: 40px;
            }
        }

        ul > li > div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 10px 0;

            .title {
                display: flex;
                justify-content: flex-end;
                width: 70vw;

                span {
                    font-weight: normal;
                }
            }

            span {
                font-weight: 700;
            }
        }

        ol {
            display: flex;
            align-items: center;
            margin-left: 10px;

            .active {
                background-color: #6ba9da;
            }

            li {
                margin: 0 5px;
                border-radius: 5px;
                width: 20px;
                height: 8px;
                background-color: #f5f5f5;
            }
        }

    }
</style>