var doms = {
  carousel: document.querySelector('.carousel'),
  indicators: document.querySelectorAll('.indicater span'),
  arrowLeft: document.querySelector('.arrow-left'),
  arrowRight: document.querySelector('.arrow-right'),
}

/**
 * 
 * @param {Number} index 
 */

function moveTo(index) {
  doms.carousel.style.transition = 'all .3s linear'
  doms.carousel.style.transform = `translatex(-${index}00%)`
  var active = document.querySelector('.indicater span.active')
  active.classList.remove('active')
  console.log(index)
  doms.indicators[index].classList.add('active')
  curIndex = index
}

doms.indicators.forEach((item, i) => {
  item.onclick = function() {
    moveTo(i)
  }
})

var curIndex = 0
var count = doms.indicators.length

function init() {
  var first = doms.carousel.firstElementChild.cloneNode(true)
  var last = doms.carousel.lastElementChild.cloneNode(true)
  doms.carousel.appendChild(first)
  doms.carousel.insertBefore(last, doms.carousel.firstElementChild )
  last.style.position = 'absolute'
  last.style.transform = 'translateX(-100%)'
}

function rightNext() {
  if (curIndex === count - 1) {
    doms.carousel.style.transform = `translateX(100%)`
    doms.carousel.style.transition = 'none'
    doms.carousel.clientHeight // 强制渲染 读取元素位置 尺寸 会回流 重新渲染
    moveTo(0)
  } else {
    moveTo(curIndex + 1)
  }
}
function leftNext() {
  if (curIndex === 0) {
    doms.carousel.style.transform = `translateX(-${count}00%)`
    doms.carousel.style.transition = 'none'
    doms.carousel.clientHeight // 强制渲染 读取元素位置 尺寸 会回流 重新渲染
    moveTo(count - 1)
  } else {
    moveTo(curIndex - 1)
  }
}
init()
doms.arrowLeft.onclick = leftNext
doms.arrowRight.onclick = rightNext