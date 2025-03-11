import React from 'react';
import Display from './Display';
import Updisplay from './Updisplay';
import Popular from './popularDisplay';
import { Link } from 'react-router-dom'; 

function MainPage(){

     return(
        <div className='main'>
            <img src='bikes.jpg' className='bike'/>
            <div className='bottom'>Find The Right Bike Here</div>
            <div className='down'>Get the Comprehensive information on bikes</div><br/>
            
                <div className="tab-content">
                    <h1>Brands</h1>
                    <hr/>
                 <div id="home">

                
                    <div className="row">
                    <div className="col-2">
                        <Link to="/bajaj">
                            <img src='./bajaj.png' className='ktm' alt="Bajaj" />
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/ktm">
                            <img src='ktm.png' className='ktm'/>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/royal">
                            <img src='royal.png' className='ktm'/>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/yamaha">
                            <img src='yamaha.png' className='ktm'/>
                           
                        </Link>
                    </div>
                        <div className="col-2">
                            <Link to="/honda"> 
                                <img src='honda.png' className='ktm'/>
                            </Link>

                            
                        </div>
                        <div className="col-2">
                            <Link to="/hero">
                                <img src='hero.png' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/tvs"> 
                                <img src='tvs.png' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/suzuki">
                                <img src='suzuki.png' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/kawasaki">
                                <img src='kawasaki.png' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/bmw">
                                <img src='bmw.jpeg' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/jawa">
                                <img src='jawa.png' className='ktm'/>
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/yezdi">
                                <img src='yezdi.png' className='ktm'/>
                            </Link>
                        </div>
                    </div><br/><br/><br/>
                    <h3>Upcomings</h3>
                    <hr/>
                    <div className='upcoming'>
                    <div className="col-2">
                        <p><Updisplay/></p>
                    </div>
                    </div><br/><br/>
                    <h3>Most Popular</h3>
                    <hr/>
                    <div className='upcoming'>
                    <div className="col-2">
                        <p><Popular/></p>
                    </div>
                    </div>
                    

                    </div>
                    </div>
                </div>
               
                
           
    );
};
export default MainPage;