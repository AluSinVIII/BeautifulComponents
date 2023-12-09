import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BeautifulNavBar from '../src/components/BeautifulNavBar';

describe('BeautifulNavBar', () => {
  it('renders correctly', () => {
    const { getByText } = render(<BeautifulNavBar title="Test Title" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeDefined();
  });

  it('calls onBackPress handler when back button is pressed', () => {
    const onBackPressMock = jest.fn();
    const { getByText } = render(<BeautifulNavBar title="Test Title" onBackPress={onBackPressMock} />);
    const backButtonElement = getByText('Back');

    fireEvent.press(backButtonElement);

    expect(onBackPressMock).toHaveBeenCalledTimes(1);
  });

  it('calls onMenuPress handler when menu button is pressed', () => {
    const onMenuPressMock = jest.fn();
    const { getByText } = render(<BeautifulNavBar title="Test Title" onMenuPress={onMenuPressMock} />);
    const menuButtonElement = getByText('Menu');

    fireEvent.press(menuButtonElement);

    expect(onMenuPressMock).toHaveBeenCalledTimes(1);
  });
});
