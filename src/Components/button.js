import React, {useEffect, useState} from 'react';
import './sass/main.css';
import {ReactComponent as ArrowRight} from './Icons/ArrowRight.svg';
import {ReactComponent as Check} from './Icons/CheckIcon.svg';
import {ReactComponent as Refresh} from './Icons/RefreshIcon.svg';

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
            {console.log(primary)}
          <button data-testid="green-button"
            disabled={disabled ? true : false}
            onClick={onClick}
            style={primary === true ? {background: disabled ? '#B7D0B6' : ''} : 
            {background: disabled ? '#FFDF77' : ''}}>
              {children}
            {isArrowRight() ? (<ArrowRight fill={primary === true ? 'white' : 'black'}/>) : null}
            {isRefresh() ? (<Refresh fill={primary === true ? 'white' : 'black'}/>) : null}
            {isCheck() ? (<Check fill={primary === true ? 'white' : 'black'}/>) : null}
          </button>
      </div>
      </>
    )
  }

export default Button;