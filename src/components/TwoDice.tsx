/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(2);

    return (
        <span>
            first dice: <span data-testid="left-die">{d1}</span>
            second dice: <span data-testid="right-die">{d2}</span>
            <span>
                <Button onClick={() => setD1(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setD2(d6)}>Roll Right</Button>
            </span>
            <span>
                {d1 === 1 && d2 === 1 ? (
                    <div>You Lose!</div>
                ) : d1 === d2 ? (
                    <div>You Win!</div>
                ) : 
                    ""
                }
            </span>
        </span>
    );
}
