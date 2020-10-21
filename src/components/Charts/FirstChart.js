import React, { Component } from 'react'
import CanvasJSReact from '../../lib/canvasjs-3.2/canvasjs.react';
import Navbar from '../NavBar/Navbar';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FirsChart extends Component {
    constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
	}
    generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
    }
    render() {
		const options = {
			theme: "light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Try Zooming and Panning"
			},
			data: [{
				type: "area",
				dataPoints: this.generateDataPoints(500)
			}]
		}
    return ( 
        <div>
            <Navbar />
			<CanvasJSChart options = {options} />
		</div>
    );
    }
}
export default FirsChart;