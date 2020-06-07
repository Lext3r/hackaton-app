<template>
  <div class="login">
    <div class="login__logo"><img src="../assets/images/logo.png"/></div> 
    <div class="form-input">
        <span class="form-input__label">Логин:</span>
        <input type="text" v-model.trim="login" placeholder="Введите логин" maxlength="150" />
    </div>
    <div class="form-input">
        <span class="form-input__label">Пароль:</span>
        <input type="text" v-model.trim="password" placeholder="Введите пароль" maxlength="150" />
    </div>
    <div class="login__wrapper">
        <button class="button submit" @click="loginAttempt">Войти</button>
    </div>
    <div class="login__credits">
        <p>Роль: Житель</p>
        <p>Логин: citizen@test.ru</p>
        <p>Пароль: 1234</p>
    </div>
    <div class="login__credits">
        <p>Роль: Эксперт</p>
        <p>Логин: expert@test.ru</p>
        <p>Пароль: 1234</p>
    </div>
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'UserProfile',
  data(){
      return {
          login: '',
          password: '',
      }
  },
  created() {
      if(localStorage.getItem('current_user_id')){
              this.$router.push({name: 'UserProfile'});
      }
  },
  computed: {
      ...mapGetters([
        ]),
  },
  methods: {
      loginAttempt() {
        this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/user').then(({data: users}) => {
            let user = null;
            user = users.filter(user => user.email === this.login.toLowerCase() && user.password === this.password)[0];
          if(!user){
              alert('Пользователь не найден. Проверьте введенные данные.')
          } else {
              localStorage.setItem('current_user_id', user.id);
              location.reload();
          }
        })
      }
  }
}
</script>

<style lang="scss">
.login__logo {
    margin-bottom: 32px;
}
.login__wrapper {
    padding: 0 16px;
}
.login__credits {
    display: flex;
    font-size: 12px;
    padding: 0 32px;
    margin-top: 8px;
    p {
        margin-right: 16px;
    }
}
</style>
