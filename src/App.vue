<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet">
  <router-view></router-view>
</template>

<style>
  html {
    font-size: 14px;
  }

  body {
    background: #f6f6f6;
    line-height: 1.625;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
      color: inherit;
      text-decoration: none;
      transition: color .3s;
  }

  @media only screen and (min-width: 750px) {
      html {
          font-size: 16px;
      }
  }
</style>
