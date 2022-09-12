<template>
    <div class="head">
        <div class="ban">
            <i class="left" @click="$router.go(-1)">&lt;</i>
            <i class="iconfont icon-fenxiang"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PipiDeaTop',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.head{
    height: 36px;
    border-bottom: 1px solid #ccc;
    position: sticky;
    line-height: 36px;
    top: 0;
    z-index: 2;
    background-color: #fff;
    font-weight: 700;
}
.head .left{
    float: left;
    font-size: 26px;
    font-family: serif;
    color: #000;
}
.head .iconfont{
    float: right;
    color: #000;

}
</style>