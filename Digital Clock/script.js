let ampm = document.getElementById("ampm")
function displaytime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    document.getElementById('hours').innerHTML = zero(hr)
    document.getElementById("minutes").innerHTML = zero(min)
    document.getElementById('seconds').innerHTML = zero(sec)
}
function zero(num){
    return num<10 ? "0" + num : num
}
setInterval(displaytime,500)