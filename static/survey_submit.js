const sub=document.getElementById('sub_btn');
sub.addEventListener('click',()=>{
    responses=[];
    const radios=document.querySelectorAll('input[type="radio"]:checked');
    // console.log(radios.id)
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked){
            responses.push(radios[i].nextElementSibling.innerText);
        }
    }
    localStorage.setItem('satisfaction_survey', responses);
    if (sessionStorage.length===4){
        const answers = localStorage.getItem('satisfaction_survey');
                       window.location.href='/thanks/'+ answers
        }
});