import React from 'react';
import './sass/main.css';
import {ReactComponent as ArrowRight} from './Icons/ArrowRight.svg';
import {ReactComponent as Check} from './Icons/CheckIcon.svg';
import {ReactComponent as Refresh} from './Icons/RefreshIcon.svg';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      primary: true,
      disabled: 0,
      arrowRight: 5,
      check: 4,
      buttonText: 'Text',
    };
    this.handleClick = this.handleClick.bind(this.state.primary);
  }
  
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      primary: !prevState.primary
    }));
  }

  resetInput = () => {
    this.setState({ email: '', password: ''});
  }
  
  inputGreenButton = () => {
    return(<input
          type="text"
          placeholder="email"
          maxlength="8"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />)
  }

  inputYellowButton = () => {
    return(<input
          type="text"
          placeholder="password"
          maxlength="8"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />)
  }

  render() {
    
    return (
      <> {/* Operação ternária para alternar os botões*/}
      {this.state.primary ? (<div className='botao-verde'> 
        {this.inputGreenButton()}
        <button disabled={!this.state.email > this.state.disabled} 
          onClick={() => {this.handleClick(); this.resetInput()}}
          style={{background: !this.state.email > this.state.disabled ? '#B7D0B6' : ''}}>
           {this.state.buttonText}
           {this.state.email.length === this.state.arrowRight ? 
            (<ArrowRight fill="white"/>) : null}
           {!(this.state.email.length === this.state.check)
            && !(this.state.email.length === this.state.arrowRight)
            && !(this.state.email.length === this.state.disabled) ? 
            (<Refresh fill="white"/>) : null}
            {this.state.email.length === this.state.check ? (<Check fill="white"/>) : null}
        </button>
      </div>)
      :
      (<div className='botao-amarelo'>
        {this.inputYellowButton()}
        <button disabled={!this.state.password.length > this.state.disabled} 
          onClick={this.handleClick} 
          style={{background:
           !this.state.password.length > this.state.disabled ? '#FFDF77' : ''}}>
            {this.state.buttonText}
            {this.state.password.length === this.state.arrowRight ?
              (<ArrowRight fill="black"/>) : null}
               {this.state.password.length > this.state.disabled 
              && !(this.state.password.length === this.state.check)
              && !(this.state.password.length === this.state.arrowRight) ? 
              (<Refresh fill="black"/>) : null}
               {this.state.password.length === this.state.check ?(<Check fill="black"/>) : null}
        </button>
      </div>
    )}
      </>
    )
  }
}

export default Button;