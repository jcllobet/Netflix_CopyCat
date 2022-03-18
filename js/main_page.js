const flipTriangle = (e) => {
    console.log(e);
    //e.target.classList.toggle("arrow-down");
    //e.target.classList.toggle("arrow-up");
};

const css = (element, property) => {
    return window.getComputedStyle(element, null).getPropertyValue(property);
};

const onLoad = () => {
    let span = document.createElement("span");
    console.log("Hello World");

    span.className = "fa";
    span.style.display = "none";
    document.body.insertBefore(span, document.body.firstChild);

    if (css(span, "font-family") !== "FontAwesome") {
        // add a local fallback
        console.log("FontAwesome not found");
    }
    document.body.removeChild(span);
};

window.onload = onLoad();
