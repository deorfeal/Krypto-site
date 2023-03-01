<template>
    <div class="exchange__column exchange-column exchange-column--first" data-aos-duration="2000" id="1"
        data-aos="fade-up">
        <div class="exchange-column__top exchange-column-top">
            <div class="exchange-column-top__row exchange-column-top-row">
                <p class="exchange-column-top-row__text">
                    Отдаёте
                </p>
                <div class="exchange-column-top-row__box exchange-column-top-row-box">
                    <div class="exchange-column-top-row-box__wrapper">
                        <p class="exchange-column-top-row-box__wrapper-min">
                            Мин: {{ firstActiveExchangeItem.min }}
                        </p>
                        <p class="exchange-column-top-row-box__wrapper-max">
                            Макс: {{ firstActiveExchangeItem.max }}
                        </p>
                    </div>
                    <img class="exchange-column-top-row-box__img" src="../../images/exchange-arrow.png" alt="arrow">
                </div>
            </div>
            <div class="exchange-column-top__info">
                <input ref="firstColumnInput" @input="this.$emit('giveInputChange', this.$refs.firstColumnInput)"
                    class="exchange-column-top__info-text exchange-column-top__info-text--first" type="number"
                    placeholder="1" onkeypress="if(this.value.length&gt;10) return false;">
                <img class="exchange-column-top__info-crypti" :src="firstActiveExchangeItem.src" alt="">
            </div>
        </div>
        <div class="exchange-column__buttons" ref="exchangeButtonFirst">
            <button @click="showAllItems" class="exchange-column__buttons-btn exchange-column__buttons-btn--active"
                id="1" type="button">
                Все
            </button>
            <button @click="showUsdItems" class="exchange-column__buttons-btn" id="2" type="button">
                USD
            </button>
            <button @click="showCoinsItems" class="exchange-column__buttons-btn" id="3" type="button">
                Coins
            </button>
            <button @click="showTokensItems" class="exchange-column__buttons-btn" id="4" type="button">
                Tokens
            </button>
        </div>
        <div class="exchange-column__wrapper">
            <ul class="exchange-column__list exchange-column-list exchange-column-list--first">
                <ExchangeItem v-for="item in firstColumnData" :id="item.id"
                    :class="'exchange-column-list__item' + firstColumnCategory[item.id - 1].category" :key="item.key"
                    :itemData="item" :ourCategories="categories" @click="this.$emit('changeItemState', item)" 
                    />
            </ul>
        </div>
    </div>
</template>

<script>

import ExchangeItem from './items-of-trade/ExchangeItem.vue'

