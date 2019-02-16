<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    data() {
      return {
        msg: 'Info',
        location: [
          {id: 1, name: 'Site1', country: 'USA', metro: 'San Jose', market: 'US', status: 'Active'},
          {id: 2, name: 'Site2', country: 'USA', metro: 'San Mateo', market: 'US', status: 'Active'},
          {id: 3, name: 'Site3', country: 'USA', metro: 'San Rafael', market: 'US', status: 'Active'}],
      };
    },
  };
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
</style>
