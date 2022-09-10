window.addEventListener("load" , (e)=>{
    console.log()
    let connectionStatus = navigator.onLine? 'online' : 'offline'
    console.log(connectionStatus)
    if(connectionStatus == 'online'){
        window.location.href = "weather.html"
    }

})