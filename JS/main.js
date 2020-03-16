var editor = CodeMirror.fromTextArea
    (document.getElementById("editor"), {
        mode: "javascript",
        theme: "material-darker",
        lineNumbers: true,
        matchBrackets: true,
    });

var editorJava = CodeMirror.fromTextArea
    (document.getElementById("editorJava"), {
        mode: "text/x-java",
        theme: "material-darker",
        lineNumbers: true,
        matchBrackets: true,
    });

function codeRun() {
    try {
        document.getElementById("userCode").remove()
    }
    catch (e) {
    }
    finally {
        var jsx = editor.getValue();
        var s = document.createElement('script');
        s.setAttribute("id", "userCode");
        s.textContent = "function userCodeRun() { " + jsx + "\n}";
        document.body.appendChild(s);
        userCodeRun();
    }
}

var jsCode = ""

function p01Func() {
    document.getElementById("output").innerHTML = "<p> Draw a flowchart for a computer program\
    to receive two numbers and output their sum.</p>";

    jsCode = '\
function sumNums () {\n\
    var num1 = parseFloat(prompt("Enter the first number."));\n\
    var num2 = parseFloat(prompt("Enter the second number."));\n\
    \n\
    var sum = num1 + num2;\n\
    \n\
    var result = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";\n\
    \n\
    alert(result);\n\
}\n\
    \n\
sumNums();\n\n\
\n\
// Pre: Inputs are real numbers\n\
// Post: The sum of the two numbers are outputted'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter first number:");\n\
        int num1 = input.nextInt();\n\
\n\
        System.out.println("Enter second number:");\n\
        int num2 = input.nextInt();\n\
\n\
        int sum = num1 + num2;\n\
\n\
        System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum + ".");\n\
    }\n\
}\n\
\n\
// Pre: Inputs are real numbers\n\
// Post: The sum of the two numbers are outputted'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex1.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob1").setAttribute("class", "problemButtonActive");
    }
}

function p02Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a computer program to\
    receive three numbers as three sides of a\
    triangle, and by using Heron’s formula, calculate and output the area of the triangle.</p>";

    jsCode = '\
function triangleSides() {\n\
    var side1 = parseFloat(prompt("Enter side 1."));\n\
    var side2 = parseFloat(prompt("Enter side 2."));\n\
    var side3 = parseFloat(prompt("Enter side 3."));\n\
    \n\
    var s = (side1 + side2 + side3)/2;\n\
    var area = (s*(s-side1)*(s-side2)*(s-side3))**(1/2);\n\
    \n\
    alert("The area of this this triangle is: " + area.toFixed(2) + ".");\n\
}\
\n\
triangleSides();\n\
\n\
// Pre: Inputs are greater than 0\n\
// Post: Area of the triangle is outputted\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter side 1.");\n\
        double side1 = input.nextDouble();\n\
\n\
        System.out.println("Enter side 2.");\n\
        double side2 = input.nextDouble();\n\
\n\
        System.out.println("Enter side 3.");\n\
        double side3 = input.nextDouble();\n\
\n\
        double s = (side1 + side2 + side3)/2;\n\
        double s2 = s*(s-side1)*(s-side2)*(s-side3);\n\
        double area  = Math.round(Math.pow(s2,0.5)*100.00)/100.00;\n\
\n\
        System.out.println("The area of a triangle with sides " + side1 + ", "\n\
                + side2 + ", and " + side3 + " is: " + area + ".");\n\
    }\n\
}\n\
\n\
// Pre: Inputs are greater than 0\n\
// Post: Area of the triangle is outputted\n'


    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex2.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob2").setAttribute("class", "problemButtonActive");
    }
}

function p03Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a computer program to\
    receive three numerical coefficients of a quadratic equation\
    and calculate and output its roots.</p>";

    jsCode = '\
function quadRoots() {\n\
    var a = parseFloat(prompt("Enter the first number."));\n\
    var b = parseFloat(prompt("Enter the second number."));\n\
    var c = parseFloat(prompt("Enter the third number."));\n\
    \n\
    var root1 = (-b + ((b ** 2) - (4 * a * c)) ** (1/2)) / (2 * a);\n\
    var root2 = (-b - ((b ** 2) - (4 * a * c)) ** (1/2)) / (2 * a);\n\
    \n\
    alert("The roots are: " + root1.toFixed(2) + " and " + root2.toFixed(2) + ".");\n\
}\n\
\n\
quadRoots();\n\
\n\
// Pre: Three numbers inputted such that there are two real quadratic roots\n\
// Post: Outputs the two quadratic roots\n\
    '
    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter the first number.");\n\
        double a = input.nextDouble();\n\
\n\
        System.out.println("Enter the second number.");\n\
        double b = input.nextDouble();\n\
\n\
        System.out.println("Enter the third number.");\n\
        double c = input.nextDouble();\n\
\n\
        double root1 = Math.round((Math.sqrt((-b + ((Math.pow(b,2)) - (4 * a * c)))) / (2 * a))*100.00)/100.00;\n\
        double root2 = Math.round((Math.sqrt((-b - ((Math.pow(b,2)) - (4 * a * c))) / (2 * a)))*100.00)/100.00;\n\
\n\
\n\
        System.out.println("The roots are " + root1 + ", " + root2 + ".");\n\
    }\n\
}\n\
\n\
// Pre: Three numbers inputted such that there are two real quadratic roots\n\
// Post: Outputs the two quadratic roots'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex3.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob3").setAttribute("class", "problemButtonActive");
    }
}

function p04Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to receive three numerical\
    coefficients of a quadratic equation and determines if it has two distinct real roots, one\
    root, or no roots in real numbers.</p>";

    jsCode = '\
function numRoots() {\n\
    var a = parseFloat(prompt("Enter the first number."));\n\
    var b = parseFloat(prompt("Enter the second number."));\n\
    var c = parseFloat(prompt("Enter the third number."));\n\
    \n\
    var discriminant = (b ** 2) - (4 * a * c);\n\
    \n\
    if (discriminant > 0) {\n\
        alert("There are two real roots.");\n\
    } else if (discriminant == 0) {\n\
        alert("There is one real root.");\n\
    } else {\n\
        alert("There are no real roots");\n\
    }\n\
}\n\
\n\
numRoots();\n\
\n\
// Pre: The inputs are real numbers\n\
// Post: Outputs whether there are 2, 1, or no real quadratic roots'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter the first number.");\n\
        double a = input.nextDouble();\n\
\n\
        System.out.println("Enter the second number.");\n\
        double b = input.nextDouble();\n\
\n\
        System.out.println("Enter the third number.");\n\
        double c = input.nextDouble();\n\
\n\
        double discriminant = Math.pow(b,2) - (4 * a * c);\n\
\n\
        if (discriminant > 0) {\n\
            System.out.println("There are two real roots.");\n\
        } else if (discriminant == 0) {\n\
            System.out.println("There is one real root.");\n\
        } else {\n\
            System.out.println("There are no real roots");\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: The inputs are real numbers\n\
// Post: Outputs whether there are 2, 1, or no real quadratic roots'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex4.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob4").setAttribute("class", "problemButtonActive");
    }
}

