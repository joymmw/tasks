import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");
    const numRequest = parseInt(request) || 0;

    function useAttempt(): void {
        setAttempts(attempts - 1);
    }

    function gainAttmepts(): void {
        setAttempts(attempts + numRequest);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formAttemptsRequest">
                    <Form.Label>Request:</Form.Label>
                    <Form.Control
                        type="number"
                        value={request}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequest(event.target.value)}
                    />
                </Form.Group>
                <div>attempts left: {attempts}.</div>
                <div>
                    <Button onClick={useAttempt} disabled={attempts <= 0}>
                        {" "}
                        use{" "}
                    </Button>

                    <Button onClick={gainAttmepts}> gain </Button>
                </div>
            </div>
        </div>
    );
}
