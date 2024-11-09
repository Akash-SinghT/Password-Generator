let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let passBox=document.getElementById("passBox");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyicon");
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});
genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});
let upperChars="ABCDEFGIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNUmbers="0123456789";
let allSymbols="!@#$%&*^";
function generatePassword(){
    let genPassword="";
    let allChars="";
      allChars+=lowercase.checked ? lowerChars : ""; 
      allChars+=uppercase.checked ? upperChars : ""; 
      allChars+=numbers.checked ? allNUmbers : ""; 
      allChars+=symbols.checked ? allSymbols : ""; 
      for(let i=1;i<=inputSlider.value;i++){
       genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
      }
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value>=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText ='check';
    }
    copyIcon.title ="Password Copied";
});