function p05Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to receive a number and map\
    it to a letter grade based on York standard.</p>";

    jsCode = '\
function yorkGrade() {\n\
    var grade = parseInt(prompt("Enter your grade percentage."));\n\
    \n\
    if (grade > 89) {\n\
        alert("A+");\n\
    } else if (grade > 79) {\n\
        alert("A");\n\
    } else if (grade > 74) {\n\
        alert("B+");\n\
    } else if (grade > 69) {\n\
        alert("B");\n\
    } else if (grade > 64) {\n\
        alert("C+");\n\
    } else if (grade > 59) {\n\
        alert("C");\n\
    } else if (grade > 54) {\n\
        alert("D+");\n\
    } else if (grade > 49) {\n\
        alert("D");\n\
    } else if (grade > 39) {\n\
        alert("E");\n\
    } else {\n\
        alert("F");\n\
    }\n\
}\n\
\n\
yorkGrade();\n\
\n\
// Pre: Input is an integer greater than or equal to 0\n\
// Post: Converts your grade percentage to a York letter grade'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter your grade percentage.");\n\
        int grade = input.nextInt();\n\
\n\
        if (grade > 89) {\n\
            System.out.println("A+");\n\
        } else if (grade > 79) {\n\
            System.out.println("A");\n\
        } else if (grade > 74) {\n\
            System.out.println("B+");\n\
        } else if (grade > 69) {\n\
            System.out.println("B");\n\
        } else if (grade > 64) {\n\
            System.out.println("C+");\n\
        } else if (grade > 59) {\n\
            System.out.println("C");\n\
        } else if (grade > 54) {\n\
            System.out.println("D+");\n\
        } else if (grade > 49) {\n\
            System.out.println("D");\n\
        } else if (grade > 39) {\n\
            System.out.println("E");\n\
        } else {\n\
            System.out.println("F");\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is an integer greater than or equal to 0\n\
// Post: Converts your grade percentage to a York letter grade'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex5.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob5").setAttribute("class", "problemButtonActive");
    }
}

function p06Func() {
    document.getElementById("output").innerHTML = "<p> Draw a flowchart that outputs whether\
    the input is positive or negative until a zero\
    is received. When a zero is received, the button is disabled</p>";

    jsCode = '\
function checkNum() {\n\
    var num = parseFloat(prompt("Enter in a number"));\n\
    \n\
    while (num != 0) {\n\
        if (num > 0) {\n\
            alert("Positive");\n\
        } else {\n\
            alert("Negative");\n\
        }\n\
        num = parseFloat(prompt("Enter in a number"));\n\
    }\n\
}\n\
\n\
checkNum();\n\
\n\
// Pre: Input is a real number\n\
// Post: Outputs whether a number is positive or negative\n\
//       until a zero is received in which case the program\n\
//       stops'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        int num = input.nextInt();\n\
\n\
        while (num != 0) {\n\
            if (num > 0) {\n\
                System.out.println("Positive");\n\
            } else {\n\
                System.out.println("Negative");\n\
            }\n\
            System.out.println("Enter in a number.");\n\
            num = input.nextInt();\n\
        }\n\
\n\
    }\n\
}\n\
\n\
// Pre: Input is a real number\n\
// Post: Outputs whether a number is positive or negative\n\
//       until a zero is received in which case the program\n\
//       stops'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex6.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob6").setAttribute("class", "problemButtonActive");
    }
}

function p07Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to receive numbers\
    and output if they are positive/negative until a zero is entered. When a zero is entered, the\
    program outputs how many positive & negative numbers were entered.</p>";

    jsCode = '\
function checkNumCount() {\n\
    var num = parseFloat(prompt("Enter in a number"));\n\
    var count = 0;\n\
    \n\
    while (num != 0) {\n\
        count += 1;\n\
        if (num > 0) {\n\
            alert("Positive");\n\
        } else {\n\
            alert("Negative");\n\
        }\n\
        num = parseFloat(prompt("Enter in a number"));\n\
    }\n\
    alert("There were " + count + " positive and negative numbers entered.");\n\
}\n\
\n\
checkNumCount();\n\
\n\
// Pre: Input is a real number\n\
// Post: Outputs whether a number is positive or negative\n\
//       until a zero is received in which case the program\n\
//       outputs how many numbers were entered before 0'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        int num = input.nextInt();\n\
        int count = 0;\n\
\n\
        while (num != 0) {\n\
            count++;\n\
            if (num > 0) {\n\
                System.out.println("Positive");\n\
            } else {\n\
                System.out.println("Negative");\n\
            }\n\
            System.out.println("Enter in a number.");\n\
            num = input.nextInt();\n\
        }\n\
        System.out.println("There were " + count + " positive and negative numbers entered.");\n\
    }\n\
}\n\
\n\
// Pre: Input is a real number\n\
// Post: Outputs whether a number is positive or negative\n\
//       until a zero is received in which case the program\n\
//       outputs how many numbers were entered before 0'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex7.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob7").setAttribute("class", "problemButtonActive");
    }
}

