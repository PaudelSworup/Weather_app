

let inputValue = document.getElementById('ds')
const API_KEY = "50a7aa80fa492fa92e874d23ad061374"
let div = document.getElementById('li')
let myData = document.getElementById('p')
let navImage = document.getElementById('navImage')
let city = document.getElementById('city')
let country = document.getElementById('country')
let deg = document.getElementById('d')
let deg2 = document.getElementById('d1')
let img2 = document.getElementById('csm')
let card = document.getElementById('cards')
let windValue = document.getElementById('wv')
let humidityValue = document.getElementById('hv')
let pressureValue = document.getElementById('pv')
let visibilityValue = document.getElementById('vv')
let dewValue = document.getElementById('dv')
let showTime = document.getElementById('setTime')
let dayType = document.getElementById('dayType')


window.addEventListener("load" , (e)=>{
    console.log()
    let connectionStatus = navigator.onLine? 'online' : 'offline'
    if(connectionStatus == 'offline'){
        window.location.href = "offline.html"
    }

})

function loadData(){
    if(inputValue.value == "" || inputValue.value == null){
        alert('Please enter a city name')
        return
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_KEY}`)
   .then(response=> response.json())
    .then(data=>{
        city.innerHTML = `${data['name']}, `
        country.innerHTML = data['sys'].country
        myData.innerHTML = inputValue.value

        let iconImg = data['weather'][0]
        setImage(iconImg)
        console.log(iconImg)

        showDayType(iconImg)
       

        let tempValue = data['main']
        
        let vis = data['visibility']
        let wind = data['wind']
        tempratureCalc(tempValue)
        getWeatherDetail(tempValue,wind,vis)

        console.log(iconImg.icon)
        weatherCondition(iconImg.icon)

        let tz = data['timezone']
        console.log(tz)
        getTime(tz)
        

        div.style.display = 'flex'
        
    })
    
.catch(err => {
    alert('Wrong city name') 
    return
})

    
}


function hideDiv(){
    div.style.display = 'none'
    let city = document.getElementById('city')
    let country = document.getElementById('country')
    city.innerHTML = null
    country.innerHTML = null
    inputValue.value = null
}



function setImage(img){
    navImage.src =`https://openweathermap.org/img/wn/${img.icon}@4x.png`;
    img2.src =`https://openweathermap.org/img/wn/${img.icon}@4x.png`
}






function getTime(tz){
    const min = tz/60
    const currentTime = moment().utcOffset(min).format("h:mm A")
    showTime.innerHTML = currentTime
    // console.log(tz)
    // let show = new Date().toLocaleString('en-US', {timeStyle:'short'})
    // showTime.innerHTML = show
    
    // console.log(moment().utcOffset(min).format("h:mm A")); moment 
  

}

function showDayType(desc){
    console.log(desc.description)
    dayType.innerHTML = desc.description
}
    






function weatherCondition(val){
    switch(val){
        case "01d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/cs.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "01n":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/csn.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "02d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/fec.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "02n":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/fecn.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "03d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/scd.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "03n":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/scn.jpg')"
            card.style.backgroundSize = 'cover'
            break


        case "04d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/bcd.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "04n":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/bcn.jpg')"
            card.style.backgroundSize = 'cover'
            break

        case "09d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/rd.jpg')"
            card.style.backgroundSize = 'cover'
            break


         case "09n":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/rn.jpg')"
            card.style.backgroundSize = 'cover'
            break


        case "10d":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/rd.jpg')"
             card.style.backgroundSize = 'cover'
            break


        case "10n":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/rn.jpg')"
             card.style.backgroundSize = 'cover'
             break

        case "11d":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/tsd.jpg')"
             card.style.backgroundSize = 'cover'
             break


         case "11n":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/tsn.jpg')"
             card.style.backgroundSize = 'cover'
             break


        case "12d":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/snowfall.jpg')"
             card.style.backgroundSize = 'cover'
             break

        case "12n":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/snowfall.jpg')"
             card.style.backgroundSize = 'cover'
             break

        case "20d":
            card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/mist.jpg')"
             card.style.backgroundSize = 'cover'
             break

        case "20d":
             card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/mistn.jpg')"
            card.style.backgroundSize = 'cover'
            break

        default : 
        card.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(117, 19, 93, 0.73)),url('/Images/de.jpg')"
        card.style.backgroundSize = 'cover'
        break
    }
}




function tempratureCalc(temp){
    console.log(temp.temp)
    let f = 1.8*(temp.temp-273) + 32
    deg.innerHTML = Math.round(f)
    deg2.innerHTML = `${Math.round(f)}<sup>ᵒ<sub>F</sub></sup>`
}

// Td = T - ((100 - RH)/5.)  dew points

// 

function getWeatherDetail(temp,wind,visibility){
    console.log(wind.speed)
    console.log(visibility)
    // dew points
    let dp = temp.temp - ((100-temp.humidity)/5)
    let f = Math.round(1.8*(dp-273) + 32)
    dewValue.innerHTML = f

    // wind value
    let mph = Math.round(wind.speed*2.237)
    windValue.innerHTML = `${mph} mph`

    // humidity value
    humidityValue.innerHTML = `${temp.humidity}%`

    // pressure value
    pressureValue.innerHTML = temp.pressure

    // visibility value
    let miles = Math.round(visibility/1609)
    visibilityValue.innerHTML = `${miles}mi`
    




}



