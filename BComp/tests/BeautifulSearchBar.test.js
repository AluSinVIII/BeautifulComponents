import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BeautifulSearchBar from '../src/components/BeautifulSearchBar';

describe('BeautifulSearchBar', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<BeautifulSearchBar onSearch={() => {}} />);
    const searchBarElement = getByPlaceholderText('Search...');
    expect(searchBarElement).toBeDefined();
  });

  it('calls onSearch handler when search button is pressed', () => {
    const onSearchMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<BeautifulSearchBar onSearch={onSearchMock} />);
    const searchBarElement = getByPlaceholderText('Search...');
    const searchButtonElement = getByText('Search');

    fireEvent.changeText(searchBarElement, 'Test query');
    fireEvent.press(searchButtonElement);

    expect(onSearchMock).toHaveBeenCalledWith('Test query');
  });
});
