window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
})

document.querySelector('#view-up').addEventListener("click", function () {
    document.querySelector("#output").classList.add("active");
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

document.querySelector('#cancel').addEventListener("click", function () {
    alert("Hello");
});

// document.querySelector("#rooms .close").addEventListener("click", function () {
//     document.querySelector("#rooms").classList.remove("active");
// });


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
    console.log(localStorage.getItem('devData'));
    displayDevData();
    document.querySelector('form').reset();
    alert("Operation successful");
    document.getElementById('name').focus();
    e.preventDefault();
}

const saveData = (data) => {
    const devData = JSON.parse(localStorage.getItem('devData'));
    // spread operator
    const newData = [...devData, data]
    localStorage.setItem('devData', newData);
  }

function displayDevData() {
    // console.log(localStorage.getItem('devData'));
    if (localStorage.getItem('devData')) {
        let { name, gender, type, skillset, roomNum } = JSON.parse(localStorage.getItem('devData'));
        var output = document.getElementById('output');

        output.innerHTML = `
            <div>
            <table>
                <tbody>
                    <tr>
                    <th>Name</th>
                    <td>${name}</td>
                    </tr>
                    <tr>
                    <th>Gender</th>
                    <td>${gender}</td>
                    </tr>
                    <tr>
                    <th>Type</th>
                    <td>${type}</td>
                    </tr>
                    <tr>
                    <th>Skillset</th>
                    <td>${skillset}</td>
                    </tr>
                    <tr>
                    <th>Room Number</th>
                    <td>${roomNum}</td>
                    </tr>
                </tbody>
            </table>
            <button id="cancel">OKAY</button>
            </div>
            `;
    }

}
displayDevData();

