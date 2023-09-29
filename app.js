// Get references to DOM elements
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let submitBtn = document.getElementById('submit-btn');
let textResults = document.getElementById('text-results');
let idealWeight = document.getElementById('ideal-weight');
let category = document.getElementById('category');
let weightInfo = document.getElementById('weight-info');
let heightInfo = document.getElementById('height-info');

// Add an event listener to the submit button
submitBtn.addEventListener('click', function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values from the input fields
  let weightValue = parseFloat(weightInput.value); // Parse input values as floats
  let heightValue = parseFloat(heightInput.value);

  // Check if input values are valid numbers
  if (
    isNaN(weightValue) ||
    isNaN(heightValue) ||
    weightValue <= 0 ||
    heightValue <= 0
  ) {
    alert('Please enter valid weight and height values.');
    return; // Exit the function if input values are invalid
  }

  // Calculate the BMI
  let calculateBMI = weightValue / (heightValue * heightValue);

  // Display the BMI result
  textResults.textContent = `BMI is ${calculateBMI.toFixed(2)}`;
  category.textContent = `Weight category is: ${weightCategory(calculateBMI)}`;

  // Apply border styling
  document.querySelector('.weight-container').style.border =
    '2px solid #83a300';
  document.querySelector('.height-container').style.border =
    '2px solid #83a300';

  function calculateIdealWeight(height) {
    return height * height * 22;
  }
  // Calculate the ideal weight based on height
  let idealWeightCalculation = calculateIdealWeight(heightValue);
  let idealWeightText = `Ideal weight for your height: ${idealWeightCalculation.toFixed(
    2
  )} kg`;
  idealWeight.textContent = idealWeightText

  // Clear the input fields
  weightInput.value = '';
  heightInput.value = '';

  // Update the weight and height info
  weightInfo.textContent = `${weightValue} kg`;
  heightInfo.textContent = `${heightValue} m`;

  document.querySelector('.result-calculation').style.display = "block";
});

// Function to determine the weight category
function weightCategory(bmi) {
  let category;
  switch (true) {
    case bmi < 18.5:
      category = 'Underweight';
      break;
    case bmi >= 18.5 && bmi < 24.9:
      category = 'Normal';
      break;
    case bmi >= 24.9 && bmi < 29.9:
      category = 'Overweight';
      break;
    case bmi >= 30 && bmi < 34.9:
      category = 'Obesity';
      break;
    case bmi >= 35 && bmi < 39.9:
      category = 'Obesity stage 1';
      break;
    case bmi >= 40:
      category = 'Obesity stage 2';
      break;
    default:
      category = 'Incorrect values';
  }
  return category;
}