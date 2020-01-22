import { actionPromise } from './promiseReducer'
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

const authorization = (password, tel) => actionPromise('login', axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: authorize(password, tel)
}))

const buySong = (passw, tel, id, serv) => actionPromise('buy', axios({
      method: 'post',
      url: 'https://t-rbt.telesens.ua/t-rbt/subscriber',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      data: buy(passw, tel, id, serv)
}))

export { getCategories, getContent, authorization, buySong }
