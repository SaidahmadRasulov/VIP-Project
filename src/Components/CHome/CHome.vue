<template >
    <div class="home__flex__container">
        <section class="home__section">
            <div class="container">
                <div class="home__title">
                    <div class="home__title_text">
                        <h1>VIP Burger</h1>
                        <h3>{{formattedDate}}</h3>
                    </div>
                    <div class="home__title_input">
                        <input type="text" placeholder="Search for food, coffe, etc..">
                        <i class="bx bx-search"></i>
                    </div>
                </div>
                <div class="home__content">
                    <div class="home__navbar">
                        <h1>Home Navbar</h1>
                    </div>
                    <div class="products__content">
                        <ProductItem v-for="product in products" v-bind:product="product" />
                    </div>
                </div>
            </div>
        </section>
        <section class="home__sidebar">
            <h1 class="sidebar__title">Orders #{{ orders }}</h1>
            <div class="sidebar__btns">

            </div>
            <div class="container">
                <SidebarProduct v-for="product in products" v-bind:product="product" />
            </div>
        </section>
    </div>
</template>
<script>

import ProductItem from '../ProductItem/ProductItem.vue';
import SidebarProduct from '../SidebarProduct/SidebarProduct.vue';
import moment from 'moment'

export default {
    components: {
        ProductItem,
        SidebarProduct
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        orders: {
            type: Number,
            required: true
        }
        
    },
    computed: {
        formattedDate(){
            return moment(this.date).format("dddd D MMM, YYYY");
        }
    }
}
</script>
<style lang="scss">
.home__flex__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.home__section {
    width: 100%;
    background-color: #252836;
    padding: 6.722689075630252vh 2.2408963585434174vh 2.2408963585434174vh 2.2408963585434174vh;
    .home__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        h1 {
            font-size: 3.9215686274509802vh;
        }
        h3 {
            margin-top: 1.4005602240896358vh;
            color: #E0E6E9;
            font-weight: 400;
            font-size:  2.2408963585434174vh;
        }
    }
    .home__navbar {
        height: 28.011204481792717vh;
        h1 {
            font-size: 2.5210084033613445vh;
        }
    }
    .home__title_input {
        position: relative;
        input {
            width: 15vw;
            height: 6.722689075630252vh;
            background: #2D303E;
            border: 0.06510416666666667vw solid #393C49;
            border-radius: 0.5208333333333334vw;
            font-size:  0.9114583333333334vw;
            padding: 0 1.4005602240896358vh 0 5.100840336134454vh;
            color: white;
            outline: none;
        }
        .bx-search {
            position: absolute;
            left: 0.7765625vw;
            font-size: 2.5210084033613445vh;
            top: 50%;
            transform: translateY(-50%);
            color: white;
        }
    }
    .products__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}
.home__sidebar {
    width: 39.0625vw;
    background: #1F1D2B;
    padding: 6.722689075630252vh 2.2408963585434174vh 2.2408963585434174vh 2.2408963585434174vh;
    .sidebar__title {
        font-size: 2.8011204481792715vh;
        font-weight: 400;
        color: white;
    }
}

@media (min-width: 0px) and (max-width: 520px) {
    .home__sidebar {
        display: none;
    }
    .home__section {
        .home__title {
            flex-direction: column;
            align-items: flex-start;
            gap: 2.2408963585434174vh;
            margin-bottom:  4.901960784313726vh;
        }
        .home__title_input {
            width: 100%;
            input {
                width: 100%;
                font-size: 1.8011204481792715vh;
            }
        }
        .products__content {
            flex-wrap: wrap;
        }
    }
}

</style>