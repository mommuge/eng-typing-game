// const inputtyping = document.querySelector('#input-typing');
// console.log(value);
const form = document.querySelector("#typing-form"); 
const input = document.querySelector("#input-typing");
const value= document.querySelector("#typing-value");
const count = document.querySelector("#answer-count");
const qeustion = document.querySelector("#typing-question");
const answer = ["닭","원신","라이덴","프로젝트","오렌지샤벳","히말라야산맥","동해물과백두산이","마르고닳도록하느님이보우하사","leagueoflegends","오이걸통과하네대단합니다","프로토타입마지막문제"];
let count__num = 0;
let answer_count = 0;
let time_sec = 9;
const updateValue = e => {value.textContent = e.target.value};
input.addEventListener("input", updateValue);


  
// let timer = setInterval(() => {
//   console.log(time_sec);
//   time_sec--;  
//   if(time_sec==0) {clearInterval(timer);}
// }, 1000);
function inputstr() {
  
    if(input.value == answer[answer_count])
{
  time_sec = 9;
  console.log(input.value);
  input.value = null; 
  answer_count++; 
  count__num++;
  resetTimer;
  timer();
} else{
  input.value= null;
}
}


function timer() {
  console.log(time_sec)
  count.innerText = `문제 : ${answer[count__num]} 맞춘 횟수 : ${count__num} 남은 시간 : ${time_sec}`;
  time_sec--;
  if(time_sec==-1) {clearInterval(resetTimer);
    count.innerText = `맞춘 횟수 : ${count__num} 재도전 하려면 F5`;
    input.disabled = true;
  }

}
const resetTimer = setInterval(timer, 1000)
