<template>
    <div class="box">
        <img @click="backHome" class="back" src="../assets/images/ic_black_return.png"/>
        <van-calendar
                class="daily"
                title="日常动态"
                :poppable="false"
                :show-confirm="false"
                :style="{ height: '450px' }"
                :formatter="formatter"
        />
    </div>

</template>

<script>
    export default {
        methods: {
            formatter(day) {
                const month = day.date.getMonth() + 1;
                const date = day.date.getDate();
                if (month === 10) {
                    if (date === 1) {
                        day.topInfo = '劳动节';
                    } else if (date === 4) {
                        day.bottomInfo = '青年节';
                    }
                }
                return day;
            },
            backHome() {
                this.$router.push("/");
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

        .back {
            width: 20px;
            position: absolute;
            top: 13px;
            left: 10px;
        }

        .daily {

            /deep/ .van-calendar__bottom-info {
                font-size: 10px;
                white-space: nowrap;
                margin: 0 9px;
                overflow: hidden;
            }

            /deep/ .van-calendar__header-title {
                font-size: 20px;
                font-weight: 700;
            }
        }

    }


</style>