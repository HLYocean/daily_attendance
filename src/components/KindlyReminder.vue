<template>
    <div class="box">
        <img style="height: 200px;" src="../assets/images/bell.png"/>
        <el-button @click.stop="toogle" class="btn" type="success" icon="el-icon-check" circle/>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['toogleShow']),
            toogle() {
                this.$store.commit('toogleShow');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background-color: rgba(#000, 0.8);
    }

</style>