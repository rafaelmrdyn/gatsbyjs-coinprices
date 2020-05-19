import Fetch from 'isomorphic-unfetch'

export default class Http {
    static async getCoins() {
        const res = await Fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=EUR')
        const data = await res.json()
        return {
            coins: data.coins
        }
    }
}