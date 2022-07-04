<template>
  <div class="tab-control clear-fix" >
    <!--因为需求上看这里只是字不一样所以并没有使用插槽-->
    
    <div v-for="(item, index) in ctitles"
         :key="index"
         class="tab-control-item"
         @click="tabItemClick(index)"
         > 
        <!-- <span :class="{active:index}">{{item}}</span> -->
         <span :class="{active:index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      ctitles:{
        type:Array,
        default() {
            return []
        }
      }
    },
    data() {
      return {
          currentIndex:0
      }
    },
    methods:{
      
      tabItemClick(index) {
        console.log("ssss",this.ctitles),
        this.currentIndex = index
          this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    z-index: 100;
    display: flex;
    text-align: center;
    /* line-height: 14px; */
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .tab-control-item{
    flex: 1;
    z-index: 10;
  }

  .tab-control-item span {
    padding:  5px;
    color: black;
  }

  .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);

  }

</style>
