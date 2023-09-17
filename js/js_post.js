

// Get all checkboxes and labels
const checkboxes = document.querySelectorAll('.checkbox');
const labels = document.querySelectorAll('.form-control');

// Add event listener to each checkbox
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', function() {
    // If checkbox is checked, apply text-decoration: line-through to the corresponding label
    if (checkbox.checked) {
      labels[index].style.textDecoration = 'line-through';
    } else {
      // If checkbox is unchecked, remove text-decoration: line-through from the corresponding label
      labels[index].style.textDecoration = 'none';
    }
  });
});





