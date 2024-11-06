const fileInput = document.getElementById('fileInput');
const imageDisplay = document.getElementById('imageDisplay');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageDisplay.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
