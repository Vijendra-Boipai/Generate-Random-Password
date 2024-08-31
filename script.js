const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswdField1 = document.getElementById("pswdGenerateField1")
let pswdField2 = document.getElementById("pswdGenerateField2")

function random() {
    let num = Math.floor((Math.random() * characters.length))
    return num;
}

function generatepswd() {

    pswdField1.innerText = ""
    pswdField2.innerText = ""

    for (let i = 0; i < 16; i++) {
        let password1 = characters[random()]
        let password2 = characters[random()]

        pswdField1.innerText += password1
        pswdField2.innerText += password2
    }

}