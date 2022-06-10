<template>
    <div class="container">

        <div class="blockFirst">
            <h1 class="textFirst">Découvez</h1>
            <h2 class="textSecond">Nos Burgers Maison</h2>
            <p class="textDescription">
                Nos hamburgers maison sont réalisé avec 100% d'ingrédients frais et bio du pain de boulangerie et du steak black Angus
            </p>
        </div>

        <!-- BLOC DE GAUCHE -->
        <div class="blockBody blockLeft" v-for="menu in menus">

            <div class="blockTexte">
                <h2 class="textSecond">{{ menu.title }}</h2>
                <p class="textDescription">
                    {{ menu.description }}
                </p>
                <ul class="containerListe">
                    <li>Buns artisanal</li>
                    <li>Sauce maison</li>
                    <li>Oignons rouge</li>
                    <li>Cheddar rouge</li>
                    <li>Confit d'oignons</li>
                    <li>Steak Black Angus 150g</li>
                    <li>Edam</li>
                </ul>
                <h3 class="price">{{ menu.price }}€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>

        </div>

        <!-- BLOC DE DROITE -->
        <!-- <div class="blockBody blockRight">

            <div class="blockTexte">
                <h2 class="textSecond">Le Marcel</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
                </p>
                <ul class="containerListe">
                    <li>Buns blé noir</li>
                    <li>Sauce maison</li>
                    <li>Oignons rouge</li>
                    <li>Cheddar rouge</li>
                    <li>Steak Black Angus 150g</li>
                    <li>Andouilles grillés</li>
                    <li>Lards grillés</li>
                    <li>Sauce moumou</li>
                </ul>
                <h3 class="price">10.50€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>
        </div> -->

    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            menus: [
                {
                    title: "Buger 1",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.",
                    ingredient : [
                        "Buns artisanal", 
                        "Sauce maison", 
                        "Oignons rouge", 
                        "Cheddar rouge", 
                        "Confit d'oignons", 
                        "Steak Black Angus 150g", 
                        "Edam"
                    ],
                    price: "10,50"
                },
                {
                    title: "Burger 2",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.",
                    ingredient : [
                        "Buns artisanal", 
                        "Sauce maison", 
                        "Oignons rouge", 
                        "Cheddar rouge", 
                        "Confit d'oignons", 
                        "Steak Black Angus 150g", 
                        "Edam"
                    ],
                    price: "12,50"
                },
                {
                    title: "Burger 3",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.",
                    ingredient : [
                        "Buns artisanal", 
                        "Sauce maison", 
                        "Oignons rouge", 
                        "Cheddar rouge", 
                        "Confit d'oignons", 
                        "Steak Black Angus 150g", 
                        "Edam"
                    ],
                    price: "13"
                },
                {
                    title: "Burger 4",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.",
                    ingredient : [
                        "Buns artisanal", 
                        "Sauce maison", 
                        "Oignons rouge", 
                        "Cheddar rouge", 
                        "Confit d'oignons", 
                        "Steak Black Angus 150g", 
                        "Edam"
                    ],
                    price: "11,50"
                },

            ]
        }
    }
})
</script>

<style scoped>
.container {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.blockFirst {
    text-align: center;
    margin: 20px 0;
}
.blockBody {
    margin-top: 60px;
    padding: 10px;
}
.textFirst {
    font-family: 'Pinyon Script', serif;
    color: #C89446;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    line-height: 50px;
    margin-top: 20px;
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
.containerListe {
    padding: 0;
    padding-left: 20px;
}
.price {
    font-family: 'Pinyon Script', serif;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 50px;
    color: #C89446;
    letter-spacing: -5px;
    margin: 0;
}
.blockImg {
    max-width: 350px;
    margin: 0 auto;
    border: 1px solid #C89446;
    border-radius: 3px;
}
.blockImg .img{
    display: block;
    z-index: 1;
}

@media only screen and (min-width: 800px) {
    .blockBody {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockTexte {
        width: 50%;
    }
    .blockLeft .blockImg {
        margin: auto;
        width: 100%;
        border: 0;
        position: relative;
    }

    .blockLeft .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #C89446;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        left: -30px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .blockRight .blockImg {
        margin: auto;
        width: 100%;
        border: 0;
        position: relative;
    }
    .blockRight {
        flex-direction: row;
        margin: 60px 0;
    }

    .blockRight .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #C89446;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        right: -30px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
}


@media only screen and (min-width: 1160px) {
    .blockBody {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockTexte {
        width: 50%;
    }
    .blockLeft .blockImg {
        margin: 0;
        margin-right: 160px;
        width: 100%;
        border: 0;
        position: relative;
    }

    .blockLeft .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #C89446;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        left: -30px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .blockRight .blockImg {
        margin: 0;
        margin-left: 160px;
        width: 100%;
        border: 0;
        position: relative;
    }
    .blockRight {
        flex-direction: row;
        margin: 60px 0;
    }

    .blockRight .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #C89446;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        right: -30px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
}
</style>