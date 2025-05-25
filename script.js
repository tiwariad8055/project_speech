let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)   //object
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon sir")
    }
    else {
        speak("Good Evening sir")
    }
}
// window.addEventListener('load', () => {
//     wishMe()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(input) {
    input = input.replace(/shifra|shipra/gi, "").trim();
    btn.style.display = "flex"
    voice.style.display = "none"
    if (input.includes("hello") || input.includes("hey")) {
        speak("hello sir,how can i help you")
    }
    else if (input.includes("who are you")) {
        speak("I am a virtual assistant,created by  mister Adarsh")
    }
    else if (input.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if (input.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if (input.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if (input.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (input.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })//undefined is used for language
        speak(time)
    }
    else if (input.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })//undefined is used for language
        speak(date)
    }
    else {
        let finalText = "this is what i found on internet regarding" + input
        speak(finalText)
        window.open(`https://www.google.com/search?q=${input}`)
    }

}