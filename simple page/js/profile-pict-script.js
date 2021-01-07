const imgDiv = document.querySelector('.profile-pict');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadButton = document.querySelector('#uploadButton');

imgDiv.addEventListener('mouseenter', function(){
    uploadButton.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function(){
    uploadButton.style.display = "none";
});
file.addEventListener('change', function() {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});