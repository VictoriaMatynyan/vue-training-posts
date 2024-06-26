<template>
    <div class="app">
        <!-- @submit.prevent - отменяет перезагрузку страницы при сабмите формы -->
        <form class="form" @submit.prevent>
            <h1>New post</h1>
            <!-- v-bind связывает данные с компонентом -->
            <!-- т.о. в инпуте всегда будет находиться только то значение, которое находится в наших моделях (data) -->
            <!-- @input - подписываемся на события из инпут и забираем из него напрямую value -->
            <input
            v-bind:value="title"
            @input="title = $event.target.value"
            class="input border"
            type="text"
            placeholder="post name"
            >
            <input
            v-bind:value="body"
            @input="body = $event.target.value"
            class="input border"
            type="text"
            placeholder="post body"
            >
            <button class="btn border" @click="createPost">Create post</button>
        </form>
        <!-- чтобы работать с массивами, используем директиву v-for;
         в 1ю очередь указываем 1 элемент итерации, далее оператор in и после - откуда этот элемент мы получаем -->
         <div class="post border" v-for="post in posts">
            <!-- с помощью интерполяции  забираем данные нужного нам поста и помещаем в шаблон -->
            <div><strong>Post name:</strong> {{ post.title }}</div>
            <div><strong>Post body:</strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
// в этой секции по дефолту мы должны экспортировать объект,
// этот объект будет являться компонентов (остальное - синтаксический сахар)
export default {
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
        // можно также передавать в @input эту функцию
        // inputTitle(e) {
        //     this.title = e.target.value;
        // }
    }
}
</script>

<!-- флаг scoped (<style scoped>) позволяет применять стили только для конкретного компонента, и эти стили не будут применяться к другим компонентам;
у корневого компонента этот флаг можно не указывать --> 
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

.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}

.form {
    display: flex;
    flex-direction: column;
}

.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}

</style>