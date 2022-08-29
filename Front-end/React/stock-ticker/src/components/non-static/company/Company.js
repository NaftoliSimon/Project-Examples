import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import pathLinks from '../../../data/pathLinks';
import myFetch from '../../../functions/myFetch';
import ButtonLink from '../ButtonLink';
import NoData from './NoData';
import StockInfoList from './StockInfoList';

export default function Company() {
  const [companyInfo, updateCompanyInfo] = useState(null)
  const [stockInfo, updateStockInfo] = useState(null);

  const { companyId } = useParams();
  const { companyInfoUrl, stockInfoUrl, companies } = pathLinks;
  const companyUrl = companyInfoUrl(companyId);
  const stockUrl = stockInfoUrl(companyId);

  useEffect(() => {
    myFetch(companyUrl, updateCompanyInfo);
    myFetch(stockUrl, updateStockInfo);
  }, [])
  // useEffect(() => {
  //   myFetch(companyUrl, updateCompanyInfo);
  // }, [stockInfo]);

  if (companyInfo) {
    if (!stockInfo) {
      return (
        <NoData />
      )
    }
    const { ticker, name, company_url, long_description } = companyInfo;
    return (
      <div className='d-flex justify-content-center'>
        <div className='text-center'>
          <h3>{name} - {ticker}</h3>
          <a className='link' href={`https://${company_url}`}>{company_url}</a>
          <StockInfoList stockInfo={stockInfo} stockUrl={stockUrl} updateStockInfo={updateStockInfo} />
          <p className='p-3'>{long_description}</p>
          <ButtonLink text='Return to Search' link={companies} />
        </div>
      </div>
    )
  }

}
