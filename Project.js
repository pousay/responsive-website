const s1 = document.querySelector(".scrolling1");
const s2 = document.querySelector(".scrolling2");
const s3 = document.querySelector(".scrolling3");
const s4 = document.querySelector(".scrolling4");


const navbarbtn = document.querySelector(".navbar-toggler")
navbarbtn.addEventListener("click", () => {
    const navbardiv = document.querySelector(".navbar-collapse")
    navbardiv.classList.toggle("show")
})


function main(special, other1, other2, other3) {
    special.classList.remove("text-muted");
    other1.classList.add("text-muted");
    other2.classList.add("text-muted");
    other3.classList.add("text-muted");
}


document.addEventListener("scroll", () => {
    if (scrollY <= 440) {
        main(s1, s2, s3, s4)
    }
    if (scrollY >= 440) {
        main(s2, s1, s3, s4)
    }
    if (scrollY >= 1580) {
        main(s3, s2, s1, s4)
    }
    if (scrollY >= 2700) {
        main(s4, s2, s3, s1)
    }
    else {

    }
})


if (window.performance) {
    window.scrollTo(0, 0)
}
