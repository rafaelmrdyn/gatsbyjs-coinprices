import React from 'react'

const Prices = ({coins}) => {

    const openUrl = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className="coins-scroll">
            <ul className="list-group">
                {coins && coins.map((e, i) => (
                    <li onClick={() => openUrl(e.websiteUrl)} className="list-group-item" key={i.toString()}>
                        <span className="badge badge-secondary">{e.rank}</span>
                        <span className="badge badge-secondary">{e.name}</span>
                        <span className="badge badge-secondary">{e.symbol}</span>
                        <span className="badge badge-secondary">€ {e.price.toFixed(1)}</span>
                        {Math.sign(e.priceChange1d) !== -1 ? (
                            <span className="badge badge-success">€ {e.priceChange1d.toFixed(1)}</span>
                        ) : (
                            <span className="badge badge-danger">€ {e.priceChange1d.toFixed(1)}</span>
                        )}
                        <img className="coin-icon" src={e.icon}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Prices