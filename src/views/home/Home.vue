<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import {getHomeMultiData} from "network/home";

    export default {
        name: "home",
        components:{
          NavBar,
          HomeSwiper

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

  }
</style>
