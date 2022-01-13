import {Component} from 'react'

import LanguageButtons from './components/LanguageButtons/LanguageButtons'
import {
  BgContainer,
  LanguageHeading,
  ButtonsContianer,
  ImageContainer,
  ImageComponent,
} from './styledComponents'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeButtonId: languageGreetingsList[0].id,
    imageUrl: languageGreetingsList[0].imageUrl,
  }

  onChangeImage = id => {
    const imageUrlObject = languageGreetingsList.filter(each => each.id === id)
    this.setState({
      imageUrl: imageUrlObject[0].imageUrl,
      activeButtonId: imageUrlObject[0].id,
    })
  }

  render() {
    const {imageUrl, activeButtonId} = this.state
    return (
      <BgContainer>
        <LanguageHeading>Multilingual Greetings</LanguageHeading>
        <ButtonsContianer>
          {languageGreetingsList.map(each => (
            <LanguageButtons
              key={each.id}
              onChangeImage={this.onChangeImage}
              each={each}
              activeButton={activeButtonId === each.id}
            />
          ))}
        </ButtonsContianer>
        <ImageContainer>
          <ImageComponent alt="greeting" src={imageUrl} />
        </ImageContainer>
      </BgContainer>
    )
  }
}

export default App
