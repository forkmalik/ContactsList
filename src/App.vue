<template>
  <div id="app">
    <contacts-list></contacts-list>
  </div>
</template>

<script>
import ContactsList from "./components/Contacts/ContactsList"

export default {
  name: 'app',
  data () {
    return {
    } 
  },
  components: {
    ContactsList
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
