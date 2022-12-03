function searching(){
    var input = document.getElementById('searched').value;
    input = input.toLowerCase();

    var x = document.getElementsByClassName('food');
    for(i = 0; i < x.length; i++){
        
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none";
        }
        else{
            x[i].style.display = "list-item";
        }
    }
}
