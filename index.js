let fnameEle = document.getElementById("fname")
let emailEle = document.getElementById("email")
let mobileEle = document.getElementById("mobile")
let cityEle = document.getElementById("city")

let fnameErrorEle = document.getElementById("fname-error")
let emailErrorEle = document.getElementById("email-error")
let mobileErrorEle = document.getElementById("mobile-error")
let cityErrorEle = document.getElementById("city-error")

let submitBtnEle = document.getElementById("submit-btn")

let successMessageEle = document.getElementById("success-message")

function validation1() {
    var regexp = /^[a-zA-Z ]{2,50}$/;
    if (fnameEle.value === "") {
        fnameErrorEle.textContent = "*this field is required"
        fnameEle.style.border = "1px solid red"
        return false
    }else if (!regexp.test(fnameEle.value)){
        fnameErrorEle.textContent = "*please enter valid name"
        fnameEle.style.border = "1px solid red"
        return false
    } else {
        fnameErrorEle.textContent = ""
        fnameEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function validation2() {
    let index = emailEle.value.indexOf("@")
    if (emailEle.value == "") {
        emailErrorEle.textContent = "*this field is required"
        emailEle.style.border = "1px solid red"
        return false
    }else if(index==-1) {
        emailErrorEle.textContent = "*please enter valid email"
        emailEle.style.border = "1px solid red"
        return false
    }else {
        emailErrorEle.textContent = ""
        emailEle.style.border = "1px solid #F7F5F2"
        return true

    }
}

function validation3() {
    let regexp = /^[6-9][0-9]{9}$/
    if (mobileEle.value === "") {
        mobileErrorEle.textContent = "*this field is required"
        mobileEle.style.border = "1px solid red"
        return false
    }else if (!regexp.test(mobileEle.value)) {
        mobileErrorEle.textContent = "*please enter valid number, number starts with 6-9 and having 10 digits"
        mobileEle.style.border = "1px solid red"
        return false
    }else {
        mobileErrorEle.textContent = ""
        mobileEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function validation4() {
    if (cityEle.value === "") {
        cityErrorEle.textContent = "*this field is required"
        cityEle.style.border = "1px solid red"
        return false
    }else {
        cityErrorEle.textContent = ""
        cityEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function successMessage() {
    successMessageEle.textContent = "Form submitted successfully"
    setTimeout(function() {
        successMessageEle.textContent = ""
    }, 3000)
}
function validation() {
    let v1 = validation1()
    let v2 = validation2()
    let v3 = validation3()
    let v4 = validation4()

    console.log(v1 & v2 & v3 & v4);
    if (v1 & v2 & v3 & v4) {
        fnameEle.value = ""
        emailEle.value = ""
        mobileEle.value = ""
        cityEle.value = ""
        successMessage()
    }

    return v1 & v2 & v3 & v4
}

let sliderData = [
    {
        title: "COASTAL",
        data: "Breathe, be free and live in the colours of sun and sea. Lighter colours and textured fabrics for a smooth and easy style.",
        link: "./Resoureces/decor-1.png"
    },
    {
        title: "title1",
        data: "sample data1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        link: "./Resoureces/decor-2.jpg"
    },
    {
        title: "title2",
        data: "sample data2-Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        link: "./Resoureces/decor-3.jpg"
    }
]

path = 1
let sliderHeadEle = document.getElementById("slider-h1")
let sliderParaEle = document.getElementById("slider-para")
let sliderImageEle = document.getElementById("slider-img")
let leftBtnEle = document.getElementById("left-btn")
let rightBtnEle = document.getElementById("right-btn")

function sliderContent(data) {
    sliderHeadEle.textContent = data.title
    sliderParaEle.textContent = data.data
    sliderImageEle.src = data.link
}

function onClickLeftBtn() {
    if (path == 1) {
        path = sliderData.length
        console.log(sliderData[path-1]);
        sliderContent(sliderData[path-1])
    }else {
        path--
        console.log(sliderData[path-1]);
        sliderContent(sliderData[path-1])
    }

}

function onClickRightBtn() {
    if (path == sliderData.length) {
        path = 1
        console.log(sliderData[path-1]);
        sliderContent(sliderData[path-1])
    }else {
        path++
        console.log(sliderData[path-1]);
        sliderContent(sliderData[path-1])
    }
}