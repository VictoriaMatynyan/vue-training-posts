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