let body = document.querySelector("html");
let dir = body.getAttribute("dir");
let span = document.querySelector("span")
function changeToArabic() {
    body.setAttribute("dir", "rtl");
    span.innerHTML = `    <link rel="stylesheet" href="./css/bootstrap.rtl.min.css">
`

}

function changeToEN() {
    body.setAttribute("dir", "ltr");
    span.innerHTML =`    <link rel="stylesheet" href="./css/bootstrap.min.css">
`

}