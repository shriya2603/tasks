import React ,{Component}from 'react';
import {Line} from 'react-chartjs-2';

const styles ={
    "padding-left": "200px"
}

const options = {

responsive:true,
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
            lineTension: 0.1,
            label: "Weather",
            data : []
        }
    ]
}


class LineChart extends Component {
    state = { 
     }
     timer = {}
     constructor(){
         super();
         this.state = {
            dataDisplay : newDataDisplay
         }
         console.log(this.state.dataDisplay);
         this.getFeeds();
     }
     componentDidMount(){
        // this.getFeeds();
        this.timer=setInterval(() => {
                        this.getFeeds();
                       
        }, 5000)
     }

    componentWillUnmount(){
        clearInterval(this.timer);
        this.setState({dataDisplay: null});
        console.log("Component unmount ");
    }
     getFeeds(){
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
                    // console.log("Data from Api ");
                    // console.log(newDataDisplay);
                    this.setState({dataDisplay: newDataDisplay});
                })
                .catch((err)=>{
                    console.error(err);
                });
                // console.log("Data send ");
                // console.log(newDataDisplay);
      }
    render() { 
        // console.log("data is "+JSON.stringify(this.state.dataDisplay));
        return (<div style={styles}>
            <Line data={this.state.dataDisplay} options={options}> </Line>
        </div>

          );
    }
}
 
export default LineChart;


