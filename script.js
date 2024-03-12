const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
const color = document.getElementById('color');
let size = 400;
// Generate QR code when Generate button is clicked
generateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    isEmptyInput();
});
// Update size when size selection changes
sizes.addEventListener('change', (e) =>{
    size = e.target.value;
    isEmptyInput();
});
// Download QR code when Download button is clicked
downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr); 
    } else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
// Check if input is empty before generating QR code
function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }else{
        alert("Enter the text or URL to generate QR Code");
    }
   // qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}
// Generate QR code with specified text and size
function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height: size,
        width: size,
        colorDark : "#fff",
        colorLight : color.value,
    });
}
// Generate QR code with default size (400) on page load
window.addEventListener('load', () => {
    generateQRCode();
});