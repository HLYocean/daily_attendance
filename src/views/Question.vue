<template>
    <div class="box">
        <div class="header">
            <img @click="back" style="width: 20px" src="../assets/images/ic_black_return.png"/>
            <span>问题咨询</span>
            <span></span>
        </div>
        <div class="banner">
            <ul>
                <li>
                    <div class="name">
                        <img src="../assets/images/habit_126.png"/><span>客服</span>
                    </div>
                    <div class="text">
                        你好,我是客服
                    </div>
                </li>
                <li v-for="t in list">
                    <div :class="[{'text_right':t.name==='me'},{'text':t.name==='he'}]">
                        {{t.val}}
                    </div>
                    <div :class="[{'name_right':t.name==='me'},{'name':t.name==='he'}]">
                        <img :src='require(`../assets/images/habit_${t.img}.png`)'/><span v-if="t.name==='he'">客服</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="send">
            <textarea @blur="send" autofocus="autofocus" rows="3" cols="20" v-model="value" type="text"/>
            <el-button @click="getText" class="btn" type="info">发送</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ' ',
                list: []
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            getText() {
                if (this.value && this.value !== ' ') {
                    this.list.push({val: this.value, name: 'me', img: '95'});
                }
            },
            send() {
                // console.log(213);
                setTimeout(() => {
                    if (this.value && this.value[this.value.length - 1] !== ' ') {
                        this.list.push({val: '人工服务正在完善中...', name: 'he', img: '126'})
                    }
                    this.value = ' ';
                }, 1000);


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
    }

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

    .banner {
        margin: 10px;

        img {
            width: 30px;
        }

        span {
            font-size: 12px;
        }

        li {
            margin: 5px 0;
            overflow: hidden;

            .name {
                float: left;
            }

            .text {
                float: right;
                padding: 10px;
                width: 80%;
                border: 1px solid #000;
                border-radius: 10px;
                line-height: 30px;
            }

            .text_right {
                float: left;
                padding: 10px;
                width: 80%;
                border: 1px solid #000;
                border-radius: 10px;
                line-height: 30px;
            }

            .name_right {
                float: right;
            }
        }

    }

    .send {
        display: flex;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #878b99;
        width: 100%;
        height: 80px;

        textarea {
            display: inline-block;
            margin-top: 2px;
            border: none;
            resize: none;
            width: 75%;
            height: 70px;
            font-size: 16px;
            text-indent: 5px;
        }

        .btn {
            position: absolute;
            right: 5px;
            bottom: 5px;
            height: 30px;
            line-height: 6px;
        }

    }


</style>