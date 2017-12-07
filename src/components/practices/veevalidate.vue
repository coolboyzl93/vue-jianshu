<template>
  <div class="container">
    <!-- bootstrap recode -->
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <!-- 引入v-validate后，需要做这些事 在input中写入v-validate属性，设定，然后再绑定一个不同的样式，最后写入name的类型就OK了 -->
        <input v-validate="'required|email'" :class="{ 'alert': true, 'alert-danger': errors.first('email') }" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.{{errors.first('email')}}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">FPassword</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input"> Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Veevalidate',
    data () {
      return {
        msg: 'hello vee-validate!'
      }
    }
  }
</script>
<style scoped>

</style>
