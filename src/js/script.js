alert("Bienvenido a mi pagina web")

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector("#overlay");




menu.addEventListener("click",()=>{
    links.classList.toggle("visible");
    overlay.classList.toggle("overlay")
    document.body.classList.toggle("no-scroll")
})

overlay.addEventListener("click",()=>{
    links.classList.remove("visible");
    overlay.classList.remove("overlay")
    document.body.classList.remove("no-scroll")
})


link.forEach(a => {
    a.addEventListener("click",()=>{
        setTimeout(()=>{
            links.classList.remove("visible");
            overlay.classList.remove("overlay")
            document.body.classList.remove("no-scroll")
        },100)
    })
});