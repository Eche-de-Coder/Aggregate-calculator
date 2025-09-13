function calculate() {
  let olevel1 = parseInt(document.getElementById('olevel1').value);
  let olevel2 = parseInt(document.getElementById('olevel2').value);
  let olevel3 = parseInt(document.getElementById('olevel3').value);
  let olevel4 = parseInt(document.getElementById('olevel4').value);
  let totalolevel = olevel1 + olevel2 + olevel3 + olevel4;
  let utme = document.getElementById('utme').value
  let score = document.getElementById('score');
  let remark = document.getElementById('remark');
  let sitting = document.getElementById('sitting');
  let bonus = (sitting.value === "1" && olevel1 === 50 && olevel2 === 50 && olevel3 === 50 && olevel4 === 50) ? 10 : 0;
  let comment = '';
  
  let finalScore = (utme * 0.7) + ((totalolevel + bonus) * 0.3);
    score.innerHTML =  finalScore.toFixed(1);
    
  if (finalScore >= 0 && finalScore <= 19) comment = "Bro, you even write name? 🤦‍♂️";
   else if (finalScore <= 39) 
    comment = "u sure say u write waec 🤔";
   else if (finalScore <= 59) 
    comment = "You try small 🥹";
   else if (finalScore <= 79) 
    comment = "Hmm… teacher cry small 😢";
   else if (finalScore <= 99) 
    comment = "At least you remember something… maybe 🤔";
   else if (finalScore <= 119) 
    comment = "Half fish, half human… but still can’t swim 🐟";
   else if (finalScore <= 139) 
    comment = "You dey manage, but wahala full ground 😬";
   else if (finalScore <= 159) 
    comment = "Not worst, not best… just exist 🙄";
   else if (finalScore <= 179) 
    comment = "E fit pass, but na by miracle 🙏";
   else if (finalScore <= 199) 
    comment = "Ok ok… you no useless, small sha 😏";
   else if (finalScore <= 219) 
    comment = "Average human being detected 🧍";
   else if (finalScore <= 239) 
    comment = "Not bad… but brain still need gym 💪🧠";
   else if (finalScore <= 259) 
    comment = "Ehn! You sabi small, but pride go kill you 😏";
   else if (finalScore <= 279) 
    comment = "Teacher surprise say you even try 🥲";
   else if (finalScore <= 299) 
    comment = "You don dey show pepper 🌶️";
   else if (finalScore <= 319) 
    comment = "Now we talking! Small respect for you 🙌";
   else if (finalScore <= 339) 
    comment = "Big brain energy, no be beans 🫘";
   else if (finalScore <= 359) 
    comment = "Omooo, village people no fit touch you 😌";
   else if (finalScore <= 379) 
    comment = "Na genius wey no dey bath 🧼😂";
   else if (finalScore <= 400) 
    comment = "Ahh bossu! Na ur papa set the exam 😂";
   else 
    comment = "Invalid score 🤷"; // if out of range

    typeWriter(comment, remark, 50); // 50ms per character
}

function typeWriter(text, element, speed = 50) {
    let i = 0;
    element.innerHTML = ""; // clear before typing
    let interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

const copyBtn = document.getElementById("copyBtn");

  copyBtn.addEventListener("click", () => {
    const text = document.getElementById("acct-no").innerText;

    navigator.clipboard.writeText(text).then(() => {
      copyBtn.innerText = "Copied! ✅";
      setTimeout(() => {
        copyBtn.innerText = "Copy";
      }, 2000);
    });
  });
  
  document.getElementById("screenshotBtn").addEventListener("click", () => {
    const target = document.getElementById("acct-section");
    html2canvas(target).then(canvas => {
      let link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
