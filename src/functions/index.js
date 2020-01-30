function dive(strings, ...values) {
     let obj = values[0]
     for(let key of strings[1].split('.')) {
         if(obj && key && typeof obj === 'object') {
             obj = obj[key]
         } else return undefined
     }
    return obj
}

function firstItem (arr) {
    let res = arr.filter(item => item.parentCatId ? item : '')
    return res
}

function defaultSubCat (arr, id) {
    return arr && arr.filter(item => item.parentCatId && item.parentCatId === id)
}


function urlParams (str) {
  return str.split('/')
}

function catSubCatName (arr, id) {
  let res = ''
  arr && arr.forEach(item => item.contentCatId === id ? res = item.catName : '')
  return res
}

function searchSong (arr, id) {
  let res = {}
  arr && arr.forEach(el => el.contentNo === id ? res = el : '')
  return res
}

export { dive, firstItem, defaultSubCat, urlParams, searchSong, catSubCatName }
