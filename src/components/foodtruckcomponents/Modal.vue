<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay"></div>

        <div class="modale"></div>
            <button class="btn" @click="toggleModale">fermer</button>
            <h2>Le contenu de la modale</h2>
        
    </div>
</template>

<script>
export default {
    name: 'Modale',
    props: ['revele', 'toggleModale']

}
</script>

<style scoped>
.bloc-modale {
    background: lightblue;
    position: fixed;
    justify-content: center;
    align-items: center;
}


</style>