function restcountry(){



    const res=fetch("https://restcountries.com/v2/all");
    

    res.then((data)=>data.json()).then((data1)=>{
      const header=document.createElement("h1");
      header.innerHTML="Restcountries & Weather using fetch API";
     header.id="title";
     header.className="text-center";
      document.body.append(header);

      const container = document.createElement("div"); 
      container.className = 'container';
     
    for(var i=0;i<data1.length;i++){
      if (i % 3 === 0) {
        var row = document.createElement("div");
        row.className = 'row';
      }
      //('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card img.card-img-top');
      const colLG4 = document.createElement("div");
      // colLG4.className = 'col-lg-4 col-sm-6';

      colLG4.className ="col-sm-6 col-md-4 col-lg-4 col-xl-4";
  
    //  step(data1[i].name,data1[i].flag,data1[i].subregion,data1[i].latlng,data1[i].alpha3Code);
    // colLG4.innerHTML=`<div class="card m-5 col-md-4">  
    colLG4.innerHTML=`<div class="card h-100">
    <div class="card-header">
    
    <h3 id="title"  >${data1[i].name}</h3>
      <img src="${data1[i].flag}" class="card-img-top" alt="flag img"> 
       <div class="card-body text-center" style="padding-top:5px;">
       <div class="card-text text-center" style="padding-top:5px;">
      <h6 class="card-title">Capital : ${data1[i].subregion}</h6>
      <h6 class="card-title">Region : ${data1[i].region}</h6>
      <h6 class="card-title">Latlng : ${data1[i].latlng}</h6>
    <h6 class="card-title">Country Code : ${data1[i].alpha3Code}</h6>
    
    <button class="btn btn-primary" onclick="getWeather('${data1[i].name}')" >Click for Weather</button>
    </div>
    </div>
    </div>
    </div>`
    
    
    row.appendChild(colLG4);
    
    if (i === data1.length - 1 || (i + 1) % 3 === 0) {
    container.appendChild(row);
    }
    }
    document.body.appendChild(container);
    
    });
    }
    function getWeather(cn) {
      
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cn}&appid=fb2569a5c16b608a0c03be3d3c1560e7`;
    
    
      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
          
                alert(`            Current Humidity  💧💧  ${data.main.humidity}
                 Current Pressure  📶🌪️  ${data.main.pressure}
                 Current temp      🥵🥵  ${data.main.temp}
                 Current climate   🌦️🌦️  ${data.weather[0].description}`)
          
        })
        .catch((error) => {
          console.error("Error fetching weather data: " + error);
        });
    }
    
    
    document.addEventListener("click",(event)=>event.preventDefault());
    
    restcountry();
    
    
// function step(name,flag,subregion,region,latlng,alpha3Code){

//   colLG4.innerHTML=`<div class="card m-5">
//     <div class="card-header text-center">
    
//     <h3 id="title" >${name}</h3>
//       <img src="${flag}" class="card-img-top" alt="flag img"></img> 
//        <div class="card-body text-center" style="padding-top:5px;">
//       <h6 class="card-title">Capital : ${subregion}</h6>
//       <h6 class="card-title">Region : ${region}</h6>
//       <h6 class="card-title">Latlng : ${latlng}</h6>
//     <h6 class="card-title">Country Code : ${alpha3Code}</h6>
    
//     <button class="btn btn-primary" onclick="getWeather('${name}')" >Click for Weather</button>
//     </div>
//     </div>
//     </div>`;
    
// }