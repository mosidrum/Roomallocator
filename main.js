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
    document.querySelector(".rooms").classList.add("active");
});

document.querySelector(".comeup .close-btn").addEventListener("click", function () {
    document.querySelector(".comeup").classList.remove("active");
});

document.querySelector(".rooms .close").addEventListener("click", function () {
    document.querySelector(".rooms").classList.remove("active");
});


// DOM Element
const allocate = e => {

   let devData = JSON.parse(localStorage.getItem('devData')) || [];
    devData.push({
            name: document.getElementById('name').value,
            gender: document.getElementById('gender').value,
            type: document.getElementById('type').value,
            skillset: document.getElementById('skillset').value

    });

    localStorage.setItem('devData', JSON.stringify(devData));
    displayDevData();
    // console.log(localStorage.getItem('devData'));
    document.querySelector('form').reset();
    e.preventDefault();
}

function displayDevData() {
    console.log(localStorage.getItem('devData'));
    if (localStorage.getItem('devData')) {
        var output = document.querySelector('.rooms');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('devData')).forEach(data => {
            output.innerHTML += `
            <div>
                <label>Name</label>
            </div>
            `;
        });
    }
}

