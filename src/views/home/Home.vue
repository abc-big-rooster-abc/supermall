<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper class="home_1" :cbanners="banners"></home-swiper>
    <home-recommend :cproducts="products"></home-recommend>
    <home-feature-view/>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
        <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import {getHomeMultiData} from "network/home";
    import HomeRecommend from "./childComps/HomeRecommend";
    import HomeFeatureView from "./childComps/HomeFeatureView";

    export default {
        name: "home",
        components:{
          NavBar,
          HomeSwiper,
          HomeRecommend,
          HomeFeatureView


        },
        data(){
          return{
            banners: [],
            products: [],}
        },
        // 请求多个数据
        created(){
         this.getHomeData()
        },
        methods:{
            getHomeData() {
                getHomeMultiData().then(res => {
                  console.log("res.data:",res.data)
                    console.log("res.data.banner:",res.data.banner);
                    console.log("res.data.recommend",res.data.recommend);
                    this.banners = res.data.banner.list;
                    this.products = res.data.recommend.list;
                })
            },
        }

    }
</script>

<style scoped>
  #home{
    background-color: var(--color-tint);
    color:white;
    padding-top: 44px;
  
  }
  .home-nav-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    
  }

</style>
