function Result(){

    seat = parseInt(document.form1.seat1.value);
    Mname = document.form1.name1.value;
    if(seat == 123 && Mname == "abc"){
        document.getElementById("seat").innerHTML = seat;
        document.getElementById("mname").innerHTML = Mname;
       math = document.getElementById("math").innerHTML = 78;
       phy = document.getElementById("phy").innerHTML = 67;
       chem = document.getElementById("chem").innerHTML = 90;
       bio = document.getElementById("bio").innerHTML = 70;

        avg = ((math+phy+chem+bio)/(4))
        document.getElementById("avg").innerHTML = avg;
    }
    else if (seat == 124 && Mname == "abd"){
        document.getElementById("seat").innerHTML = seat;
        document.getElementById("mname").innerHTML = Mname;
        document.getElementById("math").innerHTML = 87;
        document.getElementById("phy").innerHTML = 60;
        document.getElementById("chem").innerHTML = 90;
        document.getElementById("bio").innerHTML = 70;
    }
    else{
    document.write("Invalid Name Or seat number_")
}
}
