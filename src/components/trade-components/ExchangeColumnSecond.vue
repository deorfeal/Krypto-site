<template>
    <div class="exchange__column exchange-column exchange-column--second" data-aos-duration="2000" id="2"
        data-aos="fade-up">
        <div class="exchange-column__top exchange-column-top">
            <div class="exchange-column-top__row exchange-column-top-row">
                <p class="exchange-column-top-row__text">
                    Получите
                </p>
                <div class="exchange-column-top-row__box exchange-column-top-row-box">
                    <div class="exchange-column-top-row-box__wrapper">
                        <p class="exchange-column-top-row-box__wrapper-text">
                            Резевр:
                            <span class="exchange-column-top-row-box__wrapper-text--digits">{{ secondActiveExchangeItem.reserve }}
                                {{secondActiveExchangeItem.subText}}</span>
                        </p>
                    </div>
                    <img class="exchange-column-top-row-box__img" src="../../images/exchange-arrow.png" alt="arrow">
                </div>
            </div>
            <div class="exchange-column-top__info">
                <input class="exchange-column-top__info-text exchange-column-top__info-text--second" type="number"
                    disabled placeholder="11.389081">
                <img class="exchange-column-top__info-crypti" :src="secondActiveExchangeItem.src" alt="">
            </div>
        </div>
        <div class="exchange-column__buttons" ref="exchangeButtonSecond">
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
            <ul class="exchange-column__list exchange-column-list exchange-column-list--second">
                <ExchangeItem v-for="item in secondColumnData" :id="item.id"
                    :class="'exchange-column-list__item' + secondColumnCategory[item.id - 1].category" :key="item.key"
                    :itemData="item" :ourCategories="categories" @click="this.$emit('changeItemState', item)" />
            </ul>
        </div>
    </div>
</template>

