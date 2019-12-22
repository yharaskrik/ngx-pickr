import 'jest-preset-angular';

Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => {},
            removeListener: () => {}
        };
    }
});

Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            getPropertyValue: () => {}
        };
    }
});
