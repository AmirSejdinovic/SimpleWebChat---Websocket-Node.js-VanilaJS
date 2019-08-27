const WS = new WebSocket('ws://localhost:3333');

WS.onmessage = (payload)=>{
  displayMessages(payload.data);
    
};

WS.onopen = ()=>{
  displayTitle('CONTECETED TO SERVER');
};

WS.onclose = ()=>{
  displayTitle('DISCONTECETED TO SERVER');
  
};


function displayTitle(title){
  document.querySelector('h1').innerHTML =  title;
}

function displayMessages(message){

    let h1 = document.createElement('h1');
    h1.innerHTML = message;
   document.querySelector('div.messages').appendChild(h1);
};

document.forms[0].onsubmit = ()=>{
  let input = document.getElementById('message');

  //console.log(input.value);

  WS.send(input.value);
};
