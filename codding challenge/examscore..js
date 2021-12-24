
const user = prompt('What is your name ?');
const subject = prompt("Which subject mark do you want to know right now?");

const examScore = Math.floor(Math.random() * 100) + 10; //0-0.9

if(examScore >= 80){
    alert(`Congrats, ${user} !! Your exam score in ${subject} is ${examScore}.Wish you would get such high marks in real`);
}else if(examScore >= 60){
    alert(`Not bad, ${user} !! Your exam score in ${subject} is ${examScore}.Wish you would have higher marks in real.`);
}else if(examScore >= 40){
    alert(`At least you passed, ${user} !! Your exam score in ${subject} is ${examScore}.Wish you would get higher marks in real`);
}else{
    alert(`Oh no, Try harder next time, ${user} !! Your exam score in ${subject} is ${examScore}.Wish you would pass the exam next time `);
}