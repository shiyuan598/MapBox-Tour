<template>
  <div>
    <Collapse value="1" accordion>
      <Panel name="1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at beatae delectus deleniti dolores ducimus
      </Panel>
      <Panel name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
      </Panel>
      <Panel name="3">
        乔纳森·伊夫
        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
      </Panel>
    </Collapse>
    <Carousel v-model="current" loop>
      <CarouselItem>
        <div class="demo-carousel">1</div>
        <!--<div>-->
        <!--<Button shape="circle">1</Button><Icon type="ios-more" />-->
        <!--<Button shape="circle">2</Button><Icon type="ios-more" />-->
        <!--<Button shape="circle">3</Button><Icon type="ios-more" />-->
        <!--<Button shape="circle">25</Button><Icon type="ios-more" />-->
        <!--</div>-->
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'TourRouteDetails',
  data () {
    return {
      current: 1
    }
  }
}
</script>

<style scoped>

</style>
