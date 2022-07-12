<template>
    <div class="container">
        <h1>Le FoodTruck</h1>
        <modale></modale>
    </div>
</template>

<script>
import Modale from './Modal.vue'

export default {
    name: 'Contenu',
    components: {
        'modale': Modale
    }
}

</script>

<style scoped>
.container {
    display: block;
    height: 600px;
    width: auto;
}
</style>