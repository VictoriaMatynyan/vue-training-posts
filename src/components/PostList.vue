<template>
     <!-- чтобы работать с массивами, используем директиву v-for;
    в 1ю очередь указываем 1 элемент итерации, далее оператор in и после - откуда этот элемент мы получаем -->
    <div class="post border" v-for="post in posts">
        <!-- с помощью интерполяции  забираем данные нужного нам поста и помещаем в шаблон -->
        <div><strong>Post name:</strong> {{ post.title }}</div>
        <div><strong>Post body:</strong> {{ post.body }}</div>
</div>
</template>

<script>
    // компонент postList ожидает посты как аргумент
    export default {
        props: {
            // прописываем, что мы ожидаем на вход (посты)
            posts: {
                type: Array,
                // делаем посты обязательными (если не будет пропса с постами, в консоли будет warning, что нет пропса posts)
                // пропс posts передаём в компонент postList в App.vue
                required: true 
            }
        }
    }
</script>

<!-- флаг scoped (<style scoped>) позволяет применять стили только для конкретного компонента, и эти стили не будут применяться к другим компонентам --> 
<style scoped>
.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
}
</style>