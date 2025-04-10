import React from "react";


const MyCard = (props) => {
    return (
<div classNameName="align-items-center justify-content-center">
<div className="card MyCard">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <button className="card-btn">{props.btn} </button>
  </div>
</div>



</div>


    )


}

export default MyCard