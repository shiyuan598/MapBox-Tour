<template>
  <div>
    <!--<Input search enter-button placeholder="Enter something..." />-->
    <Input clearable enter-button="ok"  placeholder="Enter something..." class="search" />
    <Button icon="ios-search" type="primary">Search</Button>
    <Button @click="cancel">Cancel</Button>
    <Divider orientation="left">hot place</Divider>
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag>标签三</Tag>
    <Tag>标签四</Tag>
    <Table :columns="columns1" :data="data1" :show-header="false" v-show="false"></Table>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        }
        // {
        //   title: 'Age',
        //   key: 'age'
        // },
        // {
        //   title: 'Address',
        //   key: 'address'
        // }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
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
.search{
  width: calc(100% - 170px);
}
</style>
