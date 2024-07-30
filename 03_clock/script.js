let clock = document.querySelector(".clock")


let d = new Date ()
// console.log(d);

clock.innerHTML = d.toLocaleTimeString()


setInterval(function () {

    let d = new Date ()
    clock.innerHTML = d.toLocaleTimeString()

}, 1000)


// console.log(d.toString());
// console.log(d.toLocaleDateString());





