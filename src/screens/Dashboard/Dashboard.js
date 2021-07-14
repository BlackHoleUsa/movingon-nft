import React from 'react';
import './Dashboard.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import { Row, Col } from 'react-bootstrap';
import { Images } from '../../Assets/Images';

const Dashboard = () => {

    const data = [
        { heading: 'ICO Start Date', date: 'Jun 2, 2021' },
        { heading: 'ICO End Date', date: 'Oct 4, 2021' },
        { heading: 'Total Tokens ETH', date: '3.0611162 DASH' },
        { heading: 'ICO Start Date', date: '0xB3775fB83F7D1' },
        { heading: 'Convert Price', date: '$800.056' },
        { heading: 'Marget Value', date: '$780.00' },
        { heading: 'Remaining Token', date: '25 ETH' }
    ];

    return(

        <div className="w-100 h-100 app-flex-row align-align-items-start justify-content-start bg-img-set">
            
            <Sidebar />

            <div className="w-100 app-flex-column" 
                style={{ padding: '50px 50px 10px 50px'
            }}>

                <span className="dashboard-heading-large">Dashboard</span>
                <span className="dashboard-heading-small mb-2">Select below assets to check token details.</span>

                <div className="w-75 bg-blue" style={{ height: '1px', opacity: .17 }}>
                </div>

                <div className="mx-0 mt-5 w-100 p-0 text-black" style={{ height: '80%', overflowY: 'auto' }}>

                    <div className="app-flex-row w-100 flex-wrap align-items-center justify-content-between">
                    {
                        data?.map((coins, index) => (
                            <div className="dashboard-conis mb-4" key={index}>
                                <span>{coins.heading}</span>
                                <span>{coins.date}</span>
                            </div>
                        ))
                    }
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;