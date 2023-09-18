
const checkboxes = document.querySelectorAll('.checkbox');
const labels = document.querySelectorAll('.form-control');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', function() {
    
    if (checkbox.checked) {
      labels[index].style.textDecoration = 'line-through';
      
    } else {
      
      labels[index].style.textDecoration = 'none';
    }
  });
});

const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector("#content");

    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(content).save();

});





