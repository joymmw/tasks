/* eslint-disable prettier/prettier */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((s: string): number => Number(s));
    const filteredInt = toInt.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return filteredInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const filteredInt = amounts.map((a: string): string => a.replace("$", "0"));
    const toInt = filteredInt.map((s: string): number => Number(s));

    const finalInt = toInt.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );

    return finalInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const findShout = messages.map((s: string): string =>
        s[s.length - 1] === "!" ? s.toLocaleUpperCase() : s
    );

    const removeQ = findShout.filter(
        (s: string): boolean => s[s.length - 1] !== "?"
    );

    return removeQ;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((s: string): boolean => s.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    colors.length === 0 ? true : false;

    const validColors = colors.every(
        (s: string): boolean => s === "red" || s === "blue" || s === "green"
    );

    return validColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    // `join` combines elements with a string
    const theAddends = addends.length !== 0 ? addends.join("+") : "0";

    return sum + "=" + theAddends;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let firstNegativeIndex = -1;
    firstNegativeIndex = values.findIndex((num: number): boolean => num < 0);

    const sum =
        firstNegativeIndex === -1
            ? values.reduce((x, y) => x + y, 0)
            : values.slice(0, firstNegativeIndex).reduce((x, y) => x + y, 0);

    const newValues = [...values];

    firstNegativeIndex === -1
        ? newValues.push(sum)
        : newValues.splice(firstNegativeIndex + 1, 0, sum);

    return newValues;
}
