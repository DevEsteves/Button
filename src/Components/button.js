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
    const disabled = 0;
    const arrowRight = 5;
    const check = 4;
    
    return (
      <> {/* Operação ternária para alternar os botões*/}
      {this.state.primary ? (<div className='botao-verde'> 
        {this.inputGreenButton()}
        <button disabled={!this.state.email > disabled} 
          onClick={() => {this.handleClick(); this.resetInput()}}
          style={{background: !this.state.email > disabled ? '#B7D0B6' : ''}}>
           Text
           {this.state.email.length === arrowRight ? (<ArrowRight fill="white"/>) : null}
           {!(this.state.email.length === check)
            && !(this.state.email.length === arrowRight)
            && !(this.state.email.length === disabled) ? (<Refresh fill="white"/>) : null}
            {this.state.email.length === check ? (<Check fill="white"/>) : null}
        </button>
      </div>)
      :
      (<div className='botao-amarelo'>
        {this.inputYellowButton()}
        <button disabled={!this.state.password.length > disabled} 
          onClick={this.handleClick} 
          style={{background: !this.state.password.length > disabled ? '#FFDF77' : ''}}>
            Text
            {this.state.password.length === arrowRight ?
              (<ArrowRight fill="black"/>) : null} {this.state.password.length > disabled 
              && !(this.state.password.length === check)
              && !(this.state.password.length === arrowRight) ? 
              (<Refresh fill="black"/>) : null} {this.state.password.length === check ?
              (<Check fill="black"/>) : null}
        </button>
      </div>
    )}
      </>
    )
  }
}

export default Button;