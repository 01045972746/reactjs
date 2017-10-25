export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLE = 'MULTIPLE';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function multiply() {
    return {
        type: MULTIPLE
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}