export default {
    name: 'ExchangeColumnFirst',
    components: {
        ExchangeItem
    },
    props: ['firstColumnCategory', 'firstActiveExchangeItem'],
    data() {
        return {
            firstColumnData: [
                {
                    id: 1,
                    src: '/src/images/reserves-icon-1.svg',
                    text: 'Bitcoin BTC',
                    subText: 'BTC',
                    littleText: 'Bitcoin',
                    key: 1,
                    min: 0.02425,
                    max: 1000,
                },
                {
                    id: 2,
                    src: '/src/images/reserves-icon-2.svg',
                    text: 'Ethereum ETH',
                    subText: 'ETH',
                    littleText: 'Ethereum',
                    key: 2,
                    min: 0.14362,
                    max: 1200,
                },
                {
                    id: 3,
                    src: '/src/images/reserves-icon-3.png',
                    text: 'Binance Smart Chain BNB',
                    subText: 'BNB',
                    littleText: 'Binance',
                    key: 3,
                    min: 0.25664,
                    max: 800,
                },
                {
                    id: 4,
                    src: '/src/images/reserves-icon-4.png',
                    text: 'Binance Beacon Chain BNB',
                    subText: 'BNB',
                    littleText: 'Binance',
                    key: 4,
                    min: 0.2547,
                    max: 300,
                },
                {
                    id: 5,
                    src: '/src/images/reserves-icon-5.png',
                    text: 'Litecoin LTC',
                    subText: 'LTC',
                    littleText: 'Litecoin',
                    key: 5,
                    min: 0.2436,
                    max: 350,
                },
                {
                    id: 6,
                    src: '/src/images/reserves-icon-6.png',
                    text: 'Ripple XRP',
                    subText: 'XRP',
                    littleText: 'Ripple',
                    key: 6,
                    min: 0.34634,
                    max: 500,
                },
                {
                    id: 7,
                    src: '/src/images/reserves-icon-7.png',
                    text: 'Dash DASH',
                    subText: 'DASH',
                    littleText: 'Dash',
                    key: 7,
                    min: 0.23626,
                    max: 800,
                },
                {
                    id: 8,
                    src: '/src/images/reserves-icon-8.png',
                    text: 'Cardano ADA',
                    subText: 'ADA',
                    littleText: 'Cardano',
                    key: 8,
                    min: 0.23662,
                    max: 900,
                },
                {
                    id: 9,
                    src: '/src/images/reserves-icon-9.png',
                    text: 'Dogecoin DOGE',
                    subText: 'DOGE',
                    littleText: 'Dogecoin',
                    key: 9,
                    min: 0.26347,
                    max: 1200,
                },
                {
                    id: 10,
                    src: '/src/images/reserves-icon-10.png',
                    text: 'Polkadot DOT',
                    subText: 'DOT',
                    littleText: 'Polkadot',
                    key: 10,
                    min: 0.34623,
                    max: 1300,
                },
                {
                    id: 11,
                    src: '/src/images/reserves-icon-11.png',
                    text: 'TRON TRX',
                    subText: 'TRX',
                    littleText: 'TRON',
                    key: 11,
                    min: 0.34762,
                    max: 700,
                },
                {
                    id: 12,
                    src: '/src/images/reserves-icon-12.png',
                    text: 'Tezos XTZ',
                    subText: 'XTZ',
                    littleText: 'Tezos',
                    key: 12,
                    min: 0.34276,
                    max: 300,
                },
                {
                    id: 13,
                    src: '/src/images/reserves-icon-13.png',
                    text: 'Avalanche AVAX',
                    subText: 'AVAX',
                    littleText: 'Avalanche',
                    key: 13,
                    min: 0.3476,
                    max: 200,
                },
                {
                    id: 14,
                    src: '/src/images/reserves-icon-14.png',
                    text: 'Zcash ZEC',
                    subText: 'ZEC',
                    littleText: 'Zcash',
                    key: 14,
                    min: 0.236236,
                    max: 100,
                },
                {
                    id: 15,
                    src: '/src/images/reserves-icon-15.png',
                    text: 'Polygon MATIC',
                    subText: 'MATIC',
                    littleText: 'Polygon',
                    key: 15,
                    min: 0.236236,
                    max: 150,
                },
                {
                    id: 16,
                    src: '/src/images/reserves-icon-16.png',
                    text: 'Solana SOL',
                    subText: 'SOL',
                    littleText: 'Solana',
                    key: 16,
                    min: 0.236236,
                    max: 500,
                },
                {
                    id: 17,
                    src: '/src/images/reserves-icon-17.svg',
                    text: 'Tether USDT ERC-20',
                    subText: 'ERC-20',
                    littleText: 'Tether',
                    key: 17,
                    min: 0.236236,
                    max: 950,
                },
                {
                    id: 18,
                    src: '/src/images/reserves-icon-18.svg',
                    text: 'Tether USDT TRC-20',
                    subText: 'TRC-20',
                    littleText: 'Tether',
                    key: 18,
                    min: 0.236236,
                    max: 1100,
                },
                {
                    id: 19,
                    src: '/src/images/reserves-icon-19.png',
                    text: 'TONCOIN ERC-20',
                    subText: 'ERC-20',
                    littleText: 'TONCOIN',
                    key: 19,
                    min: 0.2362365,
                    max: 650,
                },
                {
                    id: 20,
                    src: '/src/images/reserves-icon-20.png',
                    text: 'TWT BEP-2',
                    subText: 'BEP-2',
                    littleText: 'TWT',
                    key: 20,
                    min: 0.23626,
                    max: 400,
                },
            ],
            categories: {
                allItems: true,
                usdItems: false,
                coinsItems: false,
                tokensItems: false
            }
        }
    },
    methods: {
        showAllItems(elem) {
            for (let item of this.$refs.exchangeButtonFirst.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = true
            this.categories.usdItems = false
            this.categories.coinsItems = false
            this.categories.tokensItems = false
        },
        showUsdItems(elem) {
            for (let item of this.$refs.exchangeButtonFirst.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = false
            this.categories.usdItems = true
            this.categories.coinsItems = false
            this.categories.tokensItems = false
        },
        showCoinsItems(elem) {
            for (let item of this.$refs.exchangeButtonFirst.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = false
            this.categories.usdItems = false
            this.categories.coinsItems = true
            this.categories.tokensItems = false
        },
        showTokensItems(elem) {
            for (let item of this.$refs.exchangeButtonFirst.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = false
            this.categories.usdItems = false
            this.categories.coinsItems = false
            this.categories.tokensItems = true
        },
    },
    watch: {
        // Проводим слежку за изменениями внутри нашего свойства и когда при клике меняется его внутрянка, добавляем нужному элементу активный класс, а всем остальным убираем 
        firstActiveExchangeItem: {
            handler() {
                let collectionOfExchItems = document.querySelectorAll('.exchange-column-list__item')
                for (let item of collectionOfExchItems) {
                    if (item.parentNode.classList.contains('exchange-column-list--first')) {
                        item.classList.remove('exchange-column-list__item--active')
                        if (item.id == this.firstActiveExchangeItem.id) {
                            item.classList.add('exchange-column-list__item--active')
                        }
                    }
                }
            },
            deep: true
        }
        // 
    },
    mounted() {
        // Сразу делаем активным первый элемент и делаем элемент который активный в другой колонке - неактивным 
        let collectionOfExchItems = document.querySelectorAll('.exchange-column-list__item')
        for (let item of collectionOfExchItems) {
            if (item.parentNode.classList.contains('exchange-column-list--first')) {
                if (item.id == 1) {
                    item.classList.add('exchange-column-list__item--active')
                }
            }
            if (item.parentNode.classList.contains('exchange-column-list--first')) {
                if (item.id == 2) {
                    item.classList.add('exchange-column-list__item--shadow')
                }
            }
        }
        // 
    }
}
</script>

<style>

</style>