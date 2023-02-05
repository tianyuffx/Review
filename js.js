// debounce
// function debounce(delay){ 
//   var timer 
//   return function(val){ 
//    clearTimeout(timer) 
//    timer = setTimeout(function(){ 
//     console.log(val) 
//    },delay) 
//   } 
//  } 
//  var debounceFun = debounce(2000) 
//  var input = document.getElementById('input') 
//  input.addEventListener('keyup',function(e){ 
//   debounceFun(e.target.value) 
//  })  // 需修正

 function debounce(delay){ 
  var timer 
  return function(val){ 
   clearTimeout(timer) 
   timer = setTimeout(function(){ 
    console.log(val) 
   },delay) 
  } 
 } 
 var debounceFun = debounce(2000) 
 var input = document.getElementById('input') 
 input.addEventListener('keyup',function(e){ 
  debounceFun(e.target.value) 
 }) 
// throttle

// 数组去重
const removeEqual = (arr) => {
  const result = arr.filter((item, index, self) => {
    return self.indexof(item) === index
  })
  return result
}

const unique = (arr) => {
  return Array.from(new Set(arr)) 
  // 或 
  // return [...new Set(arr)]
}

const unique2 = (arr) => {
  for(var i=0,len=arr.length;i<len;i++){ 
    for(var j=i+1,len=arr.length;j<len;j++){ 
      if( arr[i]===arr[j] ){ 
      arr.splice(i,1) 
      j--; 
      len-- 
      } 
    } 
  } 
  return arr
}

const unique3 = (arr) => {
  let arr1 = [] 
  for(var i=0;i<arr.length;i++){ 
   if( arr1.indexOf(arr[i]) === -1 ){ 
    arr1.push(arr[i]) 
   } 
  } 
  return arr1
}

const unique4 = (arr) => {
  let arr1 = [] 
  for(var i=0;i<arr.length;i++){ 
   if( !arr1.includes(arr[i]) ){ 
    arr1.push(arr[i]) 
   } 
  } 
  return arr1 
}

const unique5 = (arr) => {
  return arr.filter(( item, index )=>{ 
    return arr.indexOf( item, 0 ) == index 
   })
}

// call apply bind

