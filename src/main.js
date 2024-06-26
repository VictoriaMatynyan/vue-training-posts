import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';

const app = createApp(App);

// проходимся по всему массиву со всеми UI-компонентами и регистрируем их глобально
// у экз-ра приложения есть фун-я component(), кот. позволяет нам глобально зарег-ть компонент, чтобы не импортировать его отдельно каждый раз
components.forEach(component => {
    // 1 парам - component.name - название компонента, 2 - сам компонент
    app.component(component.name, component)
})

// ^ это позволяет нам избежать след. строк в том или ином компоненте (внутри тега script):
// import Btn from '@/components/UI/Btn.vue';
// components: { Btn }, - внутри export default {}

app.mount('#app');