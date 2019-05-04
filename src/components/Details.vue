<template>
  <div>
    <div class="head-container">
      <div class="left">
        <Button shape="circle" icon="ios-download-outline" type="primary" class="btn-control"></Button>
      </div>
      <div class="right">
        <h2>{{name}}</h2>
        <br>
        <Button shape="circle">
          {{catagory}}
        </Button>
        <br><br>
        <Button type="text" class="btn-info">Amet beatae consequuntur dicta</Button>
      </div>
    </div>
    <div class="bottom">
      <Slider v-model="value1"></Slider>
    </div>
    <div class="layout">
      <Layout>
        <Content>
          <div class="info-text">
            <h3>{{name}}</h3>
            {{desc}}
          </div>
        </Content>
        <Footer>
          <Button type="success" long @click="navigate">Navigate</Button>
          <br><br>
          <Button type="error" long @click="cancel">Cancel</Button>
        </Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      value1: 25,
      id: this.curPoi.id,
      name: this.curPoi.name,
      catagory: this.curPoi.catagory,
      desc: this.curPoi.desc,
      lng: this.curPoi.lng,
      lat: this.curPoi.lat,
      img: this.curPoi.img,
      audio: this.curPoi.audio,
      showRoute: this.curPoi.showRoute
    }
  },
  methods: {
    navigate () {
      this.curPoi.showRoute = true
      this.$router.push('/')
    },
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.head-container{
  padding: 5px;
}
.left{
  width: 120px;
  height: 120px;
  display: inline-block;
  background-image: url('../../static/img/info2.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  line-height: 120px;
  border-radius: 50%;
}
.right{
  width: calc(100% - 120px);
  height: 120px;
  float: right;
  padding-left: 15px;
}
.info-text{
  font-size: 14px;
  padding: 5px 10px;
  background-color: #fff;
  min-height: 240px;
  border-top: 15px solid #e8eacc;
}
.btn-info{
  color: #ed4014;
}
</style>
