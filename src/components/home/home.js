import React from "react";
import "../../App.css";
import Header from "../header/Header";

const Home = () => {

    return (
        <div>
            <Header />
            <div>
                <img src="https://www.starwoodporcelanosagrupo.com/wp-content/uploads/2020/04/annie-spratt-ncQ2sguVlgo-unsplash.jpg" alt="first-plants" />
                <h2>Mission Statement/Intentions for Use</h2>
                <div className="main-images">
                    <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="post-it-notes" />
                    <p>Until you have the inner discipline that brings calmness of mind, external facilities and conditions will never bring the joy and happiness you seek. On the other hand, if you possess this inner quality, calmness of mind, a degree of stability within, even if you lack the various external factors that you would normally require to be happy, it will still be possible to live a happy and joyful life.</p>
                </div>
                <div className="main-images">
                    <img src="http://images.unsplash.com/photo-1508105859382-b487af436eff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="desk-setup" />
                    <p>Until you have the inner discipline that brings calmness of mind, external facilities and conditions will never bring the joy and happiness you seek. On the other hand, if you possess this inner quality, calmness of mind, a degree of stability within, even if you lack the various external factors that you would normally require to be happy, it will still be possible to live a happy and joyful life.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;