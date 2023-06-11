function gmete(para, spanid) {
       console.log(para);
       console.log(para.value);
       if (para.value === "") {
           document.getElementById(spanid).innerHTML = "<b>This field is required</b>";
       } else {
           document.getElementById(spanid).innerHTML = "";
       }
   }