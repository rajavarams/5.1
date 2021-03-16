
 async function city(cityName) {
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    const info = await response.json();
    console.log(info);
    const { latt, longt}= info;
        document.getElementById('lat').textContent= latt;
        document.getElementById('lon').textContent= longt;
    console.log("\nThe latitude is: " + info.latt + ".\n\nThe longitude is: " + info.longt);
  }
  city("charleston");
  



  
