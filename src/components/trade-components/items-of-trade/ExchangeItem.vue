<template>
    <li ref="ourItem">
        <div class="exchange-column-list__box">
            <img class="exchange-column-list__box-img" :src="itemData.src" alt="icon">
            <p class="exchange-column-list__box-text">
                {{ itemData.text }}
            </p>
        </div>
        <img class="exchange-column-list__active" src="../../../images/exchange-active-arronw.png" alt="active-arrow">
    </li>
</template>

<script>
export default {
    name: 'ExchangeItem',
    props: ['itemData', 'ourCategories'],
    data() {
        return {
        }
    },
    watch: {
        ourCategories: {
            handler() {
                if (this.ourCategories.allItems) {
                    if (this.$refs.ourItem.classList.contains('all')) {
                        this.$refs.ourItem.classList.remove('exchange-column-list__item--disabled')
                    } else {
                        this.$refs.ourItem.classList.add('exchange-column-list__item--disabled')
                    }
                }

                if (this.ourCategories.usdItems) {
                    if (this.$refs.ourItem.classList.contains('usd')) {
                        this.$refs.ourItem.classList.remove('exchange-column-list__item--disabled')
                    } else {
                        this.$refs.ourItem.classList.add('exchange-column-list__item--disabled')
                    }
                }

                if (this.ourCategories.coinsItems) {
                    if (this.$refs.ourItem.classList.contains('coins')) {
                        this.$refs.ourItem.classList.remove('exchange-column-list__item--disabled')
                    } else {
                        this.$refs.ourItem.classList.add('exchange-column-list__item--disabled')
                    }
                }

                if (this.ourCategories.tokensItems) {
                    if (this.$refs.ourItem.classList.contains('tokens')) {
                        this.$refs.ourItem.classList.remove('exchange-column-list__item--disabled')
                    } else {
                        this.$refs.ourItem.classList.add('exchange-column-list__item--disabled')
                    }
                }
            },
            deep: true
        }
    },
}
</script>

<style>

</style>