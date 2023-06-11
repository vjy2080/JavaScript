let inputData = document.querySelectorAll('input');
// console.log(inputData);
inputData.forEach(element => {
    element.addEventListener("blur",function () {
        console.log("called",this.value)
    })
});