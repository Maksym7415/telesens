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
    let res = arr && arr.filter(item => item.parentCatId && item.parentCatId === id)
    return res
}

function currentCatSubcat (arr, id) {
    let res = {}
    arr && arr.forEach(item => {
      if (item.contentCatId === id) {
        res.subCat = item.catName
        res.subCatID = item.contentCatId
        if (res.subCat !== '') {
          for (let key of arr) {
            if (item.parentCatId === key.contentCatId) {
              res.genre = key.catName
              res.genreID = key.contentCatId
            }
          }
        }
      }

    })
    return res
}

function urlParams (str) {
  return str.split('/')
}

function searchSong (arr, id) {
  return arr ? arr.filter(el => el.contentNo === id ? el : '') : ''
}

export { dive, firstItem, defaultSubCat, urlParams, searchSong, currentCatSubcat   }
