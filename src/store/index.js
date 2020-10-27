import Vue from 'vue'
import Vuex from 'vuex'
import th from "element-ui/src/locale/lang/th";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        getImg: '领取',
        getImgBgColor: '#ff005e',
        getHabit: [],
        ness: [],
        cIndex: null,
        show: false,
        index: -1,
        //签到的习惯
        reception: []
    },
    getters: {
        getRemainTime(state) {
            let arr = [];
            state.getHabit.map(item => {
                arr.push(item.time);
            })
            return arr;
        }
    },
    mutations: {
        changeIndex(state, i) {
            state.cIndex = i;
        },
        changeGetImg(state) {
            state.getImg = "已领取";
            state.getImgBgColor = "#34201d";
        },
        changGetHabit(state, obj) {
            state.getHabit.push({
                ...obj
            });
            // window.localStorage.setItem('remaintime', JSON.stringify(state.getHabit))
        },
        removeHabit(state, i) {
            state.getHabit = state.getHabit.filter((x, index) => index != i);
            state.reception = state.reception.filter((x, index) => index != i)
            // window.localStorage.setItem('remaintime', JSON.stringify(state.getHabit))
        },
        changeTexGetHabit(state, i) {
            this.commit('changeReception', i);
            if (i.length > 2) {
                state.getHabit = state.getHabit.map((x, index) => {
                    if (index === i[0]) {
                        return i[1];
                    } else {
                        return x;
                    }
                });
                state.reception.forEach((h, y) => {
                    if (h.id === i[1].id) {
                        let a = i[1];
                        let b = state.reception[y];
                        Vue.set(b, 'color', a.color);
                        Vue.set(b, 'name', a.name);
                        Vue.set(b, 'img', a.img);
                        Vue.set(b, 'checkOnce', a.checkOnce);
                    }
                });

            } else if (i[1] === 'cut') {
                state.reception.forEach((h, y) => {
                    let a = state.getHabit[i[0]];
                    let b = state.reception[y];
                    if (h.id === state.getHabit[i[0]].id) {
                        if (b.when === '每日') {
                            Vue.set(a, 'checkOnce', 0);
                            Vue.set(b, 'checkOnce', 0);
                        } else {
                            if (b.checkOnce <= 0) {
                                Vue.set(a, 'checkOnce', 0);
                                Vue.set(b, 'checkOnce', 0);
                            } else {
                                Vue.set(a, 'checkOnce', Math.floor(a.checkOnce - 0.5));
                                Vue.set(b, 'checkOnce', a.checkOnce);
                            }
                        }
                        Vue.set(b, 'color', a.color);
                        Vue.set(b, 'name', a.name);
                        Vue.set(b, 'img', a.img);
                    }
                })
            } else if (typeof i === "number") {
                state.reception.forEach((h, y) => {
                    let a = state.getHabit[i];
                    let b = state.reception[y];
                    if (h.id === state.getHabit[i].id) {
                        if (a.when === '每日') {
                            Vue.set(a, 'checkOnce', 1);
                            Vue.set(b, 'checkOnce', 1);
                        } else if (a.when === '每周') {
                            if (b.checkOnce > 6 || b.checkOnce === 7) {
                                Vue.set(a, 'checkOnce', 7);
                                Vue.set(b, 'checkOnce', 7);
                            } else {
                                Vue.set(a, 'checkOnce', Math.ceil(a.checkOnce + 0.5));

                                Vue.set(b, 'checkOnce', a.checkOnce);
                            }
                        } else if (a.when === '每月') {
                            if (b.checkOnce > 29 || b.checkOnce === 31) {
                                Vue.set(a, 'checkOnce', 31);
                                Vue.set(b, 'checkOnce', 31);
                            } else {
                                Vue.set(a, 'checkOnce', Math.ceil(a.checkOnce + 0.5));
                                Vue.set(b, 'checkOnce', a.checkOnce);
                            }
                        }
                        Vue.set(b, 'color', a.color);
                        Vue.set(b, 'name', a.name);
                        Vue.set(b, 'img', a.img);
                    }
                })
            }
        },
        changeNess(state, text) {
            state.ness.push({
                text
            });
        },
        removeNess(state, index) {
            state.ness = state.ness.filter((item, i) => i !== index)
        },
        modifyNess({ness}, obj) {
            let {text} = ness[obj.i];
            Vue.set(text, 'val', obj.t);
        },
        toogleShow(state, i) {
            if (i === undefined) {
                state.index = -1;
            }
            if (state.index === -1 || state.index === undefined) {
                state.show = !state.show;
            }
            state.index = i;
        },
        addReception(state, obj) {
            state.reception.push(obj);
            let o = {};
            state.reception = state.reception.reduce(function (item, next) {
                o[next.id] ? '' : o[next.id] = true && item.push(next);
                return item;
            }, []);
        },
        changeReception(state, i) {
            if ((state.reception.length > 0) && typeof i[1] === 'object') {
                state.getHabit = state.getHabit.map((x, y) => {
                    if (y === i[0]) {
                        return i[1]
                    } else {
                        return x
                    }
                });
                state.reception = state.reception.map((h) => {
                    if (h.id === state.getHabit[i[0]].id) {
                        return {
                            ...h,
                            when: i[1].when
                        }
                    } else {
                        return h;
                    }
                });
            }
        }
    },
    actions: {},
    modules: {}
})
