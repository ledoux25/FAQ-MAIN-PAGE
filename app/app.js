const icon = document.getElementsByClassName('icon');
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByClassName('answer')
prevois = null

for(let i=0; i<questions.length; i++ ){
    questions[i].addEventListener("click",dropDown(i))
}


function dropDown(index){
    // if(prevois==index){
    //     questions[index].classList.remove('answer-active')
    // }
    return function(){
        if(prevois==index){
            answers[index].classList.remove('answer-active')
            icon[index].src="../assets/images/icon-plus.svg"
            prevois=null;
        }else if(prevois != index && prevois != null){
            setTimeout(() =>{
                answers[index].classList.add('answer-active')
                icon[index].src="../assets/images/icon-minus.svg"
            },500)
                            answers[prevois].classList.remove('answer-active')
                icon[prevois].src="../assets/images/icon-plus.svg",

            prevois= index
        }else{
            answers[index].classList.add('answer-active')
            icon[index].src="../assets/images/icon-minus.svg"
            prevois = index;
        }
    };

}