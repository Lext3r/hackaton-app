<template>
   <div class="wrapper">
    <div class="back_arrow" @click="$router.push({name: 'Improvments'})"><img src="../assets/images/back-arrow.svg" /></div>
    <div class="page__title">Знаю что улучшить!</div>
    <div class="create-improvment-form">
        <div class="form-input">
            <span class="form-input__label">Категория*</span>
            <v-select :options="categories" v-model="task.category" placeholder="Выберите категорию"></v-select>
        </div>
        <div class="form-input">
            <span class="form-input__label">Название*</span>
            <input type="text" v-model="task.name" placeholder="Введите название" maxlength="150" />
        </div>
        <div class="form-input">
            <span class="form-input__label">Описание*</span>
            <textarea v-model="task.description"  placeholder="Укажите описание вашего улучшения" rows="7" maxlength="300" />
        </div>
        <div class="form-input">
            <span class="form-input__label">Адрес*</span>
            <textarea v-model="task.address" disabled placeholder="Выберите точку на карте" rows="2"/>
        </div>
    </div>
    <map-location-selector :latitude="task.latitude" :longitude="task.longitude" @locationUpdated="locationUpdated"></map-location-selector>
    <div class="form-buttons">
        <button class="button submit" @click="saveTask">Отправить</button>
        <button class="button cancel" @click="$router.push({name: 'Improvments'})">Отменить</button>
    </div>
    <ImprovmentCreatedModal v-if="showCreatedModal"/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import ImprovmentCreatedModal from '../components/ImprovmentCreatedModal';
import MapLocationSelector from 'vue-google-maps-location-selector';

let google = window['google'];
const geocoder = new google.maps.Geocoder();
export default {
  name: 'CreateImprovment',
  components: {
      ImprovmentCreatedModal,
      MapLocationSelector
  },
  data(){
      return {
          categories: ['Транспорт и дороги', 'ЖКХ', 'Благоустройство', 'Мой бизнес', 'Образование', 'Безопасность'],
          task: {
            category: null,
            name: '',
            description: '',
            address: '',
            latitude: 51.957059, 
            longitude: 85.945653,
          },
          showCreatedModal: false,
      }
  },
  computed: {
      ...mapGetters([
            'current_user',
        ]),
        isFormValid() {
            return this.task.name && this.task.category && this.task.description && this.task.address;
        }
  },
  methods: {
      locationUpdated(latlng) {
        let geo = latlng;
        this.task.latitude = latlng.lat;
        this.task.longitude = latlng.lng;
        const _self = this;
        geocoder.geocode({
            'latLng': geo
        }, function (results, status) {
            if (status ==
                google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    _self.task.address = results[1].formatted_address;
                } else {
                    _self.task.address = 'Неизвестный адрес';
                }
            } else {
                return;
            }
        });
      },
      saveTask() {
          if(!this.isFormValid) {
              alert('Пожалуйста заполните все поля формы.')
              return;
          }
          this.axios.post('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task',{
            "author_id": this.current_user.id,
            "responsible_id": "",
            "category": this.task.category,
            "title": this.task.name,
            "description": this.task.description,
            "status": "Обработка",
            "create_date": new Date().toISOString(),
            "type": "Улучшение",
            "address": this.task.address,
            "latitude": this.task.latitude,
            "longitude": this.task.longitude,
            "response": [],
            "likes": "0",
            "dislikes": "0"
          })
          .then(response => { 
              if (response.status !== 201) {
                  alert('Произошла ошибка при отправке данных, пожалуйста повторите попытку.')
              } else {
                  this.axios.get('https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task').then(({data: tasks}) => {
                       this.$store.commit('change_tasks', tasks);
                    })
                  this.showCreatedModal = true;
              }
          })
      }
  },
}
</script>

<style lang="scss">
    .create-improvment-form {
        position: relative;
    }
    .map-container {
        margin:0 16px;
        height: 200px;
    }
</style>
