import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import Error from './components/UI/Error.vue';

const app = createApp(App);

app.component('error', Error);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.mount('#app');
