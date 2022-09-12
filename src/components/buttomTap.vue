<!-- <template>
  <div>
    <div class="banxin">
      <ul class="bottom-bar">
        <li>
          <i
            class="iconfont icon-icon_shujianor"
            @click="$router.push('/bookshelf')"
         ></i>
         <p>书架</p>
       </li>
        <li>
          <i
            class="iconfont icon-icon_shuchengnor"
            @click="$router.push('/bookshop')"
          ></i>
          <p>书城</p>
        </li>
        <li>
          <i
            class="iconfont icon-fenlei"
            @click="$router.push('/bookcategory')"
          ></i>
         <p>分类</p>
        </li>
        <li>
          <i class="iconfont icon-wode" @click="$router.push('/person')"></i>
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PipiButtomTap",
  data() {
    return {};
  },
  methods: {
    /* 点击底部栏时，图标变色 */
  },
};
</script>

<style lang="less" scoped>
.iconfont:hover {
  color: orangered;
}
.banxin {
  width: 100%;
  height: 3.5rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  .bottom-bar {
    width: 95%;
    margin: 0 auto;

    justify-content: space-between;
    display: flex;
    li {
      flex: 1;
     line-height: 1.5rem;
     margin-top: 0.2rem;
    }
  }
}
</style>
 -->
