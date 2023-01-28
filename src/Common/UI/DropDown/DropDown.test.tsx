import * as React from "react";
import { fireEvent } from '@testing-library/react'
import DropDownHOC from "./DropDownHOC";
import DropDown from "./DropDown";
import { renderWithProviders } from "../../UnitTestUtils/Provider";
import store from '../../../Store/index';
import { act } from "react-dom/test-utils";

describe('DropDownHOC', function () {

    it('Expect change shelf events working correctly', async () => {
        const spy: any = jest.spyOn(store, 'dispatch');

        const searchComponent = renderWithProviders(
            <DropDownHOC bookId="id-1" currentShelf="currentlyReading" DropDown={DropDown} />, {
            store
        });

        await act(async () => {
            const renderedBookDropDown = await searchComponent.findAllByTestId('shelf-dropdown');
            await fireEvent.change(renderedBookDropDown[0], { target: { value: 'read' } });
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);

        await act(async () => {
            const renderedBookDropDown = await searchComponent.findAllByTestId('shelf-dropdown');
            await fireEvent.change(renderedBookDropDown[0], { target: { value: 'currentlyReading' } });
        });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
    });
});