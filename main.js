
//login to signup
function loginToSignup() {

    var signup = document.getElementById('signup');
    var login = document.getElementById('login');

    if (login.style.display == "block") {
        login.style.display = "none";
        signup.style.display = "block";
    }
    else {
        login.style.display = 'block';
        signup.style.display = "none";
    }

}

//signup to login
function signupToLogin() {

    var signup = document.getElementById('signup');
    var login = document.getElementById('login');

    if (signup.style.display == "block") {
        signup.style.display = "none";
        login.style.display = "block";
    }
    else {
        signup.style.display = 'block';
        login.style.display = "none";
    }

}

//login to calib
function loginToCalib() {

    var calib = document.getElementById('calibration');
    var login = document.getElementById('login');

    if (login.style.display == "block") {
        login.style.display = "none";
        calib.style.display = "block";
    }
    else {
        login.style.display = 'block';
        calib.style.display = "none";
    }

}

//keyboard to alphabet
function keyboardToAlphabet() {
    var keyboard = document.getElementById('keyboard');
    var alphabet = document.getElementById('alphabet');

    if (keyboard.style.display == "block") {
        keyboard.style.display = "none";
        alphabet.style.display = "block";

    }
    else {
        keyboard.style.display = 'block';
        alphabet.style.display = "none";
    }
}

//keyboard to main
function keyboardToMain() {
    var keyboard = document.getElementById('keyboard');
    var mainpage = document.getElementById('main');

    if (keyboard.style.display == "block") {
        keyboard.style.display = "none";
        mainpage.style.display = "block";

    }
    else {
        keyboard.style.display = 'block';
        mainpage.style.display = "none";
    }
}



//main to keyboard page

function mainToKeyboard() {
    var keyboard = document.getElementById('keyboard');
    var mainpage = document.getElementById('main');

    if (mainpage.style.display == "block") {
        mainpage.style.display = "none";
        keyboard.style.display = "block";

    }
    else {
        mainpage.style.display = 'block';
        keyboard.style.display = "none";
    }
}

//calibration to main page
function calibToMain() {

    var calib = document.getElementById('calibration');
    var mainpage = document.getElementById('main');

    if (calib.style.display == "block") {
        calib.style.display = "none";
        mainpage.style.display = "block";

    }
    else {
        calib.style.display = 'block';
        mainpage.style.display = "none";
    }

}

//MAin to calibration page
function mainToCalib() {

    var calib = document.getElementById('calibration');
    var mainpage = document.getElementById('main');

    if (mainpage.style.display == "block") {
        mainpage.style.display = "none";
        calib.style.display = "block";
    }
    else {
        mainpage.style.display = 'block';
        calib.style.display = "none";
    }

}

