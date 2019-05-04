<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="md-more"></Icon>
        More Type
      </p>
      <Button class="tag" size="small" :key="key" v-for="(tag,key) in tags">{{tag.name}}</Button>
      <br><br>
      <Button class="tag" size="small" :key="key+5" v-for="(tag,key) in tags">{{tag.name}}</Button>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'More',
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
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.tag{
  margin-left: 3px;
  border: 1px solid #e8eaec;
  background: #f7f7f7
}
</style>
