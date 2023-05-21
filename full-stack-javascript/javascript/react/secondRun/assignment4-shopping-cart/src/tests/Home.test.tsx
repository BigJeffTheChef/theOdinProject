// @ts-ignore
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../components/Home';
import React from 'react';

describe('Home component tests', () => {
    test('Home contains welcome text', () => {
        // @ts-ignore
        render(<Home/>);
        // eslint-disable-next-line testing-library/no-node-access
        const home = screen.getByText('Welcome to rat shop. For all your ratlike needs ye rat.');
        expect(home).toBeInTheDocument();
    });
});