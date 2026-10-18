// getting the elements from the page
var nameInput = document.getElementById("name");
var totalInput = document.getElementById("total");
var attendedInput = document.getElementById("attended");
var errorMsg = document.getElementById("errorMsg");
var checkBtn = document.getElementById("checkBtn");
var card = document.getElementsById("resultCard");

//FUNCTION RUNS WHEN BUTTON IS CLICKED
checkBtn.onclick = function () {
    var name = nameInput.value;
    var total = Number(totalInput.value);
    var attended =Number(attendedInput.value);

    // hide old result and old error
    card.style.display = "none";
    errorMsg.innerText = "";

    // check if all fields are  filled
    if (name === "" || total === "" || attended === "") {
        errorMsg.innerText = "Please fill all the fields";
        return;
    }

    // total classes should be more than 0
    if (total <= 0) {
        errorMsg.innerText = "Total classes should be more than 0";
        return;
    }

    // attended classes canot be negative
    if (attended < 0) {
        errorMsg.innerText = "Attended classes cannot be a negative number";
        return;
    }

    // attended classes cannot be more than total classes
    if (attended > total) {
        errorMsg.innerText = "Attended classes cannot be more than total classes";
        return;
    }

    // calculate attendance percentage
    var percentage = (attended / total) * 100;
    
    //check eligible or not
    var status;
    if (percentage >= 75) {
        status = "Eligible";
        card.className = "card eligible";
    } else {
        status = "Short Attendance";
        card.classmate = "card short";
    }

    //show the result in the card
    document.getElementById("cardName").innerText = name;
    document.getElementById("cardDetails").innerText = "Attendance: " + attended + "out of " + total + " classes";
    document.getElementById("cardPercentage").innerText = "Attendance Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("cardStatus").innerText = "Status: " + status;
    card.style.display = "block";
};