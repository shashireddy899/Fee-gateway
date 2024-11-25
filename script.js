
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulated API call (replace with actual API call in production)
    setTimeout(function() {
        document.getElementById("confirmation").classList.remove("hidden");
    }, 1000);
});
