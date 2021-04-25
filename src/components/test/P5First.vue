<template>
  <div>
    P5first

    <div class="container border">
   <div class="d-flex justify-content-center" id="p5Canvas"></div>
 </div>

  </div>
</template>

<script>
export default {
name: 'P5First',
mounted() {
  //do something after mounting vue instance

  var radar = require('@/js/Radar.js')
const P5 = require('p5')
new P5(radar.main)
}
}
</script>

<style>

</style>
