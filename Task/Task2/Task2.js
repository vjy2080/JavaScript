function check(para, spanid) {
       if (para.value == "") {
        document.getElementById(spanid).innerHTML="<b>This field is required</b>"
    } else {
           document.getElementById(spanid).innerHTML="<b></b>"
       }
}