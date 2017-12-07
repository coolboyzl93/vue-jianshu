<template>
  <div class="container axios-box">
    <div class="axios-demo">

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Axios',
    data () {
      return {

      }
    },
    methods: {
      getAxios () {
        axios.get('/user', {
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

  }
</script>

<style scoped>
  .axios-box {
    border: 1px dotted #3388FF;
  }
</style>