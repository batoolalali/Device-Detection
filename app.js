console.log("hi")

let ulEl = document.getElementById("device");

console.log(WURFL)

for (const key in WURFL) {


    let liEl = document.createElement("li");
    ulEl.appendChild(liEl)
    liEl.innerHTML = `${key}: ${WURFL[key]}`
}



const userAgent = navigator.userAgent.toLowerCase();
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);



let h1El = document.getElementById("isTablet");
h1El.innerHTML = `is Tablet: ${isTablet}`


let pEl = document.getElementById("agent");
pEl.innerHTML= `user agent: ${navigator.userAgent}`