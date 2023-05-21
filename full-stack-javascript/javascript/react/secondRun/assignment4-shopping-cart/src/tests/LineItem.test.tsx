import React from 'react';
// @ts-ignore
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import LineItem from "../components/LineItem";

const testName = 'test name';
const testPrice = 0.75;
const testQuantity = 3;

const generateTestLineItem = (addToCartMockFn: jest.Mock<any, any, any>, removeFromCartMockFn: jest.Mock<any, any, any>, addAmountToCartMock: jest.Mock<any, any, any>) => {
    return (
        <LineItem
            name={testName}
            price={testPrice}
            quantityInStock={testQuantity}
            addToCart={addToCartMockFn}
            removeFromCart={removeFromCartMockFn}
            addAmountToCart={addAmountToCartMock}/>
    );
}

describe('Line Item component', () => {
    describe('Line item details', () => {
        test('Line item has name', () => {
            render(generateTestLineItem(jest.fn(), jest.fn(), jest.fn()));
            const nameEl = screen.getByText(`Name:`);
            const nameValueEl = screen.getByText(`${testName}`);
            expect(nameEl).toBeInTheDocument();
            expect(nameValueEl).toBeInTheDocument();
        });

        test('Line item has price', () => {
            render(generateTestLineItem(jest.fn(), jest.fn(), jest.fn()));
            const priceEl = screen.getByText(`Price:`);
            const priceValueEl = screen.getByText(`£${Number(testPrice).toFixed(2)}`)
            expect(priceEl).toBeInTheDocument();
            expect(priceValueEl).toBeInTheDocument();
        });

        test('Line item has quantity', () => {
            render(generateTestLineItem(jest.fn(), jest.fn(), jest.fn()));
            const quantityNameEl = screen.getByText(`In Stock:`);
            const quantityValueEl = screen.getByText(`${testQuantity} units`)
            expect(quantityNameEl).toBeInTheDocument();
            expect(quantityValueEl).toBeInTheDocument();
        });
    });
});