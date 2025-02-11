import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ Reacti/); 
    expect(linkElement).toBeInTheDocument();
});

test(increments count on button click', () => {
    render(<App />);
    const buttonelement = screen.getByText(/count is 0/i);
    expect(buttonelement).toBeInTheDocument();

    fireEvent.click(buttonelement);
    expect(buttonelement).tohaveTextContent('count is 1');

    fireEvent.click(buttonelement);
    expect(buttonelement).tohaveTextContent('count is 2');    
});
