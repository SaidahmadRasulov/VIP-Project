<template>
    <div class="product__content">
        <div class="product__title">
            <div class="product__image">
                <img src="../img/Food.png" alt="">
                <span>{{ product.name }}</span>
            </div>
            <div class="product__control">
                <input type="number" id="orderQuantity">
                <span>{{ product.price }}</span>
            </div>
        </div>
        <div class="product__input">
            <input type="text" placeholder="Order Note...">
            <button class="btn__delete">
                <i class="bx bx-trash"></i>
            </button>
        </div>
    </div>
</template>
<script>
const orderQuantity = document.getElementById("orderQuantity")
// const orderQuantityValue = orderQuantity.value;

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .product__control{
        span{
            color: white;
        }
    }
</style>