<template>
    <div>
        <div class="header">
            <img @click="checkRecord" src="../assets/images/ic_habit_statistic.png"/>
            <span>习惯管理</span>
            <img @click="contentList" src="../assets/images/add_2.png"/>
        </div>
        <div style="height: 80vh;overflow: hidden" ref="list">
            <div>
                <Classification/>
                <div @click.stop="contentList" class="content">
                    <img src="../assets/images/add_3.png"/>
                    <span>添加习惯</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Classification from '../components/Classification'
    import BScroll from "better-scroll";

    export default {
        methods: {
            contentList() {
                this.$router.push({name: 'Habits'})
            },
            checkRecord(){
                this.$router.push({name:'CheckRecord'})
            }
        },
        components: {
            Classification
        },
        mounted() {
            this.$nextTick(() => {
                if (this.bannerlist) {
                    this.bannerlist.refresh();
                } else {
                    this.bannerlist = new BScroll(this.$refs.list, {
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

    .content {
        margin: 10px;
        border-radius: 5px;
        height: 10vh;
        text-align: center;
        background-color: #e6e6e6;
        line-height: 10vh;

        img {
            display: inline-block;
            margin-right: 10px;
            width: 25px;
            vertical-align: middle;
        }

        span {
            display: inline-block;
            height: 100%;
            font-size: 16px;
            color: #8d8d8d;
        }
    }

</style>