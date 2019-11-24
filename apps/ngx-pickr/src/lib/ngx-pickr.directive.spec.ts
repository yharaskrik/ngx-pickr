import {NgxPickrDirective} from './ngx-pickr.directive';
import {createDirectiveFactory, SpectatorDirective} from '@ngneat/spectator/jest';

describe('NgxPickrDirective', () => {
    let spectator: SpectatorDirective<NgxPickrDirective>;

    const createDirective = createDirectiveFactory(NgxPickrDirective);

    let instance: NgxPickrDirective;

    beforeEach(() => {
        spectator = createDirective(`<div ngxPickr></div>`);
    });

    it('should compile', () => {
        instance = spectator.directive;
        expect(instance).toBeTruthy();
    });

});
