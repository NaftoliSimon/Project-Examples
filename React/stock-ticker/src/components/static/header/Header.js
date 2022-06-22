import React from 'react'
import Navbar from './Navbar';
import './navs.css';

export default function Header() {
    return (
        <header className="sticky-top p-3 mb-2 bg-primary text-white">
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                    <h1 className='col text-center'>My Stock Ticker</h1>
                    <div className='col text-end d-none d-sm-block'>Naftoli Simon</div>
                </div>
            </div>
        </header>
    )
}
