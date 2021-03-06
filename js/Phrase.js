
 class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase()
    this.phraseArr = this.phrase.split('');
  }    

  // adds spaces for phrase to game screen
 addPhraseToDisplay(){
     // creates variables for DOM elements and a new array containing letters of the phrase
     const div = document.querySelector("#phrase")
     const ul = div.firstElementChild
     
     //forEach iterates over the array and appends 'li' elements to DOM
     this.phraseArr.forEach(element => {
      if (element === " "){
      let liS = document.createElement('li');
      liS.classList.add("space")
      ul.appendChild(liS)
      } else {
      let li = document.createElement('li')
      li.classList.add("hide", "letter", element);
      li.textContent = element;
      ul.appendChild(li)
      }
    });
   }

   // shows a letter when matched by changing the li's class
    showMatchedLetter(l){
    const toShow = document.querySelectorAll(`.${l}`)
    toShow.forEach(element => {
      element.classList.remove("hide");
      element.classList.add("show");
    })
    };
     // checks to see if the letter selected matches a phrase
     checkLetter(letter){
        if (this.phraseArr.includes(letter)) {
         return true;
        } else {
        return false;
        }
        
     }
  }

