// Array for storing input element values

let inputEleValArr = [];

// Function for calculation

function calculate() {

    // Removing child elements from parent for display purpose

    while (sec_3_div.hasChildNodes()) {
        sec_3_div.removeChild(sec_3_div.firstChild);
    }

    // Condition for when will sec_3_div display

    if (inputEle.value != "") {
        sec_3_div.style.display = "block";
    }

    // Looping for storing all input element values in inputEleValArr

    let i = 0;

    while (i < arr.length) {
        inputEleValArr[i] = Number(arr[i].value.trim());

        // Condition for input value must be numbers

        if (!numValidate(inputEleValArr[i])) {
            alert("please enter number only: [0-9]");
            return false;
        }
        i++;
    }

    // Creating given title element and append into sec_3_div 

    let givTitleEle = document.createElement('div');
    givTitleEle.innerHTML = "<b>Given:-</b>";
    givTitleEle.className = "text-001f3f my-2";
    sec_3_div.appendChild(givTitleEle);

    // Starting index of the inputEleValArr 

    let a = 0;

    // Looping for display the given matrix 

    for (let i = 0; i < Number(noOfMatrixEle.value.trim()); i++) {

        // Creating matrix title element and append into sec_3_div 

        let titleEle = document.createElement('div');
        let matrixCount = i + 1;
        titleEle.innerHTML = "<b>Matrix set-" + matrixCount + "</b>";
        titleEle.className = "text-001f3f my-2";
        sec_3_div.appendChild(titleEle);

        // Creating givTableDiv element and append into sec_3_div 

        let givTableDiv = document.createElement('div');
        givTableDiv.className = "d-flex ms-4";
        sec_3_div.appendChild(givTableDiv);

        // Creating givTable element and append into givTableDiv 

        let givTable = document.createElement('table');
        givTable.className = "d-inline sec_2_table_border";
        givTableDiv.appendChild(givTable);

        for (let j = 0; j < Number(rowEle.value.trim()); j++) {

            // Creating table row and append into givTable

            let trEle = document.createElement('tr');
            givTable.appendChild(trEle);
            for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                // Creating table data and append into trEle 

                let tdEle = document.createElement('td');
                tdEle.className = "text-center px-2";
                tdEle.innerHTML = inputEleValArr[a];
                trEle.appendChild(tdEle);
                a++;
            }
        }
    }

    // Creating solution title element and append into sec_3_div

    let solTitleEle = document.createElement('div');
    solTitleEle.innerHTML = "<b>Solution:-</b>";
    solTitleEle.className = "text-001f3f my-2";
    sec_3_div.appendChild(solTitleEle);

    // Creating solTableDiv1 element and append into sec_3_div 

    let solTableDiv1 = document.createElement('div');
    solTableDiv1.className = "d-flex ms-4 res";
    sec_3_div.appendChild(solTableDiv1);

    // Creating solTable1 element and append into solTableDiv1 

    let solTable1 = document.createElement('table');
    solTable1.className = "d-inline sec_2_table_border";
    solTableDiv1.appendChild(solTable1);

    // Starting index of the inputEleValArr 

    let b = 0;

    // Spliting elements based on index position for step-1 process 

    let tempindex = (Number(inputEleValArr.length)) / (Number(noOfMatrixEle.value.trim()));
    let temp1index = tempindex * 2;
    let temp2index = tempindex * 3;
    let temp3index = tempindex * 4;

    // Switch statement for display the step-1 process 

    switch (Number(noOfMatrixEle.value.trim())) {
        case 2:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable1 

                let trEle = document.createElement('tr');
                solTable1.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle 

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[b] + " + " + inputEleValArr[tempindex];
                    tempindex++;
                    trEle.appendChild(tdEle); b++;
                }
            }
            break;
        case 3:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable1 

                let trEle = document.createElement('tr');
                solTable1.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[b] + " + " + inputEleValArr[tempindex] + " + " + inputEleValArr[temp1index];
                    tempindex++;
                    temp1index++;
                    trEle.appendChild(tdEle);
                    b++;
                }
            }
            break;
        case 4:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable1 

                let trEle = document.createElement('tr');
                solTable1.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle 

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[b] + " + " + inputEleValArr[tempindex] + " + "
                        + inputEleValArr[temp1index] + " + " + inputEleValArr[temp2index];
                    tempindex++;
                    temp1index++;
                    temp2index++;
                    trEle.appendChild(tdEle);
                    b++;
                }
            } break;
        case 5:
            for (let j = 0; j <
                Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable1 

                let trEle = document.createElement('tr');
                solTable1.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle 

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[b] + " + " + inputEleValArr[tempindex] + " + " + inputEleValArr[temp1index] + " + "
                        + inputEleValArr[temp2index] + " + " + inputEleValArr[temp3index];
                    tempindex++;
                    temp1index++;
                    temp2index++;
                    temp3index++;
                    trEle.appendChild(tdEle);
                    b++;
                }
            }
            break;
    }

    // Creating solTableDiv2 element and append into sec_3_div 

    let solTableDiv2 = document.createElement('div');
    solTableDiv2.className = "d-flex mt-3 ms-4";
    sec_3_div.appendChild(solTableDiv2);

    // Creating solTable2 element and append into solTableDiv2 

    let solTable2 = document.createElement('table');
    solTable2.className = "d-inline sec_2_table_border";
    solTableDiv2.appendChild(solTable2);

    // Starting index of the inputEleValArr 

    let c = 0;

    // Spliting elements based on index position for step-2 process 

    let index = (Number(inputEleValArr.length)) / (Number(noOfMatrixEle.value.trim()));
    let index1 = index * 2;
    let index2 = index * 3;
    let index3 = index * 4;

    // Switch statement for display the step-2 process

    switch (Number(noOfMatrixEle.value.trim())) {
        case 2: for (let j = 0; j < Number(rowEle.value.trim()); j++) {

            // creating table row and append into solTable2 

            let trEle = document.createElement('tr');
            solTable2.appendChild(trEle);
            for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                // creating table data and append into trEle 

                let tdEle = document.createElement('td');
                tdEle.className = "text-center px-2";
                tdEle.innerHTML = inputEleValArr[c] + inputEleValArr[index];
                index++;
                trEle.appendChild(tdEle);
                c++;
            }
        }
            break;
        case 3:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable2 

                let trEle = document.createElement('tr');
                solTable2.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle 

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[c] + inputEleValArr[index] + inputEleValArr[index1];
                    index++;
                    index1++;
                    trEle.appendChild(tdEle);
                    c++;
                }
            }
            break;
        case 4:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable2 

                let trEle = document.createElement('tr');
                solTable2.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[c] + inputEleValArr[index] + inputEleValArr[index1] + inputEleValArr[index2];
                    index++;
                    index1++;
                    index2++;
                    trEle.appendChild(tdEle);
                    c++;
                }
            }
            break;
        case 5:
            for (let j = 0; j < Number(rowEle.value.trim()); j++) {

                // creating table row and append into solTable2 

                let trEle = document.createElement('tr');
                solTable2.appendChild(trEle);
                for (let k = 0; k < (Number(columnEle.value.trim())); k++) {

                    // creating table data and append into trEle 

                    let tdEle = document.createElement('td');
                    tdEle.className = "text-center px-2";
                    tdEle.innerHTML = inputEleValArr[c] + inputEleValArr[index] + inputEleValArr[index1]
                        + inputEleValArr[index2] + inputEleValArr[index3];
                    index++;
                    index1++;
                    index2++;
                    index3++;
                    trEle.appendChild(tdEle);
                    c++;
                }
            } break;
    }
}