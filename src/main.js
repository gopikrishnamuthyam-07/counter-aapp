//var message = "Hello world";
//document.getElementById('message').innerHTML = message;

// const app = Vue.createApp({
//     data() {
//         return {
//             isLoggedIn:  true
//     };
//   },
//   methods: {
//     onIncrementCounter(event) {
        
//        this.count = this.count + 1;
//     },
//     checkLogin(){
//         //debugger
//         console.log("button clicked")
//         this.isLoggedIn = !this.isLoggedIn;
//     }
//   }
// });


// app.mount('#newApp');
import { createApp } from 'vue';
import App from './App.vue'

createApp(App).mount('#app')