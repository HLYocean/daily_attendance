<template>
    <div>
        <van-swipe-cell v-for="(h,i) in getHabit" :key="i">
            <div :style="{backgroundColor:h.color}" class="content" @click="toNewHabits(h,i)">
                <div class="left">
                    <img class="img" :src="require(`../assets/images/habit_${h.img}.png`)"/>
                    <div style="display: flex;flex-direction: column;justify-content: center">
                        <span style="line-height: normal">{{h.name.substr(0,20)}}</span>
                        <span v-if="h.inspire"
                              style="line-height: normal;font-size: 14px;margin-top: 5px">{{h.inspire}}</span>
                    </div>
                </div>
                <div class="right">
                    <h2>{{h.checkOnce}}次</h2>
                    <span>共计坚持</span>
                </div>
            </div>
            <template #right>
                <van-button @click="del(i)" style="height: 100%" quare text="删除" type="danger"
                            class="delete-button"/>
            </template>
        </van-swipe-cell>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapState(['getHabit'])
        },
        methods: {
            ...mapMutations(['removeHabit']),
            del(i) {
                setTimeout(() => {
                    this.$store.commit('removeHabit', i);
                }, 300)
            },
            toNewHabits(h, i) {
                this.$router.push({name: 'NewHabits', params: h, query: {index: i}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        padding: 0 20px;
        border: 1px solid #000;
        border-radius: 5px;
        height: 10vh;
        background-color: #e6e6e6;
        line-height: 10vh;

        .left {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                height: 40px;
            }

            span {
                display: inline-block;
                margin-left: 30px;
                height: 100%;
                font-size: 18px;
                color: #000;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 14px;

            h2 {
                margin: 0;
                padding: 0;
                font-size: 18px;
                text-align: center;
                line-height: normal;
            }

            span {
                line-height: normal;
                color: #757575;
            }
        }
    }
</style>