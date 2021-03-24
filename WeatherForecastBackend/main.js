const https = require("https");
const fs = require("fs");
const jfile = require("./weatherData.json");
const { resolve } = require("path");

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
            const req = https.request(options, (res) => {
           
                res.on("data",(d)=>{
                    body += d;
                });
                res.on("end", ()=>{
                    // const jsonObject = JSON.parse(body);
                    // console.log(jsonObject.);
                    console.log("end");
                    //fs.writeFileSync(process.cwd() +"/weatherData.json", body);
                    try {
                        let jsonData  = JSON.parse(body);
                       
                        dataJson.current.temp_f= jsonData.current.temp_f;
                        const hourArray = jsonData.forecast.forecastday[0].hour;
                        for(let i = 0 ;i < hourArray.length;i++){
                            dataJson.forecast.push({"time": hourArray[i].time.split(" ")[1], "temp_f" : hourArray[i].temp_f});
                            // console.log(hourArray[i].time+ " temp_f "+ hourArray[i].temp_f);
                            // console.log(" ---------- ");
                        }
            
                        console.log(dataJson);
                        resolve(dataJson);
                       
                    } catch (error) {
                        console.error("error is "+ error);
                        reject(error);
                    }
                    // return dataJson;
                });
            
            });
            
            req.on("error",(e)=>{
                console.log("error is" +JSON.stringify(e));
                reject(error);
            });
            
            req.end();
            return dataJson;
        });
        
    } catch (error) {
        console.log("Error is "+error);
    }

}


// function formatJSON(body){
//     try {
//         // console.log("Data from json ");
//         // fs.writeFile
//         // // console.log(JSON.stringify(jfile.forecast.forecastday));
//         // const forecastArray = jfile.forecast.forecastday[0].hour;
//         // for(let i = 0 ;i < forecastArray.length;i++){
//         //     console.log(forecastArray[i].time+ " temp_f "+ forecastArray[i].temp_f);
//         //     console.log(" ---------- ");
//         // }

//         const dataJson = {
//             current : {
//             },
//             forecast : [
//             ]
//         };

       

//     } catch (error) {
//         console.log(" error is "+error);
//     }
// }

// fs.readFile("./weatherData.json", (err, content)=>{
//     if(!err){
//         console.log("error "+err);
//     }
//     console.log(JSON.parse(content));
// });



module.exports=async  function main() {
    try {
        return await callWeatherAPI();
        // return await formatJSON(b);
    } catch (error) {
        console.log("Error is "+JSON.stringify(error));
    }
    
}

// main();