function p08Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to continue receiving numbers\
    and output if they're divisible by 6 (cannot use mod 6) until a zero is entered.\
    Then the program outputs how many numbers were divisible by 6.</p>";

    jsCode = '\
function checkSix() {\n\
    var num = parseFloat(prompt("Enter in a number"));\n\
    var count = 0;\n\
    \n\
    while (num != 0) {\n\
        if (num % 2 == 0 && num % 3 == 0) {\n\
            alert("Divisible by 6");\n\
            count += 1;\n\
        } else {\n\
            alert("Not divisible by 6");\n\
        }\n\
        num = parseFloat(prompt("Enter in a number"));\n\
    }\n\
    alert("There were " + count + " numbers entered that were divisble by 6.");\n\
}\n\
\n\
checkSix();\n\
\n\
// Pre: Inputs are a real number\n\
// Post: Outputs whether a number is divisible by 6\n\
//       until a zero is received in which case the program\n\
//       outputs how many numbers were divisible by 6 before a\n\
//       0 was entered'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        int num = input.nextInt();\n\
        int count = 0;\n\
\n\
        while (num != 0) {\n\
            if (num % 2 == 0 && num % 3 == 0) {\n\
                System.out.println("Divisible by 6");\n\
                count += 1;\n\
            } else {\n\
                System.out.println("Not divisible by 6");\n\
            }\n\
            System.out.println("Enter in a number.");\n\
            num = input.nextInt();\n\
        }\n\
        System.out.println("There were " + count + " numbers entered that were divisble by 6.");\n\
    }\n\
}\n\
\n\
// Pre: Inputs are a real number\n\
// Post: Outputs whether a number is divisible by 6\n\
//       until a zero is received in which case the program\n\
//       outputs how many numbers were divisible by 6 before a\n\
//       0 was entered'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex8.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob8").setAttribute("class", "problemButtonActive");
    }
}

function p09Func() {
    document.getElementById("output").innerHTML = "<p>Devise a flowchart to receive a positive number and\
    output each digit separately</p>";

    jsCode = '\
function separateDigits() {\n\
    var num = parseInt(prompt("Enter a number"));\n\
    \n\
    while (num > 0) {\n\
        digit = num%10;\n\
        alert(digit);\n\
        num = Math.floor(num/10);\n\
    }\n\
}\n\
\n\
separateDigits();\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output is the individual digits of\n\
//       input number\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        double num = input.nextInt();\n\
\n\
        while (num > 0) {\n\
            double digit = num%10;\n\
            System.out.println(digit);\n\
            num = Math.floor(num/10);\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output is the individual digits of\n\
//       input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_9.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob9").setAttribute("class", "problemButtonActive");
    }
}

function p10Func() {
    document.getElementById("output").innerHTML = "<p>Devise a flowchart to receive a positive number\
    and output how many of its digits are equal to 7</p>";

    jsCode = '\
function digitsSeven() {\n\
    var num = parseInt(prompt("Enter a number"));\n\
    var count = 0;\n\
    \n\
    while (num > 0) {\n\
        digit = num%10;\n\
        if (digit == 7) {\n\
            count += 1;\n\
        }\n\
        num = Math.floor(num/10);\n\
    }\n\
    alert("The number of digits that were equal to 7 in your input number are: " + count + ".");\n\
}\n\
\n\
digitsSeven()\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs how many digits of input\n\
//       number were equal to 7\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        double num = input.nextInt();\n\
        int count = 0;\n\
\n\
        while (num > 0) {\n\
           double digit = num%10;\n\
            if (digit == 7) {\n\
                count++;\n\
            }\n\
            num = Math.floor(num/10);\n\
        }\n\
        System.out.println("The number of digits that were equal to 7 in your input number are: " + count + ".");\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs how many digits of input\n\
//       number were equal to 7'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_10.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob10").setAttribute("class", "problemButtonActive");
    }
}

function p11Func() {
    document.getElementById("output").innerHTML = "<p>Devise a flowchart to receive a positive number\
     and output sum of its digits.</p>";

    jsCode = '\
function sumDigits() {\n\
    var num = parseInt(prompt("Enter a number."));\n\
    var sum = 0;\n\
    \n\
    while (num > 0) {\n\
        sum += num%10;\n\
        num = Math.floor(num/10);\n\
    }\n\
    \n\
    alert("The sum of the individual digits for your input number is: " + sum + ".");\n\
}\n\
\n\
sumDigits()\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output is the sum of the individual\n\
//       digits of your input number\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter in a number.");\n\
        double num = input.nextInt();\n\
        double sum = 0;\n\
\n\
        while (num > 0.0) {\n\
            sum += num%10;\n\
            num = Math.floor(num/10);\n\
        }\n\
        System.out.println("The sum of the individual digits for your input number is: " + sum + ".");\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs how many digits of input\n\
//       number were equal to 7'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_11.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob11").setAttribute("class", "problemButtonActive");
    }
}

function p12Func() {
    document.getElementById("output").innerHTML = "<p>Devise a flowchart to receive a positive number and output\
    'yes' if it's equal to its reverse; otherwise, output 'no'.</p>";

    jsCode = '\
function reverseEqual() {\n\
    var num = parseInt(prompt("Enter a number"));\n\
    var temp = num;\n\
    reverse = 0;\n\
    \n\
    while (temp > 0) {\n\
        reverse *= 10;\n\
        reverse += temp%10;\n\
        temp = Math.floor(temp/10);\n\
    }\n\
    \n\
    if (num == reverse) {\n\
        alert("yes");\n\
    } else {\n\
        alert("no");\n\
    }\n\
}\n\
\n\
reverseEqual();\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output tells us "yes" or "no"\n\
//       as an aswer to whether the\n\
//       reverse of the input number\n\
//       is equal to the input\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        double num = input.nextInt();\n\
        double temp = num;\n\
        double reverse = 0;\n\
\n\
        while (temp > 0) {\n\
            reverse *= 10;\n\
            reverse += temp%10;\n\
            temp = Math.floor(temp/10);\n\
        }\n\
\n\
        if (num == reverse) {\n\
            System.out.println("yes");\n\
        } else {\n\
            System.out.println("no");\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output tells us "yes" or "no"\n\
//       as an aswer to whether the\n\
//       reverse of the input number\n\
//       is equal to the input\n'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_12.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob12").setAttribute("class", "problemButtonActive");
    }
}

function p13Func() {
    document.getElementById("output").innerHTML = "<p>Devise an algorithm to receive a positive number,\
    as n, and output n!</p>";

    jsCode = '\
function numFac() {\n\
    var num = parseInt(prompt("Enter a number"));\n\
    var fac = 1;\n\
    \n\
    for (i = num; i > 0; i--) {\n\
        fac *= i;\n\
    }\n\
    \n\
    alert(num + "! is: " + fac + ".");\n\
}\n\
\n\
numFac();\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output is the factorial of input\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        double num = input.nextInt();\n\
        double fac = 1;\n\
\n\
        for (double i = num; i > 0; i--) {\n\
            fac *= i;\n\
        }\n\
\n\
        System.out.println(num + "! is: " + fac + ".");\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Output is the factorial of input'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_13.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob13").setAttribute("class", "problemButtonActive");
    }
}

