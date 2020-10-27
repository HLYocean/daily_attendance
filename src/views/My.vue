<template>
    <div>
        <div class="header">
            <div class="top">
                <span>个人中心</span>
                <!--                <img src="../assets/images/ic_setting.png"/>-->
                <span></span>
            </div>
        </div>
        <div class="Head_portrait">
            <img src="../assets/images/ic_mine_head_no_entered.png"/>
            <div>点我登录</div>
        </div>
        <div class="img_list">
            <ul>
                <li @click="question"><img src="../assets/images/ic_user_qa.png"/>
                    <span>问题反馈</span>
                </li>

                <li @click="randomness"><img src="../assets/images/ic_diary.png"/>
                    <span>每日随记</span>
                </li>
            </ul>

        </div>
        <van-share-sheet
                v-model="showShare"
                :options="options"
                title="数据备份"
                description="描述信息"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
        methods: {
            randomness() {
                this.$router.push('/dailylife')
            },
            question() {
                this.$router.push('/question')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 20px;
        justify-content: flex-end;

        .top {
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 700;

            img {
                width: 30px;
            }
        }
    }

    .Head_portrait {
        padding: 20px;
        text-align: center;
        font-size: 14px;

        img {
            border: 2px solid #000;
            border-radius: 50%;
            width: 80px;
        }

        div {
            margin-top: 10px;
        }
    }

    .img_list {
        margin: 0 auto;
        display: flex;
        width: 50vh;
        height: 50vh;
        flex-direction: column;
        justify-content: space-between;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 50vh;
            height: 50vh;

            li {
                display: flex;
                padding: 10px;
                margin: 10px 0;
                border-radius: 5px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 130px;
                height: 130px;
                font-size: 12px;
                background-color: #f5f5f5;

                img {
                    margin-bottom: 10px;
                }
            }
        }

        img {
            width: 50px;
        }
    }

</style>