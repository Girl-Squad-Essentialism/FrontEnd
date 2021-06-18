import React from "react";
import "../../App.css";
import Header from "../header/Header";


import firstImage from '../../design/00-annie-spratt.jpg'
import secondImage from '../../design/01-kelly-sikkema.jpg'
import thirdImage from '../../design/02-ben-kolde.jpg'



const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <img src={firstImage} alt="plants" />
                <h2>Mission Statement/Intentions for Use</h2>
                <div className="main-images">
                    <img src={secondImage} alt="post-it-notes" />
                    <p>Until you have the inner discipline that brings calmness of mind, external facilities and conditions will never bring the joy and happiness you seek. On the other hand, if you possess this inner quality, calmness of mind, a degree of stability within, even if you lack the various external factors that you would normally require to be happy, it will still be possible to live a happy and joyful life.</p>
                </div>
                <div className="main-images">
                    <img src={thirdImage} alt="desk-setup" />
                    <p>Until you have the inner discipline that brings calmness of mind, external facilities and conditions will never bring the joy and happiness you seek. On the other hand, if you possess this inner quality, calmness of mind, a degree of stability within, even if you lack the various external factors that you would normally require to be happy, it will still be possible to live a happy and joyful life.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;