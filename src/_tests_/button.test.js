import {render, screen, fireEvent, getByTestId} from '@testing-library/react';
import Button from '../Components/button';
import {ReactComponent as ArrowRight} from '../Components/Icons/ArrowRight.svg';
import {ReactComponent as Check} from '../Components/Icons/CheckIcon.svg';
import {ReactComponent as RefreshIcon} from '../Components/Icons/RefreshIcon.svg';

it('botão primário como padrão', () => {
  render(<Button/>)
  expect(<Button primary/>).toBeTruthy();
});

describe('Elemento button funciona', () => {
  render(<Button/>);
  fireEvent.click(screen.getByText(/text/i));
});

describe('green button input value', () => {
  it('updates on change', () => {
    render(<Button/>)

    const searchInput = screen.getByTestId('greenButtonInput');

    fireEvent.change(searchInput, {target: {value: "test"}})
    expect(searchInput.value).toBe("test")
  }) 
})

describe('yellow button input value', () => {
  it('updates on change', () => {
    render(<Button/>)

    const searchInput = screen.getByTestId('greenButtonInput');

    fireEvent.change(searchInput, {target: {value: "testing"}})
    expect(searchInput.value).toBe("testing")
  }) 
})

describe('Arrow Right renderiza', () => {
  render(<ArrowRight/>);
});

describe('Check renderiza', () => {
  render(<Check/>);
});

describe('Refresh renderiza', () => {
  render(<RefreshIcon/>);
});