<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar> 
    <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPostion">
        <home-swiper  :cbanners="banners"></home-swiper> 
        <home-recommend :cproducts="products"></home-recommend>
        <home-feature-view/>
    
        <tab-control class="home-tab-control" :ctitles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :cgoods="showGoods"/>
    </scroller>

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
    import {getHomeMultiData,getGoodsData} from "network/home";
    import HomeRecommend from "./childComps/HomeRecommend";
    import HomeFeatureView from "./childComps/HomeFeatureView";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/good/GoodsList";
    import Scroller from "components/common/scroller/Scroller"

    export default {
        name: "home",
        components:{
          NavBar,
          HomeSwiper,
          HomeRecommend,
          HomeFeatureView,
          TabControl,
          GoodsList,
          Scroller


        },
        data(){
          return{
            banners: [],
            products: [],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShowBackTop: false
              
          }
        },
        // 请求多个数据
        computed: {
            showGoods() {
                console.log("list:",this.goods[this.currentType].list)
                return this.goods[this.currentType].list
            }
        },
        mounted(){
         this.getHomeData(),
         this.getHomeGoodsData('pop')
         this.getHomeGoodsData('new')
         this.getHomeGoodsData('sell')


        },
        methods:{           
            tabClick(index) {
                switch (index) {
                  case 0:
                      this.currentType = 'pop'
                      break
                  case 1:
                      this.currentType = 'new'
                      break
                  case 2:
                      this.currentType = 'sell'
                      break
              }
            },
            getHomeData() {
                getHomeMultiData().then(res => {
      
                    console.log("res.data.recommend",res.data.recommend);
                    this.banners = res.data.banner.list;
                    this.products = res.data.recommend.list;
                })
            },
            // 2.请求商品数据
            getHomeGoodsData(type) {
                let page = this.goods[type].page + 1
                getGoodsData(type, page).then(res => {
                    console.log("rews:",res)
                    this.goods[type].list.push(...res.data.list)
                    
                    this.goods[type].page = res.data.page
                })
            },
            backTopClick() {
                // 通过$refs拿到组件中的对象
                this.$refs.scroller.scrollTo(0, 0, 500)
            },
            getPostion(postion) {
                this.isShowBackTop = -postion.y > 300
            }

            
        }

    }
</script>

<style scoped>
  #home{
    background-color: var(--color-tint);
    color:white;
    padding-top: 44px;

    height: 100vh;
    position: relative;
  
  }

  .home-nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

  }
  .home-tab-control{
    position:sticky;
    top: 44px;
    z-index: 9;
  };

  .home-scroller{
    /* height:300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