function p14Func() {
    document.getElementById("output").innerHTML = "<p>Devise an algorithm to input an integer greater than 1, as\
    n, and output the first n values of the Fibonacci sequence.</p>";

    jsCode = '\
function fibonacciSequence() {\n\
    var len = parseInt(prompt("Enter a number"));\n\
    var num1 = 0;\n\
    var num2 = 1;\n\
    \n\
    alert(num1);\n\
    alert(num2);\n\
    \n\
    for (i = 2; i < len; i++) {\n\
        num3 = num1 + num2;\n\
        \n\
        alert(num3);\n\
        \n\
        num1 = num2;\n\
        num2 = num3;\n\
    }\n\
}\n\
\n\
fibonacciSequence();\n\
\n\
// Pre: Input is an integer greater than 1\n\
// Post: Output is the first input numbers\n\
//       of the fibonacci sequence\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int len = input.nextInt();\n\
        int num1 = 0;\n\
        int num2 = 1;\n\
\n\
        System.out.println(num1);\n\
        System.out.println(num2);\n\
\n\
        for (int i = 2; i < len; i++) {\n\
            int num3 = num1 + num2;\n\
\n\
            System.out.println(num3);\n\
\n\
            num1 = num2;\n\
            num2 = num3;\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is an integer greater than 1\n\
// Post: Output is the first input numbers\n\
//       of the fibonacci sequence'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_14.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob14").setAttribute("class", "problemButtonActive");
    }
}

function p15Func() {
    document.getElementById("output").innerHTML = "<p>Devise an algorithm to input a positive integer, n,\
    – and by using XX characters – output has n rows and each row k has k pairs of XX. </p>";

    jsCode = '\
function xxTriangle() {\n\
\n\
    var rows = parseInt(prompt("Enter the row length.")); \n\
    var string = "xx "; \n\
    var output = ""; \n\
    \n\
    for (i = 0 ; i < rows; i++) {\n\
    \n\
        output += string + "\\n";\n\
        string += "xx "; \n\
    } \n\
    \n\
    alert(output); \n\
} \n\
\n\
xxTriangle(); \n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs a input row length figure\n\
//       that has k strings of "xx " for k\n\
//       row\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter the row length.");\n\
        int rows = input.nextInt();\n\
        String string = "xx ";\n\
        String output = "";\n\
\n\
        for (int i = 0; i < rows; i++) {\n\
            output += string + "\\n";\n\
            string += "xx ";\n\
        }\n\
\n\
        System.out.println(output);\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs a input row length figure\n\
//       that has k strings of "xx " for k\n\
//       row'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_15.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob15").setAttribute("class", "problemButtonActive");
    }
}

function p16Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a program to receive 8 numbers\
    and it will output 'yes' if the sum of the first four numbers is equal to the sume of the last four\
    numbers, otherwise it will output 'no'.</p>";

    jsCode = '\
function sumEightNumEqual() {\n\
    var sum1 = 0;\n\
    var sum2 = 0;\n\
    \n\
    for (i = 1; i <= 4; i++) {\n\
        var num = parseFloat(prompt("Enter in number " + i + "."));\n\
        sum1 += num;\n\
    }\n\
    \n\
    for (i = 1; i <= 4; i++) {\n\
        var num = parseFloat(prompt("Enter in a number " + i + "."));\n\
        sum2 += num;\n\
    }\n\
    \n\
    if (sum1 == sum2) {\n\
        alert("yes");\n\
    } else {\n\
        alert("no");\n\
    }\n\
}\n\
\n\
sumEightNumEqual();\n\
\n\
// Pre: Inputs are real numbers\n\
// Post: Outputs whether the first four\n\
//       input numbers are equal to the\n\
//       last four input numbers\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        int sum1 = 0;\n\
        int sum2 = 0;\n\
\n\
        for (int i = 1; i <= 4; i++) {\n\
            System.out.println("Enter in number " + i + ".");\n\
            int num = input.nextInt();\n\
            sum1 += num;\n\
        }\n\
\n\
        for (int i = 1; i <= 4; i++) {\n\
            System.out.println("Enter in number " + i + ".");\n\
            int num = input.nextInt();\n\
            sum2 += num;\n\
        }\n\
\n\
        if (sum1 == sum2) {\n\
            System.out.println("yes");\n\
        } else {\n\
            System.out.println("no");\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Inputs are real numbers\n\
// Post: Outputs whether the first four\n\
//       input numbers are equal to the\n\
//       last four input numbers'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_16.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob16").setAttribute("class", "problemButtonActive");
    }
}

function p17Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a program to receive a number\
    and calculate the sum of 100 numbers after the number inlusively.</p>";

    jsCode = '\
function sumNum100() {\n\
    var num = parseInt(prompt("Enter a number"));\n\
    var sum = 0;\n\
    \n\
    for (i = num; i < (num + 100); i++) {\n\
        sum += i;\n\
    }\n\
    \n\
    alert(sum);\n\
}\n\
\n\
\n\
sumNum100();\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs the sum of the first 100\n\
//       numbers after the input number inclusively\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
        int sum = 0;\n\
\n\
        for (int i = num; i < (num + 100); i++) {\n\
            sum += i;\n\
        }\n\
\n\
        System.out.println(sum);\n\
    }\n\
}\n\
\n\
// Pre: Input is a positive integer\n\
// Post: Outputs the sum of the first 100\n\
//       numbers after the input number inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_17.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob17").setAttribute("class", "problemButtonActive");
    }
}


function p18Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a program to receive a value n\
    and produce a multiplication table size n.</p>";

    jsCode = '\
function product() {\n\
    var a = parseInt(prompt("Enter in the first number."));\n\
    var b = parseInt(prompt("Enter in the second number."));\n\
    var product = 0;\n\
    \n\
    for (i = a; i > 0; i--) {\n\
        product += b;\n\
    }\n\
    \n\
    alert(product);\n\
}\n\
\n\
product();\n\
\n\
// Pre: A and B are positive integers\n\
// Post: Output is the product of A and B\n'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int a = input.nextInt();\n\
        System.out.println("Enter the second number.");\n\
        int b = input.nextInt();\n\
        int product = 0;\n\
