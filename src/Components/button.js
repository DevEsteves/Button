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
          maxLength="8"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />)
  }

  inputYellowButton = () => {
    return(<input
          type="text"
          placeholder="password"
          maxLength="8"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />)
  }

  isEmailDisabled = () => {
    if(!this.state.email.length > this.state.disabled){
      return true;
    }
  }

  isPasswordDisabled = () => {
    if(!this.state.password.length > this.state.disabled){
      return true;
    }
  }

  isCheck = () => {
    if(this.state.email.length === this.state.check || 
      this.state.password.length === this.state.check){
      return true;
    }
  }

  isArrowRight = () => {
    if(this.state.email.length === this.state.arrowRight ||
       this.state.password.length === this.state.arrowRight){
      return true;
    }
  }

  render() {
    
    return (
      <> {/* Operação ternária para alternar os botões*/}
      {this.state.primary ? (<div className='botao-verde'> 
        {this.inputGreenButton()}
        <button disabled={this.isEmailDisabled()}
          onClick={() => {this.handleClick(); this.resetInput()}}
          style={{background: this.isEmailDisabled() ? '#B7D0B6' : ''}}>
           {this.state.buttonText}
           {this.isArrowRight() ? (<ArrowRight fill="white"/>) : null}
           {!this.isEmailDisabled() && !this.isCheck() && !this.isArrowRight() ? 
           (<Refresh fill="white"/>) : null}
            {this.isCheck() ? (<Check fill="white"/>) : null}
        </button>
      </div>)
      :
      (<div className='botao-amarelo'>
        {this.inputYellowButton()}
        <button disabled={this.isPasswordDisabled()}
          onClick={() => {this.handleClick(); this.resetInput()}} 
          style={{background: this.isPasswordDisabled() ? '#FFDF77' : ''}}>
           {this.state.buttonText}
           {this.isArrowRight() ? (<ArrowRight fill="black"/>) : null}
           {!this.isPasswordDisabled() && !this.isCheck() && !this.isArrowRight() ? 
           (<Refresh fill="black"/>) : null}
            {this.isCheck() ? (<Check fill="black"/>) : null}
        </button>
      </div>
      )}
      </>
    )
  }
}

export default Button;