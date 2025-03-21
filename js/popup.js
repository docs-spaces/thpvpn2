document.addEventListener("DOMContentLoaded", function() {
    // Create the popup elements
    var popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";

    var popupContent = document.createElement("div");
    popupContent.className = "popup-content";

    var popupTitle = document.createElement("h1");
    popupTitle.innerHTML = "<strong>สำหรับผู้ใช้ MacOS/IpadOS/iOS/Android</strong>" ;

    var popupMessage = document.createElement("p");
    popupMessage.textContent = "";

    var popupImage = document.createElement("img");
    popupImage.src = "images/rd-winapp.jpg";
    popupImage.alt = "Warning Image";

    var popupButton = document.createElement("button");
    popupButton.textContent = "OK";
    popupButton.addEventListener("click", function() {
        document.body.removeChild(popupOverlay);
    });

    // Append elements to the popup content
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(popupMessage);
    popupContent.appendChild(popupImage);
    popupContent.appendChild(popupButton);

    // Append the popup content to the overlay
    popupOverlay.appendChild(popupContent);

    // Append the overlay to the body
    document.body.appendChild(popupOverlay);
});