<template>
    <div class="box">
        <div class="header">
            <div class="left">
                <img @click="back" src="../assets/images/ic_black_return.png"/>
                <span>随记</span>
            </div>
            <div @click="getText" class="save">保存</div>
        </div>
        <quill-editor @change="aa" :value="value" :options="editorOption" @input="text"/>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import * as Quill from 'quill'

    let fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif'];
    let Font = Quill.import('formats/font');
    Font.whitelist = fonts;
    Quill.register(Font, true);

    export default {
        props: ['show'],
        data() {
            return {
                value: null,
                year: new Date().getFullYear(),
                hour: new Date().getHours(),
                minutes: new Date().getMinutes(),
                month: new Date().getMonth() + 1,
                week: new Date().getDay(),
                day: new Date().getUTCDate(),
                val: null,
                ischange: null,
                editorOption: {
                    placeholder: '请输入你需要记下的事情',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['image', 'video'],
                            [{'color': []}, {'background': []}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'font': fonts}],
                            [{'align': []}],
                        ]
                    }
                }
            }
        },
        computed: {
            ...mapState(['ness', 'cIndex'])
        },
        updated: function () {
            // 不能保证所有子组件更新完毕
            this.year = new Date().getFullYear();
            this.hour = new Date().getHours();
            this.minutes = new Date().getMinutes();
            this.month = new Date().getMonth() + 1;
            this.week = new Date().getDay();
            this.day = new Date().getUTCDate();
            if (this.cIndex !== null) {
                this.value = this.ness[this.cIndex].text.val;
            }
            this.value = " "
        },
        created() {
            let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
            let arr = String(this.year).split("");
            let str = '';
            for (let i = 0; i < arr.length; i++) {
                str += changeNum[parseInt(arr[i])];
            }
            this.year = str;
            if (this.cIndex !== null) {
                this.value = this.ness[this.cIndex].text.val;
            } else {
                this.value = " "
            }
        },
        methods: {
            aa() {
                this.ischange = 1;
            },
            text(v) {
                this.val = v;
            },
            getText() {
                if (this.ischange !== null) {
                    if (this.cIndex === null) {
                        this.$store.commit('changeNess', {
                            val: this.val,
                            time: [this.year, this.month, this.day, this.week, this.hour, this.minutes]
                        });
                    } else {
                        this.$store.commit('modifyNess', {i: this.cIndex, t: this.val});
                    }
                    this.value = " ";
                }

                this.back();
            },
            back() {
                this.$emit("call");
            },
            ...mapMutations(['changeNess', 'modifyNess', 'changeIndex'])
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            height: 8vh;

            .left {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 15vw;
                font-size: 16px;
                font-weight: 700;

                img {
                    width: 18px;
                }
            }

            .save {
                padding: 10px;
                border-radius: 8px;
                font-size: 14px;
                background-color: #f6c863;
            }

        }

    }

    /deep/ .ql-toolbar {
        position: absolute;
        bottom: 0;
        height: 10vh;
    }

    /deep/ .ql-editor {
        height: 82vh;
        outline: none;
    }


    /deep/ .ql-container.ql-snow, .ql-toolbar.ql-snow {
        border: none;
    }

    /deep/ .ql-picker-options {
        transform: translateY(-111%);
        z-index: 2;
    }

    /deep/ #ql-picker-options-4 {
        transform: translateY(-120%);
        z-index: 2;
    }

    /deep/ .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        outline: none;
    }


</style>