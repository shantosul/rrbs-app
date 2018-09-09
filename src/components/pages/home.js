import React from 'react';
import Helmet from 'react-helmet';
import Topnav from './../header/navigation';

import Dashboard from './../dashboard/dashboard';
 
export default class Homepage extends React.Component {
  render() {
    return (
        <article>
            <Helmet>
                <title>Autonivo | Automate Your Home And Business With Us</title>
                <meta name="description" content="Autonivo | Automate Your Home And Business With Us" />
            </Helmet>        
            <div className='homepage'>        
                <Topnav/>
                <Dashboard/>
            </div>
        </article>
    )
  }
}