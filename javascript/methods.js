// create input field 
function inputFieldElement(inputElement) {
    const inputFieldValue = document.getElementById(inputElement);
    const storeInputFieldValue = inputFieldValue.value
    const convertInputInt = parseInt(storeInputFieldValue);
    inputFieldValue.value = "";
    return convertInputInt;
}

// creating tr
function showResult(calculateTriangleArea, triangleName) {
    const containerTable = document.getElementById('tableContainer');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${count}.</td>
    <td>${triangleName}</td>
    <td>${calculateTriangleArea}cm<sup>2</sup></td>
    <td><button class="btn btn-active btn-secondary px-4">m<sup>2</sup></button></td>`
    containerTable.appendChild(tr)
}

// random color generator
function storeCardDetails(cardDiv) {
    const selectCard = document.getElementById(cardDiv);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    selectCard.style.backgroundColor = "#" + randomColor;
}