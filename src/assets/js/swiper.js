import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
    direction: "vertical",
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
    mousewheel: {
        forceToAxis: true,
        invert: true,
    },
    init: false,
})

swiper.init()
