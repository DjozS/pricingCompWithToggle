const valueBasic = document.querySelector('.valueBasic')
const valueProffesional = document.querySelector('.valueProffesional')
const valueMaster = document.querySelector('.valueMaster')

function isChecked(){
    if(document.querySelector('input').checked){
        valueBasic.textContent = "$19.99"
        valueProffesional.textContent = "$24.99"
        valueMaster.textContent = "$39.99"
    }else{
        valueBasic.textContent = "$199.99"
        valueProffesional.textContent = "$249.99"
        valueMaster.textContent = "$399.99"
    }
}