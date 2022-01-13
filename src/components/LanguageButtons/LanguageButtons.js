import {EachButton, ListElement} from './styledComponents'

const LanguageButtons = props => {
  const {each, onChangeImage, activeButton} = props
  const {id, buttonText} = each

  const changeImage = () => onChangeImage(id)

  return (
    <ListElement>
      <EachButton type="button" active={activeButton} onClick={changeImage}>
        {buttonText}
      </EachButton>
    </ListElement>
  )
}
export default LanguageButtons
