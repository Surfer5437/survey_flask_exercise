
const sub=document.getElementById('sub_btn');
sub.addEventListener('click',()=>{
    const radios=document.querySelectorAll('input[type="radio"]:checked');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked){
            sessionStorage.setItem(radios[0].name, radios[i].nextElementSibling.innerText);
        }
    }

    if (sessionStorage.getItem(0) === null){
       console.log('go to question page 0')
       window.location.href='/questions/0'
    }
    if (sessionStorage.getItem(1) === null){
        console.log('go to question page 1')
        window.location.href='/questions/1'}
    if (sessionStorage.getItem(2) === null){
        console.log('go to question page 2')
        window.location.href='/questions/2'}
    if (sessionStorage.getItem(3) === null){
        console.log('go to question page 3')
        window.location.href='/questions/3'}
            
        
    if (sessionStorage.length===4){
    const answers = [sessionStorage.getItem(0),sessionStorage.getItem(1),sessionStorage.getItem(2),sessionStorage.getItem(3)];
                   window.location.href='/thanks/'+ answers
    }
});