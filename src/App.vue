<template>
    <div class="app">
        <post-form/>
        <post-list :posts="posts"/>
        <!-- <post-list v-bind:posts="posts"/> -->
       
    </div>
</template>

<script>
// импорт компонентов происходит здесь (в теге script)
// @ - элиас, который ссылкается на папку src
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';


// в этой секции по дефолту мы должны экспортировать объект,
// этот объект будет являться компонентов (остальное - синтаксический сахар)
export default {
    // импортируемые компоненты необходимо зарегистрировать
    components: {
        PostForm,
        PostList,
    },
    // поля элементов объявляются в поле data
    data() {
        return {
            // лайки и дизлайки удалили и создали массив постов
            // (поскольку их мы будем получать с сервера вероятно в виде массива)
            posts: [
                {id: 1, title: 'JavaScript', body: 'JavaScript is a programming language that adds interactivity to your website'},
                {id: 2, title: 'JavaScript 2', body: 'JavaScript is a programming language that adds interactivity to your website 2'},
                {id: 3, title: 'JavaScript 3', body: 'JavaScript is a programming language that adds interactivity to your website 3'},
                {id: 4, title: 'JavaScript 4', body: 'JavaScript is a programming language that adds interactivity to your website 4'},
            ],
            title: '',
            body: '',
        }
    },
    // функции для элементов объявляются в поле methods
    methods: {
        createPost() {
            // создаём новый объект, id берём из текущей даты
            const newPost = {
                id: Date.now(),
                // title и body берём из соответствующей модели
                title: this.title,
                body: this.body
            }
            // добавляем новый пост в массив постов
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },
    }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

.border {
    border-radius: 5px;
}

</style>