<template>
    <!-- @submit.prevent - отменяет перезагрузку страницы при сабмите формы -->
    <form class="form" @submit.prevent>
        <h1>New post</h1>
        <!-- v-bind связывает данные с компонентом, но в частности для инпутов чаще используется v-model, чтобы каждый раз не вешать слушатели и не менять атрибуты -->
        <!-- после декомпозиции обращаемся не напрямую к title, а к свойству объекта post -->
        <input
        v-model="post.title"
        class="input border"
        type="text"
        placeholder="post name"
        >
        <input
        v-model="post.body"
        class="input border"
        type="text"
        placeholder="post body"
        >
        <button
        @click="createPost"
        class="btn border"
        >
            Create post
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
               title: '',
               body: '', 
            }
        }
    },
    methods: {
        createPost() {
            // создавать новый объект не надо: у нас уже есть соотв. объект в моделях с title и body
            // однако нам нужно присвоить для объекта новый id, например, получим по текущей дате
            this.post.id = Date.now();
            // генерируем событие, на кот. родительский компонент может подписаться
            // this.$emit(название генерируемого события, аргументы, которые будут попадать в соотв. фун-ю после того, как на неё подпишется родительский компонент)
            this.$emit('create', this.post)
            // после генерации события очищаем пост, чтобы поля стали пустыми
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<!-- флаг scoped (<style scoped>) позволяет применять стили только для конкретного компонента, и эти стили не будут применяться к другим компонентам --> 
<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
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