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
                    <div class="products__content" v-if="products.length > 0">
                        <ProductItem @handleArrayPush="handleAddToOrders" v-for="product in products" v-bind:product="product" />
                    </div>
                    <div class="products__content" v-else>
                        <h1>Not Date</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="home__sidebar">
            <h1 class="sidebar__title">Orders #{{ orders }}</h1>
            <div class="sidebar__btns">
                <button>Dine In</button>
                <button>To Go</button>
                <button>Delivery</button>
            </div>
            <div class="sidebar__navbar">
                <span>Item</span>
                <div class="sidebar__navbar_group">
                    <span>Qty</span>
                    <span>Price</span>
                </div>
            </div>
            <div class="container sidebar__container">
                <SidebarProduct @delete="handleDelete" v-bind:products="ordersArray" />
            </div>
        </section>
    </div>
</template>
<script>

import ProductItem from '../ProductItem/ProductItem.vue';
import SidebarProduct from '../SidebarProduct/SidebarProduct.vue';
import moment from 'moment'

export default {
    data() {
        return {
            ordersArray: []
        }
    },
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
        },
        productsProps() {
            return {
                products: [...this.products]
            }
        }
    },
    methods: {
        handleDelete(id) {
            this.ordersArray.splice(id, 1)
        },
        handleAddToOrders(product) {
            // products.map((item) => {
            //     if(item)
            // })
            // console.log(product)
            this.ordersArray.push(product);
            console.log(this.ordersArray)
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
    .sidebar__navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 3.5014005602240896vh 0;
        font-size: 2.5vh;
        color: white;
        .sidebar__navbar_group {
            display: flex;
            gap: 3.0416666666666667vw;
        }
    }
    .sidebar__btns {
        margin: 4.901960784313726vh 0;
        display: flex;
        gap:  1.0416666666666667vw;
        button {
            width: 5.208333333333333vw;
            height: 4.901960784313726vh;
            font-size: 2.2408963585434174vh;
        }
    }
}
.sidebar__container {
    border: 1px solid #393C49;
    border-left: none;
    border-right: none;
    height: 52.01960784313726vh;
    overflow-y: scroll;
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