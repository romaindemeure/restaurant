<template>
    <section class="mainSection">
        <div class="block blockCentered">

            <div class="blockBody">
                <h1 class="textFirst">Menu</h1>
                <h2 class="textSecond">Spécialité maison</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fugiat eligendi enim praesentium sed quasi, vel ut voluptates.
                </p>
            </div>
        </div>
        <nav class="dishesMenu">
            <router-link to="/" class="disheLink">Burger</router-link>
            <router-link to="/homeburitos" class="disheLink">Buritos</router-link>
            <router-link to="/homepokebowls" class="disheLink">poké-bowls</router-link>
            <!-- <router-link to="/homesushi" class="disheLink">Sushi</router-link> -->
            <router-link to="/homevegan" class="disheLink">Vegan</router-link>
        </nav>
    </section>
    <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.mainSection {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.blockCentered {
    text-align: center;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
}
.blockBody {
    margin-top: 50px;
}
.textFirst {
    font-family: 'Pinyon Script', serif;
    color: #C89446;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    line-height: 50px;
}
.textFirst::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #C89446;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
}
.textSecond {
    font-weight: 700;
    font-size: 1.75rem;
    margin: 0;
    line-height: 35px;
    color: #272727;
    text-transform: uppercase;
}
.textDescription {
    color: #6F6F6F;
    line-height: 26px;
}

.dishesMenu {
    display: block;
    font-weight: 600;
    color: #383838;
    text-align: center;
}

.dishesMenu .disheLink {
    display: inline-block;
    margin: 0 20px;
    text-transform: uppercase;
    position: relative;
}

.dishesMenu .disheLink::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 1px;
    opacity: 0;
    background: #C89446;
    transition: .3s;
}

.dishesMenu .disheLink:hover::after {
    bottom: 0;
    opacity: 1;
    color: black;
}

.dishesMenu .disheLink:hover {
    color: black;
}
</style>