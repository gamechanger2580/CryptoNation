import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { cryptoApi } from './cryptoApi'


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'RAPID-API-KEY'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


const createRequest = (url) => ({url,headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {
//       safeSearch: 'Off',
//       textFormat: 'Raw'
//     },
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '42a2121281msh5356b186643453cp120295jsnf6da55a5adb4',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }

//   };
