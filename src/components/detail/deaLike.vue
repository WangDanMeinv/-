<template>
    <div>
         <!-- 读者还在读的书 -->
    <div class="like">
      <div class="box"><span>本书读者还在读这些书</span></div>
      <ul>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊丹武帝尊丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
        <li><img src="@/assets/images/j2.jpg" alt=""><h3>丹武帝尊</h3></li>
      </ul>
      <div class="trade">
        <i class="iconfont icon-huanyihuan"></i>
        换一换
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'PipiDeaLike',

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
.like{
  height: 40px;
  color: #000;
  border-bottom: 1px solid #eee;
}
.like .box{
  line-height: 40px;
  font-size: 22px;
  font-weight: 700;
}
.like .box span{
  padding: 0 12px;
}
.like ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.like ul li{
  width: 22%;
  margin-top: 10px;
}
.like ul li img {
  width: 100%;
  display: block;
}
.like ul li h3{
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  margin-top:8px ;
}
.like .trade{
  height: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: rgb(240, 50, 50);
}
.like .trade i{
  color: rgb(240, 50, 50);
  font-size: 20px;
}

</style>