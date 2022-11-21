<script setup>
import HelloWorld from './components/HelloWorld.vue'

function callback(response) {
  console.log(response)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <GoogleLogin :callback="callback" popupType="TOKEN">
    <button>Login Using Google</button>
  </GoogleLogin>
  </main>
</template>
