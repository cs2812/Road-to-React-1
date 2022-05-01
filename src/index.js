import navbar from "../components/navbar";

import "../style/navbar.css";

let div1=document.getElementById("navbar")
div1.innerHTML=navbar();


document.getElementById("btn").addEventListener("click",forecast)

function forecast(){

    let city=document.getElementById("city").value;
    
    const url=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=c0c4a4b4047b97ebc5948ac9c48c0559`;
    
    fetch(url)
    .then(function(res){
    
        return res.json()
    })
    .then(function(res){
        console.log(res.list)
        getdata(res.list) 
    
    })
    .catch(function(err){
        console.log(err)
    
    })
    
    function getdata(data){
    
        let container=document.getElementById("container")
            container.innerHTML = null;
        data.forEach(function(ele,i){
    
    let today=new Date().getDay();
            
    
    
            let div=document.createElement('div')
    
            let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    
            let day=document.createElement('p')
            if(i==0){day.innerText=days[today]}
            else if(i==1){day.innerText= days[today+1] }
            else if(i==2){day.innerText=  days[today+2] }
            else if(i==3){day.innerText= days[today+3] }
            else if(i==4){day.innerText= days[today+4] }
            else if(i==5){day.innerText= days[today+5] }
            else if(i==6){day.innerText= days[today+6] }
    
    
            // (days[today+1])%7
            // (days[today+2])%7
            // (days[today+3])%7
            // (days[today+4])%7
            // (days[today+5])%7
            // (days[today+6])%7
    
            
            
            let icon=document.createElement('img')
            icon.src= `http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`    ;
    
            let maxt =document.createElement('p')
            maxt.innerText=(+(ele.temp.max)- 273.15).toFixed(2) + "°C";
            // console.log(maxt)
    
    
            let mint=document.createElement('p')
            mint.innerText=((ele.temp.min)- 273.15).toFixed(2) + "°C";
    
    
            div.append(day,icon,maxt,mint)
    
            container.append(div)
            
        })
    }
    
    
    
    
    
    }