\n\
        for (int i = a; i > 0; i--) {\n\
            product += b;\n\
        }\n\
\n\
        System.out.println(product);\n\
    }\n\
}\n\
\n\
// Pre: A and B are positive integers\n\
// Post: Output is the product of A and B'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_18.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob18").setAttribute("class", "problemButtonActive");
    }
}

function p19Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all prime numbers less than or\
    equal to 100.</p>";

    jsCode = '\
function prime100() {\n\
    for (i = 2; i <= 100; i++) {\n\
        prime = true;\n\
        for (j = 2; j < i; j++) {\n\
            if (i%j == 0) {\n\
                prime = false;\n\
            }\n\
        }\n\
        \n\
        if (prime == true) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
prime100();\n\
\n\
// Pre: none\n\
// Post: Outputs all prime numbers\n\
//       up to and including 100\n'

    javaCode = '\
package com.learnjava;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        for (int i = 2; i <= 100; i++) {\n\
            boolean prime = true;\n\
            for (int j = 2; j < i; j++) {\n\
                if (i%j == 0) {\n\
                    prime = false;\n\
                }\n\
            }\n\
\n\
            if (prime) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: none\n\
// Post: Outputs all prime numbers\n\
//       up to and including 100'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_19.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob19").setAttribute("class", "problemButtonActive");
    }
}

function p20Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart for a program to output the palindrome\
    numbers less than and equal to 100.</p>";

    jsCode = '\
function palindrome() {\n\
    for (i = 1; i <= 100; i++){\n\
        temp = i;\n\
        reverse = 0;\n\
        \n\
        while (temp > 0) {\n\
            reverse = reverse*10 + temp%10;\n\
            temp = Math.floor(temp/10);\n\
        }\n\
        \n\
        if (i == reverse) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
palindrome();\n\
\n\
// Pre: none\n\
// Post: Outuputs all palindrome numbers\n\
//       from 1 to 100 inclusively\n'

    javaCode = '\
package com.learnjava;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        for (int i = 1; i <= 100; i++) {\n\
            double temp = i;\n\
            double reverse = 0;\n\
\n\
            while (temp > 0) {\n\
                reverse = reverse * 10 + temp % 10;\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
\n\
            if (i == reverse) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
// Pre: none\n\
// Post: Outuputs all palindrome numbers\n\
//       from 1 to 100 inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_20.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob20").setAttribute("class", "problemButtonActive");
    }
}

function p21Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all prime numbers\
    for a received input.</p>";

    jsCode = '\
function primeNum() {\n\
    var num = prompt("Enter a number.");\n\
    \n\
    for (i = 2; i <= num; i++) {\n\
        var flag = true;\n\
\n\
        for (j = 2; j < i; j++) {\n\
            if (i%j == 0) {\n\
                flag = false;\n\
            }\n\
        }\n\
\n\
        if (flag) {\n\
            alert(i + " is a prime number.")\n\
        }\n\
    }\n\
}\n\
\n\
primeNum();\n\
\n\
// Pre: Input is a Natural number\n\
// Post: Outputs all prime numbers\n\
//       from 1 to input number\n\
//       inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
\n\
        for (int i = 2; i <= num; i++) {\n\
            boolean flag = true;\n\
\n\
            for (int j = 2; j < i; j++) {\n\
                if (i % j == 0) {\n\
                    flag = false;\n\
                }\n\
            }\n\
\n\
            if (flag) {\n\
                System.out.println(i + " is a prime number.");\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a Natural number\n\
// Post: Outputs all prime numbers\n\
//       from 1 to input number\n\
//       inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_21.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob21").setAttribute("class", "problemButtonActive");
    }
}

function p22Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all factorials up to and including\
    inputted number.</p>";

    jsCode = '\
function facNum() {\n\
    var num = prompt("Enter a number.");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var fac = i;\n\
\n\
        for(j = 1; j < i; j++) {\n\
            fac *= j;\n\
        }\n\
        alert(i + "! is: " + fac);\n\
    }\n\
}\n\
\n\
facNum();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all Factorials of\n\
//       natural numbers up to and\n\
//       including the input number'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        var num = input.nextInt();\n\
\n\
        for (int i = 1; i <= num; i++) {\n\
            var fac = i;\n\
\n\
            for(int j = 1; j < i; j++) {\n\
                fac *= j;\n\
            }\n\
            System.out.println(i + "! is: " + fac);\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all Factorials of\n\
//       natural numbers up to and\n\
//       including the input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_22.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob22").setAttribute("class", "problemButtonActive");
    }
}

function p23Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all the left most digits up to and\
    including the inputted number.</p>";

    jsCode = '\
function highestDigitToNum() {\n\
    var num = prompt("Enter a number.");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var temp = i;\n\
        var digit = 0;\n\
\n\
        while (temp > 0) {\n\
            digit = temp % 10;\n\
            temp = (temp - digit) / 10;\n\
        }\n\
\n\
        alert("The left most digit for " + i + " is: " + digit + ".");\n\
    }\n\
}\n\
\n\
highestDigitToNum();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the left most digit\n\
//       for all natural numbers up to\n\
//       and including the input number'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
\n\
        for (int i = 1; i <= num; i++) {\n\
            int temp = i;\n\
            int digit = 0;\n\
\n\
            while (temp > 0) {\n\
                digit = temp % 10;\n\
                temp = (temp - digit) / 10;\n\
            }\n\
\n\
            System.out.println("The left most digit for " + i + " is: " + digit + ".");\n\
        }\n\
    }\n\
}\n\
\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the left most digit\n\
//       for all natural numbers up to\n\
//       and including the input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_23.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob23").setAttribute("class", "problemButtonActive");
    }
}

function p24Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all numbers from 1 to input number\
    that do not have a 1 in it.</p>";

    jsCode = '\
function no1Num() {\n\
    var num = prompt("Enter a number.");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var temp = i;\n\
        var flag = true;\n\
\n\
        while (temp > 0) {\n\
            if (temp%10 == 1) {\n\
                flag = false;\n\
            }\n\
            temp = Math.floor(temp/10);\n\
        }\n\
        if (flag) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
