import styled from 'styled-components'
import Menu from '../src/componentes/commons/Menu'
import Footer from '../src/componentes/commons/Footer'
export default function Home() {
  return (
  <div
  style={{
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',}}
  >
    <Menu/>
    <Footer/>
  </div>
  )
}
