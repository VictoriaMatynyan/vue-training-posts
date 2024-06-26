<!-- в случае, если нам нужно будет отрисовать только 1 пост вместо всего списка постов -->

<template>
    <div class="post border">
        <div>
            <!-- с помощью интерполяции  забираем данные нужного нам поста и помещаем в шаблон -->
            <div><strong>Post name:</strong> {{ post.title }}</div>
            <div><strong>Post body:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <Btn>
                Delete
            </Btn>
            <!-- <Btn>Edit Post</Btn> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid teal;
    margin-top: 15px;
    padding: 15px;
}
</style>