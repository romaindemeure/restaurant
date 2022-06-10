import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import HomePages from '@/views/home.vue'
import FoodTruckPages from '@/views/foodtruck.vue'
import BurgerPages from '@/views/burger.vue'
import BuritosPages from '@/views/buritos.vue'
import PokeBolwsPages from '@/views/pokebowls.vue'
import VeganPages from '@/views/vegan.vue'
import BlogPages from '@/views/blog.vue'
import OrderedPages from '@/views/ordered.vue'

import HomeBurgerPages from '@/components/homecomponents/dishesmenu/burger.vue'
import HomeBuritosPages from '@/components/homecomponents/dishesmenu/buritos.vue'
import PokeBowlsPages from '@/components/homecomponents/dishesmenu/pokeBowls.vue'
import HomeSushiPages from '@/components/homecomponents/dishesmenu/sushi.vue'
import HomeVeganPages from '@/components/homecomponents/dishesmenu/vegan.vue'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePages,
            children: [
                {
                    path: '',
                    component: HomeBurgerPages,
                },
                {
                    path: 'homeburitos',
                    component: HomeBuritosPages,
                },
                {
                    path: 'homepokeBowls',
                    component: PokeBowlsPages,
                },
                {
                    path: 'homesushi',
                    component: HomeSushiPages,
                },
                {
                    path: 'homevegan',
                    component: HomeVeganPages,
                },
            ]
        },
        {
            path: '/foodtruck',
            name: 'FoodTruck',
            component: FoodTruckPages,
        },
        {
            path: '/burger',
            name: 'Burger',
            component: BurgerPages,
        },
        {
            path: '/buritos',
            name: 'Buritos',
            component: BuritosPages,
        },
        {
            path: '/pokebowls',
            name: 'PokeBolws',
            component: PokeBolwsPages,
        },
        {
            path: '/vegan',
            name: 'Vegan',
            component: VeganPages,
        },
        {
            path: '/commander',
            name: 'Ordered',
            component: OrderedPages,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPages,
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')