// @ts-ignore
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../components/Home';
import Layout from "../components/Layout";
import React from "react";

// configure mocks
jest.mock('../components/Home', () => () => (
    <div>
        <div className='header'></div>
        <div className='body'></div>
    </div>
));

// helper functions
const generateTestLayout = () => (<Layout bodyComponent={<Home/>}/>);

describe('Header layout', () => {
    test('header is present', () => {
        render(generateTestLayout());
        // eslint-disable-next-line testing-library/no-node-access
        const header = document.querySelector('.header');
        expect(header).toBeInTheDocument();
    });

    test('header title is present', () => {
        render(generateTestLayout());
        const title = screen.getByText('Welcome to RatShop');
        expect(title).toBeInTheDocument();
    });

    describe('Nav', () => {
      test('header nav is present', () => {
        render(generateTestLayout());
        // eslint-disable-next-line testing-library/no-node-access
        const nav = document.querySelector('.nav');
        expect(nav).toBeInTheDocument();
      });

      test('header nav contains home link', () => {
        render(generateTestLayout());
        const nav = screen.getByText('Home');
        expect(nav.getAttribute('href')).toBe('/');
      });

      test('header nav contains shop link', () => {
        render(generateTestLayout());
        const nav = screen.getByText('Shop');
        expect(nav.getAttribute('href')).toBe('/shop');
      });
    });
});
describe('Body layout', () => {
    test('body is present', () => {
        render(generateTestLayout());
        // eslint-disable-next-line testing-library/no-node-access
        const body = document.querySelector('.body');
        expect(body).toBeInTheDocument();
    });
});


