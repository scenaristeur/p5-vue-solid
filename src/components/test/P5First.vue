<template>
  <div>
    P5first

    <div class="message d-flex justify-content-center">
    message :   {{ message }}
    </div>

    <div class="container border">
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>



  </div>
</template>

<script>
var radar = require('@/js/Radar.js')
const P5 = require('p5')

export default {
  name: 'P5First',
  mounted() {
    //do something after mounting vue instance
    new P5(radar.main)
    radar.setDelegate(this.callbackOnP5);
  },
  data() {
  return {
    message: ""
  }
},
methods: {
  callbackOnP5: function(timeStr) {
    this.message = timeStr;
  }
}
}
</script>

<style>

</style>
