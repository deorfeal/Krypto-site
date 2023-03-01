<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__arr" data-aos="fade-up">
                    <a class="header__logo logo" href="#">
                        <img class="logo-img" src="../images/logo.png" alt="logo">
                        <a class="footer__inner-arrow" href="#header" style="display: none;" id="footer__arrow">
                            <img src="../images/footer-arrow.png" alt="arrow">
                            <p>Наверх</p>
                        </a>
                    </a>
                </div>
                <div class="footer__box footer-box" data-aos="fade-up">
                    <img class="footer-box__img" src="../images/footer-tg.png" alt="img">
                    <div class="footer-box__column">
                        <p class="footer-box__column-text">
                            Центр поддержки
                        </p>
                        <a class="footer-box__column-link" href="#">
                            Пишите в Telegram по любым вопросам
                        </a>
                    </div>
                </div>
                <div class="footer__box footer-box" data-aos="fade-up">
                    <img class="footer-box__img" src="../images/footer-mail.png" alt="img">
                    <div class="footer-box__column">
                        <p class="footer-box__column-text">
                            Связь по E-mail
                        </p>
                        <a class="footer-box__column-link" href="mailto:support@goldencash.app">
                            support@goldencash.app
                        </a>
                    </div>
                </div>
                <a class="footer__inner-arrow" href="#header" data-aos="fade-up" id="footer__arrow">
                    <img src="../images/footer-arrow.png" alt="arrow">
                    <p>Наверх</p>
                </a>
            </div>
            <p class="footer__copy" data-aos="fade-up">
                2019-2023. GoldenCash Exchange. All rights reserved.©
            </p>
        </div>
    </footer>
</template>

<script>

export default {
    name: "Footer",
    data() {
        return {

        }
    }
}

</script>

<style lang="scss">

</style>