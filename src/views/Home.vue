<template>
  <div class="home">
    <P5Trois />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <P5Deux />
    <P5First />
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    'P5First': () => import('@/components/test/P5First'),
    'P5Deux': () => import('@/components/test/P5Deux'),
    'P5Trois': () => import('@/components/test/P5Trois'),
  },
}
</script>
