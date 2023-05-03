var doms = {
  carousel: document.querySelector('.carousel'),
  indicators: document.querySelectorAll('.indicater span')
}

/**
 * 
 * @param {Number} index 
 */

function moveTo(index) {
  doms.carousel.style.transform = `translatex(-${index}00%)`
  var active = document.querySelector('.indicater span.active')
  active.classList.remove('active')
  doms.indicators[index].classList.add('active')
}

doms.indicators.forEach((item, i) => {
  item.onclick = function() {
    moveTo(i)
  }
})

// for (var i = 0; i < doms.indicators.length - 1;i++) {
//   const item = doms.indicators[i]
//   item.onclick = function() {
//     console.log(i)
//     moveTo(i)
//   }
// }