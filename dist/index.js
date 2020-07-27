$(document).ready(function(){
    $.each(data, function(i, item) {
        //alert(data[i].word);
        $("#myUL").append('<li><a href="'+data[i].url+'"><p><u> Word:</u> <b>'+data[i].word+'</b> || Skill :'+data[i].skill+' || Section: '+data[i].section+'</p></a></li>');

    });
  });

function searchFx() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function getValue(){
    var sel = document.getElementById('myUL');
    //var val= sel.value;
    var opt = sel.options[sel.selectedIndex];
    console.log(opt.value);
    window.location.replace(opt.value);
}