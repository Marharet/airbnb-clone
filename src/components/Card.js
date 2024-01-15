import React from "react";
import { FaStar } from "react-icons/fa";



export default function Card(props) {
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.location === "Online"){
    badgeText = "ONLINE"
  }


  return (
    <div className="card-box">
      {badgeText && <div className="card-options">{badgeText}</div>}
        <img src={require(`../img/${props.coverImg}`)} alt="Katie Zaferes"/>
        <div className="rating">
            <FaStar className="star" />
            <span>{props.stats.rating}</span>
            <span className="gray-rate">({props.stats.reviewCount}) • </span>
            <span className="gray-rate">{props.location}</span>
        </div>
        <h5>{props.title}</h5>
        <p><strong>From ${props.price}</strong> / person</p>
    </div>
  );
}

