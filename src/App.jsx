import React from 'react';
import { Routes , Route, Link } from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import './App.css'
import {Navbar , Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails} from './components';

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
         <Navbar/> 
      </div>    

      <div className='main'>
        <Layout>
            <div className='routes'>
              <Routes>
                  <Route exact path='/' element={<Homepage/>}>

                  </Route>
                  <Route exact path='/exchange' element ={<Exchanges />}>

                  </Route>
                  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}>
            
                  </Route>
                  <Route exact path='/crypto/:coinId' element = {<CryptoDetails />}>
                    
                  </Route>
                  <Route exact path='/news' element = {<News />}>
                    
                  </Route>
              </Routes>
            </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level = {5} style={{color: "white" , textAlign: 'center'}}>
            CryptoVerse<br/>
              All rights resevered
          </Typography.Title>
          <Space>
            <Link to="/" element = {<Homepage/>}>Home</Link>
            <Link to="/exchnage" element = {<Exchanges/>}>Exchanges</Link>
            <Link to="/news" element = {<News/>}>News</Link>
          </Space>
      </div>
      </div>
    </div> 
  )
}

export default App
