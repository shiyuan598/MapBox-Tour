<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1" class="menu-item">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2" class="menu-item">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3" class="menu-item">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4" class="menu-item">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content>
        <div id="map">
        </div>
      </Content>
      <Footer>
      <router-link to="/search">search</router-link>
      <router-link to="/details">details</router-link>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import mapboxgl from 'mapbox-gl'
Vue.use(Router)

export default {
  name: 'Main',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initMap()
    },
    initMap () {
      // 0.也可以使用这种方式引入mapbox
      // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      // 1.create a map
      mapboxgl.accessToken = 'pk.eyJ1IjoidHV0dXRvdG8iLCJhIjoiY2l3MnhmNWs1MDFhczJ5bXcxZnBoYnpieCJ9.4FSqySqEd1cYPaxK5ltf1w'
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [116.1, 40.1], // starting position [lng, lat]
        zoom: 7, // starting zoom
        maxZoom: 15
      })
      // 2.add control
      map.addControl(new mapboxgl.NavigationControl())
      // 3.set map bound
      // an array of LngLatLike objects in [sw, ne] order
      var bounds = new mapboxgl.LngLatBounds(
        new mapboxgl.LngLat(115, 39),
        new mapboxgl.LngLat(118, 41)
      )
      map.setMaxBounds(bounds)
      // 4.linster click event
      map.on('click', function (event) {
        console.log(event.lngLat.lng.toFixed(3) + ', ' + event.lngLat.lat.toFixed(3))
      })
      // 5.add a maker to map
      var popup = new mapboxgl.Popup({
        className: 'my-class',
        anchor: 'right',
        offset: -0,
        closeButton: false
      })
        .setHTML('Hello World! --vue')
        .setMaxWidth('300px')

      new mapboxgl.Marker()
        .setPopup(popup)
        .setLngLat([116, 40])
        .addTo(map)
      // 6.add a custom icon marker
      var el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url("./static/img/map-marker.png")'
      el.style.backgroundRepeat = 'no-repeat'
      el.style.width = '20px'
      el.style.height = '20px'
      new mapboxgl.Marker(el)
        .setPopup(popup)
        .setLngLat([116.1, 40.1])
        .addTo(map)
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0 10px;
}
#map{
   width: 100%;
   height: 540px;
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.menu-item{
  padding: 0 5px;
}
</style>
