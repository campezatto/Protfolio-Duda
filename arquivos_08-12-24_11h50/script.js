let btnclose = document.getElementById("drawer-open");
let btnopen = document.getElementById("icon");
let drawer = document.getElementById("drawer");


btnclose.addEventListener("click", fechadrawer)

function fechadrawer() {
    drawer.classList.remove("open")
    console.log(" aaa")
    btnopen.classList.remove("icon")

}

btnopen.addEventListener("click", abrirdrawer)

function abrirdrawer() {
    drawer.classList.add("open")
    btnopen.classList.add("icon")

}


function myFunction() {
    let main = document.querySelector("#roxo");
    const checkbox = document.querySelector("#check")
    if (checkbox.checked) {
        main.style.backgroundColor = "#D7CDCC"
        main.style.color = "black"
        quemsou.style.backgroundColor = " #87B2C0"
        quemsou.style.color = "black"
        projetos.style.backgroundColor = "#B3DEE2"
        ttl1.style.color = "black"
        titulo1.style.color = "black"
        artes.style.backgroundColor = "#9EB3C2"
        ttla.style.color = "black"
        contact.style.backgroundColor = "white"
        contact.style.color = "black"
        form.style.color = "black"
        form.style.backgroundColor = "#72ffa1"
        linha.style.backgroundColor = "#1C2F35"
        scrl.style.color = "#1C2F35"
        linha3.style.backgroundColor = "#D7CDCC"
        linha9.style.backgroundColor = "white"

    }
    else {
        main.style.backgroundColor = "#200116"
        main.style.color = "#72ffa1"
        quemsou.style.backgroundColor = "#22292F"
        projetos.style.backgroundColor = "#1C3B46"
        ttl1.style.color = "#9EB3C2"
        titulo1.style.color = "#9EB3C2"
        ttla.style.color = "#9EB3C2"
        artes.style.backgroundColor = " #3C3A45"
        contact.style.backgroundColor = "Black"
        contact.style.color = "white"
        form.style.color = "white"
        form.style.backgroundColor = "#30523B"
        linha.style.backgroundColor = "#9EB3C2"
        scrl.style.color = "#9EB3C2"
        linha3.style.backgroundColor = "#200116"
        linha9.style.backgroundColor = "black"

    }
}




// window.addEventListener('scroll', onscroll)

// function onscroll(){
//     let drawer = document.getElementById("drawer")

//         console.log(window.scrollY)
//         if(window.scrollY <= 600){
//             drawer.style.backgroundColor = "#200116"
//             drawer.style.color = "#200116"
//         }
//         else if(window.scrollY >620){
//             drawer.style.color = "#white"
//             drawer.style.backgroundColor = "#242C32"
//         }
//         if(window.scrollY >1100){
//             drawer.style.backgroundColor = "#1C3B46"
//             drawer.style.color = "#white"
//         }
//         if(window.scrollY >2100){
//             drawer.style.backgroundColor = "#3C3A45"
//             drawer.style.color = "#white"
//         }
//         if(window.scrollY >3000){
//             drawer.style.backgroundColor = "#3c5845"
//             drawer.style.color = "#white"
//         }



// }

const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}








        