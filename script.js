document.getElementById("know-more-btn").addEventListener("click", function() {
    var moreDetails = document.getElementById("more-details");
    var knowMoreBtn = document.getElementById("know-more-btn");

    if (moreDetails.style.display === "none") {
        moreDetails.style.display = "block";
        knowMoreBtn.textContent = "Know Less";
        knowMoreBtn.classList.add("know-less"); // Add "know-less" class when showing additional details
    } else {
        moreDetails.style.display = "none";
        knowMoreBtn.textContent = "Know More";
        knowMoreBtn.classList.remove("know-less"); // Remove "know-less" class when hiding additional details
    }
});


