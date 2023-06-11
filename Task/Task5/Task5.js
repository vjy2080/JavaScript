inputData = document.querySelectorAll('input');
// console.log(inputData);
inputData.forEach(element => {
    element.addEventListener("blur", function () {
        // console.log("called",this.value)
        const newDiv = document.createElement("span");
        const pText = document.createTextNode("This field is required");
        newDiv.appendChild(pText);

        // console.log(newDiv);
        // console.log(this.value);
        console.log("this.nextSibling", this.nextSibling.nodeName);

        if (this.value == "") {
            if (this.nextSibling && this.nextSibling.nodeName == "SPAN") {
            } else {
                this.after(newDiv);
            }
        } else {
            if (this.nextSibling && this.nextSibling.nodeName == "SPAN") {
                this.nextSibling.remove();
            }
        }
    }
    );
}
);