<template>
    <section class="mainSection">
        <div class="containerSmall">
            <div class="block blockLeft">

                <div class="blockBody">
                    <h1 class="textFirst">Découvrez</h1>
                    <h2 class="textSecond">Votre Gastronomie</h2>
                    <p class="textDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque odit doloribus nisi. Nisi voluptatum id laboriosam neque, sed iure nemo ipsa quasi, aspernatur saepe voluptatibus! Quos, placeat est. Totam!
                    </p>
                    <h3 class="textSeeMore">voir plus</h3>
                </div>

                <div class="blockImg">
                    <img class="img" src="/images/burger.jpg" alt="">
                </div>

            </div>

            <div class="block blockRight">

                <div class="blockBody">
                    <h1 class="textFirst">De bon goût</h1>
                    <h2 class="textSecond">Des recettes faites avec passion</h2>
                    <p class="textDescription">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fugiat eligendi enim praesentium sed quasi, vel ut voluptates. Quaerat, qui! Unde labore debitis autem quod neque incidunt obcaecati qui officia.
                    </p>
                    <h3 class="textSeeMore">voir plus</h3>
                </div>

                <div class="blockImg">
                    <img class="img" src="/images/crusted-chicken.jpg" alt="">
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
    
</script>

<style scoped>
.mainSection {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.block {
    margin: 20px 0;
}

.blockBody {
    padding: 10px;
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

.textSeeMore {
    color: #C89446;
    line-height: 26px;
    font-weight: 400;
}

.textSeeMore::after {
    content: ' >';
}

.textSeeMore:hover {
    text-decoration: underline;
    cursor: pointer;
}

.blockImg {
    max-width: 350px;
    margin: 0 auto;
    border: 1px solid #C89446;
    border-radius: 3px;
}
.blockImg .img{
    display: block;
}

@media only screen and (min-width: 850px) {
    .block {
        margin: 60px 0;
    }

    .blockLeft {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockImg {
        border: none;
        position: relative;
    }
    .blockLeft .blockImg {
        width: 350px;
        flex: none;
        margin-left: 30px;
    }

    .blockLeft .blockBody {
        margin-left: 94px;
    }

    .blockRight {
        display: flex;
        align-items: center;
    }

    .blockRight .blockImg {
        width: 350px;
        flex: none;
        margin-right: 30px;
    }

    .blockRight .blockBody {
        margin-right: 94px;
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

    .blockImg img {
        position: relative;
        z-index: 1;
    }
}
</style>