<template>
     <!-- чтобы работать с массивами, используем директиву v-for;
    в 1ю очередь указываем 1 элемент итерации, далее оператор in и после - откуда этот элемент мы получаем -->
    <div>
        <h2>Users List</h2>
        <post-item
        v-for="post in posts"
        :post="post"
    />
    </div>
    
</template>

<script>
import PostItem from '@/components/PostItem.vue';

    // компонент postList ожидает посты как аргумент
    export default {
        components: { PostItem },
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

</style>