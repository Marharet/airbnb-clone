import React from "react";


export default function Hero() {
  return (
    <section className="hero-box">
        <div className="foto">
            <img src={require("../img/photo-grid.png")} alt="photo-grid"/>
        </div>
        <div className="text-box">
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </section>
  );
}
 