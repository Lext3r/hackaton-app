<template>
    <div class="modal">
        <div class="modal__title">Улучшение создано</div>
        <p class="text-grey">Статус: в обработке</p>
        <p>Направлено в ответственный орган.</p>
        <p class="text-grey">Обычно заявки этой категории обрабатываются до 14 дней.</p>
        <div class="modal__buttons">
            <button class="button contour" @click="$router.push({name: 'Improvments'})">Вернуться к списку улучшений</button>
            <button class="button contour">Пригласить соратников</button>
        </div>
         <p class="text-grey" style="text-align: center;">Поделиться</p>
         <div class="modal__social">
             <img src="../assets/images/social.svg" alt="social_share"/>
         </div>
    </div>
</template>
<script>
export default {
    name: 'ImprovmentCreatedModal',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
.modal {
    position: absolute;
    padding: 0 16px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    top: 0;
    background: white;
    z-index: 10;
    text-align: left;
    &__close {
        font-size: 48px;
        display: inline-block;
        position: absolute;
        right: 16px;
        color: #1F2229;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    &__title {
        font-size: 22px;
        font-weight: bold;
        padding: 48px 0 16px;
    }
    p {
        margin-bottom: 16px;
    }
    &__buttons {
        button {
            margin-bottom: 16px;
            &:last-child{
                margin-bottom: 0;
            }
        }
        margin: 48px 0 32px;
    }
    &__social {
        display: flex;
        justify-content: center;
    }
}
</style>
