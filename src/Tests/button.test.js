import {render, screen, fireEvent, getByTestId} from '@testing-library/react';
import Button from '../Components/button';

it('botão primário como padrão', () => {
  render(<Button/>)
  expect(<Button primary/>).toBeTruthy();

});

