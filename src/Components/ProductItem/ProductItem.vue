<template>
    <div class="card">
        <div class="card__header">  
            <img src="../img/Food.png" alt="rasm-bor">
        </div>
        <div class="card__body">
            <p>{{ product.name }}</p>
            <p>$ {{ product.price }}</p>
        </div>
        <div class="card__footer">
            <p class="gray__p">{{ product.bowl }} Bowls avaible</p>
        </div>
    </div>
</template>
<script>


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
    .card {
        width: 19.53125vw;
        height: 42.016806722689076vh;
        background-color: #1F1D2B;
        border-radius: 1.0416666666666667vw;
        margin-bottom: 14.005602240896359vh;
        .card__header {
            width:  9.765625vw;
            height: 21.008403361344538vh;
            transform: translateY(-50%);
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .card__body {
            text-align: center;
            p {
                width:  9.765625vw;
                margin:  0.4005602240896358vh auto 1.4005602240896358vh auto;
                font-size: 1.9607843137254901vh;
                color: white;
            }
        }
        .card__footer {
            text-align: center;
            margin: 3.4005602240896358vh 0;
        }
        .gray__p {
            color: gray;
            font-size: 1.9607843137254901vh;
        }
    }

    @media (min-width: 0px) and (max-width: 520px) {
        .card {
            width: 90%;
            margin: 0 auto;
            margin-bottom: 21.008403361344538vh;
            .card__header {
                width: 50%;
                height: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .card__body {
                p {
                    width: 100%;
                }
            }
        }
    }
</style>