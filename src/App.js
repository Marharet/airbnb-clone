import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App() {

  const cardItem = data.map((item)=>{
    return (
        <Card 
            key={item.id}
            {...item}
        />
        )
  })

  return (
    <div >
      <Navbar />
      <Hero />
      <section className="cards-list">
            {cardItem}
      </section>
    </div>
  );
}
 

