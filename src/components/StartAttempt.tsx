import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // We have two parts to our State
    const [attempts, CountAttempts] = useState<number>(4);
    const [progress, InProgress] = useState<boolean>(false);

    function setAttempts(): void {
        CountAttempts(attempts - 1);
        InProgress(true);
    }

    function Mully(): void {
        CountAttempts(attempts + 1);
    }

    return (
        <span>
            attempts left: {attempts}
            <Button onClick={setAttempts} disabled={progress || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={Mully} disabled={progress}>
                Mulligan
            </Button>
            <Button onClick={() => InProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
        </span>
    );
}
