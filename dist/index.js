$(document).ready(function(){
    $.each(data, function(i, item) {
        $("#myUL").append('<li><a href="'+data[i].url+'"><p><u> Word:</u> <b>'+data[i].word+'</b> || Skill: '+data[i].skill+' || Section: '+data[i].section+'</p></a></li>');
    });
  });

function searchFx() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    var count = 0;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            count++;
        } else {
            li[i].style.display = "none";
        }
    }
    console.log(count);
    if(count === 0) {
        li[0].style.display ="No Searches Found";
    }
}

function getValue(){
    var sel = document.getElementById('myUL');
    //var val= sel.value;
    var opt = sel.options[sel.selectedIndex];
    console.log(opt.value);
    window.location.replace(opt.value);
}