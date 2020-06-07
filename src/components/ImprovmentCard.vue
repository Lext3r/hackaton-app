<template>
        <div class="imp-card" @click="$router.push({ name: 'ImprovmentItem', params: { id: task.id } })">
            <div class="imp-card__status">{{task.status}}</div>
            <div class="imp-card__name">{{task.title}}</div>
            <div class="imp-card__rating">
                <div class="imp-card__comments"><img src='../assets/images/comment.svg'/>{{task.response.length || 0}}</div>
                <div class="imp-card__likes"><img src='../assets/images/like.svg'/>{{task.likes}}</div>
                <div class="imp-card__dislikes"><img src='../assets/images/dislike.svg'/>{{task.dislikes}}</div>
            </div>
            <div class="imp-card__address"><img src='../assets/images/geo.svg'/>{{task.address}}</div>
    </div>
</template>
<script>
export default {
    name: 'ImprovmentCard',
    props: ['task'],
    data() {
        return {
            isLikeActive: 0,
        }
    }
}
</script>

<style lang="scss">
    .imp-card {
        cursor: pointer;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
        padding: 16px;
        margin: 8px 16px;
        text-align: left;
        img {
            margin-right: 5px;
        }
        &__status {
            margin-bottom: 4px;
            font-size: 12px;
        }
        &__name {
            font-size: 16px;
            margin-bottom: 16px;
            font-weight: bold;

        }
        &__rating {
            display: flex;
            margin-bottom: 16px;
            color: #8F9399;
            & > div {
                margin-right: 16px;
            }
        }
        &__address {
            color: #8F9399;
            font-size: 12px;
        }
    }
</style>
