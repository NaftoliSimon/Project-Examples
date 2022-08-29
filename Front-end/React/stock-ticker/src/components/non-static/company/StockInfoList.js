import React from 'react';
import editDate from '../../../functions/editDate';
import myFetch from '../../../functions/myFetch';
import StockInfoItem from './StockInfoItem';

export default function StockInfoList({ stockInfo, stockUrl, updateStockInfo }) {
    let { open_price, bid_price, ask_price, exchange_volume, updated_on, high_price, low_price } = stockInfo;
    if (exchange_volume) {
        exchange_volume = exchange_volume.toLocaleString();
    }
    const toolTipTitle = "Wait a minimum of 10 seconds before updating again";
    return (
        <>
            <ul className='list-group p-3 fs-2'>
                <StockInfoItem title='Open' data={open_price} />
                <StockInfoItem title='Bid' data={bid_price} />
                <StockInfoItem title='Ask' data={ask_price} />
                <StockInfoItem title='High Price' data={high_price} />
                <StockInfoItem title='Low Price' data={low_price} />
                <StockInfoItem title='Volume' data={exchange_volume} />
                <div className='fs-5' data-toggle="tooltip" data-placement="top" title={toolTipTitle}>
                    Last updated: {editDate(updated_on)}
                </div>
            </ul>
            <button type="button" className="btn btn-primary"
                onClick={() => myFetch(stockUrl, updateStockInfo)}
            >Update</button>
        </>
    )
}
