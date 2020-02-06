import { actionPromise, actionDeletePromise } from './promiseReducer'
import { actionLogin } from './loginReducer'
import axios from 'axios'
import { queryCats, queryContent, authorize, buy, search } from './constants'

const promise = (data) => axios({
  method: 'post',
  url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
  headers: {
    'Content-Type': `application/x-www-form-urlencoded;charset=UTF-8`,
    Accept: 'application/json',
  },
  data
})

const getCategories = () => actionPromise('categories', promise(queryCats))

const getContent = (id) => actionPromise('content', promise(queryContent(id)))

const logout = () => ({type: 'LOGOUT'})

const authorization = (password, tel) => actionLogin(promise(authorize(password, tel)))

const buySong = (passw, tel, id) => actionPromise('buy', promise(buy(passw, tel, id)))

const searchSong = (query) => actionPromise('search', promise(search(query)))

const delSong = () => actionDeletePromise('buy')

export { delSong, getCategories, getContent, authorization, buySong, logout, searchSong }

// const getCategories = () => actionPromise('categories', axios({
//       method: 'post',
//       url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Accept: 'application/json',
//       },
//       data: queryCats,
//     })
//  )

// const getContent = (id) => actionPromise('content', axios({
//       method: 'post',
//       url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Accept: 'application/json',
//       },
//       data: queryContent(id)
// }))

// const authorization = (password, tel) => actionLogin(axios({
//       method: 'post',
//       url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Accept: 'application/json',
//       },
//       data: authorize(password, tel)
// }))

// const buySong = (passw, tel, id) => actionPromise('buy', axios({
//       method: 'post',
//       url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Accept: 'application/json',
//       },
//       data: buy(passw, tel, id)
// }))