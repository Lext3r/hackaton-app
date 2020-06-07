<template>
    <div class="wrapper item__wrapper" v-if="item" v-cloak>
        <div class="page__title">Улучшения</div>
        <div class="back_arrow" @click="$router.push({name: 'Improvments'})"><img src="../assets/images/back-arrow.svg" /></div>
        <div class="imp__title">{{item.title}}</div>
        <div class="imp__status">{{item.status}}</div>
        <div class="imp__description">{{item.description}}</div>
        <div class="imp__table" v-if="user">
            <table>
                <tr>
                    <td>Автор:</td>
                    <td>{{user.name || ''}}</td>
                </tr>
                
                <tr>
                    <td>Категория:</td>
                    <td>{{item.category}}</td>
                </tr>

                <tr>
                    <td>Дата создания:</td>
                    <td>{{new Date(item.create_date).toLocaleDateString()}}</td>
                </tr>
            </table>
        </div>
        <div class="imp__address">{{item.address}}</div>
        <div class="imp__buttons" v-if="current_user.role !== 'Житель' && item.status === 'Обработка'">
            <button class="button submit" @click="updateStatus('В работе')">Взять в работу</button>
        </div>
        <div class="imp__buttons" v-if="current_user.id === item.responsible_id && item.status === 'В работе'">
            <button class="button submit" @click="updateStatus('Решено')">Выполнено</button>
        </div>
        <p align="left" >Комментарии:</p> 
        <template v-if="item.response && item.response.length">
            <div class="imp__comment" v-for="(response, index) in item.response" :key="index">
                <p>Автор: Пользователь{{response.author_id}}</p>
                <p>Текст: {{response.text}}</p>
            </div>
        </template>
        <div class="form-input">
            <span class="form-input__label">Оставить комментарий:</span>
            <textarea v-model="comment" placeholder="Укажите описание вашего улучшения" rows="4" maxlength="200" />
        </div>
        <div class="imp__buttons">
            <button class="button submit">Отправить комментарий</button>
        </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'ImprovmentCard',
    props: ['id'],
    data() {
        return {
            isLikeActive: 0,
            item: null,
            user: null,
            comment: ''
        }
    },
    computed: {
      ...mapGetters([
            'current_user',
        ])
    },
    watch: {
        item(val) {
            this.getUserData(val.author_id);
        }
    },
    mounted() {
        this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task/' + this.id).then(({data: task}) => {
            this.item = task;
        })
        .catch(() => this.$router.push({name: 'Improvments'}));
    },
    methods: {
        getUserData(id) {
            this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/user/' + id).then(({data: user}) => {
            this.user = user;
        })
        .catch(e => alert(e));
        },
        updateStatus(status) {
            this.axios.put('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task/' + this.id,{
            ...this.item,
            status: status,
            responsible_id: this.current_user.id,
            close_date: status === 'Решено' ? new Date().toISOString() : '',
          })
          .then(response => { 
              if (response.status !== 201 && response.status !== 200) {
                  alert('Произошла ошибка при отправке данных, пожалуйста повторите попытку.')
              } else {
                  location.reload();
              }
          })
        }
    }
}
</script>

<style lang="scss">
.item__wrapper {
    padding: 0 16px;
}
 .imp{
     &__title {
         font-size: 20px;
         font-weight: bold;
         margin-bottom: 24px;
     }
     &__status {
         font-size: 14px;
         margin-bottom: 16px; 
     }
     &__description {
         font-size: 14px;
         margin-bottom: 32px;
         color:#8F9399;
     }
     &__table{
         padding: 0 16px;
         margin-bottom: 40px;
         table{
             font-size: 14px;
             text-align: left;
             border-spacing: 16px 8px;
             td:last-child {
                 font-weight: bold;
             }
         }
     }
     &__address {
         font-size: 16px;
         font-weight: bold;
         margin-bottom: 24px;
     }
     &__buttons {
         padding: 0 16px;
         margin-bottom: 36px;
     }
     &__comment {
         text-align: left;
         padding: 8px;
         box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
         margin-bottom: 24px;
     }
 }
</style>
