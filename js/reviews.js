/*Eric Yang*/
/*I pledge my honor that I have abided by the Stevens Honor System.*/

function welcome(){
    alert("Welcome!\nYour comment is our biggest motivation!");
}


function anonymous(x){
    if (x.checked == true){
        document.getElementById("first").readOnly = true;
        document.getElementById("second").readOnly = true;  
        document.getElementById("first").value = "";
        document.getElementById("second").value = ""; 

    }
    else{
        document.getElementById("first").readOnly = false;
        document.getElementById("second").readOnly = false;
    }
}

function add_comment() {
    var comment = document.getElementById("comment").value;
    if(comment == ""){
        alert("We love to know how you think about us, the comment box can't be empty");
        return;
    }
    alert("Thanks for your suggestions, we appreciate your time!");
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    if (first == ""){
        first = "Mr./Ms.";
    }
    if (second == ""){
        second = "???";
    }
    var rate = document.getElementById("rate").value;
    var date = new Date();
    const reviews = document.getElementById("div_comment");
    const par1 = document.createElement("p");
    const par2 = document.createElement("p");
    const par3 = document.createElement("p");
    const par4 = document.createElement("HR");
    par1.appendChild(document.createTextNode(first+ " "+ second + " on " + date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() +": "));
    par2.appendChild(document.createTextNode("Rating: " + rate));
    par3.appendChild(document.createTextNode(comment));
    reviews.appendChild(par1);
    reviews.appendChild(par2);
    reviews.appendChild(par3);
    reviews.appendChild(par4);
    review_default();
}

function scroll_buttom(){
    window.scrollTo(0, document.body.scrollHeight);
}

function review_default(){
    document.getElementById("anonymous").checked = false;
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("rate").value = "5"
    document.getElementById("comment").value = "";
}

