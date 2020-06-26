(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CreateImprovment"],{"23db":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"back_arrow",on:{click:function(e){return t.$router.push({name:"Improvments"})}}},[s("img",{attrs:{src:a("f4de")}})]),s("div",{staticClass:"page__title"},[t._v("Знаю что улучшить!")]),s("div",{staticClass:"create-improvment-form"},[s("div",{staticClass:"form-input"},[s("span",{staticClass:"form-input__label"},[t._v("Категория*")]),s("v-select",{attrs:{options:t.categories,placeholder:"Выберите категорию"},model:{value:t.task.category,callback:function(e){t.$set(t.task,"category",e)},expression:"task.category"}})],1),s("div",{staticClass:"form-input"},[s("span",{staticClass:"form-input__label"},[t._v("Название*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],attrs:{type:"text",placeholder:"Введите название",maxlength:"150"},domProps:{value:t.task.name},on:{input:function(e){e.target.composing||t.$set(t.task,"name",e.target.value)}}})]),s("div",{staticClass:"form-input"},[s("span",{staticClass:"form-input__label"},[t._v("Описание*")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{placeholder:"Укажите описание вашего улучшения",rows:"7",maxlength:"300"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})]),s("div",{staticClass:"form-input"},[s("span",{staticClass:"form-input__label"},[t._v("Адрес*")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.address,expression:"task.address"}],attrs:{disabled:"",placeholder:"Выберите точку на карте",rows:"2"},domProps:{value:t.task.address},on:{input:function(e){e.target.composing||t.$set(t.task,"address",e.target.value)}}})])]),s("map-location-selector",{attrs:{latitude:t.task.latitude,longitude:t.task.longitude},on:{locationUpdated:t.locationUpdated}}),s("div",{staticClass:"form-buttons"},[s("button",{staticClass:"button submit",on:{click:t.saveTask}},[t._v("Отправить")]),s("button",{staticClass:"button cancel",on:{click:function(e){return t.$router.push({name:"Improvments"})}}},[t._v("Отменить")])]),t.showCreatedModal?s("ImprovmentCreatedModal"):t._e()],1)},n=[],o=(a("a4d3"),a("e01a"),a("b0c0"),a("5530")),r=a("2f62"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal__title"},[t._v("Улучшение создано")]),a("p",{staticClass:"text-grey"},[t._v("Статус: в обработке")]),a("p",[t._v("Направлено в ответственный орган.")]),a("p",{staticClass:"text-grey"},[t._v("Обычно заявки этой категории обрабатываются до 14 дней.")]),a("div",{staticClass:"modal__buttons"},[a("button",{staticClass:"button contour",on:{click:function(e){return t.$router.push({name:"Improvments"})}}},[t._v("Вернуться к списку улучшений")]),a("button",{staticClass:"button contour"},[t._v("Пригласить соратников")])]),a("p",{staticClass:"text-grey",staticStyle:{"text-align":"center"}},[t._v("Поделиться")]),t._m(0)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal__social"},[s("img",{attrs:{src:a("9404"),alt:"social_share"}})])}],l={name:"ImprovmentCreatedModal",data:function(){return{}}},u=l,d=(a("c6d7"),a("2877")),p=Object(d["a"])(u,i,c,!1,null,null,null),m=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-container"})},v=[],g=(a("a9e3"),{props:{latitude:{type:Number,default:55.01657628017477},longitude:{type:Number,default:-7.309233337402361}},data:function(){return{lat:this.latitude,lng:this.longitude}},mounted:function(){var t=new google.maps.LatLng(this.lat,this.lng),e={zoom:12,center:t},a=new google.maps.Map(this.$el,e),s=new google.maps.Marker({position:t,map:a});s.setMap(a);var n=this;google.maps.event.addListener(a,"center_changed",(function(){var t=a.getCenter().lat(),e=a.getCenter().lng(),o={lat:t,lng:e};s.setPosition(o),n.$emit("locationUpdated",o)}))}}),h=g,b=Object(d["a"])(h,f,v,!1,null,null,null),_=b.exports,k=window["google"],C=new k.maps.Geocoder,y={name:"CreateImprovment",components:{ImprovmentCreatedModal:m,MapLocationSelector:_},data:function(){return{categories:["Транспорт и дороги","ЖКХ","Благоустройство","Мой бизнес","Образование","Безопасность"],task:{category:null,name:"",description:"",address:"",latitude:51.957059,longitude:85.945653},showCreatedModal:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["current_user"])),{},{isFormValid:function(){return this.task.name&&this.task.category&&this.task.description&&this.task.address}}),methods:{locationUpdated:function(t){var e=t;this.task.latitude=t.lat,this.task.longitude=t.lng;var a=this;C.geocode({latLng:e},(function(t,e){e==k.maps.GeocoderStatus.OK&&(t[1]?a.task.address=t[1].formatted_address:a.task.address="Неизвестный адрес")}))},saveTask:function(){var t=this;this.isFormValid?this.axios.post("https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task",{author_id:this.current_user.id,responsible_id:"",category:this.task.category,title:this.task.name,description:this.task.description,status:"Обработка",create_date:(new Date).toISOString(),type:"Улучшение",address:this.task.address,latitude:this.task.latitude,longitude:this.task.longitude,response:[],likes:"0",dislikes:"0"}).then((function(e){201!==e.status?alert("Произошла ошибка при отправке данных, пожалуйста повторите попытку."):(t.axios.get("https://5edab48398b7f500160dc847.mockapi.io/hack-a-ton/task").then((function(e){var a=e.data;t.$store.commit("change_tasks",a)})),t.showCreatedModal=!0)})):alert("Пожалуйста заполните все поля формы.")}}},I=y,w=(a("c161"),Object(d["a"])(I,s,n,!1,null,null,null));e["default"]=w.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),n=a("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var s=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var o,r;return n&&"function"==typeof(o=e.constructor)&&o!==a&&s(r=o.prototype)&&r!==a.prototype&&n(t,r),t}},"85aa":function(t,e,a){},9404:function(t,e,a){t.exports=a.p+"img/social.4d81d1c5.svg"},"9e11":function(t,e,a){},a9e3:function(t,e,a){"use strict";var s=a("83ab"),n=a("da84"),o=a("94ca"),r=a("6eeb"),i=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,v=a("9bf2").f,g=a("58a8").trim,h="Number",b=n[h],_=b.prototype,k=c(p(_))==h,C=function(t){var e,a,s,n,o,r,i,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+l}for(o=l.slice(2),r=o.length,i=0;i<r;i++)if(c=o.charCodeAt(i),c<48||c>n)return NaN;return parseInt(o,s)}return+l};if(o(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(k?d((function(){_.valueOf.call(a)})):c(a)!=h)?l(new b(C(e)),a,I):C(e)},w=s?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)i(b,y=w[x])&&!i(I,y)&&v(I,y,f(b,y));I.prototype=_,_.constructor=I,r(n,h,I)}},b0c0:function(t,e,a){var s=a("83ab"),n=a("9bf2").f,o=Function.prototype,r=o.toString,i=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},c161:function(t,e,a){"use strict";var s=a("9e11"),n=a.n(s);n.a},c6d7:function(t,e,a){"use strict";var s=a("85aa"),n=a.n(s);n.a},e01a:function(t,e,a){"use strict";var s=a("23e7"),n=a("83ab"),o=a("da84"),r=a("5135"),i=a("861d"),c=a("9bf2").f,l=a("e893"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var m=p.prototype=u.prototype;m.constructor=p;var f=m.toString,v="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=f.call(t);if(r(d,t))return"";var a=v?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:p})}},f4de:function(t,e,a){t.exports=a.p+"img/back-arrow.3a5557d2.svg"}}]);
//# sourceMappingURL=CreateImprovment.dbfcdb31.js.map