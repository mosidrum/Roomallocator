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

document.querySelector("#view-up").addEventListener("click", function () {
    document.querySelector("#rooms").classList.add("active");
});

document.querySelector(".comeup .close-btn").addEventListener("click", function () {
    document.querySelector(".comeup").classList.remove("active");
});

document.querySelector("#rooms .close").addEventListener("click", function () {
    document.querySelector("#rooms").classList.remove("active");
});


// const number = document.getElementById('room-number');
// const button = document.getElementById('room-btn');

// const randomNumberGenerate = () => {
//     const randomNumber = Math.floor(Math.random() * 50 + 1);

//     number.textContent = randomNumber
//     console.log(randomNumber)
// };
// button.addEventListener('click', randomNumberGenerate)
// randomNumberGenerate();

// DOM Element
const allocate = e => {
    let devData = {
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        type: document.getElementById('type').value,
        skillset: document.getElementById('skillset').value,
        roomNum: document.getElementById('room-num').value
    }
    localStorage.setItem('devData', JSON.stringify(devData));
    // console.log(localStorage.getItem('devData'));
    displayDevData();
    e.preventDefault();
}


function displayDevData() {
    let { name, gender, type, skillset, roomNum } = JSON.parse(localStorage.getItem('devData'));
    var output = document.getElementById('#rooms');

    output.innerHTML = `

    `
}

