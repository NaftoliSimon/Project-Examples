import React, { useEffect, useState } from 'react'
import myFetch from '../../../functions/myFetch.js'
import pathLinks from '../../../data/pathLinks.js';
import StockListItem from './StockListItem.js';

export default function StocksList() {
    const [{ companies }, updateStocks] = useState({});
    const { companiesList } = pathLinks;

    useEffect(() => {
        myFetch(companiesList, updateStocks)
    }, [])
    return (
        <>
            <h2 className='text-center'>Select a Company</h2>
            <div className='list-group-flush'>
                {companies && companies.map(stock =>
                    <StockListItem stock={stock} key={stock.id} />
                )}
            </div>
        </>
    )
}
