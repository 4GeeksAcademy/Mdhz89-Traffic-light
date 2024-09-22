import React from "react";
import { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




const Semaforo = ()=>{

	const [color, setColor] = useState("red")
	
	const changecolor =(selected) =>{
		setColor(selected)
	}
	
	
	
	
	
	
		
	

	return (
		<body>
			<div className="semaforo"> 
				<button style={{backgroundColor: "red"}} onClick={() => changecolor("red")}   className={`luz ${color === "red" ? "brillo" : ""}`} ></button>
				<button style={{backgroundColor:"yellow"}} onClick={() => changecolor("yellow")}  className={`luz ${color === "yellow" ? "brillo" : ""}`}  ></button>
				<button style={{backgroundColor:"green"}} onClick={() => changecolor("green")} className={`luz ${color === "green" ? "brillo" : ""}`}  ></button>
				
			</div>
			
		</body>
	);
};


export default Semaforo;
