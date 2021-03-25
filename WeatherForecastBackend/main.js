const https = require("https");

function callWeatherAPI() {
    try {
        const dataJson = {
            current : {
            },
            forecast : [
            ]
        };
        let body="";
        const options = {
            hostname : "api.weatherapi.com",
            port: 443,
            path :"/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1",
            method: "GET",
            headers : {
                "Connection" : "keep-alive"
            }
        }
        return new Promise((resolve, reject )=>{
            const request = https.request(options, (response) => {
           
                response.on("data",(d)=>{
                    body += d;
                });
                response.on("end", ()=>{
                    try {
                        let jsonData  = JSON.parse(body);
                       
                        dataJson.current.temp_f= jsonData.current.temp_f;
                        const hourArray = jsonData.forecast.forecastday[0].hour;
                        for(let i = 0 ;i < hourArray.length;i++){
                            dataJson.forecast.push({"time": hourArray[i].time.split(" ")[1], "temp_f" : hourArray[i].temp_f});
                        }
                        resolve(dataJson);
                    } catch (error) {
                        console.error("error is "+ error);
                        reject(error);
                    }
                });
            });
            request.on("error",(error)=>{
                console.log("Error in weatherAPI request"+JSON.stringify(error));
                reject(error);
            });
            request.end();
        });
        
    } catch (error) {
        console.log("Error in callWeatherAPI "+JSON.stringify(error));
    }

}

module.exports=async  function main() {
    try {
        return await callWeatherAPI();
    } catch (error) {
        console.log("Error in main "+JSON.stringify(error));
        throw new Error(error);
    }
    
}