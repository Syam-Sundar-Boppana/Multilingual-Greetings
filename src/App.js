import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    resultList: languageGreetingsList[0].imageUrl,
    text: languageGreetingsList[0].imageAltText,
    isEnglishActive: true,
    isTeluguActive: false,
    isTamilActive: false,
  }

  onClickTamil = () => {
    this.setState({
      resultList: languageGreetingsList[1].imageUrl,
      text: languageGreetingsList[1].imageAltText,
      isTamilActive: true,
      isEnglishActive: false,
      isTeluguActive: false,
    })
  }

  onClickTelugu = () => {
    this.setState({
      resultList: languageGreetingsList[2].imageUrl,
      text: languageGreetingsList[2].imageAltText,
      isTamilActive: false,
      isEnglishActive: false,
      isTeluguActive: true,
    })
  }

  onClickEnglish = () => {
    this.setState({
      resultList: languageGreetingsList[0].imageUrl,
      text: languageGreetingsList[1].imageAltText,
      isTamilActive: false,
      isEnglishActive: true,
      isTeluguActive: false,
    })
  }

  render() {
    const {
      resultList,
      text,
      isTamilActive,
      isEnglishActive,
      isTeluguActive,
    } = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <div>
          <button
            className={isEnglishActive ? 'button-active' : 'button'}
            type="button"
            onClick={this.onClickEnglish}
          >
            English
          </button>
          <button
            className={isTamilActive ? 'button-active' : 'button'}
            type="button"
            onClick={this.onClickTamil}
          >
            Tamil
          </button>
          <button
            className={isTeluguActive ? 'button-active' : 'button'}
            type="button"
            onClick={this.onClickTelugu}
          >
            Telugu
          </button>
        </div>
        <ul>
          <li className="list">
            <img
              className="image"
              height="400px"
              width="400px"
              src={resultList}
              alt={text}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default App
