import React from 'react'

export default function StockInfoItem({ title, data }) {
  if (title) {
    return (
      <li className='list-group-item'>
        <div className='row justify-content-between'>
          <div className='col-4'>{title}</div>
          <div className='col-4'>{data || 'N/A'}</div>
        </div>
      </li>
    )
  }
}
