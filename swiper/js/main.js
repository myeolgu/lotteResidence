// Swiper-paralix 작업
let swiper01 = new Swiper(".swiper-paralix", {
  loop: true,
  speed: 1000,
  watchSlidesProgress:true,
  /**
   * 
   * 
   * True의 경우
   * watchSlidesProgress는 진행 상태를 지속적으로 업데이트 됩니다.
   * 슬라이드가 자동 전환될 떄마다 진행 상태가 변경 됩니다.
   * 진행 상태를 사용하여 슬라이드 전환 중에 사용자 정의 애니메이션 효과를 추가하거나
   * 특정 동작을 수행할 수 있습니다.
   * 
   * False의 경우
   * 슬라이드의 진행 상태를 업데이트 하지 않습니다.
   * 간단한 슬라이드 쇼나 성능 최적화가 필요한 경우에는 false로 설정하여 감시를 중단할 수 있습니다.
   */
  on: {
    progress: function () {
      const slideElements = Array.from(this.slides);
      slideElements.forEach(slide => {
        const slideProgress = slide.progress;
        const innerOffset = this.width * 0.5;
        const innerTranslate = slideProgress * innerOffset;
        slide.querySelector("img").style.transform = "translateX(" + innerTranslate + "px)";
      });
    },

    setTransition: function (speed) {
      const slideEl = Array.from(this.slides);
      slideEl.forEach(slide => {
        slide.style.transition = speed + "ms";
        slide.querySelector("img").style.transition = speed + "ms";
      })
    },
  }
});

// swiper-carousel 작업
const swiper02 = new Swiper(".swiper-carousel", {
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  loopAdditionalSlides: 1,
  slidesPerView: '1.1',
  watchSlidesProgress:true,
  on: {
    progress: function () {
      const slideElements2 = Array.from(this.slides);
      slideElements2.forEach(slide => {
        const slideProgress = slide.progress;
        const innerOffset = -50;
        const innerTranslate = slideProgress * 20 + innerOffset;
        slide.querySelector("img").style.transform = "translateX(" + innerTranslate + "%)";
      });
    },

    setTransition: function (speed) {
      const slideEl = Array.from(this.slides);
      slideEl.forEach(slide => {
        slide.style.transition = speed + "ms";
        slide.querySelector("img").style.transition = speed + "ms";
      })
    },
  }
});

// swiper-scale 작업
const swiper03 = new Swiper(".swiper-scale", {
  centeredSlides: true,
  spaceBetween: 10,
  initialSlide: 1,
  loop: true,
  speed: 1000,
  slidesPerView: '1.1',
  loopAdditionalSlides: 1,
  watchSlidesProgress:true,
  on: {
    progress: function () {
      const slideElements = Array.from(this.slides);
      slideElements.forEach(slide => {
        const slideProgress = slide.progress;
        const innerOffset = -50;
        const innerTranslate = slideProgress * 10 + innerOffset;
        const innerScale = 100;

        // Scale 값을 담을 변수 선언
        let innerScaleForm; 
        innerScaleForm = slideProgress < 0 ? slideProgress * -20 + innerScale : slideProgress * 20 + innerScale;       
        slide.querySelector("img").style.transform = "translateX(" + innerTranslate + "%) scale(" + innerScaleForm + "%)";
      });
    },

    setTransition: function (speed) {
      const slideEl = Array.from(this.slides);
      slideEl.forEach(slide => {
        slide.style.transition = speed + "ms";
        slide.querySelector("img").style.transition = speed + "ms";
      })
    },
  }
});



