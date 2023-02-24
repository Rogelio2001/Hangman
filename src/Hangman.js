  import React, { Component } from "react";
  
  import { randomWord } from './words';
  
  import "./Hangman.css";

  import img0 from "./images/0.jpg";
  import img1 from "./images/1.jpg";
  import img2 from "./images/2.jpg";
  import img3 from "./images/3.jpg";
  import img4 from "./images/4.jpg";
  import img5 from "./images/5.jpg";
  import img6 from "./images/6.jpg";

  export class Hangman extends Component  {
    
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
      maxWrong: 6,
      images: [img0, img1, img2, img3, img4, img5, img6]
    };

    constructor(props) {
      super(props);

      //Antiguo state
      // this.state = { 
      //   nWrong: 0, 
      //   guessed: new Set(), 
      //   // answer: "apple"
      //   answer: randomWord() 
      // };
      //Nuevo state
      this.state = { 
        nWrong: 0, 
        guessed: new Set(), 
        answer: randomWord(),
        wins: 0, // se agrega una propiedad wins para guardar los juegos ganados
        losses: 0 // se agrega una propiedad losses para guardar los juegos perdidos
      };

      this.handleGuess = this.handleGuess.bind(this);
      this.resetGame = this.resetGame.bind(this);
      
      // this.Dashboard = this.Dashboard.bind(this);
    }

    // //Antiguo reset
    // // reset the game and put things in default
    // resetGame() {
    //   this.setState({
    //     nWrong: 0,
    //     guessed: new Set(),
    //     answer: randomWord()
    //   });
    // 
    // //Nuevo reset 1
    // resetGame() {
    //   this.setState({
    //     nWrong: 0,
    //     guessed: new Set(),
    //     answer: randomWord(),
    //     wins: 0,
    //     losses: 0
    //   });
    // }
    //Nuevo reset 2
    resetGame() {
      console.log(`Wins: ${this.state.wins}, Losses: ${this.state.losses}`);
      
      this.setState({
        nWrong: 0,
        guessed: new Set(),
        answer: randomWord()
      });
    }

    /** guessedWord: show current-state of word:
      if guessed letters are {a,p,e}, show "app_e" for "apple"
    */
    guessedWord() {
      // deconstructor
      const { answer, guessed } = this.state;

      return answer
        .split("")
        .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
      - add to guessed letters
      - if not in answer, increase number-wrong guesses
    */
  // //Antiguo handle
  //     handleGuess(evt) {
  //     let ltr = evt.target.value;

  //     this.setState(st => ({
  //       guessed: st.guessed.add(ltr),
  //       nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
  //     }));
  //   }
  //Nuevo handle
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      wins: st.wins + (st.answer.split("").every(ltr => st.guessed.has(ltr)) ? 1 : 0),
      losses: st.losses + (st.nWrong === this.props.maxWrong ? 1 : 0)
    }));
  }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
      const  { handleGuess } = this;
      const { guessed } = this.state;

      return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
        <button
          key={index}
          value={ltr}
          onClick={handleGuess}
          disabled={guessed.has(ltr)}
        >
          {ltr}
        </button>
      ));
    }

    /** render: render game */
    render() {
      const { nWrong, answer} = this.state;
      const { images, maxWrong } = this.props;

      
      
      let alternateText = `${this.state.nWrong} wrong guesses`;
      // const { guessedWord, generateButtons } = this;

      // function MyComponent() {
      //   const history = useHistory();
      // }
      // function MyComponent() {
      //   const history = useHistory();
      
      //   function handleClick() {
      //     history.push('/dashboard');
      //   }
      // }
      return (
        
        <div className='Hangman'>
          
          <h1>Hangman</h1>
          <img src={images[nWrong]} alt={alternateText}/>
          <p>Intentos malos: {nWrong} De {maxWrong}</p>

          
          { answer === this.guessedWord().join("") ? <p>Ganaste bb!!</p> :

            (nWrong === maxWrong ?
          <div>
            <p>Perdiste</p>
            <p>Palabra correcta es: {answer}</p>
          </div>
          :
          <div>
          <p className='Hangman-word'>{this.guessedWord()}</p>
          <p className='Hangman-btns'>{this.generateButtons()}</p>
        </div>)
        
        }

        <button id='reset' onClick={this.resetGame}>Reset Game</button>
        
        <button id='dash' onClick={() => this.history.push('./Dashboard')}>Dashboard</button>
        
        </div>
        
      );
      
    }
    
  }
  

  export default Hangman;
