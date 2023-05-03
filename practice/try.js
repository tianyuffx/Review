/**
 * 判断对象是否存在某个属性
 * @param { Object } obj 对象
 * @param { String } key 属性
 */


// 
function hasProperty(key, obj) {
  return key in obj // in 可以查本身也可以往原型链上找
}

function uniqueArr (arr) {
  var result = []
  for (let i = 0; i < arr.length; i++) {
    var isFind = false
    for(let j = 0; j < result.length; j++) {
      if (result[j] === arr[j]) {
        isFind = true
        break
      }
    }
    if (!isFind) {
      result.push(arr[i])
    }
  }
  return result
}
