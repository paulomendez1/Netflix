var coll = document.getElementsByClassName("faq-button");
var icon = document.getElementsByClassName("fas");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            icon[2].style.transform = "rotate(90deg)";
            content.style.maxHeight = null;
        } else {
            content.style.display = "block";
            content.style.padding = "padding: 0.8em 2.2em 0.8em 1.2em";
            icon[2].style.transform = "rotate(45deg)";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}