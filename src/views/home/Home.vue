<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultiData} from "network/home";
    import {Swiper, SwiperItem} from "components/common/swiper/index";
    export default {
        name: "home",
        components:{
          NavBar,
          Swiper,
          SwiperItem

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
