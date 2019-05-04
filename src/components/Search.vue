<template>
  <div>
    <Input clearable enter-button="ok"  placeholder="Enter something..." class="search" />
    <Button icon="ios-search" type="primary" @click="search">Search</Button>
    <Button @click="cancel">Cancel</Button>
    <div v-if="showTag">
      <Divider orientation="left">hot place</Divider>
      <Button class="tag" size="small" :key="key" v-for="(tag,key) in tags" @click="showInMap(tag.id)">{{tag.name}}</Button>
    </div>
    <Table :columns="columns1" :data="data1" :show-header="false" v-if="showTable"></Table>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      showTag: true,
      showTable: false,
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
    search () {
      this.showTag = false
      this.showTable = true
    },
    cancel () {
      this.$router.push('/')
    },
    showInMap (id) {
      debugger
      this.curPoi.id = id
      this.curPoi.highLight = true
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.search{
  width: calc(100% - 170px);
}
.tag{
  margin-left: 3px;
  border: 1px solid #e8eaec;
  background: #f7f7f7
}
</style>
