import styled from 'styled-components'
import React from 'react'
import { MenuWrapper } from './styles/MenuWrapper'
import Logo from '../../../theme/Logo/Logo'
import {Button} from '../Button'

const links = [
 { 
   texto: 'Home',
   url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  { 
    texto: 'Sobre',
    url: '/sobre',
},
]

export default function Menu(){
  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo/>
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((links) => {
           return(
            <li key={links.url}>
              <a href ={links.url}>
                {links.texto} 
              </a>
            </li>
          );
         
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
       <Button ghost variant = "secondary.main" >
         Entrar
       </Button>
       <Button variant ="primary.main" >
         Cadastrar
       </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}
