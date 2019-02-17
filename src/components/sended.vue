<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
  </div>
</template>

<script>
  export default {
    name: 'sendHRSM',
    data() {
      return {
        msg: 'HRSMs are sent automatically unless you mistype your address.',
        msg2: 'Please check Etherscan, thank you.',
        input10: '',
      };
    }
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
