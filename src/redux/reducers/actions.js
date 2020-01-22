import { actionPromise } from './promiseReducer'
import { actionLogin } from './loginReducer'
import axios from 'axios'
import { queryCats, queryContent, authorize, buy } from './constants'

const getCategories = () => actionPromise('categories', axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: queryCats,
    })
 )

const getContent = (id) => actionPromise('content', axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: queryContent(id)
}))

const logout = () => ({type: 'LOGOUT'})

const authorization = (password, tel) => actionLogin(axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: authorize(password, tel)
}))

const buySong = (passw, tel, id) => actionPromise('buy', axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: buy(passw, tel, id)
}))

export { getCategories, getContent, authorization, buySong, logout }
