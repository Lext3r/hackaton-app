<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    if(!localStorage.getItem('current_user_id')){
      this.$router.push({name: 'Login'});
    } else {
      this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/user').then(({data: users}) => {
          this.$store.commit('login', users.filter(el => el.id === localStorage.getItem('current_user_id'))[0]);
      })
      this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task').then(({data: tasks}) => {
              this.$store.commit('change_tasks', tasks);
          })
      }
  }
}
</script>
<style lang="scss">
@import './assets/styles/normalize.css';
@import "vue-select/src/scss/vue-select.scss";
* {
  box-sizing: border-box;
}
.page__title {
  font-size: 22px;
  margin-bottom: 18px;
  font-weight: bold;
}
.form-input {
    padding: 16px 16px;
    border-top: 1px solid #8F9399;
    text-align: left;
    &__label {
        display: inline-block;
        margin-bottom: 4px;
    }
    input[type=text], textarea {
    display: flex;
    width: 100%;
    padding: 6px;
    background: none;
    border: 1px solid rgba(60, 60, 60, 0.26);
    border-radius: 4px;
    white-space: normal;
    resize: none;
    }
}
.form-buttons {
    display: flex;
    padding: 16px;
}
.text-grey {
  color: #8F9399;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  min-height: 100vh;
}

.container {
  border-radius: 25px;
  width: 100%;
  max-width: 480px;
  height:720px;
  overflow: auto;
  margin: 0 auto;
  padding: 16px 0;
  border: 1px solid #999999;
}
.wrapper{
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
}

.back_arrow {
    position: absolute;
    top: 0;
    left: 16px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
}
.button {
  width: 100%;;
  padding: 12px 0;
  text-align: center;
  border-radius: 30px;
  background-color: #1F2229;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
  border: 2px solid transparent;
  color: #fff;
  outline: none;
  &.cancel {
    background-color: #F0F1F2;
    color: black;
    &:hover {
      cursor: pointer;
      border: 2px solid black;
    }
  }
  &.submit {
    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
  &.contour {
    background-color: #fff;
    color: black;
    border: 2px solid black;
    &:hover {
      cursor: pointer;
      background-color: #F0F1F2;
    }
  }
  &:last-child{
    margin-right: 0;
  }
}
</style>
