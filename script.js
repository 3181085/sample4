'use strict'

let  messageArray = [];
const defaultInterval = 2000;
const currentInterval = 1000;
let id;

// let messageArray = ["Hiroyuki", "Yuusuke", "Syousuke", "Kanta", "Yuna", "Kouhei"];
let index = 0;

// ウィンドにメッセージを追加する  Interval毎にコールバックされる関数
let addMessage = () => {
  let messageBuff;
  let theMessages = document.getElementById("greetArea");
  
  messageBuff = messageArray[index++];
//  document.write(messageBuff);
  theMessages.append(messageBuff);
  console.log("id=", id, " index=", index, "lentght=", messageArray.length);
  
  if (index >= messageArray.length) {
    window.clearInterval(id);
  }
};

// window.addEventListener("click", () => {
//    // アロー関数
//    id = window.setInterval(addMessage, currentInterval);
// });


function greetClick () {
  console.log("greet")
  index = 0;
  let element = document.getElementById("geustName");
  let array = csvToArr(element.value);
  //let array = sort(csvToArr(element.value));
  messageArray = getIntroductions(array);
  id = window.setInterval(addMessage, currentInterval);
}


function sortClick () {
  console.log("sort")
  index = 0;
  let element = document.getElementById("geustName");
  let array = csvToArr(element.value);
  messageArray = sort(csvToArr(element.value));
  console.log(messageArray);
  id = window.setInterval(addMessage, currentInterval);
}


/* EOF */