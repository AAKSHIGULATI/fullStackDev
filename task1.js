a = document.querySelector('h2')
console.log(a)
btn = document.getElementsByTagName('button')[0]
console.log(btn)
btn.addEventListener('click', ()=>{
    if(a.textContent == "this is winter winning camp"){
        a.textContent = "i am in Chandigarh University"
    }
    else{
        a.textContent = "this is winter winning camp"
    }
})

age = 20
if(age < 18){
    console.log("Cannot vote");
}
else{
    console.log("Please vote")
}