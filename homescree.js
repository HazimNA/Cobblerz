const chatUs = document.getElementById("chatUs");
const phoneNumber = "0135737067";

chatUs.addEventListener("click", function(e) {
    const message = "Salam bro, nak tanya pasal service kasut"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

const callNow = document.getElementById("callNow");

callNow.addEventListener("click", function(e) {
    window.location.href = `tel:${phoneNumber}`; 
});