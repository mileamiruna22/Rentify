document.addEventListener('DOMContentLoaded', function() {
    
    // Funcție pentru schimbarea imaginii de fundal
    window.updateBackgroundImage = function() {
        const heroBackground = document.getElementById('heroBackground');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                heroBackground.style.backgroundImage = `url('${e.target.result}')`;
            }
            reader.readAsDataURL(file);
        }
        fileInput.click();
    }
});