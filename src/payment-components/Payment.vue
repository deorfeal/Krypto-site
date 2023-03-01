<template>
    <div class="wrapper">
        <main class="main main-payment">
            <section class="main__payment payment">
                <div class="container">
                    <div class="payment__inner">
                        <div class="payment__box payment-box">
                            <h1 class="payment-box__title title" data-aos="fade-up" data-aos-duration="500">
                                Ожидание оплаты
                            </h1>
                            <div class="payment-box__item payment-box-item">
                                <p class="payment-box-item__text" data-aos="fade-up" data-aos-duration="750">
                                    Переведите 1.781567355 BTC
                                </p>
                                <div class="payment-box-item__box">
                                    <input value="1.781567355"
                                        class="payment-box-item__box-text payment-box-item__box-text--first"
                                        data-aos="fade-up" data-aos-duration="750" id="myin1">
                                    <button class="payment-box-item__box-button" type="button" data-aos="fade-up"
                                        data-aos-duration="750">
                                        <img class="payment-box-item__box-button-img payment-box-item__box-button--first"
                                            src="../../.././src/images/payment-copy-icon.png" alt="copy-icon">
                                    </button>
                                </div>
                            </div>
                            <div class="payment-box__item payment-box-item">
                                <p class="payment-box-item__text" data-aos="fade-up" data-aos-duration="1250">
                                    На кошелёк
                                </p>
                                <div class="payment-box-item__box">
                                    <input value="bc1qm3pe5u723p79828qcr0t6sr2dq0ng3l28l4q5v"
                                        class="payment-box-item__box-text payment-box-item__box-text--second"
                                        data-aos="fade-up" data-aos-duration="1250" id="myin2">
                                    <button class="payment-box-item__box-button" type="button" data-aos="fade-up"
                                        data-aos-duration="1250">
                                        <img class="payment-box-item__box-button-img payment-box-item__box-button-img--second"
                                            src="../../.././src/images/payment-copy-icon.png" alt="copy-icon">
                                    </button>
                                </div>
                            </div>
                            <div class="payment-box__item payment-box-item">
                                <p class="payment-box-item__text" data-aos="fade-up" data-aos-duration="1750">
                                    Выберите сеть
                                </p>
                                <div class="payment-box-item__box">
                                    <p class="payment-box-item__box-text" data-aos="fade-up" data-aos-duration="1750">
                                        Bitcoin
                                    </p>
                                </div>
                            </div>
                            <a class="payment-box__link" href="#" data-aos="fade-up">
                                #lUZFNRF30f
                            </a>
                        </div>
                        <div class="payment__column">
                            <h2 class="payment__column-title" data-aos="fade-up">
                                QR-код
                            </h2>
                            <img class="payment__column-img" src="../.././src/images/payment-qr.png" alt="picture"
                                data-aos="fade-up">
                            <a class="payment-box__link payment-box__link-column" href="#" style="display: none;">
                                #lUZFNRF30f
                            </a>
                        </div>
                    </div>
                    <div class="payment__row payment-row" data-aos="fade-up">
                        <div class="payment-row__box payment-row-box">
                            <div class="payment-row-box__item">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42.6788 7.32123C32.9155 -2.44041 17.0845 -2.44041 7.32123 7.32123C-2.44041 17.0845 -2.44041 32.9155 7.32123 42.6788C17.0845 52.4404 32.9155 52.4404 42.6788 42.6788C52.4404 32.9155 52.4404 17.0845 42.6788 7.32123ZM35.1721 37.249C33.1528 36.0836 22.2126 29.7803 22.2126 29.7803H22.1154C22.1154 29.7803 22.1154 11.5312 22.1154 9.01081C22.1154 6.49046 26.0714 6.3998 26.0714 9.01081C26.0714 11.6218 26.0714 27.4116 26.0714 27.4116C26.0714 27.4116 34.6941 32.3056 37.1501 33.8091C39.6064 35.3122 37.1913 38.4161 35.1721 37.249Z"
                                        fill="url(#paint0_linear_119_105)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_119_105" x1="47" y1="11.5" x2="30.6476"
                                            y2="47.1132" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.285118" stop-color="#6FA0FF" />
                                            <stop offset="1" stop-color="#D868FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p class="payment-row-box__item-time">
                                    30:00
                                </p>
                            </div>
                            <p class="payment-row-box__text">
                                Оставшееся время для оплаты
                            </p>
                        </div>
                        <form class="payment-row__form" action="#">
                            <button class="payment-row__form-done" type="submit">
                                Я оплатил
                            </button>
                            <button class="payment-row__form-cancel" type="submit">
                                Отмена
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>

export default {
    name: 'Payment',
    data() {
        return {

        }
    },
    mounted() {
        let ourMinutes = 29
        let ourSeconds = 60
        setInterval(() => {
            ourSeconds--
            if (ourSeconds == 1) {
                ourMinutes--
                ourSeconds = 59
                $('.payment-row-box__item-time').text(ourMinutes + ':' + ourSeconds)
            } else if (ourSeconds < 10) {
                $('.payment-row-box__item-time').text(ourMinutes + ':' + '0' + ourSeconds)
            } else {
                $('.payment-row-box__item-time').text(ourMinutes + ':' + ourSeconds)
            }
        }, 1000);

        $('.payment-box-item__box-button--first').on('click', function (event) {
            var copyText = document.getElementById("myin1");

            copyText.select();

            document.execCommand("copy");
        });

        $('.payment-box-item__box-button-img--second').on('click', function (event) {
            var copyText = document.getElementById("myin2");

            copyText.select();

            document.execCommand("copy");
        });
    }
}

</script>

<style lang="scss">

</style>