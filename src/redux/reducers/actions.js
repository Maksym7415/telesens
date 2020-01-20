import { actionPromise } from './promiseReducer'
import axios from 'axios'
import { queryCats } from './constants'

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

export { getCategories }
