import styled from 'styled-components'

export const EachButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: solid #db1c48 1px;
  color: ${props => (props.active ? '#ffffff' : '#db1c48')}
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')}
  margin: 0px 10px 0px 10px;
`
export const ListElement = styled.li`
  list-style: none;
  margin-right: 10px;
`
