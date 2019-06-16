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
            <MenuItem name="more" class="menu-item" to="/main/more">
              <Icon type="ios-more" />
              More
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content>
        <div id="map">
          <div class="map-ctl-bottom-left">
            <div class="map-ctl-locate">
              <Button shape="circle" icon="md-locate" @click="locate"></Button>
            </div>
          </div>
          <div class="map-ctl-bottom-right">
            <div class="map-ctl-search">
              <Button shape="circle" icon="ios-search" @click="search"></Button>
            </div>
          </div>
          <div class="map-btn-bottom">
            <!--icon-shangbaowenti-->
            <Button type="text" size="large" custom-icon="iconfont icon-shangbaowenti" @click="report">Report</Button>
            <Icon size="large" custom="i-icon iconfont icon-anjianfengexian" />
            <Button type="text" size="large" custom-icon="iconfont icon-lujingfenxi" @click="showTourRoute">Route</Button>
          </div>
          <div class="map-route-view-bottom">
            <router-view></router-view>
          </div>
        </div>
      </Content>
      <!--<Footer>-->
      <!--<router-link to="/search">search</router-link>-->
      <!--<router-link to="/details">details</router-link>-->
      <!--</Footer>-->
    </Layout>
    <div ref="mapPopup" id="map-popup" class="popup-content-container">
      <div class="popup-title">笨娜娜</div>
      <div class="popup-content">
        <Icon type="logo-apple" />
        <Icon type="md-aperture" />
      </div>
    </div>
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
    if (this.curPoi.showRoute) {
      console.log('showRoute')
    }
    if (this.curPoi.highLight) {
      console.log('highLight')
    }
    console.log('mounted')
  },
  created () {
    console.log('created')
  },
  methods: {
    init () {
      this.initMap()
    },
    initMap () {
      var me = this
      // 0.也可以使用这种方式引入mapbox
      // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      // 1.create a map
      mapboxgl.accessToken = 'pk.eyJ1IjoidHV0dXRvdG8iLCJhIjoiY2l3MnhmNWs1MDFhczJ5bXcxZnBoYnpieCJ9.4FSqySqEd1cYPaxK5ltf1w'
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/outdoors-v10', // stylesheet location
        // style: 'mapbox://styles/mapbox/navigation-guidance-night-v2',
        center: [116.1, 40.1], // starting position [lng, lat]
        zoom: 8, // starting zoom
        maxZoom: 15
      })
      // 2.add control
      map.addControl(new mapboxgl.NavigationControl())
      // map.addControl(new mapboxgl.GeolocateControl({
      //   positionOptions: {
      //     enableHighAccuracy: true
      //   },
      //   trackUserLocation: true
      // }))
      // 3.set map bound
      // an array of LngLatLike objects in [sw, ne] order
      var bounds = new mapboxgl.LngLatBounds(
        new mapboxgl.LngLat(115, 39),
        new mapboxgl.LngLat(118, 41)
      )
      map.setMaxBounds(bounds)
      // 4.linster click event
      map.on('click', function (event) {
        me.$router.push('/')
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
      var popup2 = new mapboxgl.Popup({
        className: 'my-class',
        anchor: 'right',
        offset: -0,
        closeButton: false
      }).setDOMContent(this.$refs.mapPopup) // dom
      new mapboxgl.Marker(el)
        .setPopup(popup2)
        .setLngLat([116.083, 40.063])
        .addTo(map)
    },
    more () {
      console.log('show more type of poi')
    },
    locate () {
      console.log('locate the user')
    },
    search () {
      this.$router.push('/search')
    },
    report () {
      this.$router.push('/report')
    },
    showTourRoute () {
      this.$router.push('/main/tourroutedetails')
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.header{
  padding: 0 10px;
}
#map{
   width: 100%;
   min-height: 670px;
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
.map-ctl-bottom-left,.map-ctl-bottom-right{
  bottom: 100px;
  position: absolute;
  z-index: 2;
}
.map-ctl-bottom-left{
  left: 0;
}
.map-ctl-bottom-right{
  right: 0;
}
.map-ctl-locate,.map-ctl-search{
  width: auto;
  margin: 10px;
  position: relative;
}
.map-btn-bottom {
  height: 50px;
  line-height: 50px;
  width: 90%;
  bottom: 30px;
  position: absolute;
  z-index: 2;
  margin: 0 5%;
  background-color: #f8f8f9;
  border: 1px solid #dcdee2;
  border-radius: 5px;
  text-align: center;
}
.map-route-view-bottom{
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 3;
}
.popup-content-container{
  background-color: #17233d;
  color: #fff;
  font-size: 1rem;
  padding: 5px;
}

.mapboxgl-popup-content {
padding: 0px;
}
</style>
