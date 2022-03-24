import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins";

const getCoins = async () => {
    const response = await axios.get(`${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`)
    return response.data
}

export {
    getCoins
}