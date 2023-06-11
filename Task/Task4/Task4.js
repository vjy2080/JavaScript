document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submitted successfully");
 });

 function req(e) {
    if (e.value == "") {
       let span = document.createElement("span");
       const newtext = document.createTextNode("This field is required");
       span.appendChild(newtext);
       if (e.nextSibling.nodeName == "span") {
          e.nextSibling.remove();
       } else {
          e.after(span);
       }
    }
 }