no1Num();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 1 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
\n\
        for ( int i = 1; i <= num; i++) {\n\
            double temp = i;\n\
            boolean flag = true;\n\
\n\
            while (temp > 0) {\n\
                if (temp % 10 == 1) {\n\
                    flag = false;\n\
                }\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
            if (flag) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 1 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_24.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob24").setAttribute("class", "problemButtonActive");
    }
}

function p25Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to find all numbers up to and including\
    the input number that have 8 as the left most digit.</p>";

    jsCode = '\
function eightLeftMost() {\n\
    var num = prompt("Enter a number");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var digit = 0;\n\
        var temp = i;\n\
\n\
        while (temp > 0) {\n\
            digit = temp%10;\n\
            temp = Math.floor(temp/10);\n\
        }\n\
\n\
        if(digit == 8) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
eightLeftMost();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all natural numbers from\n\
//       up to the input number that have\n\
//       eight as the left most digit'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        var num = input.nextInt();\n\
\n\
        for (int i = 1; i <= num; i++) {\n\
            double digit = 0;\n\
            double temp = i;\n\
\n\
            while (temp > 0) {\n\
                digit = temp % 10;\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
\n\
            if (digit == 8) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all natural numbers from\n\
//       up to the input number that have\n\
//       eight as the left most digit'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_25.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob25").setAttribute("class", "problemButtonActive");
    }
}

function p26Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all natural numbers up to\
    input number that have 4 as the left most digit.</p>";

    jsCode = '\
function eightLeftMost() {\n\
    var num = prompt("Enter a number");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var digit = 0;\n\
        var temp = i;\n\
\n\
        while (temp > 0) {\n\
            digit = temp%10;\n\
            temp = Math.floor(temp/10);\n\
        }\n\
\n\
        if(digit == 4) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
eightLeftMost();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all natural numbers from\n\
//       up to the input number that have\n\
//       four as the left most digit'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        var num = input.nextInt();\n\
\n\
        for (int i = 1; i <= num; i++) {\n\
            double digit = 0;\n\
            double temp = i;\n\
\n\
            while (temp > 0) {\n\
                digit = temp % 10;\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
\n\
            if (digit == 4) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs all natural numbers from\n\
//       up to the input number that have\n\
//       four as the left most digit'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_26.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob26").setAttribute("class", "problemButtonActive");
    }
}

function p27Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all natural numbers up to\
    and including input number that do not have a digit 6.</p>";

    jsCode = '\
function no1Num() {\n\
    var num = prompt("Enter a number.");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var temp = i;\n\
        var flag = true;\n\
\n\
        while (temp > 0) {\n\
            if (temp%10 == 6) {\n\
                flag = false;\n\
            }\n\
            temp = Math.floor(temp/10);\n\
        }\n\
        if (flag) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
no1Num();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 6 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
\n\
        for ( int i = 1; i <= num; i++) {\n\
            double temp = i;\n\
            boolean flag = true;\n\
\n\
            while (temp > 0) {\n\
                if (temp % 10 == 6) {\n\
                    flag = false;\n\
                }\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
            if (flag) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 6 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_27.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob27").setAttribute("class", "problemButtonActive");
    }
}

function p28Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all factorials up to and including\
    inputted number.</p>";

    jsCode = '\
function facNum() {\n\
    for (i = 1; i <= 20; i++) {\n\
        var fac = i;\n\
\n\
        for(j = 1; j < i; j++) {\n\
            fac *= j;\n\
        }\n\
        alert(i + "! is: " + fac);\n\
    }\n\
}\n\
\n\
facNum();\n\
\n\
// Pre: None\n\
// Post: Outputs all Factorials of\n\
//       natural numbers up to 20'

    javaCode = '\
package com.learnjava;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        for (int i = 1; i <= 20; i++) {\n\
            var fac = i;\n\
\n\
            for(int j = 1; j < i; j++) {\n\
                fac *= j;\n\
            }\n\
            System.out.println(i + "! is: " + fac);\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Outputs all Factorials of\n\
//       natural numbers up to 20'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_28.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob28").setAttribute("class", "problemButtonActive");
    }
}

function p29Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all prime numbers\
    up to 40.</p>";

    jsCode = '\
function primeNum() {\n\
    for (i = 2; i <= 40; i++) {\n\
        var flag = true;\n\
\n\
        for (j = 2; j < i; j++) {\n\
            if (i%j == 0) {\n\
                flag = false;\n\
            }\n\
        }\n\
\n\
        if (flag) {\n\
            alert(i + " is a prime number.")\n\
        }\n\
    }\n\
}\n\
\n\
primeNum();\n\
\n\
// Pre: None\n\
// Post: Outputs all prime numbers\n\
//       from 1 to 40'

    javaCode = '\
package com.learnjava;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        for (int i = 2; i <= 40; i++) {\n\
            boolean flag = true;\n\
\n\
            for (int j = 2; j < i; j++) {\n\
                if (i % j == 0) {\n\
                    flag = false;\n\
                }\n\
            }\n\
\n\
            if (flag) {\n\
                System.out.println(i + " is a prime number.");\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Outputs all prime numbers\n\
//       from 1 to 40'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_29.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob29").setAttribute("class", "problemButtonActive");
    }
}

function p30Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all natural numbers up to\
    and including input number that do not have a digit 3.</p>";

    jsCode = '\
function no1Num() {\n\
    var num = prompt("Enter a number.");\n\
\n\
    for (i = 1; i <= num; i++) {\n\
        var temp = i;\n\
        var flag = true;\n\
\n\
        while (temp > 0) {\n\
            if (temp%10 == 3) {\n\
                flag = false;\n\
            }\n\
            temp = Math.floor(temp/10);\n\
        }\n\
        if (flag) {\n\
            alert(i);\n\
        }\n\
    }\n\
}\n\
\n\
no1Num();\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 3 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter a number.");\n\
        int num = input.nextInt();\n\
\n\
        for ( int i = 1; i <= num; i++) {\n\
            double temp = i;\n\
            boolean flag = true;\n\
\n\
            while (temp > 0) {\n\
                if (temp % 10 == 3) {\n\
                    flag = false;\n\
                }\n\
                temp = Math.floor(temp / 10);\n\
            }\n\
            if (flag) {\n\
                System.out.println(i);\n\
            }\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: Input is a natural number\n\
// Post: Outputs the all numbers without 3 in\n\
//       it for all natural numbers up to\n\
//       and including the input number'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_30.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob30").setAttribute("class", "problemButtonActive");
    }
}

