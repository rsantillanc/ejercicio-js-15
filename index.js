const myName = "Renzo"
const mySurname = "Santillán"
const myObject = { name: myName, surname: mySurname }
let twoMinutesLater = new Date(2022,10,15,14,20,60,0)
twoMinutesLater = twoMinutesLater.toUTCString()

sessionStorage.setItem("my_object", JSON.stringify(myObject))
localStorage.setItem("my_object", JSON.stringify(myObject))
const myNameFound = localStorage.getItem("my_object").name


document.cookie = `my_object=${JSON.stringify(myObject)}; expires=${twoMinutesLater}`
//document.cookie = `my_object=${JSON.stringify(myObject)}`