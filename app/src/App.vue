<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import TestChart from './components/TestChart.vue'
const aray = ref('')
const link = 'https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=100'
async function s() {
  let a = await fetch(link)
  let b = await a.json()
  aray.value = b
  console.log(aray)
}
onMounted(() => {
  s()
})
function a() {
  aray.value.forEach((e) => {
    e.date_of_census = e.date_of_census.slice(0, 10)
  })
}
</script>

<template>
  <button @click="(a(), console.log(aray))">Click</button>
  <TestChart :data="aray"></TestChart>
</template>

<style scoped></style>

<!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

<RouterView /> -->

<!-- /* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */ -->
