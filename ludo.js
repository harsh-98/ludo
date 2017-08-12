var k = 0;
var turn = 0;
var allow = 1;
var user1 = "green",
    user2 = "red",
    user3 = "blue",
    user4 = "yellow";
var user1_i = 1,
    user2_i = 14,
    user3_i = 27,
    user4_i = 40;
var us1p = 0,
    us2p = 0,
    us3p = 0,
    us4p = 0;

function user() {
    k = parseInt(document.getElementById("user").value);
    switch (k) {
        case 4:
            us4p = 1;
            make("40", user4);
        case 3:
            make("27", user3);
            us3p = 1;
        case 2:
            make("14", user2);
            us2p = 1;
        case 1:
            us1p = 1;
            make("1", user1);

    }
}

function roll() {
    //no=Math.ceil(Math.random()*6);
    //document.getElementById("roll").value=no;
    no = document.getElementById("roll").value;
    allow = 1;

}




function move() {
    if (allow == 1) {
        var t = 0;
        var color = "";
        switch (turn) {
            case 0:
                t = user1_i;
                color = user1;
                break;
            case 1:
                t = user2_i;
                color = user2;
                break;
            case 2:
                t = user3_i;
                color = user3;
                break;
            case 3:
                t = user4_i;
                color = user4;
                break;
        }
        for (i = 1; i <= no; i++) {


            setTimeout(
                (function(x) {
                    document.getElementById(x.toString()).removeChild(document.getElementById(x.toString()).lastChild);

                }).bind(this, t), 500 * i - 250);
            t++;

            if (t == 52 && color == "green") t = 101;
            if (t == 12 && color == "red") t = 201;

            if (t == 26 && color == "blue") t = 301;

            if (t == 39 && color == "yellow") t = 401;
            y = function(y) {
                var a = document.createElement("div");
                document.getElementById(y.toString()).appendChild(a);
                $("#" + y).find("div").last().addClass("circle").css("visibility", "visible").css("background-color", color);
            }.bind(this, t);
            setTimeout(y, 500 * i);

            //if(no==i)do1(t);
        }
        console.log(i);
        setTimeout(
            (function(turn1) {
                if (turn1 != 0 && t == user1_i && us1p == 1)

                {
                    console.log(t);
                    $("#1").find("div").addClass("circle").css("visibility", "visible").css("background-color", user1);
                    user1_i = 1;
                } else if (turn1 != 1 && t == user2_i && us1p == 1)

                {
                    console.log(t);
                    give(14, user2);
                    user2_i = 14;
                } else if (turn1 != 2 && t == user3_i && us3p == 1) {
                    console.log(t);
                    give(27, user3);

                    user3_i = 27;
                } else if (turn1 != 3 && t == user4_i && us4p == 1) {
                    console.log(t);
                    give(40, user4);

                    user4_i = 40;
                }

            }).bind(this, turn)



            , 500 * i + 250);



        switch (turn) {
            case 0:
                user1_i = t;
                break;
            case 1:
                user2_i = t;
                break;
            case 2:
                user3_i = t;
                break;
            case 3:
                user4_i = t;
                break;
        }


    }

    allow = 0;
    turn++;
    turn %= k;
}

/* (function (x) {
       return function () {
            $("#"+x).find("div").addClass()css("visibility","hidden");
        }
    }) (t)
  y = t+1;
  setTimeout( (function (y) 
    {
        return function () {
            $("#"+y).find("div").css("visibility","visible");
        }
    })(t+1), 500*i);


var z = (function(x, y, z) {
  console.log([x, y, z]);
}).bind(this, 4, 5);

z(6);

[4, 5, 6];
*/
function make(y, color) {
    var a = document.createElement("div");
    $(a).addClass("circle").css("visibility", "visible").css("background-color", color);

    document.getElementById(y).appendChild(a);

}

function give(x, color) {
    document.getElementById(x.toString()).removeChild(document.getElementById(x.toString()).lastChild);

}