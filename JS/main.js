var editor = CodeMirror.fromTextArea
    (document.getElementById("editor"), {
        mode: "javascript",
        theme: "material-darker",
        lineNumbers: true,
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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex1.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex1.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";


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
     receive three numbers and store them in memory spaces called a, b, and c as three sides of a\
      triangle and, by using Heron’s formula, calculate and output the area of the triangle.</p>";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex2.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex2.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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
     receive three numerical coefficients of a quadratic equation (store them in memory spaces called\
         a, b, and c) and calculate and output its roots. Write a precondition that assumes coefficients\
          are good enough such that a solution in real number exists.</p>";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex3.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex3.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex4.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex4.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex5.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex5.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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
    document.getElementById("output").innerHTML = "<p>Assume there is a webpage containing an HTML\
     input of type text and a button. When the button is clicked a function, named Problem06, is\
      called. Draw a flowchart that outputs whether the input is positive or negative until a zero\
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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex6.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex6.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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
     and output if they are positive or negative until a zero is entered. When a zero is entered, the\
      program should output how many positive and how many negative numbers have been entered, then it\
       stops</p>";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex7.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex7.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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
     and output if they are divisible by 6 or not until a zero is entered. When a zero is entered,\
      the program should output how many of the entered numbers were divisible by 6, then it stops.\
       IMPORTANT RESTRICTION: you are not allowed to divide the number by 6; therefore, you are not\
        allowed to use the modulus operator (%) over 6 to verify the remainder whether the number is\
         divided by 6.</p>";

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

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    document.getElementById("design_img").setAttribute('src', 'images/flowcharts/flowchart_ex8.jpg');
    document.getElementById("design_img").setAttribute("style", "display: none");
    document.getElementById("design_text2").innerHTML = "Toggle switch to see solution.";

    document.getElementById("another_img").setAttribute('src', 'images/flowcharts/flowchart_ex8.jpg');
    document.getElementById("another_img").setAttribute("style", "display: none");
    document.getElementById("another_text2").innerHTML = "Toggle switch to see solution.";

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
    document.getElementById("output").innerHTML = "<p></p>";

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob9").setAttribute("class", "problemButtonActive");
    }
}

function p10Func() {
    document.getElementById("output").innerHTML = "<p></p>";

    editor.setValue('// Enter code here\n\n// Hint: Use alert() & prompt()\n\n// Toggle switch to see solution');

    try {
        document.getElementsByClassName("problemButtonActive")[0].setAttribute("class", "problemButton");
    } catch (e) {
        // If no button has been clicked before
    } finally {
        document.getElementById("prob10").setAttribute("class", "problemButtonActive");
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
        document.getElementById("another_img").setAttribute("style",
            "display: block; height: 90%; width: auto; margin-left: 50%; \
        transform: translateX(-50%);")
        document.getElementById("t3").classList.toggle('active');
    }
    else {
        document.getElementById("another_img").style.display = "none";
        document.getElementById("t3").classList.toggle('active');
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

function zoomIn02() {
    document.getElementById("js").setAttribute("style", "transition: 1s; height:100vh;\
     width: 100vw; position: absolute; margin:0; transform: translateY(-35%); opacity: 100%;\
      background-color: black; border-radius: 0;");
    document.getElementById("js_text").style.textAlign = "center";
    document.getElementById("js_text").style.margin = "0";
    document.getElementById("t2").style.display = "none";
    document.getElementById("design").style.display = "none";
    document.getElementById("another").style.display = "none";
}

function zoomOut02() {
    document.getElementById("js").setAttribute("style", "transition: 0.5s; opacity: 100%");
    document.getElementById("t2").style.display = "block";
    document.getElementById("js_text").style = "";
    document.getElementById("design").style.display = "inline-block";
    document.getElementById("another").style.display = "inline-block";
}

function zoomIn03() {
    document.getElementById("another").setAttribute("style", "transition: 1s; height:100vh;\
     width: 100vw; position: absolute; margin:0; transform: translateY(-35%); opacity: 100%;\
      background-color: black; border-radius: 0;");
    document.getElementById("another_text").style.textAlign = "center";
    document.getElementById("another_text").style.margin = "0";
    document.getElementById("t3").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("design").style.display = "none";
}

function zoomOut03() {
    document.getElementById("another").setAttribute("style", "transition: 0.5s; opacity: 100%");
    document.getElementById("t3").style.display = "block";
    document.getElementById("another_text").style = "";
    document.getElementById("js").style.display = "inline-block";
    document.getElementById("design").style.display = "inline-block";
}