function checkVotingEligibility() {
    // Get the input element by its ID
    var inputAge = document.getElementById("inputAge");

    // Get the value entered in the input field and convert it to an integer
    var age = parseInt(inputAge.value);

    // Check if the age is eligible for voting
    if (!isNaN(age) && age >= 18) {
        document.getElementById("Results").textContent = "You are eligible to vote!";
    } else {
        document.getElementById("Results").textContent = "You are not eligible to vote.";
    }
}