function p31Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input an array length decided\
    by the user and the value of the arrays decided by the user.</p>";

    jsCode = '\
function arrayUser() {\n\
    var len = prompt("Enter array length.");\n\
    var a = [];\n\
\n\
    for (i = 0; i < len; i++) {\n\
        var num = prompt("Enter a number.");\n\
        a[i] = num;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayUser();\n\
\n\
// Pre: Inputs are Natural numbers\n\
// Post: Inputs numbers into an array\n\
//       where array length and number\n\
//       is decided by user'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
import java.util.Scanner;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        Scanner input = new Scanner(System.in);\n\
\n\
        System.out.println("Enter array length.");\n\
        int len = input.nextInt();\n\
        int[] a = new int[len];\n\
\n\
        for (int i = 0; i < len; i++) {\n\
            System.out.println("Enter a number.");\n\
            var num = input.nextInt();\n\
            a[i] = num;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: Inputs are Natural numbers\n\
// Post: Inputs numbers into an array\n\
//       where array length and number\n\
//       is decided by user'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_31.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob31").setAttribute("class", "problemButtonActive");
    }
}

function p32Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to output all values of a given array.</p>";

    jsCode = '\
function arrayOut() {\n\
    a = [1,2,3,4,5];\n\
\n\
    for (i = 0; i < a.length; i++) {\n\
        alert(a[i]);\n\
    }\n\
}\n\
\n\
arrayOut();\n\
\n\
// Pre: None\n\
// Post: Outputs all numbers in\n\
//       a given array'

    javaCode = '\
package com.learnjava;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = {1, 2, 3, 4, 5};\n\
\n\
        for (int i = 0; i < a.length; i++) {\n\
            System.out.println(a[i]);\n\
        }\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Outputs all numbers in\n\
//       a given array'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_32.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob32").setAttribute("class", "problemButtonActive");
    }
}

function p33Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input numbers 1 to 20 in an array.</p>";

    jsCode = '\
function array20() {\n\
    var a = [];\n\
\n\
    for (i = 0; i < 20; i++) {\n\
        a[i] = i+1;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
array20();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 20 inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[20];\n\
\n\
        for (int i = 0; i < 20; i++) {\n\
            a[i] = i + 1;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 20 inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_33.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob33").setAttribute("class", "problemButtonActive");
    }
}

function p34Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to fill an array with odd numbers from\
    1  up to 100 at odd indexes</p>";

    jsCode = '\
function arrayOdd() {\n\
    var a = [];\n\
\n\
    for (i = 1; i < 100; i+=2) {\n\
        a[i] = i;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayOdd();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array odd numbers\n\
//       1 to 100 inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[100];\n\
\n\
        for (int i = 1; i < 100; i += 2) {\n\
            a[i] = i;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array odd numbers\n\
//       1 to 100 inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_34.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob34").setAttribute("class", "problemButtonActive");
    }
}

function p35Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to fill an array with even numbers from 1\
    up to 100 at even indexes</p>";

    jsCode = '\
function arrayEven() {\n\
    var a = [];\n\
\n\
    for (i = 2; i < 101; i+=2) {\n\
        a[i] = i;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayEven();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array even numbers\n\
//       1 to 100 inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[101];\n\
\n\
        for (int i = 2; i < 101; i += 2) {\n\
            a[i] = i;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array even numbers\n\
//       1 to 100 inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_35.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob35").setAttribute("class", "problemButtonActive");
    }
}

function p36Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input the right most digit of numbers\
    1 to a 100 into an array.</p>";

    jsCode = '\
function arrayRight() {\n\
    var a = [];\n\
\n\
    for (i = 1; i < 100; i++) {\n\
        a[i] = i%10;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayRight();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array of numbers\n\
//       1 to 100 of their right most digit'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[100];\n\
\n\
        for (int i = 1; i < 100; i++) {\n\
            a[i] = i % 10;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array of numbers\n\
//       1 to 100 of their right most digit'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_36.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob36").setAttribute("class", "problemButtonActive");
    }
}

function p37Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input the right most digit of odd numbers\
    1 to a 100 into an array at odd indexes.</p>";

    jsCode = '\
function arrayOddRight() {\n\
    var a = [];\n\
\n\
    for (i = 1; i < 100; i+=2) {\n\
        a[i] = i%10;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayOddRight();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array odd numbers\n\
//       1 to 100 and their right most\n\
//       digit inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[100];\n\
\n\
        for (int  i = 1; i < 100; i += 2) {\n\
            a[i] = i % 10;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array odd numbers\n\
//       1 to 100 and their right most\n\
//       digit inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_37.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob37").setAttribute("class", "problemButtonActive");
    }
}

function p38Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input the right most digit of even numbers\
    1 to a 100 into an array at even indexes.</p>";

    jsCode = '\
function arrayEvenRight() {\n\
    var a = [];\n\
\n\
    for (i = 2; i < 100; i+=2) {\n\
        a[i] = i%10;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayEvenRight();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array even numbers\n\
//       1 to 100 and their right most digit\n\
//       inclusively'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[101];\n\
\n\
        for (int i = 2; i < 101; i += 2) {\n\
            a[i] = i % 10;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array even numbers\n\
//       1 to 100 and their right most digit\n\
//       inclusively'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_38.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob38").setAttribute("class", "problemButtonActive");
    }
}

function p39Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input numbers that are divisible by\
    10 into an array from 1 to 100 inclusively at divisible by 10 indexes.</p>";

    jsCode = '\
function arrayDiv10() {\n\
    var a = [];\n\
\n\
    for (i = 10; i < 101; i+=10) {\n\
        a[i] = i;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayDiv10();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 100 inclusively that are\n\
//       divisible by 10'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[101];\n\
\n\
        for (int i = 10; i < 101; i += 10) {\n\
            a[i] = i;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 100 inclusively that are\n\
//       divisible by 10'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_39.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob39").setAttribute("class", "problemButtonActive");
    }
}

