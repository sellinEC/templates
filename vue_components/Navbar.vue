Animated navbar from brad Traversys 50 projects in 50 days converted to vue component.

<template>
  <nav class="sticky" v-bind:class="{ active: isActive }">
    <ul>
      <li><router-link class="nav-link" to="#">Item1</router-link></li>
      <li><router-link class="nav-link" to="#">Item2</router-link></li>
      <li><router-link class="nav-link" to="#">Item3</router-link></li>
      <li><router-link class="nav-link" to="#">Item4</router-link></li>
    </ul>
    <button class="icon" id="toggle" @click="toggle">
      <div class="line line1"></div>
      <div class="line line2"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
/* Navbar position */
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  left: 10px;
}

nav {
  background-color: #fff;
  padding: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: width 0.6s linear;
  overflow: hidden;
}

nav.active {
  width: 350px;
}

nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 0;
  transition: width 0.6s linear;
}
nav.active ul {
  width: 100%;
}

nav ul li {
  transform: rotate(0deg);
  opacity: 0;
  transition: transform 0.6s linear, opacity 0.6s linear;
}

nav.active ul li {
  opacity: 1;
  transform: rotateY(360deg);
}

nav ul a {
  position: relative;
  color: #000;
  text-decoration: none;
  margin: 0 10px;
}

.icon {
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  height: 30px;
  width: 30px;
}

icon:focus {
  outline: 0;
}

.icon .line {
  background-color: #5290f9;
  height: 2px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
}

.icon .line2 {
  top: auto;
  bottom: 10px;
}

nav.active .icon .line1 {
  transform: rotate(-765deg) translateY(5.5px);
}
nav.active .icon .line2 {
  transform: rotate(765deg) translateY(-5.5px);
}
</style>