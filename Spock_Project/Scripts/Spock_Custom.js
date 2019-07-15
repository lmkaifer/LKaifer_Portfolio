$(document).ready(function () {
    //Math exercise begins
    //Toggle Show/Hide Button
    $("#code").hide();
    $("#toggleBtn").click(function () {
        $("#code").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");

        }
        else {
            $(this).text("Show Code")
        };
    });

    $("#mathBtn").click(function () {
        //Step 1: Get the user data
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());


        //Step 2: Make the calculations with the given data
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;

        //Step 3: Display the results to the user
        $("#smallest").text("The smallest number is " + smallest);
        $("#largest").text("The largest number is " + largest);
        $("#sum").text("The sum is " + sum);
        $("#product").text("The product is " + product);
        $("#average").text("The average is " + average);

    })
    //Clear everything out
    $("#clearBtn").click(function () {

        $("#input1,#input2,#input3,#input4,#input5").val("");

        $("#smallest").text("");
        $("#largest").text("");
        $("#sum").text("");
        $("#product").text("");
        $("#average").text("");

    });
});
//Math exercise ends

//Factorial Begins

//Toggle Show/Hide Button
$("#factCode").hide();
$("#facttoggleBtn").click(function () {
    $("#factCode").toggle();

    if ($(this).text() == "Show Code") {
        $(this).text("Hide Code");

    }
    else {
        $(this).text("Show Code")
    };
});

//Step 1: Get the user data
$("#btnFact").click(function () {
    var number = Number($("#fact").val());

    //I am using an If statement to evaluate something
    if (number > 170) {
        alert("Please enter positive numbers less than 171!");
        $("#fact").val("");
        return;
    }

   //Step 2: Perform the algorithm
    for (var foo = number - 1; foo > 1; foo--) {
        //How do we calculate the factorial?
        number *= foo;
    }


    //Step 3: Show the result
    $("#factOut").text(number);

    //Clear button
});
$("#factbtnClear").click(function () {
    $("#fact").val("");
    $("#factOut").text("");
});
    //Factorial Ends

//Fizz Buzz Begins
$("#FBcode").hide();
$("#FBbtnToggleCode").click(function () {
    $("#FBcode").toggle();

    if ($(this).text() == "Show Code") {
        $(this).text("Hide Code");

    }
    else {
        $(this).text("Show Code")
    };
});

$("#btnFB").click(function () {
    //1. Get user data
    var Input1 = Number($("#fbIn1").val());
    var Input2 = Number($("#fbIn2").val());
    var Answer = "";


    //2. Do something with the input

    for (var i = 1; i <= 100; i++) {
        var comma = ", ";
        if (i == 100) {
            comma = "";
        }
        if (i % Input1 == 0 && i % Input2 == 0) {
            Answer += "<span class='fizzbuzz'>fizzbuzz" + comma + "</span>";
        }

        else if (i % Input1 == 0) {
            Answer += "<span class='fizz'>fizz" + comma + "</span>";

        }
        else if (i % Input2 == 0) {
            Answer += "<span class='buzz'>buzz" + comma + "</span>";

        }

        else {
            Answer += i + comma;
        }
    }
    //3. Show the answer.
    Answer = Answer.substr(0, Answer.length - 2);
    $("#Answer").html(Answer);


});

//Clear out the answers to start over
$("#FBbtnClear").click(function () {
    $("#fbIn1").val("");
    $("#fbIn2").val("");
    $("#Answer").text("");
});
//Fizz Buzz ends

