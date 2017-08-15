var k = 0;
var turn = 0;
var allow = 1;
var user1 = "green",
    user2 = "red",
    user3 = "blue",
    user4 = "yellow";
var user1_i = [0, 1, 1, 1, 1,0,0,0,0],
    user2_i = [0, 14, 14, 14, 14,0,0,0,0],
    user3_i = [0, 27, 27, 27, 27,0,0,0,0],
    user4_i = [0, 40, 40, 40, 40,0,0,0,0];
var user1_playing_parts = 4,
    user2_playing_parts = 4,
    user3_playing_parts = 4,
    user4_playing_parts = 4;
var us1p = 0,
    us2p = 0,
    us3p = 0,
    us4p = 0;
var player_assign_allow = 1;
var sel = 1;
var no = 0;
var allow_part = 1;
//function users(color,pos,playing){
//this.color=color;
//this.pos=pos;
//this.playing=playing;
//}
//var user1=new users("green",1,);
//function user(){
// user1();
//}
//players are made and postion are given are marked with color  and the usp are assigned
function choose(x) {
    switch(turn){
        case 0:
        var arr=user1_i;
        break;
        case 1:
        var arr=user2_i;
        break;
        case 2:
        var arr=user3_i;
        break;
        case 3:
        var arr=user4_i;
        break;
    }
    if (x == 1&&arr[5]==1) {sel = 1;move();}
    if (x == 2&&arr[6]==1) {sel = 2;move();}
    if (x == 3&&arr[7]==1) {sel = 3;move();}
    if (x == 4&&arr[8]==1) {sel = 4;move();}
    
}

function roll() {
    // no=Math.ceil(Math.random()*6);
// document.getElementById("roll").value=no;
 no = document.getElementById("roll").value;
    allow = 1;
    allow_part = 1;

}

function new_game() {
    window.location = "ludo.html";
    //for (i=0;i<document.getElementsByClassName('a').length;i++)
    //        for (j=0;j<document.getElementsByClassName('a')[i].childNodes.length;j++)
    //    document.getElementsByClassName('a')[i].removeChild(document.getElementsByClassName('a')[i].childNodes[j]);
    //  player_assign_allow=1;

}

function next_player() {
    allow = 0;
    turn++;
    turn %= k;
}

function move2() {
    no = document.getElementById("roll").value;
    allow = 1;
}

function make(y, color, sel = 1, i = 0) {
    console.log(sel);
    var a = document.createElement("div");
    if (i == 0)
        $(a).addClass("circle").css("background-color", color);
    $(a).text(sel);
    var y_node = document.getElementById(y);

    if (y_node.childNodes[0] != null) {
        var first_element_i = y_node.childNodes[0];
        y_node.insertBefore(a, first_element_i);
    } else
        y_node.appendChild(a);

}

function dead(x) {
    document.getElementById(x.toString()).removeChild(document.getElementById(x.toString()).firstElementChild);
}

function dead_last(x) {
    document.getElementById(x.toString()).removeChild(document.getElementById(x.toString()).lastElementChild);

}

function user() {
    if (player_assign_allow == 1) {
        k = parseInt(document.getElementById("user").value);
        switch (k) {
            case 4:
                us4p = 1;
                dead("yel-1");
                user4_i[5]=1;
                make("40", user4);
                user4_playing_parts--;
            case 3:
                us3p = 1;
                dead("blu-1");
                make("27", user3);
                user3_i[5]=1;
                user3_playing_parts--;
            case 2:
                us2p = 1;
                dead("red-1");
                make("14", user2);
                user2_i[5]=1;
                user2_playing_parts--;
            case 1:
                us1p = 1;
                dead("gre-1");
                user1_i[5]=1;
                make("1", user1);
                user1_playing_parts--;

        }
    }
    player_assign_allow = 0;
}

function allow_new_part() {
    if (no == 1 && allow_part == 1) {
        switch (turn) {
            case 0:
                if (user1_playing_parts != 0) {
                    user1_playing_parts--;
                    //  var a= document.getElementById("gre-2").childNodes;
                    for (i = 1; i <= 4; i++)
                        if (document.getElementById("gre-" + i).childNodes[0] != null) {
                            break;
                        }
                        user1_i[i+4]=1;

                    dead("gre-" + i);

                    make(1, "green", i);
                }
                break;
            case 1:
                if (user2_playing_parts != 0) {
                    user2_playing_parts--;
                    for (i = 1; i <= 4; i++)
                        if (document.getElementById("red-" + i).childNodes[0] != null) {
                            break;
                        }

                         user2_i[i+4]=1;
                    dead("red-" + i);

                    make(14, "red", i);
                }
                break;
            case 2:
                if (user3_playing_parts != 0) {

                    user3_playing_parts--;
                    for (i = 1; i <= 4; i++)
                        if (document.getElementById("blu-" + i).childNodes[0] != null) {
                            break;
                        }
                         user3_i[i+4]=1;

                    dead("blu-" + i);

                    make(27, "blue", i);
                }

                break;
            case 3:
                if (user4_playing_parts != 0) {

                    user4_playing_parts--;
                    var which_del = 4 - user4_playing_parts;
                    for (i = 1; i <= 4; i++)
                        if (document.getElementById("yel-" + i).childNodes[0] != null) {
                            break;
                        }

                         user4_i[i+4]=1;
                    dead("yel-" + i);

                    make(40, "yellow", i);
                }

                break;
        }
        next_player();
        //allow_part=0;
    }
}

