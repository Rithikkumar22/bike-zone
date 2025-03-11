import React from 'react';

function Footer(){
    return(
    <div className='foot'>
        <div className='img'>
            <i className="fa-brands fa-facebook fa-xl" id='face'></i>
            <i className="fa-brands fa-twitter fa-xl" id='twit'></i>
            <i className="fa-brands fa-whatsapp fa-xl" id='what'></i>
            <i className="fa-brands fa-instagram fa-xl" id='inst'></i>
        </div>
        <hr/>
        <p>©2016-2023 www.findyours.com</p>
    </div>
    );
};
export default Footer;