import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BeautifulForm from '../src/components/BeautifulForm';

describe('BeautifulForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<BeautifulForm onSubmit={() => {}} />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const submitButton = getByText('Submit');

    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(submitButton).toBeDefined();
  });

  it('calls onSubmit handler with form data when submit button is pressed', () => {
    const onSubmitMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<BeautifulForm onSubmit={onSubmitMock} />);
    const nameInput = getByPlaceholderText('Name');
    const emailInput = getByPlaceholderText('Email');
    const submitButton = getByText('Submit');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'john.doe@example.com');
    fireEvent.press(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  });
});
