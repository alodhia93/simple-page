const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const cancelButton = document.querySelector("#cancel-button");
const defaultButton = document.querySelector("#default-button");
const customButton = document.querySelector("#custom-button");
const img = document.querySelector("img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultButtonActive(){
    defaultButton.click();
}
defaultButton.addEventListener("change", function(){
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        }
        cancelButton.addEventListener("click", function(){
            img.src = "";
            wrapper.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});