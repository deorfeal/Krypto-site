<template>
    <div class="main__exchange exchange">
        <div class="container">
            <div class="main-exchange__inner">
                <ExchangeColumnFirst :firstColumnCategory="firstColumn" @changeItemState="changeFirstElementsStates"
                    :firstActiveExchangeItem="firstActiveExchangeItem" @giveInputChange="giveInputValue" />

                <ExchangeColumnSecond :secondColumnCategory="secondColumn"
                    :secondActiveExchangeItem="secondActiveExchangeItem" @changeItemState="changeSecodElementsStates" />

                <ExchangeColumnData :firstCrypto="firstActiveExchangeItem" :secondCrypto="secondActiveExchangeItem"
                    :firstColumnInputValue="firstColumnInputValue" />
            </div>
        </div>
    </div>
</template>

<script>

import ExchangeColumnFirst from './trade-components/ExchangeColumnFirst.vue'
import ExchangeColumnSecond from './trade-components/ExchangeColumnSecond.vue'
import ExchangeColumnData from './trade-components/ExchangeData.vue'

export default {
    name: 'Trade',
    components: {
        ExchangeColumnFirst,
        ExchangeColumnSecond,
        ExchangeColumnData,
    },
    data() {
        return {
            firstColumn: [
                {
                    id: 1,
                    category: ' all usd coins tokens'
                },
                {
                    id: 2,
                    category: ' all usd coins tokens'
                },
                {
                    id: 3,
                    category: ' all'
                },
                {
                    id: 4,
                    category: ' all usd'
                },
                {
                    id: 5,
                    category: ' all usd'
                },
                {
                    id: 6,
                    category: ' all usd'
                },
                {
                    id: 7,
                    category: ' all usd'
                },
                {
                    id: 8,
                    category: ' all'
                },
                {
                    id: 9,
                    category: ' all tokens'
                },
                {
                    id: 10,
                    category: ' all tokens'
                },
                {
                    id: 11,
                    category: ' all tokens'
                },
                {
                    id: 12,
                    category: ' all tokens'
                },
                {
                    id: 13,
                    category: ' all tokens'
                },
                {
                    id: 14,
                    category: ' all tokens'
                },
                {
                    id: 15,
                    category: ' all'
                },
                {
                    id: 16,
                    category: ' all coins'
                },
                {
                    id: 17,
                    category: ' all coins'
                },
                {
                    id: 18,
                    category: ' all coins'
                },
                {
                    id: 19,
                    category: ' all coins'
                },
                {
                    id: 20,
                    category: ' all'
                },
            ],
            secondColumn: [
                {
                    id: 1,
                    category: ' all usd coins tokens'
                },
                {
                    id: 2,
                    category: ' all usd coins tokens'
                },
                {
                    id: 3,
                    category: ' all'
                },
                {
                    id: 4,
                    category: ' all usd'
                },
                {
                    id: 5,
                    category: ' all usd'
                },
                {
                    id: 6,
                    category: ' all usd'
                },
                {
                    id: 7,
                    category: ' all usd'
                },
                {
                    id: 8,
                    category: ' all'
                },
                {
                    id: 9,
                    category: ' all tokens'
                },
                {
                    id: 10,
                    category: ' all tokens'
                },
                {
                    id: 11,
                    category: ' all tokens'
                },
                {
                    id: 12,
                    category: ' all tokens'
                },
                {
                    id: 13,
                    category: ' all tokens'
                },
                {
                    id: 14,
                    category: ' all tokens'
                },
                {
                    id: 15,
                    category: ' all'
                },
                {
                    id: 16,
                    category: ' all coins'
                },
                {
                    id: 17,
                    category: ' all coins'
                },
                {
                    id: 18,
                    category: ' all coins'
                },
                {
                    id: 19,
                    category: ' all coins'
                },
                {
                    id: 20,
                    category: ' all'
                },
                {
                    id: 21,
                    category: ' all'
                },
                {
                    id: 22,
                    category: ' all'
                },
                {
                    id: 23,
                    category: ' all'
                },
            ],
            firstActiveExchangeItem: {
                id: 1,
                src: '/src/images/reserves-icon-1.svg',
                text: 'Bitcoin BTC',
                subText: 'BTC',
                littleText: 'Bitcoin',
                key: 1,
                min: 0.02425,
                max: 1000,
            },
            secondActiveExchangeItem: {
                id: 2,
                src: '/src/images/reserves-icon-2.svg',
                text: 'Ethereum ETH',
                subText: 'ETH',
                littleText: 'Ethereum',
                reserve: "4275.35",
                key: 2,
            },
            firstColumnInputValue: '1',
        }
    },
    methods: {
        changeFirstElementsStates(properties) {
            // Делаем наш элемент активным на этой основе добавляем разные значения другим элементам в первой колонке ( меняем картинку выбраной валюты - поля мин макс и тд )
            this.firstActiveExchangeItem = properties
            // 
        },
        changeSecodElementsStates(properties) {
            // Делаем наш элемент активным на этой основе добавляем разные значения другим элементам в первой колонке ( меняем картинку выбраной валюты - поля мин макс и тд )
            this.secondActiveExchangeItem = properties
            // 
        },
        giveInputValue(input) {
            this.firstColumnInputValue = input.value
        }
    },
    watch: {
        // При клике на элемент - удаляем его с второй колонки ( что бы не было бага с обменом одной и той же валютой )
        firstActiveExchangeItem: {
            handler() {
                let collectionOfExchItems = document.querySelectorAll('.exchange-column-list__item')
                for (let item of collectionOfExchItems) {
                    if (item.parentNode.classList.contains('exchange-column-list--second')) {
                        item.classList.remove('exchange-column-list__item--shadow')
                        if (this.firstActiveExchangeItem.id == item.id) {
                            item.classList.add('exchange-column-list__item--shadow')
                        }
                    }
                }
            },
            deep: true
        },
        // 

        // При клике на элемент - удаляем его с первой колонки ( что бы не было бага с обменом одной и той же валютой )
        secondActiveExchangeItem: {
            handler() {
                let collectionOfExchItems = document.querySelectorAll('.exchange-column-list__item')
                for (let item of collectionOfExchItems) {
                    if (item.parentNode.classList.contains('exchange-column-list--first')) {
                        item.classList.remove('exchange-column-list__item--shadow')
                        if (this.secondActiveExchangeItem.id == item.id) {
                            item.classList.add('exchange-column-list__item--shadow')
                        }
                    }
                }
            },
            deep: true
        },
        // 
    },
}
</script>

<style>

</style>