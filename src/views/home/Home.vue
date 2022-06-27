<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultiData} from "network/home"
    export default {
        name: "home",
        components:{
          NavBar,
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
                    console.log(res.data.banner);
                    console.log(res.data.recommend);
                    this.banners = res.data.banners
                    this.products = res.data.recommend
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
