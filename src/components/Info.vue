<template>
  <div class="hello">
    <p>Bitcoin Price Index</p>
    <el-table :data="info" style="width: 100%">
      <el-table-column prop="code" label="id" width="100"></el-table-column>
      <el-table-column prop="rate" label="name"></el-table-column>
      <el-table-column prop="description" label="name"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    name: 'Info',
    data() {
      return {
        info: null,
      };
    },
    mounted() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response.data.bpi));
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
