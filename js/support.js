function toggleDetails(element) {
    element.classList.toggle('active');
}

function zoomImage(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var instruction = document.querySelector(".zoom-instruction");
    modal.style.display = "block";
    modalImg.src = img.src;
    modal.classList.add("show-instruction");
    setTimeout(function() {
        modal.classList.remove("show-instruction");
    }, 3000); // Hide instruction after 3 seconds
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleZoom() {
    var modalImg = document.getElementById("img01");
    if (modalImg.classList.contains("zoomed")) {
        modalImg.classList.remove("zoomed");
        modalImg.style.transform = "scale(1)";
    } else {
        modalImg.classList.add("zoomed");
        modalImg.style.transform = "scale(2)";
    }
}