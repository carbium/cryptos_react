import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7332C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    font-family: 'lato', sans-serif;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error