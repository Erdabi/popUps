const h1 = document.getElementById("h1")
const card = document.getElementsByClassName("card")
const yesBtn = document.getElementById("yesbtn")
const noBtn = document.getElementById("nobtn")
let clickCount = 0;

yesBtn.addEventListener("click", function yes() {
    h1.innerHTML = "I knew it!"
    yesBtn.style.display = "none"
    noBtn.style.display = "none"
    
})

noBtn.addEventListener("click", function yes() {
    clickCount++

    if (clickCount === 1) {

        h1.innerHTML = "Are you sure?"
        yesBtn.classList.remove("yesbtn")
        noBtn.classList.remove("nobtn");

        yesBtn.classList.add("bigger-btn");
        noBtn.classList.add("smaller-btn");
    }
    if (clickCount === 2) {

        h1.innerHTML = "Don't lie to me!"

        yesBtn.innerHTML = "Im not"
        noBtn.innerHTML = "I am"

        yesBtn.classList.remove("bigger-btn")
        noBtn.classList.remove("smaller-btn")

        yesBtn.classList.add("even-bigger-btn");
        noBtn.classList.add("even-smaller-btn");
    }
    if (clickCount === 3) {

        h1.innerHTML = "Come on your mom already told me!"

        yesBtn.innerHTML = "She lied"
        noBtn.innerHTML = "Fine"

        yesBtn.classList.remove("even-bigger-btn")
        noBtn.classList.remove("even-smaller-btn")

        yesBtn.classList.add("even-even-bigger-btn");
        noBtn.classList.add("even-even-smaller-btn");
    }
    if (clickCount === 4) {

        h1.innerHTML = "I know you black!"

        yesBtn.innerHTML = "Ok ok stop asking"

        yesBtn.classList.remove("even-bigger-btn")
        noBtn.style.display = "none"

        yesBtn.classList.add("even-even-even-bigger-btn");
        
    }

    

})