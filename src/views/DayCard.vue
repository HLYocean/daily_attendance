<template>
    <div class="box">
        <div class="header">
            <img @click="backHome" class="back" src="../assets/images/ic_black_return.png"/>
            <span>今日卡片</span>
            <img @click="showShare=!showShare" src="../assets/images/ic_car_share.png"/>
        </div>
        <div class="getImg">愉快的获得这些打卡吧~</div>
        <div class="img_text">
            <img :src="dataDetails.picurl"/>
            <p>{{dataDetails.content}}</p>
            <div>{{dataDetails.note}}</div>
            <div class="sun">
                <div>
                    <img src="../assets/images/app_icon.png"/>
                    <span>小习惯</span>
                </div>
                <div class="daytime">
                    {{week}}
                    <br/>
                    <span>{{month}}</span>
                </div>
            </div>
        </div>
        <span :style="{'background-color':getImgBgColor}" ref="draw" @click.once="draw" class="btn">{{getImg}}</span>
        <van-share-sheet
                v-model="showShare"
                :options="options"
                title="发送"
        />
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                dataDetails: {
                    cardId: 180,
                    content: "Sometimes the most urgent and vital thing you can possibly do is to take a complete rest.",
                    note: "有时候你能做的最紧急重要的事情就是彻底休息。",
                    picurl: "http://xrc.xianbeikeji.com/smalldaily/card/202010/pic4.jpg",
                },
                now: new Date(),
                showShare: false,
                options: [
                    {name: '微信', icon: 'wechat'},
                    {name: '微博', icon: 'weibo'},
                    {name: '复制链接', icon: 'link', description: '描述信息'},
                    {name: '分享海报', icon: 'poster'},
                    {name: '二维码', icon: 'qrcode'},
                ],
            }
        },
        computed: {
            week() {
                switch (this.now.getDay()) {
                    case 0:
                        this.weekday = '周日';
                        return '周日';
                        break;
                    case 1:
                        this.weekday = '周一';
                        return '周一';
                        break;
                    case 2:
                        this.weekday = '周二';
                        return '周二';
                        break;
                    case 3:
                        this.weekday = '周三';
                        return '周三';
                        break;
                    case 4:
                        this.weekday = '周四';
                        return '周四';
                        break;
                    case 5:
                        this.weekday = '周五';
                        return '周五';
                        break;
                    case 6:
                        this.weekday = '周六';
                        return '周六';
                        break;

                }
                this.now.getDay();
            },
            month() {
                return this.now.toString().slice(3, 15)
            },
            ...mapState(['getImg', 'getImgBgColor', 'data'])
        },
        methods: {
            backHome() {
                this.$router.push("/");
            },
            draw() {
                this.$store.commit('changeGetImg')
            },
            ...mapMutations(['changeGetImg'])
        },
    }
</script>

<style lang="scss" scoped>
    .box {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background-color: #fff;

        .header {
            display: flex;
            padding: 10px;
            justify-content: space-between;
            align-items: center;

            img {
                width: 30px;
            }

            .back {
                width: 20px;
            }

            span {
                font-weight: 700;
            }
        }
    }

    .getImg {
        padding: 10px 10px 0 20px;
        font-size: 12px;
    }

    .img_text {
        margin: 20px;
        display: flex;
        height: 70vh;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0 4px 11px rgba(0, 0, 0, 0.4);

        img {
            height: 65%;
            width: 100%;
        }

        p {
            padding: 10px;
            font-size: 14px;
        }

        div {
            padding: 0 10px;
            font-size: 14px;
        }

        .sun {
            display: flex;
            margin-top: 20px;
            margin-bottom: 10px;
            justify-content: space-between;
            align-items: flex-end;

            div {
                display: flex;
                flex-direction: column;
                font-size: 12px;
                color: #5c5d58;

                span {
                    margin-top: 10px;
                }
            }

            img {
                width: 40px;
            }

            .daytime {
                text-align: right;
                line-height: 10px;

                span {
                    color: #000;
                    font-weight: 700;
                }
            }

        }
    }

    .btn {
        display: inline-block;
        margin-left: 37vw;
        border-radius: 3px;
        width: 26vw;
        height: 10vw;
        font-size: 14px;
        text-align: center;
        line-height: 10vw;
        color: #fff;
    }


</style>