<script>
import ExchangeItem from './items-of-trade/ExchangeItem.vue'
export default {
    name: 'ExchangeColumnSecond',
    components: {
        ExchangeItem
    },
    props: ['secondColumnCategory', 'secondActiveExchangeItem'],
    data() {
        return {
            secondColumnData: [
                {
                    id: 1,
                    src: '/src/images/reserves-icon-1.svg',
                    text: 'Bitcoin BTC',
                    subText: 'BTC',
                    littleText: 'Bitcoin',
                    key: 1,
                    reserve: "4243.05"
                },
                {
                    id: 2,
                    src: '/src/images/reserves-icon-2.svg',
                    text: 'Ethereum ETH',
                    subText: 'ETH',
                    littleText: 'Ethereum',
                    key: 2,
                    reserve: "4275.35"
                },
                {
                    id: 3,
                    src: '/src/images/reserves-icon-3.png',
                    text: 'Binance Smart Chain BNB',
                    subText: 'BNB',
                    littleText: 'Binance',
                    key: 3,
                    reserve: "4244.084"
                },
                {
                    id: 4,
                    src: '/src/images/reserves-icon-4.png',
                    text: 'Binance Beacon Chain BNB',
                    subText: 'BNB',
                    littleText: 'Binance',
                    key: 4,
                    reserve: "4241.07"
                },
                {
                    id: 5,
                    src: '/src/images/reserves-icon-5.png',
                    text: 'Litecoin LTC',
                    subText: 'LTC',
                    littleText: 'Litecoin',
                    key: 5,
                    reserve: "4293.03"
                },
                {
                    id: 6,
                    src: '/src/images/reserves-icon-6.png',
                    text: 'Ripple XRP',
                    subText: 'XRP',
                    littleText: 'Ripple',
                    key: 6,
                    reserve: "4223.15"
                },
                {
                    id: 7,
                    src: '/src/images/reserves-icon-7.png',
                    text: 'Dash DASH',
                    subText: 'DASH',
                    littleText: 'Dash',
                    key: 7,
                    reserve: "4273.275"
                },
                {
                    id: 8,
                    src: '/src/images/reserves-icon-8.png',
                    text: 'Cardano ADA',
                    subText: 'ADA',
                    littleText: 'Cardano',
                    key: 8,
                    reserve: "4273.045"
                },
                {
                    id: 9,
                    src: '/src/images/reserves-icon-9.png',
                    text: 'Dogecoin DOGE',
                    subText: 'DOGE',
                    littleText: 'Dogecoin',
                    key: 9,
                    reserve: "243.45"
                },
                {
                    id: 10,
                    src: '/src/images/reserves-icon-10.png',
                    text: 'Polkadot DOT',
                    subText: 'DOT',
                    littleText: 'Polkadot',
                    key: 10,
                    reserve: "4245.35"
                },
                {
                    id: 11,
                    src: '/src/images/reserves-icon-11.png',
                    text: 'TRON TRX',
                    subText: 'TRX',
                    littleText: 'TRON',
                    key: 11,
                    reserve: "4133.25"
                },
                {
                    id: 12,
                    src: '/src/images/reserves-icon-12.png',
                    text: 'Tezos XTZ',
                    subText: 'XTZ',
                    littleText: 'Tezos',
                    key: 12,
                    reserve: "4163.45"
                },
                {
                    id: 13,
                    src: '/src/images/reserves-icon-13.png',
                    text: 'Avalanche AVAX',
                    subText: 'AVAX',
                    littleText: 'Avalanche',
                    key: 13,
                    reserve: "1235.055"
                },
                {
                    id: 14,
                    src: '/src/images/reserves-icon-14.png',
                    text: 'Zcash ZEC',
                    subText: 'ZEC',
                    littleText: 'Zcash',
                    key: 14,
                    reserve: "4153.045"
                },
                {
                    id: 15,
                    src: '/src/images/reserves-icon-15.png',
                    text: 'Polygon MATIC',
                    subText: 'MATIC',
                    littleText: 'Polygon',
                    key: 15,
                    reserve: "4226.055"
                },
                {
                    id: 16,
                    src: '/src/images/reserves-icon-16.png',
                    text: 'Solana SOL',
                    subText: 'SOL',
                    littleText: 'Solana',
                    key: 16,
                    reserve: "4286.045"
                },
                {
                    id: 17,
                    src: '/src/images/reserves-icon-17.svg',
                    text: 'Tether USDT ERC-20',
                    subText: 'ERC-20',
                    littleText: 'Tether',
                    key: 17,
                    reserve: "4383.055"
                },
                {
                    id: 18,
                    src: '/src/images/reserves-icon-18.svg',
                    text: 'Tether USDT TRC-20',
                    subText: 'TRC-20',
                    littleText: 'Tether',
                    key: 18,
                    reserve: "424.065"
                },
                {
                    id: 19,
                    src: '/src/images/reserves-icon-19.png',
                    text: 'TONCOIN ERC-20',
                    subText: 'ERC-20',
                    littleText: 'TONCOIN',
                    key: 19,
                    reserve: "42383.055"
                },
                {
                    id: 20,
                    src: '/src/images/reserves-icon-20.png',
                    text: 'TWT BEP-2',
                    subText: 'BEP-2',
                    littleText: 'TWT',
                    key: 20,
                    reserve: "4238.55"
                },
                {
                    id: 21,
                    src: '/src/images/reserves-icon-21.svg',
                    text: 'Visa/Mastercard USD',
                    subText: 'USD',
                    littleText: 'Visa',
                    key: 21,
                    reserve: "4153.55"

                },
                {
                    id: 22,
                    src: '/src/images/reserves-icon-21.svg',
                    text: 'Visa/Mastercard EUR',
                    subText: 'EUR',
                    littleText: 'Visa',
                    key: 22,
                    reserve: "2243.25"
                },
                {
                    id: 23,
                    src: '/src/images/reserves-icon-21.svg',
                    text: 'Visa/Mastercard KZT',
                    subText: 'KZT',
                    littleText: 'Visa',
                    key: 23,
                    reserve: "2743.45"
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
            for (let item of this.$refs.exchangeButtonSecond.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = true
            this.categories.usdItems = false
            this.categories.coinsItems = false
            this.categories.tokensItems = false
        },
        showUsdItems(elem) {
            for (let item of this.$refs.exchangeButtonSecond.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = false
            this.categories.usdItems = true
            this.categories.coinsItems = false
            this.categories.tokensItems = false
        },
        showCoinsItems(elem) {
            for (let item of this.$refs.exchangeButtonSecond.childNodes) {
                item.classList.remove('exchange-column__buttons-btn--active')
            }
            elem.currentTarget.classList.add('exchange-column__buttons-btn--active')
            this.categories.allItems = false
            this.categories.usdItems = false
            this.categories.coinsItems = true
            this.categories.tokensItems = false
        },
        showTokensItems(elem) {
            for (let item of this.$refs.exchangeButtonSecond.childNodes) {
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
        secondActiveExchangeItem: {
            handler() {
                let collectionOfExchItems = document.querySelectorAll('.exchange-column-list__item')
                for (let item of collectionOfExchItems) {
                    if (item.parentNode.classList.contains('exchange-column-list--second')) {
                        item.classList.remove('exchange-column-list__item--active')
                        if (item.id == this.secondActiveExchangeItem.id) {
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
            if (item.parentNode.classList.contains('exchange-column-list--second')) {
                if (item.id == 2) {
                    item.classList.add('exchange-column-list__item--active')
                }
            }
            if (item.parentNode.classList.contains('exchange-column-list--second')) {
                if (item.id == 1) {
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