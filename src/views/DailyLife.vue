<template>
    <div class="box">
        <div class="header">
            <div class="top">
                <img @click="backHome" src="../assets/images/ic_black_return.png"/>
                <span>每日随记</span>
            </div>
        </div>
        <div class="content" style="height: 94vh;background-color: #f6f8f7">
            <div @click="addNess" class="add">
                <img src="../assets/images/ic_add_white_24dp.png"/>
            </div>
            <div class="w" ref="w">
                <div v-show="!show">
                    <div @click="modification(i)" class="ness_list" v-for="(y,i) in ness" :key="i">
                        <div class="left">
                            <span style="font-weight: 700">{{y.text.time[0]}}</span>
                            <span>{{y.text.time[1]}}月{{y.text.time[2]<10?'0'+y.text.time[2]:y.text.time[2]}}号</span>
                            <span style="font-weight: 700">{{y.text.time[4]}}:{{y.text.time[5]<10?'0'+y.text.time[5]:y.text.time[5]}}</span>
                        </div>
                        <div class="right">
                            {{...y.text.val.replace(/<\/?.+?\/?>/g,' ').match(/([\u4e00-\u9fa5]|[A-Za-z0-9]){1,6}/)}}
                        </div>
                        <img @click.stop="del(i)" width="10px" style="margin-right: 10px"
                             src="../assets/images/ic_tomato_forbidden.png"/>
                    </div>
                </div>
            </div>
        </div>
        <Randomness v-if="show" @call="changeShow"/>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import Randomness from '../components/Randomness'
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                show: false,
                index: null,
            }
        },
        created() {
            this.$nextTick(()=>{
                if (this.w) {
                    this.w.refresh();
                } else {
                    this.w = new BScroll(this.$refs.w, {
                        startX: 0,
                        click: false,
                        scrollX: false,
                        scrollY: true,
                        preventDefault: false
                    });
                }
            })
        },
        computed: {
            ...mapState(['ness', 'cIndex'])
        },
        components: {
            Randomness
        },
        methods: {
            ...mapMutations(['removeNess']),
            backHome() {
                this.$router.push("/my");
            },
            addNess() {
                this.$store.commit('changeIndex', null);
                this.show = true;
            },
            changeShow() {
                this.show = false;
            },
            modification(i) {
                this.$store.commit('changeIndex', i);
                this.show = true;
            },
            del(i) {
                this.$store.commit('removeNess', i);
            }
        },
        beforeDestory() {
            // BScroll不属于vue,他是一个有副作用的DOM操作,所以当前组件被卸载时请回收该实例
            if (this.w) {
                this.w.destroy();
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
        background-color: #fff;

        .header {
            display: flex;
            padding: 10px 10px;
            justify-content: flex-start;
            height: 6vh;

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

    .add {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 40px;
        right: 20px;
        border-radius: 50%;
        z-index: 999;
        width: 60px;
        height: 60px;
        box-shadow: 0px 2px 7px rgba(#000, 0.5);
        background-color: rgba(#6ba9da, 0.9);

        img {
            width: 30px;
        }
    }

    .content {
        padding: 10px;
        background-color: #f5f7f6;

        .w{
            height: 90vh;
            overflow: hidden;
            /*background-color: #00b43c;*/
        }

        .ness_list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 5px;
            padding: 10px;
            border-radius: 5px;
            /*box-shadow: 2px 2px 6px rgba(#000, 0.3);*/
            background-color: #fff;

            .left {
                padding: 5px;
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 25%;
                font-size: 14px;
                line-height: 20px;
                background-color: #fff;
            }

            .right {
                /*border-left: 1px solid #fbfbfb;*/
                border-left: 1px solid #f6f8f7;
                padding-left: 10px;
                width: 70%;
                height: 5vh;
                font-size: 16px;
                font-weight: 700;
                line-height: 5vh;
                color: #a6a6a6;
            }
        }

    }

</style>