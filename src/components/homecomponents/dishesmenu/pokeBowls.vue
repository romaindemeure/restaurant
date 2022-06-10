<template>
<div class="container">
    <div class="menuSummary">

        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/crusted-chicken-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Poké-bowls 1</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt ducimus pariatur recusandae culpa, Numquam est quod.</p>
                <div class="menuSummaryPrice">15,30€</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/bobun-light-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Poké-bowls 2</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur corporis quidem enim nulla cumque quia, perferendis aliquid nostrum iusto vitae aliqua</p>
                <div class="menuSummaryPrice">13€</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/poisson-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Poké-bowls 3</h3>
                <p class="menuSummaryText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eveniet expedita quasi minus sapiente ea, ad cum quidem cumque, veritatis error hic assumenda!</p>
                <div class="menuSummaryPrice">10,30€</div>
            </div>

        </div>
        
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/paella-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Poké-bowls 4</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, animi? Placeat ullam corporis magni. facilis rem excepturi placeat eveniet laborum ratione!</p>
                <div class="menuSummaryPrice">11.50€</div>
            </div>

        </div>

    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
    .container {
        padding-top: 40px;
    }
    .menuSummaryItem {
        padding: 0px 20px;
        margin-bottom: 40px;
    }

    .menuSummaryTitle {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 23px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 20px;
    }

    .menuSummaryText {
        font-weight: 400;
        line-height: 24px;
        color: #6F6F6F;
    }

    .menuSummaryPrice {
        font-family: 'Pinyon Script', serif;
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 50px;
        color: #C89446;
        letter-spacing: -5px;
    }

    .menuSummaryImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 2px;
    }

    @media only screen and (min-width: 500px) {

        .menuSummaryItem {
            display: flex;
            justify-content: center;
        }
        .menuSummaryflex {
            display: flex;
            flex-direction: column;
        }

        .menuSummaryImg {
            margin-left: 0;
            margin-right: 0;
            height: 100%;
            width: auto;
            margin: 0 20px;
        }

        .menuSummaryTitle {
            margin: 0;
        }
    }

    @media only screen and (min-width: 1000px) {

        .container {
            max-width: 1450px;
            margin: 0 auto;
        }
        .menuSummary {
            display: flex;
            flex-wrap: wrap;
            padding: 15px;
        }
        .menuSummaryItem {
            width: 50%;
            padding: 0;
            padding-bottom: 50px;
        }

        .menuSummaryImg {
            width: 160px;
            height: 160px;
        }

        .menuSummaryflex {
            margin: 0 5px;
            margin-right: 100px;
        }

        .menuItemRight {
            flex-direction: row-reverse;
        }

        .menuItemRight .menuSummaryflex {
            text-align: right;
        }

        .menuItemRight .menuSummaryflex {
            margin-left: 100px;
            margin-right: 0;
        }
        .menuSummaryLast {
            padding: 0;
            margin: 0;
        }
    }
</style>