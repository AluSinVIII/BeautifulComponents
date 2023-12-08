import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BeautifulButton from '../BeautifulButton';

describe('BeautifulButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(<BeautifulButton onPress={() => {}}>Press me!</BeautifulButton>);
    const buttonElement = getByText('Press me!');
    expect(buttonElement).toBeDefined();
  });

  it('calls onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<BeautifulButton onPress={onPressMock}>Press me!</BeautifulButton>);
    const buttonElement = getByText('Press me!');
    
    fireEvent.press(buttonElement);
    
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
