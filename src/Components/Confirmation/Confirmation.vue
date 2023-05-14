<template>
    <div class="custom__flex">
        <div class="confirmation__container">
            <i class="bx bx-left-arrow-alt hide__btn" @click="setState"></i>
            <div class="confirmation__title">
                <h1>Confirmation</h1>
                <span>Orders #{{ orders }}</span>
            </div>
            <div class="two__border not_date">
                <div class="products__container" v-for="product in ordersArray" v-if="ordersArray.length > 0">
                    <div class="product__content custom__product__content">
                        <div class="product__title">
                            <div class="product__image">
                                <img src="../img/Food.png" alt="">
                                <span class="product__slice">{{ product.name }}</span>
                            </div>
                            <div class="product__control">
                                <input type="number" id="orderQuantity" :maxlength="2">
                                <span>{{ product.price }}</span>
                            </div>
                        </div>
                        <div class="product__input confirmation__product_input">
                            <input type="text" placeholder="Order Note...">
                            <button class="btn__delete" @click="handleDelete()">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="products__container" v-else>
                    <h1 class="text__center">Not Date</h1>
                </div>

            </div>
        </div>
        <div class="vertical__line"></div>
        <div class="payment__container">
            <Payment v-bind:discount="discount" v-bind:total="total" />
        </div>
    </div>
</template>
<script>
import SidebarProduct from '../SidebarProduct/SidebarProduct.vue';
import Payment from '../Payment/Payment.vue'

export default {
    data() {
        return {
            state: true
        };
    },
    props: {
        ordersArray: {
            type: Array,
            required: true
        },
        orders: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
    },
    methods: {
        setState() {
            this.$emit("setState");
        },
        handleDelete() {
            this.$emit('delete', this.id)
        },
    },
    mounted() {
        console.log(this.ordersArray)
    },
    components: { SidebarProduct, Payment }
}
</script>
<style lang="scss">
.confirmation__container {
    width: 80%;
}

.two__border {
    border: none;
    border-top: 1px solid #393C49;
    border-bottom: 1px solid #393C49;
    margin: 3.5014005602240896vh 0;
}

.not_date {
    height: 56.022408963585434vh;
    overflow-y: scroll;
}

.hide__btn {
    color: white;
    font-size: 4.5210084033613445vh !important;
    cursor: pointer;
}

.confirmation__title {
    color: white;

    h1 {
        margin-bottom: 1.641456582633053vh;
    }

    span {
        margin: 3.641456582633053vh 0;
    }
}

.custom__flex {
    display: flex;
    justify-content: space-between;
    gap: 2.0833333333333335vw;
    width: 70%;
    position: absolute;
    left: 30%;
    background-color: #1f1d2b;
    border-radius: 20px 0 0 20px;
    padding: 2.2408963585434174vh 1.0416666666666667vw;
    height: 100%;
}

.payment__container {
    padding: 4.641456582633053vh 1.0416666666666667vw;
    width: 100%;
}

.vertical__line {
    height: 80vh;
    width: 0.13020833333333334vw;
    background-color: #393C49;
}

.confirmation__product_input {
    display: flex;
}

.custom__product__content {
    width: 26.296875vw;

    .product__control {
        span {
            font-size: 2.2011204481792715vh;
        }
    }

    .btn__delete {
        font-size: 2.2011204481792715vh;
    }
}</style>