function move() {
    if (allow == 1) {
        var t = 0;
        var color = "";
        switch (turn) {
            case 0:
                t = user1_i[sel];
                color = user1;
                color1 = "rgb(0, 128, 0)";
                break;
            case 1:
                t = user2_i[sel];
                color = user2;
                color1 = "rgb(255, 0, 0)";
                break;
            case 2:
                t = user3_i[sel];
                color = user3;
                color1 = "rgb(0, 0, 255)";
                break;
            case 3:
                t = user4_i[sel];
                color = user4;
                color = "rgb(255, 255, 0)";
                break;
        }
        console.log(t);
        for (i = 1; i <= no; i++) {

            if (t == 1 || t == 14 || t == 27 || t == 40)
                setTimeout(
                    (function(x, sel) {
                        var ele_color = document.getElementById(x.toString());
                        for (i = 0; i < ele_color.childNodes.length; i++) {
                            console.log(color1);
                            console.log($(ele_color.childNodes[i]).css("background-color"));
                            if (ele_color.childNodes[i].innerHTML == sel && $(ele_color.childNodes[i]).css("background-color") == color1) {
                                ele = ele_color.childNodes[i];
                                break;
                            }
                        }
                        console.log(ele);
                        document.getElementById(x.toString()).removeChild(ele);

                    }).bind(this, t, sel), 500 * i - 250);
            else {
                setTimeout(
                    (function(x) {
                        dead(x);

                    }).bind(this, t), 500 * i - 250);
            }
            t++;
            if (t == 53) {
                t = 1;
            }
            if (t == 52 && color == "green") t = 101;
            if (t == 13 && color == "red") t = 201;

            if (t == 26 && color == "blue") t = 401;

            if (t == 39 && color == "yellow") t = 301;

            setTimeout(function(y, color, sel) {
                make(y, color, sel);
            }.bind(this, t, color, sel), 500 * i);
        }

        setTimeout(
            (function(turn1,t) {
                if (document.getElementById(t).childNodes[1] != null)
                    var ele_2_die = document.getElementById(t).childNodes[1].innerHTML;
                //us1p is like is for whether the player is playing or not
                if (t == 1 || t == 14 || t == 27 || t == 40) {} else
                    for (sel1 = 1; sel1 <= 4; sel1++)

                        if (turn1 != 0 && t == user1_i[sel1] && us1p == 1)

                {
                    console.log(t);
                    dead_last(t);
                    user1_i[ele_2_die] = 1;
                    make("gre-" + ele_2_die, user1, ele_2_die);
                     user1_i[sel1+4]=0;
                    user1_playing_parts++;
                } else if (turn1 != 1 && t == user2_i[sel1] && us2p == 1)

                {
                    console.log(t);
                    dead_last(t);
                    user2_i[ele_2_die] = 14;
                    make("red-" + ele_2_die, user2, ele_2_die);
                    user2_i[sel1+4]=0;
                    user2_playing_parts++;
                } else if (turn1 != 2 && t == user3_i[sel1] && us3p == 1)

                {
                    console.log(t);
                    dead_last(t);
                    make("blu-" + ele_2_die, user3, ele_2_die);
                    user3_i[ele_2_die] = 27;
                    user3_i[sel1+4]=0;
                    user3_playing_parts++;
                } else if (turn1 != 3 && t == user4_i[sel1] && us4p == 1)

                {
                    console.log(t);
                    dead_last(t);
                    user4_i[ele_2_die] = 40;
                    user4_i[sel1+4]=0;
                    user4_playing_parts++;
                    make("yel-" + ele_2_die, user2, ele_2_die);

                }

            }).bind(this, turn,t), 500 * i - 250);
        switch (turn) {
            case 0:
                user1_i[sel] = t;
                break;
            case 1:
                user2_i[sel] = t;
                break;
            case 2:
                user3_i[sel] = t;
                break;
            case 3:
                user4_i[sel] = t;
                break;
        }


    }

    next_player();
    sel = 1;
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



//.firstElementChild