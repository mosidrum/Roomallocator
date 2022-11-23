window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
})

document.querySelector('#close').addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("#show-comeup").addEventListener("click", function () {
    document.querySelector(".comeup").classList.add("active");
});

document.querySelector(".comeup .close-btn").addEventListener("click", function () {
    document.querySelector(".comeup").classList.remove("active");
});

