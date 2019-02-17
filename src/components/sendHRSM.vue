<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <el-form>
      <el-input
        placeholder="Enter your ropsten account address"
        v-model="input10"
        clearable>
      </el-input>
      <div>
        <br>
        <el-row>
          <el-button type="primary" plain @click="requestHRSM">Send me HRSM</el-button>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
  const axios = require('axios');
  export default {
    name: 'sendHRSM',
    data() {
      return {
        msg: 'Enter your ropsten account address\n',
        name: 'HRSM',
        input10: '',
      };
    },
    methods: {
      requestHRSM() {
        const url = 'https://83bdxwjho2.execute-api.us-east-1.amazonaws.com/default/faucetnow';
        console.log()
        const result = axios.post(url, JSON.stringify({
          address: this.input10,
        })).then(result=>console.log(result)).catch(e=>console.log(e)).finally(this.$router.push({path:'/sended'}));
      },
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
