<template>
  <div>
    <div class="head-container">
      <div class="left">
        <Button shape="circle" icon="ios-download-outline" type="primary" class="btn-control"></Button>
      </div>
      <div class="right">
        <h2>Lorem ipsum dolor sit.</h2>
        <br>
        <Button shape="circle">
          Category
        </Button>
        <br><br>
        <Button type="text" class="btn-info">Amet beatae consequuntur dicta</Button>
      </div>
    </div>
    <div class="bottom">
      <Slider value="25"></Slider>
    </div>
    <div class="layout">
      <Layout>
        <Content>
          <div class="info-text">
            <h3>Lorem ipsum dolor sit amet</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae consequuntur dicta, eaque eos expedita illum iste non numquam perferendis placeat porro praesentium quam quasi reprehenderit sed temporibus, totam, voluptas.
          </div>
        </Content>
        <Footer>
          <Button type="success" long>SUBMIT</Button>
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
  methods: {
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
