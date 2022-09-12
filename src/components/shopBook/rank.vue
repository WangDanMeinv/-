<template>
    <div class="list">
            <ul>          
                <router-link :to="item.to" tag="li" v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="" >
                    <span>{{item.conten}}</span>
                </router-link>
                
            </ul>
        </div>
</template>

<script>
export default {
    name: 'PipiRank',

    data() {
        return {
            
        };
    },
    props:['list'],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.list ul {
    display: flex;
    justify-content:space-around;
    margin-top: 10px;
    border-bottom: 6px solid #eee;
}
.list ul li{
    width: 50px;
}
.list ul li img{
    width: 100%;
    display: block
}
.list ul li span{
    display: block;
    width: 48px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>