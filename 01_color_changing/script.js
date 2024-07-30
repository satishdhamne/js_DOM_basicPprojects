var btn = document.querySelectorAll(".buttons")
var cBody = document.querySelector(".color_body")
var heading = document.querySelector('.bg-color')



btn.forEach(function (buttons) {

    //    console.log(buttons);
       buttons.addEventListener("click",function (e) {
            // console.log(e)
            // console.log(e.target.id);
            if(e.target.id === "red"){
                cBody.style.backgroundColor = "rgb(255, 0, 0)"
                heading.innerHTML = e.target.id
            }

            if(e.target.id === "yellow"){
                cBody.style.backgroundColor = "rgb(255, 255, 0)"
                heading.innerHTML = e.target.id
            }

            if(e.target.id === "grey"){
                cBody.style.backgroundColor = "rgb(116, 112, 112)"
                heading.innerHTML = e.target.id
            }

            if(e.target.id === "blue"){
                cBody.style.backgroundColor = "rgb(1, 179, 255)" 
                heading.innerHTML = e.target.id
            }

       })
       
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let cBody = document.querySelector(".color_body")
// let btn = document.querySelectorAll(".buttons")


// btn.forEach(function (b) {
//         // console.log(b);

//         b.addEventListener('click', function (e) {

//             // console.log(e.target.id); 

//                   let luffy = e.target.id

//                   switch (luffy){

//                     case "red":
//                         cBody.style.backgroundColor = "rgb(255, 0, 0)"
//                         break;
                        
//                     case "yellow":
//                          cBody.style.backgroundColor = "rgb(255, 255, 0)"
//                         break;
                        
//                     case "grey":
//                         cBody.style.backgroundColor = "rgb(116, 112, 112)"
//                         break;
                        
//                     case "blue":
//                         cBody.style.backgroundColor = "rgb(1, 179, 255)" 
//                         break;

//                   }
//         })
// })


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// let cBody = document.querySelector(".color_body")
// let btn = document.querySelectorAll(".buttons")


// btn.forEach(function (b) {
//         // console.log(b);

//         b.addEventListener('click', function (e) {

//             // console.log(e.target.id); 
                   
//             if (e.target.id === 'red') {
//                 cBody.style.backgroundColor = "rgb(255, 0, 0)"
//             } 
//             else if (e.target.id === 'yellow') {
//                 cBody.style.backgroundColor = "rgb(255, 255, 0)"
//             }
//             else if (e.target.id === 'grey') {
//                 cBody.style.backgroundColor = "rgb(116, 112, 112)"
//             }
//             else {
//                 cBody.style.backgroundColor = "rgb(1, 179, 255)" 
//             }
                  
//         })
// })



























