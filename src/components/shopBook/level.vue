<template>
    <div class="recomIr ban">
    <ul>
        <li v-for="item in stand" :key="item.id">
            <img :src="item.url" alt=""><span>{{item.title}}</span>
            <h5>{{item.name}}</h5>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'PipiLevel',

    data() {
        return {
            
        };
    },
    props:['stand'],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.recomIr ul{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}
.recomIr ul li{
    width: 24vw;
}
.recomIr ul li img{
    width: 100%;
    display: block;
}
.recomIr ul li span{
    font-size: 18px;
    margin-top: 10px;
    display: block;
    height: 45px;
}
.recomIr ul li h5{
   margin-bottom: 20px;
    font-size: 12px;
    color: #888;
}
</style>