//Function for Eye tracking starting with timer and all that
function start() {

    var c = 0;
    var t;
    var timer_is_on = 0;
    function timedCount() {
        document.getElementById("txt").innerHTML = c;
        c = c + 1;
        t = setTimeout(timedCount, 1000);
    }

    function startCount() {
        if (!timer_is_on) {
            timer_is_on = 1;
            timedCount();
        }
    }

    function stopCount() {
        clearTimeout(t);
        timer_is_on = 0;
    }

    GazeCloudAPI.StartEyeTracking();
    GazeCloudAPI.OnResult = function (GazeData) {
        console.log("GazeData", GazeData);
        // localStorage.setItem("GazeData", GazeData);
        document.getElementById("state").innerHTML = GazeData.state;
        document.getElementById("docX").innerHTML = GazeData.docX;
        document.getElementById("docY").innerHTML = GazeData.docY;
        document.getElementById("time").innerHTML = GazeData.time;
        var x = GazeData.docX;
        var y = GazeData.docY;

        var gaze = document.getElementById("gaze");
        x -= gaze.clientWidth / 2;
        y -= gaze.clientHeight / 2;

        gaze.style.left = x + "px";
        gaze.style.top = y + "px";

        if (GazeData.state != 0) {
            if (gaze.style.display == "block") gaze.style.display = "none";
        } else {
            if (gaze.style.display == "none") gaze.style.display = "block";
        }

        //declaring all buttons here

        var rect = document.getElementById("rect");
        var back = document.getElementById("back");
        var board = document.getElementById("board")
        var but1 = document.getElementById("myButton1")
        var but2 = document.getElementById("myButton2")
        var but3 = document.getElementById("myButton3")
        var but4 = document.getElementById("myButton4")
        var but5 = document.getElementById("myButton5")
        var but6 = document.getElementById("myButton6")
        var boardToMain = document.getElementById("boardtomain")


        var object_1 = gaze.getBoundingClientRect();
        var object_2 = rect.getBoundingClientRect();
        var object_3 = back.getBoundingClientRect();
        var object_4 = board.getBoundingClientRect();
        var object_6 = but1.getBoundingClientRect();
        var object_7 = but2.getBoundingClientRect();
        var object_8 = but3.getBoundingClientRect();
        var object_9 = but4.getBoundingClientRect();
        var object_10 = but5.getBoundingClientRect();
        var object_11 = but6.getBoundingClientRect();
        var object_12 = boardToMain.getBoundingClientRect();



        //for rect 
        if (object_1.left < object_2.left + object_2.width && object_1.left + object_1.width > object_2.left &&
            object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {

            setTimeout(function () {
                startCount()
            }, 3000);
            if (c == 3) {
                document.getElementById('rect').click()
                stopCount()
                c = 0;
            }

        }


        //for back
        else if (object_1.left < object_3.left + object_3.width && object_1.left + object_1.width > object_3.left &&
            object_1.top < object_3.top + object_3.height && object_1.top + object_1.height > object_3.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('back').click()
                stopCount()
                c = 0;
            }

        }


        //for board

        else if (object_1.left < object_4.left + object_4.width && object_1.left + object_1.width > object_4.left &&
            object_1.top < object_4.top + object_4.height && object_1.top + object_1.height > object_4.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('board').click()
                stopCount()
                c = 0;
            }

        }


        //keyboard but1
        else if (object_1.left < object_6.left + object_6.width && object_1.left + object_1.width > object_6.left &&
            object_1.top < object_6.top + object_6.height && object_1.top + object_1.height > object_6.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton1').click()
                stopCount()
                c = 0;
            }

        }


        //keyboard but2
        else if (object_1.left < object_7.left + object_7.width && object_1.left + object_1.width > object_7.left &&
            object_1.top < object_7.top + object_7.height && object_1.top + object_1.height > object_7.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton2').click()
                stopCount()
                c = 0;
            }

        }

        //keyboard but3
        else if (object_1.left < object_8.left + object_8.width && object_1.left + object_1.width > object_8.left &&
            object_1.top < object_8.top + object_8.height && object_1.top + object_1.height > object_8.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton3').click()
                stopCount()
                c = 0;
            }

        }

        //keyboard but4
        else if (object_1.left < object_9.left + object_9.width && object_1.left + object_1.width > object_9.left &&
            object_1.top < object_9.top + object_9.height && object_1.top + object_1.height > object_9.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton4').click()
                stopCount()
                c = 0;
            }

        }

        //keyboard but5
        else if (object_1.left < object_10.left + object_10.width && object_1.left + object_1.width > object_10.left &&
            object_1.top < object_10.top + object_10.height && object_1.top + object_1.height > object_10.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton5').click()
                stopCount()
                c = 0;
            }

        }

        //keyboard but6
        else if (object_1.left < object_11.left + object_11.width && object_1.left + object_1.width > object_11.left &&
            object_1.top < object_11.top + object_11.height && object_1.top + object_1.height > object_11.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('myButton6').click()
                stopCount()
                c = 0;
            }

        }

        //keyboard to main back button
        else if (object_1.left < object_12.left + object_12.width && object_1.left + object_1.width > object_12.left &&
            object_1.top < object_12.top + object_12.height && object_1.top + object_1.height > object_12.top) {

            setTimeout(function () {
                startCount()
            }, 4000);
            if (c == 4) {
                document.getElementById('boardtomain').click()
                stopCount()
                c = 0;
            }

        }

        else {
            stopCount()
            c = 0;

        }
    }
}

function end() {
    GazeCloudAPI.StopEyeTracking();
}

function commit() {
    this.$store.commit("EDIT_STATE", GazeData);
}



