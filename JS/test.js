function numRoots() {
    var a = parseFloat(prompt("Enter the first number."));
    var b = parseFloat(prompt("Enter the second number."));
    var c = parseFloat(prompt("Enter the third number."));

    var discriminant = (b ** 2) - (4 * a * c);

    if (discriminant > 0) {
        alert("There are two real roots.");
    } else if (discriminant == 0) {
        alert("There is one real root.");
    } else {
        alert("There are no real roots");
    }
}

numRoots()

// Pre: The inputs are real numbers
// Post: Outputs whether there are 2, 1, or no real quadratic roots