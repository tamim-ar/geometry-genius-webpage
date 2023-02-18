let count = 0;

// triangle part
document.getElementById('triAngle').addEventListener('click', function () {
    count += 1;
    const triangleName = document.getElementById('titleTriangle').innerText;
    const triangleBase = inputFieldElement('baseTriangle');
    const triangleHeight = inputFieldElement('heightTriangle');
    if (isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase === null || triangleHeight === null || typeof triangleBase === 'string' || typeof triangleHeight === 'string' || triangleBase < 0 || triangleHeight < 0) {
        return alert('Please enter a valid input');
    }
    const calculateTriangleArea = 0.5 * triangleBase * triangleHeight
    showResult(calculateTriangleArea, triangleName);
})

// rectangle part
document.getElementById('rectangleBtn').addEventListener('click', function () {
    count += 1;
    const triangleName = document.getElementById('titleRectangle').innerText;
    const rectangleWidth = inputFieldElement('widthRectangle');
    const rectangleLength = inputFieldElement('lengthRectangle');
    if (isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth === null || rectangleLength === null || typeof rectangleWidth === 'string' || typeof triangleHeight === 'string' || rectangleWidth < 0 || rectangleLength < 0) {
        return alert('Please enter a valid input');
    }
    const calculateRectangleArea = rectangleWidth * rectangleLength
    showResult(calculateRectangleArea, triangleName);
})

// parallelogram part
document.getElementById('parallelogramBtn').addEventListener('click', function () {
    count += 1;
    const parallelogramTitle = document.getElementById('parallelogramTitle').innerText;
    const widthParallelogram = inputFieldElement('parallelogramWidth');
    const heightParallelogram = inputFieldElement('parallelogramHeight');
    if (isNaN(widthParallelogram) || isNaN(heightParallelogram) || widthParallelogram === null || heightParallelogram === null || typeof widthParallelogram === 'string' || typeof heightParallelogram === 'string' || widthParallelogram < 0 || heightParallelogram < 0) {
        return alert('Please enter a valid input');
    }
    const calculateParallelogramArea = widthParallelogram * heightParallelogram
    showResult(calculateParallelogramArea, parallelogramTitle);
})

// rhombus part
document.getElementById('rhombusBtn').addEventListener('click', function () {
    count += 1;
    const rhombusTitle = document.getElementById('rhombusTitle').innerText;
    const rhombusD1 = inputFieldElement('rhombusD1');
    const rhombusD2 = inputFieldElement('rhombusD2');
    if (isNaN(rhombusD1) || isNaN(rhombusD2) || rhombusD1 === null || rhombusD2 === null || typeof rhombusD1 === 'string' || typeof rhombusD2 === 'string' || rhombusD1 < 0 || rhombusD2 < 0) {
        return alert('Please enter a valid input');
    }
    const calculateRhombusArea = 0.5 * rhombusD1 * rhombusD2
    showResult(calculateRhombusArea, rhombusTitle);
})

// pentagon part
document.getElementById('pentagonBtn').addEventListener('click', function () {
    count += 1;
    const pentagonTitle = document.getElementById('pentagonTitle').innerText;
    const pentagonPut = inputFieldElement('pentagonPut');
    const pentagonBase = inputFieldElement('pentagonBase');
    if (isNaN(pentagonPut) || isNaN(pentagonBase) || pentagonPut === null || pentagonBase === null || typeof pentagonPut === 'string' || typeof pentagonBase === 'string' || pentagonPut < 0 || pentagonBase < 0) {
        return alert('Please enter a valid input');
    }
    const calculatePentagonArea = 0.5 * pentagonPut * pentagonBase;
    showResult(calculatePentagonArea, pentagonTitle);
})

// ellipse part
document.getElementById('ellipseBtn').addEventListener('click', function () {
    count += 1;
    const piValue = 3.14;
    const ellipseTitle = document.getElementById('ellipseTitle').innerText;
    const ellipseArea = inputFieldElement('ellipseArea');
    const ellipseBase = inputFieldElement('ellipseBase');
    if (isNaN(ellipseArea) || isNaN(ellipseBase) || ellipseArea === null || ellipseBase === null || typeof ellipseArea === 'string' || typeof ellipseBase === 'string' || ellipseArea < 0 || ellipseBase < 0) {
        return alert('Please enter a valid input');
    }
    const calculateEllipseArea = piValue * ellipseArea * ellipseBase
    const toFixedValue = calculateEllipseArea.toFixed(2)
    showResult(toFixedValue, ellipseTitle);
})

// random color generator part
document.getElementById('bgColor1').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor1');
})
document.getElementById('bgColor2').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor2')
})
document.getElementById('bgColor3').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor3')
})
document.getElementById('bgColor4').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor4')
})
document.getElementById('bgColor5').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor5')
})
document.getElementById('bgColor6').addEventListener('mouseover', function (event) {
    storeCardDetails('bgColor6')
})

// blog part
document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = 'blog.html'
  })