// Section-2 elements

let sec_2_form = document.querySelector('#sec_2_form');

// Section-3 elements

let sec_3_div = document.querySelector('#sec_3_div');

// Section-4 elements

let userInputEle = document.querySelector('#sec_4_form');
let noOfMatrixEle = document.querySelector('#noOfMatrix');
let rowEle = document.querySelector('#row');
let columnEle = document.querySelector('#column');

// Duplicate array for inputEleArr

let arr = [];

// Declaring input element

let inputEle;

userInputEle.addEventListener('submit', (e) => {
    e.preventDefault();
    creatingMatrixRowsColumns();
    sec_3_div.style.display = "none";
});

function creatingMatrixRowsColumns() {

    // Array to store input elements

    let inputEleArr = [];

    // Removing child elements from parent for display purpose

    while (sec_2_form.hasChildNodes()) {
        sec_2_form.removeChild(sec_2_form.firstChild);
    }

    // Taking input element values from sec_4_form

    let noOfMatrixVal = noOfMatrixEle.value.trim();
    let rowVal = rowEle.value.trim();
    let columnVal = columnEle.value.trim();

    // Condition for number of matrix set, rows and columns

    if (noOfMatrixVal < 2) {
        noOfMatrixVal = 2;
        noOfMatrixEle.value = noOfMatrixVal;
    }
    else if (noOfMatrixVal > 5) {
        noOfMatrixVal = 5;
        noOfMatrixEle.value = noOfMatrixVal;
    }

    // Condition for input value must be numbers

    else if (!numValidate(noOfMatrixVal)) {
        alert("please enter number only: [0-9]");
        return false;
    }

    if (rowVal < 2) {
        rowVal = 2;
        rowEle.value = rowVal;
    }
    else if (rowVal > 5) {
        rowVal = 5;
        rowEle.value = rowVal;
    }

    // Condition for input value must be numbers

    else if (!numValidate(rowVal)) {
        alert("please enter number only: [0-9]");
        return false;
    }

    if (columnVal < 2) {
        columnVal = 2;
        columnEle.value = columnVal;
    }
    else if (columnVal > 5) {
        columnVal = 5;
        columnEle.value = columnVal;
    }

    // Condition for input value must be numbers

    else if (!numValidate(columnVal)) {
        alert("please enter number only: [0-9]");
        return false;
    }

    // Displaying sec_2_form

    sec_2_form.style.display = "block";

    // Looping for creating matrix set, rows and columns

    for (let i = 1; i <= noOfMatrixVal; i++) {

        // Maximum no of matrix is 5 

        if (i > 5) {
            break;
        }

        // Creating matrix title element and adding into sec_2_form

        let matrixTitleEle = document.createElement('div');
        matrixTitleEle.innerHTML = "<b>Matrix set-" + i + "</b>";
        matrixTitleEle.className = "text-001f3f text-center my-2";
        sec_2_form.appendChild(matrixTitleEle);

        for (let j = 1; j <= rowVal; j++) {

            // Maximum no of rows is 5

            if (j > 5) {
                break;
            }

            for (let k = 1; k <= columnVal; k++) {

                // Maximum no of columns is 5

                if (k > 5) {
                    break;
                }

                // Creating input element for rows and columns then append into sec_2_form

                inputEle = document.createElement('input');
                let matrixRowsColumns = i + "-" + j + "" + k;
                inputEle.id = matrixRowsColumns;
                inputEle.className = "inputField text-center";
                inputEle.type = "text";
                inputEle.required = true;
                sec_2_form.appendChild(inputEle);

                // Selecting input elements one by one

                let ele = document.getElementById(matrixRowsColumns);

                // Pushing all input elements into array (inputEleArr)

                inputEleArr.push(ele);
            }

            // Creating break element and append into sec_2_form

            let brEle = document.createElement('br');
            sec_2_form.appendChild(brEle);
        }
    }

    arr = [...inputEleArr];

    // Creating calculate button element and append into sec_2_form

    let calculateBtnEle = document.createElement('button');
    calculateBtnEle.type = "submit";
    calculateBtnEle.className = "btn btn-outline-001f3f mx-2 my-3";
    calculateBtnEle.innerText = "Calculate";
    sec_2_form.appendChild(calculateBtnEle);

    // Creating refresh button element and append into sec_2_form

    let refreshBtnEle = document.createElement('button');
    refreshBtnEle.className = "btn btn-outline-001f3f mx-2 my-3";
    refreshBtnEle.innerText = "Refresh";
    refreshBtnEle.onclick = reload;
    sec_2_form.appendChild(refreshBtnEle);

    sec_2_form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculate();
    });
}

function reload() {
    location.reload();
}

// Input field requirements

const numValidate = (Value) => {
    return String(Value).toLowerCase().match(/^[0-9-]/);
}