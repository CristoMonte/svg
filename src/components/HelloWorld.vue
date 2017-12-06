<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <!-- <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangrikui"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tubiaozhizuomoban"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weibiaoti2"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aoteman"></use>
      </svg>
    </div> -->
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#cat"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#lion"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#monkey"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#mouse"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#whale"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#emoji"></use>
      </svg>
    </div>
    <div class="icon__wrapper">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#house"></use>
      </svg>
    </div>
  </div>
</template>

<script>
// import '../icons/cat.svg'
// import '../icons/lion.svg'
// import '../icons/whale.svg'
// import '../icons/monkey.svg'
// import '../icons/mouse.svg'
import '../icons'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon__wrapper {
  color: gray;
  height: 80px;
  width: 80px;
}
</style>
<style>
.icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-family: iconfont;
}
</style>

