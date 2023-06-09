import styled from "@emotion/styled"

const StyledResultado = styled.div`
    color: #FFF;
    font-family: 'lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`

const Precio = styled.p`
font-size: 25px;
    span {
        font-weight: 700;
    }

`

const Imagen = styled.img `
    display: block;
    width: 150px;
`

const Resultado = ({resultado}) => {
    //extraer info del objeto de la api
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

  return (
    <StyledResultado>        
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}%</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </StyledResultado>
  )
}

export default Resultado