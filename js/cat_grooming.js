function myFunc() {
    var txt;
    if (confirm("if you interested press ok!")) {
      txt = "happy to see as you are interested!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}


