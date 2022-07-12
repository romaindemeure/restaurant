<template>
    <div class="container">
        <h1>Le FoodTruck</h1>
        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
        <button class="btn" @click="toggleModale">Ouvre la modale</button>
    </div>
</template>

<script>
import Modale from './Modal.vue'

export default {
    name: 'Contenu',
    data(){
        return {
            revele: false
        }
    },
    components: {
        'modale': Modale
    },
    methods: {
        toggleModale: function(){
            this.revele = !this.revele
        }
    },
}

</script>

<style scoped>
.container {
    display: block;
    height: 600px;
    width: auto;
}
</style>