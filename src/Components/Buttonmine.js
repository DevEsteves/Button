import React, {useEffect, useState} from 'react';
import {ReactComponent as ArrowRight} from './Icons/ArrowRight.svg';
import {ReactComponent as Check} from './Icons/CheckIcon.svg';
import {ReactComponent as Refresh} from './Icons/RefreshIcon.svg';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  height: 56px;
  left: 39px;
  width: 311px;
  top: 547px;
  bottom: 0;
  right: 0;
  background: #026C00;
  position: absolute;
  button{
    background: #026C00;
    margin: 0;
    padding: 0;
    border: 0;
  }
  cursor: pointer;
  `
const SvgStyle = styled.svg`
  height: 16px;
  width: 14.78787899017334px;
  left: 90%;
  right: -90%;
  top: 35%;
  bottom: 0%;
  position: absolute;
`
const Title = styled.h1`
  font-size: 1.4rem;
  margin: 0;
  padding-left: 0%;
  border-left: 0;
  width: 100%;
  height: 100%;
  background: #026C00;
  cursor: pointer;
`

function Button({children, color, icon, disabled, primary, onClick}) {
  const isCheck = () => {
    if(icon === 'check'){
      return true;
    }
  }

  const isArrowRight = () => {
    if(icon === 'arrow-right'){
      return true;
    }
  }

  const isRefresh = () => {
    if(icon === 'refresh'){
      return true;
    }
  }

    return (
      <> {/* Operação ternária para alternar os botões*/}
        <div className={primary === true ? 'botao-verde' : 'botao-amarelo'}>
            <button 
              disabled={disabled ? true : false}
              onClick={onClick}
              style={primary === true ? 
                  {background: disabled ? '#B7D0B6' : ''} : {background: disabled ? '#FFDF77' : ''}}>
                  <Title>{children}</Title>
              {isArrowRight() ? (<SvgStyle><ArrowRight fill={primary === true ? 'white' : 'black'}/></SvgStyle>) : null}
              {isRefresh() ? (<SvgStyle><Refresh fill={primary === true ? 'white' : 'black'}/></SvgStyle>) : null}
              {isCheck() ? (<SvgStyle><Check fill={primary === true ? 'white' : 'black'}/></SvgStyle>) : null}
            </button>
        </div>
      </>
    )
  }

export default Button;