import React ,{Component}from 'react';
import {Line} from 'react-chartjs-2';

const options = {
    title : {
        display: true,
        text :"Line chart"
    },
    scales :{
        xAxes: [
            {
              display: true,
              gridLines: {
                display: true
              }
            }
          ],
        yaAxes :[
            {
                ticks :{
                    min : 0,
                    max : 100,
                    stepSize : 5
                }
            }
        ]
    }
}

const newDataDisplay = {
    labels :[],
    datasets:[
        {
            label: "Weather",
            data : []
        }
    ]
}
function getFeeds(){
    newDataDisplay.labels = [];
    newDataDisplay.datasets[0].data= [];
    fetch("http://localhost:4000/api/getWetherData")
            .then(result=> result.json())
            .then(function(result){
                newDataDisplay.labels.push("current");
                newDataDisplay.datasets[0].data.push(result.current.temp_f);
                const forecast = result.forecast;
                for(let i=0;i<forecast.length;i++){
                    const h = forecast[i];
                    newDataDisplay.datasets[0].data.push( h.temp_f);
                    newDataDisplay.labels.push(h.time);
                }
                console.log("Data from Api ");
                console.log(newDataDisplay);
            })
            .catch((err)=>{
                console.error(err);
            });
            console.log("Data send ");
            console.log(newDataDisplay);
            return newDataDisplay;
  }

class LineExample extends Component {
    state = { 
        dataDisplay : getFeeds()
     }

     
    render() { 
        console.log("data is "+JSON.stringify(this.state.dataDisplay));
        return (<div>
            <Line data={this.state.dataDisplay} options={options}> </Line>
        </div>

          );
    }
}
 
export default LineExample;


// export default LineExample ;