//Palindrome
    //Show/Hide Code Button Function
    $("#palcode").hide();
    $("#paltoggleBtn").click(function () {
    $("#palcode").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code")
        };
    });

    //Step 1: Get the word
    $("#palIn").click(function () {
        var displayword = $("#pal").val();

    //Step 2: Start working with the word to make it all lower case and deal with any spacing.
        var word = displayword.toLowerCase().replace(/\s/g, '');

    //Step. Work with the word to see if it's a palindrome and then return a message.
        for (var index = displayword.length - 1, revword = ""; index >= 0; index--) {
            revword += displayword.substr(index, 1);
        }
        displayrevword = revword;
        revword = revword.toLowerCase().replace(/\s/g, '');
        var message = "";
        if (word == revword) {
            message = displayword + " reversed = " + displayrevword + " therefore " + displayword + " is a palindrome.";
        }
        else {
            message = displayword + " reversed is not " + displayrevword + " therefore " + displayword + " is not a palindrome";
        }

        $("#palOut").text(message);
    });

    $("#btnArray").click(function () {
        var displayword = $("#pal").val();
        var word = displayword.toLowerCase().replace(/\s/g, '');

        var revword = displayword.split("").reverse().join("");
        var displayrevword = revword;
        revword = revword.toLowerCase().replace(/\s/g, '');

        var message = "";
        if (word == revword) {
            message = displayword + " reversed = " + displayrevword + " therefore " + displayword + " is a palindrome";
        }
        else {
            message = displayword + " reversed !=" + displayrevword + " therefore " + displayword + " is not a palindrome";
        }
        $("#palOut").text(message);
    });
    //Clear out input and output.
    $("#palbtnClear").click(function () {
        $("#pal").val("");
        $("#palOut").text("");
    });

    //Palindrome ends

    //SumFear Begins
    $("#SFcode").hide();
    $("#SFBtnToggleCode").click(function () {
        $("#SFcode").toggle();

        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");

        }
        else {
            $(this).text("Show Code")
        };
    });

    //Create variables for two numbers being used in loop.
    let firstsumNumber = 0;
    let secondsumNumber = 0;
    //Get user data
    $("#searchBtn").click(function () {
        
        var input1 = Number($("#in1").val());
        var input2 = Number($("#in2").val());
        var input3 = Number($("#in3").val());
        var input4 = Number($("#in4").val());
        var input5 = Number($("#in5").val());
        var input6 = Number($("#in6").val());

        var valK = Number($("#inputK").val());

        //Put the user's first 6 numbers in an array to be used for loop.
        var inputArray = [input1, input2, input3, input4, input5, input6];

        //If/then statement to display results of calculations
        var Result = FindSumA(inputArray, valK);
        if (Result == true) {
            $("#resultMessage").html("A k value of <span style='color:purple;font-weight:bold'>" + valK + "</span> was found by adding array members <span style='color:red;font-weight:bold'>" + firstsumNumber + "</span> and <span style='color:blue;font-weight:bold'> " + secondsumNumber + "</span>.");

        }
        else {
            $("#resultMessage").html("Sorry. A k value was not found.")
        }
    });
    //The functions and loops which determine if K value can be found
    function FindSumA(numbers, answer) {
        let checkValue = 0;
        let found = false;

        for (let i = 0; i <= numbers.length - 2; i++) {
            for (let y = (i + 1); y <= numbers.length - 1; y++) {
                if (answer == numbers[i] + numbers[y]) {
                    found = true;
                    firstsumNumber = numbers[i];
                    secondsumNumber = numbers[y];
                    return found;
                }
            }

        }
        return found;
    }

    //3. Give result
    //function DisplaySum() { 
    //        let answer = document.getElementbyId("inputK").value;
    //        let numArray = []
    //    };


    $("#SFbtnClear").click(function () {
        $("#in1").val("");
        $("#in2").val("");
        $("#in3").val("");
        $("#in4").val("");
        $("#in5").val("");
        $("#in6").val("");
        $("#inputK").val("");
        $("#resultMessage").text("");
    });

    //End of SumFear

      

//Initializing Modal Fields
$("#mathModal").on("hide.bs.modal", function () {
    //palindrome code hide
    $("#palcode").hide();
    //palindrome toggle button text to Show Code
    $("#paltoggleBtn").text("Show Code");
    //input field clearing
    $("#pal").val("");
    //result field clearing
    $("#palOut").text("");

    $("#SFcode").hide();
    $("#SFBtnToggleCode").text("Show Code");
    $("#in1").val("");
    $("#in2").val("");
    $("#in3").val("");
    $("#in4").val("");
    $("#in5").val("");
    $("#in6").val("");
    $("#inputK").val("");
    $("#resultMessage").text("");

    $("#FBcode").hide();
    $("#FBbtnToggleCode").text("Show Code");
    $("#fbIn1").val("");
    $("#fbIn2").val("");
    $("#Answer").text("");

    $("#factCode").hide();
    $("#facttoggleBtn").text("Show Code");
    $("#fact").val("");
    $("#factOut").text("");

    $("#code").hide();
    $("#toggleBtn").text("Show Code");
    $("#input1,#input2,#input3,#input4,#input5").val("");
    $("#smallest").text("");
    $("#largest").text("");
    $("#sum").text("");
    $("#product").text("");
    $("#average").text("");
});

//Custom Tab Controls
$("#mathModal ul.nav-tabs li").click(function (e) {
    e.preventDefault();
    $("#mathModal ul.nav-tabs li").removeClass("active");
    $(this).addClass("active");
    $("#mathModal div.tab-content div.tab-pane").removeClass("in active")
    $($(this).attr("data-custom-tab-toggle")).addClass("in active");
});