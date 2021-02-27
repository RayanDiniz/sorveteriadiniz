import React from 'react';

import './style.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import img_home from '../../img/Home.png';

export default function Home() {
    return (
        <div>
            <Navbar />

            <div className="">
                <img src={img_home} className="img-fluid" alt="principal"/>
            </div>

            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.20797875489603!2d-44.26052769605909!3d-2.614915366133735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5336dceed674711!2sSorveteria%20Diniz!5e0!3m2!1sen!2sbr!4v1576245018269!5m2!1sen!2sbr" title="localMapa"></iframe>
            </div>

            <Footer />
        </div>
    )
};