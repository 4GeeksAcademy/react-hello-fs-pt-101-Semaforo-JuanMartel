import React, { useState } from "react"


const TrafficLight = () => {

    const [color, setColor] = useState('')

    
    const handleClick = (color) => {
        console.log("click")
        setColor(color)

    }


    return (

        <>

            <h2 className="text-center"> Traffic Light </h2>
            <div className="Casilla justify-content-center d-flex flex-column mx-auto">

                <button className={`trafficButton bg-danger ${color === "red" ? "border border-danger shadow-danger" : ""}`}
                    onClick={() => handleClick("red")}>  </button>

                <button className={`trafficButton bg-warning ${color === "yellow" ? "border border-warning shadow-warning" : ""}`}
                    onClick={() => handleClick("yellow")}>  </button>

                <button className={`trafficButton bg-success ${color === "green" ? "border border-success shadow-success" : ""}`}
                    onClick={() => handleClick("green")}>  </button>

            </div>
        </>
    )

}

export default TrafficLight