function p40Func() {
    document.getElementById("output").innerHTML = "<p>Draw a flowchart to input numbers that are divisible by\
    40 into an array from 1 to 400 inclusively at divisible by 40 indexes.</p>";

    jsCode = '\
function arrayDiv40() {\n\
    var a = [];\n\
\n\
    for (i = 40; i < 401; i+=40) {\n\
        a[i] = i;\n\
    }\n\
\n\
    alert(a.toString());\n\
}\n\
\n\
arrayDiv40();\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 400 inclusively that are\n\
//       divisible by 40'

    javaCode = '\
package com.learnjava;\n\
\n\
import java.util.Arrays;\n\
\n\
public class LearnJava {\n\
\n\
    public static void main(String[] args) {\n\
        int[] a = new int[401];\n\
\n\
        for (int i = 40; i < 401; i += 40) {\n\
            a[i] = i;\n\
        }\n\
\n\
        System.out.println(Arrays.toString(a));\n\
    }\n\
}\n\
\n\
// Pre: None\n\
// Post: Inputs in an array numbers\n\
//       1 to 400 inclusively that are\n\
//       divisible by 40'

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_40.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob40").setAttribute("class", "problemButtonActive");
    }
}

function p41Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_41.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob42").setAttribute("class", "problemButtonActive");
    }
}

function p42Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_42.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob44").setAttribute("class", "problemButtonActive");
    }
}

function p43Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_43.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob44").setAttribute("class", "problemButtonActive");
    }
}

function p44Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_44.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob44").setAttribute("class", "problemButtonActive");
    }
}

function p45Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_45.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob45").setAttribute("class", "problemButtonActive");
    }
}

function p46Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_46.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob46").setAttribute("class", "problemButtonActive");
    }
}

function p47Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_47.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob47").setAttribute("class", "problemButtonActive");
    }
}

function p48Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_48.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob48").setAttribute("class", "problemButtonActive");
    }
}

function p49Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_49.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob49").setAttribute("class", "problemButtonActive");
    }
}

function p50Func() {
    document.getElementById("output").innerHTML = "";

    jsCode = '';

    javaCode = '';

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_50.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;

    document.getElementById("t1").className = 'toggle';
    document.getElementById("t2").className = 'toggle';
    document.getElementById("t3").className = 'toggle';

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob50").setAttribute("class", "problemButtonActive");
    }
}

function checkUncheck1() {
    if (document.getElementById("check1").checked == true) {
        document.getElementById("design_img").setAttribute("style",
            "display: block; height: 90%; width: auto; margin-left: 50%; \
         transform: translateX(-50%);")
        document.getElementById("t1").classList.toggle('active');
    }
    else {
        document.getElementById("design_img").style.display = "none";
        document.getElementById("t1").classList.toggle('active');
    }
}

function checkUncheck2() {
    if (document.getElementById("check2").checked == true) {
        document.getElementById("t2").classList.toggle('active');
        editor.setValue(jsCode);
    }
    else {
        document.getElementById("t2").classList.toggle('active');
        editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
    }
}

function checkUncheck3() {
    if (document.getElementById("check3").checked == true) {
        document.getElementById("t3").classList.toggle('active');
        editorJava.setValue(javaCode);
    }
    else {
        document.getElementById("t3").classList.toggle('active');
        editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');
    }
}

function zoomIn01() {
    document.getElementById("design").setAttribute("style", "transition: 1s; height:100vh;\
     width: 100vw; position: absolute; margin:0; transform: translateY(-35%); opacity: 100%;\
      background-color: black; border-radius: 0;");
    document.getElementById("design_text").style.textAlign = "center";
    document.getElementById("design_text").style.margin = "0";
    document.getElementById("t1").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("another").style.display = "none";
}

function zoomOut01() {
    document.getElementById("design").setAttribute("style", "transition: 0.5s; opacity: 100%;");
    document.getElementById("design_text").style = "";
    document.getElementById("t1").style.display = "block";
    document.getElementById("js").style.display = "inline-block";
    document.getElementById("another").style.display = "inline-block";
}

function changeProblemSet(pset) {
    if (pset == "p1") {
        document.getElementById("flowcharts").style.display = "flex";
        document.getElementById("flowcharts-2").style.display = "none";
        document.getElementById("flowcharts-3").style.display = "none";
        document.getElementById("flowcharts-4").style.display = "none";


        document.getElementById("output").innerHTML = "<p>Select a problem to get started.</p>";
        editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
        editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

        document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_15.jpg');
        document.getElementById("design_img").setAttribute("style", "display: none");
        document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;

        document.getElementById("t1").className = 'toggle';
        document.getElementById("t2").className = 'toggle';
        document.getElementById("t3").className = 'toggle';

    } else if (pset == "p2") {
        document.getElementById("flowcharts").style.display = "none";
        document.getElementById("flowcharts-2").style.display = "flex";
        document.getElementById("flowcharts-3").style.display = "none";
        document.getElementById("flowcharts-4").style.display = "none";

        document.getElementById("output").innerHTML = "<p>Select a problem to get started.</p>";
        editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
        editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

        document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_15.jpg');
        document.getElementById("design_img").setAttribute("style", "display: none");
        document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;

        document.getElementById("t1").className = 'toggle';
        document.getElementById("t2").className = 'toggle';
        document.getElementById("t3").className = 'toggle';
    } else if (pset == "p3") {
        document.getElementById("flowcharts").style.display = "none";
        document.getElementById("flowcharts-2").style.display = "none";
        document.getElementById("flowcharts-3").style.display = "flex";
        document.getElementById("flowcharts-4").style.display = "none";

        document.getElementById("output").innerHTML = "<p>Select a problem to get started.</p>";
        editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
        editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

        document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_15.jpg');
        document.getElementById("design_img").setAttribute("style", "display: none");
        document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;

        document.getElementById("t1").className = 'toggle';
        document.getElementById("t2").className = 'toggle';
        document.getElementById("t3").className = 'toggle';
    } else if (pset == "p4") {
        document.getElementById("flowcharts").style.display = "none";
        document.getElementById("flowcharts-2").style.display = "none";
        document.getElementById("flowcharts-3").style.display = "none";
        document.getElementById("flowcharts-4").style.display = "flex";

        document.getElementById("output").innerHTML = "<p>Select a problem to get started.</p>";
        editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');
        editorJava.setValue('// Enter code here\n\n// Toggle switch to see solution');

        document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_15.jpg');
        document.getElementById("design_img").setAttribute("style", "display: none");
        document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

        document.getElementById("check1").checked = false;
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;

        document.getElementById("t1").className = 'toggle';
        document.getElementById("t2").className = 'toggle';
        document.getElementById("t3").className = 'toggle';
    }
}