import React from 'react';
import './sass/main.css';


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
  
  render() {
    const enabled = 0;
    const arrowRight = 5;
    const check = 4;
    
    return (
      <> {/* Operação ternária para alternar os botões*/}
      {this.state.primary ? (<div className='botao-verde'> 
        <input
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          
        />
        <button disabled={!this.state.email > enabled} onClick={() =>
         {this.handleClick(); this.resetInput()}}
         style={{background: !this.state.email > enabled ? '#B7D0B6' : ''}}>
           Text{this.state.email.length === arrowRight ?
        (<svg width="15" height="16" viewBox="0 0 15 16" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M6.79611 0C6.62494 0.176 6.09099
          0.71632 5.87702 0.936C8.0839 3.14192 12.5157 7.47344 12.5157 7.47344L0.00766488
           7.47104L7.664e-07 8.64224L12.5135 8.66416C12.5135 8.66416 8.08693 12.864
            5.87335 15.0754C6.12963 15.3326 6.58391 15.7867 6.79611 16C9.45184
             13.3365 12.1497 10.6461 14.7879 8C12.1366 5.34592 9.4727 2.67925
              6.79611 0Z" fill="white"/></svg>) : null}{!(this.state.email.length === check)
                 && !(this.state.email.length === arrowRight)
         && !(this.state.email.length === enabled) ? (<svg width="15" height="16"
          viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.24451 1.72804C6.01858 1.50835 5.82642 1.31379 5.62513 1.12946C5.60289
             1.10914 5.50849 1.01202 5.50849 1.01202L6.52035 0C6.52035 0 6.57123
              0.0596813 6.60691 0.096002C7.37637 0.867538 8.94984 2.44197 8.95544
               2.45029L6.48451 4.9089C6.19651 4.61498 5.58849 3.98648 5.58849 3.98648L5.51649
                3.91048C5.51649 3.91048 6.0053 3.43815 6.19683 3.25271L6.15858 3.18407C5.75938
            3.34647 5.34753 3.48343 4.96368 3.67592C3.79773 4.26073 2.93244 5.15627
             2.37163 6.32989C1.9257 7.26287 1.73673 8.25169 1.84057 9.28883C2.0409
              11.2911 3.02172 12.7988 4.74848 13.8115C5.8261 14.4435 7.00724 14.6755
               8.24439 14.5128C10.4918 14.2173 12.0553 12.9976 12.9486 10.9234C13.2077
               10.322 13.3327 9.68372 13.3472 9.02595C13.3498 8.90547 13.3472 8.77618
                13.3472 8.77618C13.3472 8.77618 13.4752 8.77618 13.6032 8.77618C13.932
                 8.77618 14.2612 8.78258 14.5896 8.7733C14.665 8.77122 14.7868 8.77682
                  14.7868 8.77682C14.7868 8.77682 14.7892 8.89347 14.7868 8.96995C14.7548
                  10.0052 14.5308 10.9956 14.0696 11.9231C13.181 13.7123 11.8014 14.9824
                   9.89882 15.5965C7.21909 16.4605 4.79152 15.9325 2.68939 14.0555C1.48297
                    12.9782 0.748071 11.6074 0.493666 10.0145C0.129818 7.73744 0.70919 5.71036
                     2.25274 3.98232C3.29484 2.8151 4.60015 2.09076 6.12642 1.76004C6.1485
                     1.75508 6.17058 1.74804 6.24451 1.72804Z" fill="white"/></svg>) : null}
                     {this.state.email.length === check && !(this.state.email.length === arrowRight) ?
        (<svg width="17" height="12" viewBox="0 0 17 12" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M0.787872 5.91926L1.72787 4.97295L6.48867
          9.77956L15.853 0.329102L16.7879 1.27573L6.48643 11.6709L0.787872 5.91926Z"
           fill="white"/></svg>) : null}
        </button>
      </div>)
      :
      (<div className='botao-amarelo'>
        <input
          type="text"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button disabled={!this.state.password.length > enabled} onClick={this.handleClick} 
        style={{background: !this.state.password.length > enabled ? '#FFDF77' : ''}}>
          Text{this.state.password.length === arrowRight ?
        (<svg width="15" height="16" viewBox="0 0 15 16" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M6.79611 0C6.62494 0.176 6.09099
          0.71632 5.87702 0.936C8.0839 3.14192 12.5157 7.47344 12.5157
           7.47344L0.00766488 7.47104L7.664e-07 8.64224L12.5135 8.66416C12.5135 8.66416
         8.08693 12.864 5.87335 15.0754C6.12963 15.3326 6.58391 15.7867 
         6.79611 16C9.45184 13.3365 12.1497 10.6461 14.7879 8C12.1366 5.34592
          9.4727 2.67925 6.79611 0Z" fill="black"/></svg>) : null}
          {this.state.password.length > enabled && !(this.state.password.length === check)
         && !(this.state.password.length === arrowRight) ? 
        (<svg width="15" height="16" viewBox="0 0 15 16" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M6.24451 1.72804C6.01858 
         1.50835 5.82642 1.31379 5.62513 1.12946C5.60289 1.10914 5.50849
         1.01202 5.50849 1.01202L6.52035 0C6.52035 0 6.57123 0.0596813 6.60691 0.096002C7.37637
          0.867538 8.94984 2.44197 8.95544 2.45029L6.48451 4.9089C6.19651 4.61498 5.58849 3.98648
           5.58849  3.98648L5.51649 3.91048C5.51649 3.91048 6.0053 3.43815 6.19683 3.25271L6.15858
            3.18407C5.75938 3.34647 5.34753 3.48343 4.96368 3.67592C3.79773 4.26073 2.93244 
            5.15627 2.37163 6.32989C1.9257 7.26287 1.73673 8.25169 1.84057 9.28883C2.0409 
            11.2911 3.02172 12.7988 4.74848 13.8115C5.8261 14.4435 7.00724 14.6755 
            8.24439 14.5128C10.4918 14.2173 12.0553 12.9976 12.9486 10.9234C13.2077 10.322
             13.3327 9.68372 13.3472 9.02595C13.3498 8.90547 13.3472 8.77618 13.3472
              8.77618C13.3472 8.77618 13.4752 8.77618 13.6032 8.77618C13.932 8.77618 14.2612
               8.78258 14.5896 8.7733C14.665 8.77122 14.7868 8.77682 14.7868 8.77682C14.7868
                8.77682 14.7892 8.89347 14.7868 8.96995C14.7548 10.0052 14.5308 10.9956 
                14.0696 11.9231C13.181 13.7123 11.8014 14.9824 9.89882 15.5965C7.21909
                 16.4605 4.79152 15.9325 2.68939 14.0555C1.48297 12.9782 0.748071 11.6074 
                 0.493666 10.0145C0.129818 7.73744 0.70919 5.71036 2.25274 3.98232C3.29484
                  2.8151 4.60015 2.09076 6.12642 1.76004C6.1485 1.75508
                     6.17058 1.74804 6.24451 1.72804Z" fill="black"/>
        </svg>) : null}{this.state.password.length === check && !(this.state.password.length === arrowRight) ?
        (<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.787872 5.91926L1.72787 4.97295L6.48867 9.77956L15.853 0.329102L16.7879 1.27573L6.48643
         11.6709L0.787872 5.91926Z" fill="black"/>
        </svg>) : null}
        </button>
      </div>
    )}
      </>
    )
  }
}

export default Button;