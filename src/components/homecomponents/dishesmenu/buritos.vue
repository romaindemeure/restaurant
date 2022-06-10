<template>
<div class="container">
    <div class="menuSummary">

        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/crusted-chicken-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Buritos 1</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium voluptatibus necessitatibus. Blanditiis tempore laboriosam ea inventore quaerat.</p>
                <div class="menuSummaryPrice">9,30€</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/bobun-light-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Buritos 2</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis officiis, nemo possimus beatae esse.</p>
                <div class="menuSummaryPrice">8,30€</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/poisson-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Buritos 3</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis aliquam repellat ipsam earum esse consequatur dolores ab pariatur! Architecto vero nesciunt perferendis.</p>
                <div class="menuSummaryPrice">15€</div>
            </div>

        </div>
        
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/paella-square.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Buritos 4</h3>
                <p class="menuSummaryText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quibusdam iure vitae quas laborum non neque commod.</p>
                <div class="menuSummaryPrice">11€</div>
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