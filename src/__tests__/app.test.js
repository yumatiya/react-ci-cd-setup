import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/); 
    expect(linkElement).toBeInTheDocument();
});

test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');    
});
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/); 
    expect(linkElement).toBeInTheDocument();
});

test('increments count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');    
});

test('renders header correctly', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /Welcome to Vite \+ React/i });
    expect(headerElement).toBeInTheDocument();
});

test('button has correct initial text', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });
    expect(buttonElement).toHaveTextContent('count is 0');
});

test('button text changes on click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');
});
