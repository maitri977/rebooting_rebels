function myFunc(){
    var name = prompt("IF YOU INTERESTED FOR YOUR CAT GROMMING PLEASE ENTER OK AND MENTION YOUR NAME :");

    if (grommingmeth == null || grommingmeth == "") {
        document.getElementById("msg").innerHTML = "You did not entert anything. Please enter your name again";
    }
    else
    {
        document.getElementById("msg").innerHTML = "You enterted: " + grommingmeth;
    }
}