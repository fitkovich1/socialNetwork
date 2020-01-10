import React from 'react';
import {create}  from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const instance = component.getInstance(); // дай мне экземпляр какой то объект
        expect(instance.state.status).toBe('it-kamasutra.com')
    });
    test(`auto creation span with status should be displayed`, () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root; // дай мне экземпляр какой то объект
        let span = root.findByType('span');
        expect(span).not.toBeNull()
    });
    test(`auto creation input with status should't be displayed`, () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root; // дай мне экземпляр какой то объект
        let input = root.findByType('input');
        expect(input).toBeNull()
    });
});