import { actionPromise } from './promiseReducer'

import axios from 'axios'

const test = () => actionPromise('test', axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'))

const getCategories = () => actionPromise('categories', axios.post('https://t-rbt.telesens.ua/t-rbt/subscriber', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  params: {
    'p0': 'contentSearch',
    'p1': {
      "subsIdent":"","password":"","serviceNo":-1,"searchParameters":
      { "pagination": { "offset": 0, "pageSize": 24 }, "sortOrder":
      [{ "attribute": "ContentNo", "ascending": true }],
      "searchFilter": { "equal": { "name": "ContentCatId", "numberValue": "22" } } }
    }
  }
}))

export { getCategories, test }
