/*
This file contains all the urls, so that they will be easy to change
*/

import API_KEY from "./apiKey";

const pathLinks = {
    companies: '/companies',
    about: '/about',
    stockApi: 'https://docs.intrinio.com/tutorial/web_api',
    companiesList: `https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${API_KEY}`,
    companyInfoUrl: (ticker) => `https://api-v2.intrinio.com/companies/${ticker}?api_key=${API_KEY}`,
    stockInfoUrl: (ticker) => `https://api-v2.intrinio.com/securities/${ticker}/prices/realtime?api_key=${API_KEY}`
}
export default pathLinks;