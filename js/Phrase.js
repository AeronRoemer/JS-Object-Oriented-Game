/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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
     // checks to see if the letter selected matches a phrase
     checkLetter(letter){
        this.phraseArr.forEach((element, index, arr) => {
          if (element === letter){
          //console.log(arr[index], index); arr[index]
          return true;
          } else {
          return false;
          }
        })
    };

    showMatchedLetter(l){
    const toShow = document.querySelectorAll(`.${l}`)
    toShow.forEach(element => {
      element.classList.remove("hide");
      element.classList.add("show");
      console.log(element);
    })
    };

  //`showMatchedLetter()`: Reveals the letter(s) on the board that matches the
// player's selection. To reveal the matching letter(s), select all of the letter DOM elements that 
//have a CSS class name that matches the selected letter and replace each selected 
// element's `hide` CSS class with the `show` CSS class.
 }
// .add("letter").add(`${element}`)
