<template>
    <div class="container">
      <Divider orientation="left" class="divider">选择问题</Divider>
      <Button class="tag" shape="circle" :key="key" v-for="(tag,key) in tags">{{tag.name}}</Button>
      <br><br>
      <Button class="tag" shape="circle" :key="key+5" v-for="(tag,key) in tags">{{tag.name}}</Button>
      <Divider orientation="left" class="divider">选择景点</Divider>
      <Select v-model="model1">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Divider orientation="left" class="divider">问题描述</Divider>
      <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
      <div class="btn-container">
        <Button type="success" class="btn" long>Submit</Button>
        <Button type="error" class="btn" long @click="cancel">Cancel</Button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      tags: [
        {
          name: 'tag1',
          id: '01'
        },
        {
          name: 'tag2',
          id: '02'
        },
        {
          name: 'tag3',
          id: '03'
        }
      ],
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model1: '',
      value6: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container{
  padding: 5px;
}
.divider{
  margin-top: 25px;
}
.tag{
  height: 30px;
  width: 60px;
  margin-right: 5px;
}
.btn-container{
  text-align: center;
}
.btn{
  width: 80%;
  margin-top: 15px;
}
</style>
