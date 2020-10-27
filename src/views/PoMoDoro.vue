<template>
    <div>
        <div class="header">
            <!--            <img src="../assets/images/ic_tomato_music.png"/>-->
            <span></span>
            <ul>
                <li @click="Timing(0)" :class="{active:currentTimingIndex===0}">正计时</li>
                <li @click="Timing(1)" :class="{active:currentTimingIndex===1}">倒计时</li>
                <!--                <li @click="Timing(2)" :class="{active:currentTimingIndex===2}">番茄钟</li>-->
            </ul>
            <!--            <img src="../assets/images/ic_tomato_statics.png"/>-->
            <span></span>
        </div>
        <div class="tomato_timing">
            <!--            <img src="../assets/images/ic_tomato_timing.png"/>-->
            <span></span>
        </div>
        <!--正计时-->
        <div v-if="currentTimingIndex===0" class="PositiveTiming">
            <div class="PositiveTiming_Round">
                <span>{{PositiveTimemin}}:{{PositiveTimesec}}</span>
            </div>
            <div class="PositiveTiming_start">
                <div class="btn">
                    <div @click="PositiveTimingStart">
                        <van-icon size="25" color="#000" name="play-circle-o"/>
                        <br/>
                        开始
                    </div>
                    <div @click="PositiveTimingPause">
                        <van-icon size="25" color="#000" name="pause-circle-o"/>
                        <br/>
                        暂停
                    </div>
                    <div @click="PositiveTimingReset">
                        <van-icon size="25" color="#000" name="replay"/>
                        <br/>
                        重置
                    </div>
                    <div @click="PositiveTimingReset">
                        <van-icon size="25" color="#000" name="close"/>
                        <br/>
                        结束
                    </div>
                </div>
            </div>
        </div>
        <!-- 倒计时-->
        <div class="chronography" v-if="currentTimingIndex===1">
            <div v-if="!show" class="count-down">
                <div class="count-time">
                    {{parseInt(time/60)<10?'0'+parseInt(time/60):parseInt(time/60)}}:{{time%60<10?'0'+parseInt(time%60):parseInt(time%60)}}
                </div>
                <div class="btn">
                    <div @click="start(0)" :class="{backColor:currentColorIndex===0}">
                        <van-icon size="25" color="#000" name="play-circle-o"/>
                        <br/>
                        开始
                    </div>
                    <div @click="pause(1)" :class="{backColor:currentColorIndex===1}">
                        <van-icon size="25" color="#000" name="pause-circle-o"/>
                        <br/>
                        暂停
                    </div>
                    <div @click="reset(2)" :class="{backColor:currentColorIndex===2}">
                        <van-icon size="25" color="#000" name="replay"/>
                        <br/>
                        重置
                    </div>
                    <div @click="end(3)" :class="{backColor:currentColorIndex===3}">
                        <van-icon size="25" color="#000" name="close"/>
                        <br/>
                        结束
                    </div>
                </div>
            </div>
            <div v-if="show" class="datetime">
                <van-datetime-picker
                        type="time"
                        title="选择分秒"
                        visible-item-count="3"
                        @confirm="confirm"
                        max-hour="60"
                />
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentTimingIndex: 0,
                time: 0,
                timer: null,
                endTime: 0,
                show: true,
                currentColorIndex: null,
                PositiveTimemin: '00',
                PositiveTimesec: '00',
                PositiveTime: 0
            }
        },
        methods: {
            confirm(values) {
                if (values) {
                    if (parseInt(values.split(':')[0]) > 0) {
                        this.time = parseInt(values.split(':')[0]) * 60 + parseInt(values.split(':')[1])
                    } else {
                        this.time = parseInt(values.split(':')[1]);
                    }
                    this.endTime = this.time;
                    this.show = false;
                }
            },
            Timing(i) {
                this.currentTimingIndex = i;
                if (this.timer && this.currentTimingIndex !== 1) {
                    clearInterval(this.timer);
                }
                if (i === 1) {
                    this.show = true;
                }
            },
            PositiveTimingStart() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.timer = setInterval(() => {
                    this.PositiveTime++;
                    this.PositiveTimemin = parseInt(this.PositiveTime / 60) < 10 ? '0' + parseInt(this.PositiveTime / 60) : parseInt(this.PositiveTime / 60);
                    this.PositiveTimesec = this.PositiveTime % 60 < 10 ? '0' + this.PositiveTime % 60 : this.PositiveTime % 60;
                }, 1000);

            },
            PositiveTimingPause() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            },
            PositiveTimingReset() {
                this.PositiveTime = 0;
                this.PositiveTimemin = '00';
                this.PositiveTimesec = '00';
                if (this.timer) {
                    clearInterval(this.timer);
                }
            },
            start() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.timer = setInterval(() => {
                    if (this.time > 0) {
                        this.time--;
                    } else {
                        clearInterval(this.timer);
                    }
                }, 1000);
                this.currentColorIndex = 0;
                setTimeout(() => {
                    this.currentColorIndex = null
                }, 200)
            },
            pause() {
                this.currentColorIndex = 1;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                setTimeout(() => {
                    this.currentColorIndex = null
                }, 200)
            },
            reset() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.currentColorIndex = 2;
                this.time = this.endTime;
                setTimeout(() => {
                    this.currentColorIndex = null
                }, 200)

            },
            end() {
                this.currentColorIndex = 3;
                this.show = !this.show;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                setTimeout(() => {
                    this.currentColorIndex = null
                }, 200)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;

        img {
            width: 30px;
        }

        ul {
            overflow: hidden;
            font-size: 14px;
            font-weight: 500;
            border: 2px solid #000;
            border-radius: 20px;

            li {
                float: left;
                padding: 6px 10px;
                border-right: 2px solid #000;

                &:last-child {
                    border-right: none;
                }
            }

            .active {
                background-color: #000;
                color: #fff;
            }
        }
    }

    .tomato_timing {
        display: flex;
        padding: 10px 0;
        justify-content: center;

        img {
            width: 30px;
        }

    }

    .chronography {
        display: flex;
        flex-direction: column;
        height: 80vh;
        justify-content: space-around;
        align-items: center;

        .count-down {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            font-size: 40px;

            .count-time {
                border: 3px solid #000;
                border-radius: 50%;
                width: 60vw;
                height: 60vw;
                font-size: 40px;
                text-align: center;
                line-height: 60vw;

            }

            .btn {
                display: flex;
                font-size: 14px;
                text-align: center;

                div {
                    padding: 30px;
                    line-height: 25px;
                    color: #989898;
                }
            }

            .backColor {
                background-color: #f2f3f5;
            }
        }

        .datetime {
            overflow: hidden;
            border: 1px solid #000;
            border-radius: 10px;
            width: 60vw;
            height: 60vw;
        }
    }

    .PositiveTiming {
        display: flex;
        height: 80vh;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .PositiveTiming_Round {
            border: 3px solid #000;
            border-radius: 50%;
            width: 60vw;
            height: 60vw;
            font-size: 40px;
            text-align: center;
            line-height: 60vw;
        }

        .PositiveTiming_start {
            width: 100%;

            .btn {
                line-height: 25px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 14px;
                color: #9b9ba3;

                div {
                    padding: 20px;
                }
            }
        }
    }
</style>