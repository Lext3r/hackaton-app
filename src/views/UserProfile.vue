<template>
  <div class="profile">
      <div v-if="user" class="profile-block">
          <div class="profile__avatar"><img :src="user.avatar" alt="avatar" /></div>
          <div class="profile__title">Пользователь</div>
          <div class="profile__username">{{user.name}}</div>
          <div class="profile__date">Зарегистрирован {{new Date(user.register_date).toLocaleDateString()}}</div>
          <hr />
          <div class="profile__role">{{user.role}}</div>
          <div class="profile__data">
              <div class="profile__data-block">
                  <div class="profile__data-number">13</div>
                  <div class="profile__data-text">Успешных дел</div>
              </div>
              <div class="profile__data-block">
                  <div class="profile__data-number">{{in_progress_tasks.length}}</div>
                  <div class="profile__data-text">В работе</div>
              </div>
              <div class="profile__data-block">
                  <div class="profile__data-number">{{user.level}}/ 10</div>
                  <div class="profile__data-text">Рейтинг одобрения</div>
              </div>
          </div>
            <div class="profile__points">
                <div class="profile__points-label">
                    <div class="profile__points-text">Опыт</div>
                    <div class="profile__points-count experience">{{user.expirience}}</div>
                </div>
                <div class="profile__points-label">
                    <div class="profile__points-text">Баллы</div>
                    <div class="profile__points-count points">{{user.points}}</div>
                </div>
          </div>
          <div class="profile__buttons">
            <button @click="$router.push({name: 'Improvments'})" class="profile__button-item improvements">
                <img src="../assets/images/bulb.svg"/>
                Улучшения
            </button>
            <button class="profile__button-item ideas">
                <img src="../assets/images/lightning.svg"/>
                Инициативы
            </button>
          </div>
          <button style="margin-top: 48px;" @click="logout" class="button contour">Выйти из аккаунта</button>
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'UserProfile',
  data(){
      return {
          user: null,
      }
  },
  watch: {
      current_user(user) {
          this.user = user;
      }
  },
  created() {
      this.user = this.current_user;

  },
  computed: {
      ...mapGetters([
            'current_user',
            'in_progress_tasks'
        ]),
  },
  methods: {
      logout() {
          this.$store.commit('logout');
          this.$router.push({name: 'Login'});
      }
  }
}
</script>

<style lang="scss">
    $grey: #8F9399;
    .profile-block {
        padding: 0 8px;
        hr{
            color: $grey;
        }
    }
    .profile {
        &__avatar {
            margin-bottom: 16px;
            img {
                border-radius: 50%;
            }
        }
        &__title {
            margin-bottom: 8px;
            font-size: 12px;
            color: $grey;
        }
        &__username {
            margin-bottom: 8px;
            font-size: 22px;
            font-weight: bold;
        }
        &__date {
            margin-bottom: 16px;
            font-size: 12px;
            color: $grey;
        }
        &__role {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        &__data {
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
            &-block {
                min-width: 33.3%;
                padding: 0 10px;
            }
            &-number {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            &-text {
                color: $grey;
                font-size: 12px;
            }
        }
        &__points {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
            &-label{
                padding: 8px 0;
                width: 90px;
                margin-right: 5px;
                text-align: center;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
                border-radius: 5px;
                &:last-child {
                    margin-right: 0;
                }
            }
            &-text{
                font-size: 12px;
                line-height: 15px;
                opacity: 0.5;
            }
            &-count {
                font-size: 18px;
                line-height: 24px;
                font-weight: bold;
                display: flex;
                justify-content: center;
                &.experience{
                    &:before {
                        content: '';
                        position: relative;
                        width: 24px;
                        height: 24px;
                        margin-right: 5px;
                        background: url('../assets/images/exp.svg') no-repeat;

                    }
                }
                &.points{
                    &:before {
                        content: '';
                        position: relative;
                        width: 24px;
                        height: 24px;
                        margin-right: 5px;
                        background: url('../assets/images/points.svg') no-repeat;

                    }
                }
            }
        }
        &__buttons {
            display: flex;
            justify-content: center;
        }
        &__button-item {
            margin-right: 10px;
            border-radius: 20px;
            padding: 16px;
            width: 180px;
            border: none;
            text-align: center;
            color: white;
            outline: none;
            img {
                display: block;
                margin: 0 auto;
                margin-bottom: 4px;
            }
            &.improvements {
                background-color: #219653;
                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }
            }
            &.ideas {
                background-color: #02A6E3;
            }
            
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
