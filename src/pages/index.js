import React, { useEffect, useState } from "react"

import Http from "../helper/http"
import Layout from "../components/Layout"
import Prices from "../components/Prices"
import SEO from "../components/Seo"

const IndexPage = () => {
  const [coins, setCoins] = useState([])

  const getCoins = async () => {
    const data = await Http.getCoins()
    setCoins(data.coins)
  }

  useEffect(() => {
    getCoins()
  }, [])
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Top 30 Ranked Coins</h1>
      <Prices coins={coins}/>
    </Layout>
  )
}

export default IndexPage
