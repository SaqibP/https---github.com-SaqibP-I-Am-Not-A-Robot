const checkbox = document.getElementById('checkbox');

const submitBtn = document.querySelector('button[type=submit');

const heading = document.getElementById('heading');

// Disabled Checkbox
checkbox.disabled = true;
submitBtn.disabled = true;
// console.log(submitBtn);

const elements = document.querySelectorAll('.element');

const selectColor = document.getElementById('selectColor');

// Assign Colors To Element

elements.forEach(function (element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.innerHTML = color;
  selectColor.innerHTML = color;
});

// Generate Random Color

function getRandomColor() {
  const letter = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Check If Right Color

elements.forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.innerHTML === selectColor.innerHTML) {
      alert('You are Human');
      checkbox.checked = true;
      checkbox.disabled = false;
      submitBtn.disabled = false;
      heading.textContent = 'Click on The Submit Button';
    } else {
      alert('Please Verify that you are human');
      location.reload(true);
    }
  });
});

// Page Refresh

// location.reload(true);
