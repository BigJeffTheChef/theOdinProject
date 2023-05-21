import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../components/Home';

test('Home contains welcome text', () => {
    render(<Home/>);
    // eslint-disable-next-line testing-library/no-node-access
    const home = screen.getByText('Welcome to rat shop. For all your ratlike needs ye rat.');
    expect(home).toBeInTheDocument();
});
