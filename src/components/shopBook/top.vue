<template>
        <div class="top">
        <div class="ban">
            <div class="left">
                <span :class="{wire:isCss}" @click='nan'>男生</span>
                <span :class="{wire:!isCss}" @click='nv'>女生</span>
            </div>
            <i class="right iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PipiTop',

    data() {
        return {
            isCss:true,
        };
    },
    props: [],
    mounted() {
        
    },

    methods: {
        nan(){
            this.isCss=true;
            this.$router.push("/bookshop/nan")
        },
        nv(){
            this.isCss=false;
            this.$router.push("/bookshop/nv")
        }
    },
};
</script>

<style lang="css" scoped>
.top {
    padding-top:10px ;
    background-color: #fff;
    height: 35px;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
}
.top span{
    display: block;
    float: left;
    margin-right: 20px;
}
.top span.wire{
    border-bottom: 2px solid red;
    padding-bottom: 5px;
    font-weight: 700;
}
.top .left{
    float: left;
}
.top .right{
    float: right;
    font-weight: 700;
}
</style>