<template>
  <div id="app">
    <AppNavBar/>
    <CurrencyConverter />
    <AppFooter/>
  </div>
</template>

<script>
import AppNavBar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue';
import CurrencyConverter from './components/CurrencyConverter.vue';
export default {
  components: {
    AppNavBar,
    CurrencyConverter,
    AppFooter
},
};
</script>