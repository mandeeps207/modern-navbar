const items = document.querySelectorAll("nav ul li");
const container = document.querySelector("#nav-container");
const glider = document.querySelector(".glider");

function setGliderStyle(element) {
    let positionFromLeft = element.offsetLeft;
    glider.style.left = positionFromLeft + "px";
    glider.style.width = element.clientWidth + "px";
}

items.forEach(item => {
    if (item.classList.contains("active")) {
        setGliderStyle(item);
    }
    item.addEventListener("click", function(){
        items.forEach(i => {
            if (i === this) {
                setGliderStyle(this);
                i.classList.add("active");
            } else {
                i.classList.remove("active");
            }
        })
    })
})