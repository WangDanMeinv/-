<template>
   <div class="read ban">
            <div class="head">
                <h1>阅读榜</h1>
                <div class="right">
                    <span>查看更多</span>
                    <i>></i>
                </div>
            </div>
            <ul>
                <li v-for="item in reads" :key="item.id"><img :src="item.url" alt=""><span>{{item.title}}</span></li>
            </ul>
        </div>
</template>

<script>
export default {
    name: 'PipiRead',

    data() {
        return {
            
        };
    },
    props:['reads'],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.read{
    border-bottom: 1px solid #ccc;
}
.read .head{
    position: relative;
    height: 50px;
    line-height: 50px;
}
.read .head h1{
    position: absolute;
    font-size: 24px;
    font-weight: 700;
}
.read .head .right{
    font-size: 14px;
    color: #888;
    position: absolute;
    right: 0;
}
.read ul{
    display: flex;
    justify-content: space-around;
}
.read ul li{
    width: 32%;
}
.read ul li img{
    width: 100%;
    display: block;
}
.read ul li span{
    display: block;
    height: 40px;
    margin-top: 15px;
}
</style>