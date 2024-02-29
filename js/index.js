console.log("this is my script")
let result = {
    "email": "vkpvkp917@gmail.com",
    "user": "vkpvkp917",
    "tag": "",
    "domain": "gmail.com",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": false,
    "disposable": false,
    "score": 0.64,
    "state": "deliverable",
    "reason": "valid_mailbox",
    "free": true,
    "format_valid": true,
    "catch_all": null
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked!");
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="Loading">`
    let email=document.getElementById("username").value 
    let key = "ema_live_3BkdRLN94lYSSWbp4fVVvDrPmj1IgJhADxCyltuq"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str
})