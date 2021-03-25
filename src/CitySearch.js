import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FlightTable from './FlightTable.js'

import TextField from '@material-ui/core/TextField';

const dummyData = [
	{
		flightName : "AK345",
		flightCarrier : "Emirates",
		flightFare : "500$"
	},
	{
		flightName : "AA345",
		flightCarrier : "AA",
		flightFare : "323$"
	},
	{
		flightName : "KFk345",
		flightCarrier : "KingFisher",
		flightFare : "453$"
	},
		
]


function PickCityBar() {

	const [fromCity,setFromCity] = useState("");
	const [toCity,setToCity] = useState("");
	const [showTable,setShowTable] = useState(false);

	const fromCityChange = (event)=>{
		setFromCity(event.targe.value)
	}

	const toCityChange = (event)=>{
		setToCity(event.targe.value)
	}

  return (
	//Material UI searchBox
	
	<div>
	<div>
    <Grid container  spacing={2} justify="center">
	<Grid item>
		<TextField 
		id="fromCity"  
		variant="filled" 
		onChange={fromCityChange}
		/>
	</Grid>
	<Grid item>
	      <TextField 
		id="fromCity"  
		variant="filled" 
		onChange={toCityChange}
		/>
	</Grid>
	<Grid item>
		<Button variant="contained" color="secondary" onClick={()=>setShowTable(true)}>
	  	Search
		</Button>
	</Grid>
	</Grid>
	</div>
	<div>
		{showTable ? <FlightTable/> : <h3> Enter the details to see result</h3>}
	</div>
	</div>

  );
}

export default PickCityBar;
