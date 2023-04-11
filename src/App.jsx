import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 5rem;
  }
`

const Imagen = styled.img`
  max-width: 500px;
  width: 90%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 40px;
  width: 95%;

  &::after {
    content: '';
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const SpanHeading = styled.span`
  font-family: 'lato', sans-serif;
  color: #9497FF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 40px;
  width: 95%;  
`

function App() {

  //Para enviar info de la moneda seleccionada
  const [ monedas, setMonedas] = useState({})
  //Para mostrar resultado de la consulta
  const [ resultado, setResultado] = useState({})
  //cargar spinner
  const [ cargando, setCargando] = useState(false)

  //Se ejecuta cuando selecciono las monedas solamente y muestra los resultados
  useEffect(() => {
    if(Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])
  

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagen Criptomonedas'
      />
      <div>
        <Heading>Cotiza <SpanHeading>Criptomonedas</SpanHeading> al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />

        {cargando && <Spinner/>}
        {/* mostrar cotizacion (sintaxis con objeto)*/}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
