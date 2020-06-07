<template>
   <div class="wrapper" v-if="current_user && currentTab" v-cloak>
    <div class="page__title">Улучшения</div>
    <div class="profile__link" @click="$router.push({name: 'UserProfile'})"></div>
    <div class="page__tabs" v-if="currentTab">
        <template v-for="(tab, index) in tabs" >
            <div 
                v-if="(tab.value !== 'in_progress' || current_user.role !== 'Житель')"
                :key="tab.value" 
                class="page__tab-item" 
                :class="{active: currentTab.value === tabs[index].value}"
                @click="currentTab = tab"
            >{{tab.title}}</div>
        </template>
    </div>
    <div class="improvments">
        <div class="no-items" v-if="!chosenTasks.length && currentTab.value === 'created'">
            <div class="no-items__icon"><img src="../assets/images/lightning-black.svg"></div>
            <div class="no-items__title">Предложи улучшение!</div>
            <div class="no-items__subtitle">Этим ты поможешь улучшить наш край и упрочить свой лидерский статус</div>
        </div>
        <div class="no-items" v-if="!chosenTasks.length && currentTab.value === 'in_progress'">
            <div class="no-items__title">У вас нет задач!</div>
        </div>
        <ImprovmentCard v-for="task in chosenTasks" :key="task.id" :task="task"/>
    </div>
    <button @click="createImprovment" ref="addButton" class="add-improvment-button"></button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import ImprovmentCard from '../components/ImprovmentCard';
export default {
    name: 'Improvments',
    components: {
        ImprovmentCard
    },
    data(){
        return {
            currentTab: null,
            tabs: [{
                title: 'Созданные мной',
                value: 'created'
            },{
                title: 'Решаю',
                value: 'in_progress'
            },{
                title: 'Все',
                value: 'all'
            }],
        }
    },
    computed: {
        ...mapGetters([
            'tasks',
            'user_tasks',
            'in_progress_tasks',
            'current_user'
        ]),
        chosenTasks() {
            if(!this.currentTab) {
                return [];
            }
            if (this.currentTab.value === 'created') {
                return this.user_tasks;
            }
            if (this.currentTab.value === 'in_progress') {
                return this.in_progress_tasks;
            }
            if (this.currentTab.value === 'all') {
                return this.tasks;
            }
            return [];
        }
    },

  mounted() {
      this.currentTab = this.tabs[0];
      let _self = this;
      document.querySelector('.container').addEventListener('scroll', function(evt) {
          try {
              //const height = window.innerHeight < 720 ? 720 - window.innerHeight : 0;
                console.log(evt.target.scrollTop, evt.target.offsetHeight);
               _self.$refs.addButton.style.top = evt.target.scrollTop + evt.target.offsetHeight - 100 + 'px';
          } catch (e) {
              console.log(e)
              return;
          }
      })
  },
  methods: {
      createImprovment() {
          this.$router.push({name: 'CreateImprovment'});
      }
  }
}
</script>

<style lang="scss">
    .wrapper{
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .profile__link {
        position: absolute;
        top: 0;
        right: 16px;
        width: 24px;
        height: 24px;
        background-image: url('../assets/images/profile.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;
    }
    .add-improvment-button {
        position: absolute;
        bottom: 0;
        right: 16px;
        border: none;
        border-radius: 50%;
        background-color:#02A6E3;
        color: white;
        font-size: 24px;
        font-weight: bold;
        width: 60px;
        height: 60px;
        background-image: url('../assets/images/Add.svg');
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    .no-items{
        padding:0 16px;
        margin-top: 48px;
        &__title {
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 16px;
        }
        &__subtitle {
            font-size: 16px;
        }
    }
    .page__tabs {
        display: flex;
        justify-content: space-evenly;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.08);
        margin-bottom: 16px;
    }
    .page__tab-item {
        width: 100%;
        padding: 8px 0;
        font-weight: bold;
        cursor: pointer;
        &.active {
            cursor: default;
            border-bottom: 2px solid #02A6E3;
        }
        &:not(.active):hover {
            border-bottom: 2px solid rgba(2, 166, 227, 0.4);
        }

    }
</style>
