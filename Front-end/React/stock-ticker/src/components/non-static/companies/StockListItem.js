import React from 'react'
import pathLinks from '../../../data/pathLinks'

export default function StockListItem({ stock, updateSelectedCompany }) {
    const { companies } = pathLinks;
    const { name, ticker } = stock;
    const listItem = 'list-group-item list-group-item-action text-center border-top border-bottom-0';
    return (
        <a href={`${companies}/${ticker}` /*Link to Companies.js (see App.js for navigation)*/}
            className={listItem}>
            {name} - {ticker}
        </a>
    )
}
