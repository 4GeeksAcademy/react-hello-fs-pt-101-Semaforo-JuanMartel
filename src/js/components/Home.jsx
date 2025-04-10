import React from "react";
import Practice from "./Semaforo.jsx"
import MyCard from "./Mycard.jsx";
import TrafficLight from "./TrafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

let  name= "Juan";

const dataCard = [{
	title: "title",
	description: "description",
	btn: "aca elboton"
},
{
	title: "title",
	description: "description",
	btn: "aca elboton"
},
{
	title: "title",
	description: "description",
	btn: "aca elboton"
},
{
	title: "title",
	description: "description",
	btn: "aca elboton"
},
{
	title: "title",
	description: "description",
	btn: "aca elboton"
},
{
	title: "title",
	description: "description",
	btn: "aca elboton"
},

]
	return (
		<> 

			<TrafficLight />

		</>
		
)};

export default Home;