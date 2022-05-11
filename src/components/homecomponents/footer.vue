<template>

    <div class="footer">

        <div class="footerFlex">

            <div class="footerBox">
                <h1 class="footerName">Nom du restaurant</h1>
                <p class="footerText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div class="footerBox">
                <h1 class="footerName">Contact Info</h1>
                <p class="footerText">51 Pl. Charles de Gaulle, 29190 Pleyben</p>
                <p class="footerText">02 98 26 38 68</p>
            </div>

            <div class="footerBox">
                <h1 class="footerName">Horaire d'ouverture</h1>
                <p class="footerText">Du lundi au vendredi | 12h00 à 20h45</p>
            </div>
        </div>

        <div class="right">
            <p class="rightText">Copyright © 2022 Nom du restaurant. Tous les droits réservés</p>
        </div>

    </div>



</template>


<script setup>

</script>

<style scoped>

.footerFlex {
    display: flex;
    flex-direction: column;
    height: auto;
    background: #202020;
    padding: 0 10px;
    margin-top: 50px;
}
.footerName {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 40px;
    color: white;
    margin: 0;
    text-transform: uppercase;
}
.footerName::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #C89446;
    display: block;
    margin-bottom: 0.5rem;
}

.footerText {
        font-weight: 400;
        line-height: 24px;
        color: white; 
        margin: 0;
}
.footerBox {
        margin: 15px;
}

.right {
    display: block;
    height: auto;
    padding: 0;
    margin: 0;
    background: #181818;
}
.right .rightText{
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
    font-size: 0.75rem;
}
@media only screen and (min-width: 800px) {
    .footerFlex {
        height: auto;
        width: auto;
        display: flex;
        flex-direction: row;
        padding: 0 100px;
        background: #202020;
        margin-top: 50px;
    }
    .footerName {
        font-weight: 700;
        font-size: 1.375rem;
        line-height: 40px;
        color: white;
        margin: 0;
        text-transform: uppercase;
    }
    .footerName::before {
        content: '';
        width: 24px;
        height: 2px;
        background: #C89446;
        display: block;
        margin-bottom: 0.5rem;
    }
    .footerText {
        font-weight: 400;
        line-height: 24px;
        color: white; 
        margin: 0;
    }

    .footerBox {
        width: 33%;
        margin: 25px;
    }

    .right {
        display: block;
        height: auto;
        background: #181818;
    }

    .right .rightText{
        margin: 0;
        padding: 0;
        color: white;
        padding: 0 125px;
    }
}
</style>