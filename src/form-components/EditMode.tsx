import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [switchIntro, setSwitchIntro] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(true);
    const [text, setText] = useState<string>("Your Name");

    // This is the Control
    function updateCheck(event: React.ChangeEvent<HTMLInputElement>) {
        setCheck(event.target.checked);
    }
    function updateSwitchIntro(event: React.ChangeEvent<HTMLInputElement>) {
        setSwitchIntro(event.target.checked);
    }
    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Group controlId="formEditIntro">
                    <Form.Check
                        type="switch"
                        id="intro-check"
                        checked={switchIntro}
                        onChange={updateSwitchIntro}
                    />
                    {switchIntro && (
                        <>
                            <Form.Control value={text} onChange={updateText} />
                            <Form.Check
                                type="checkbox"
                                id="intro-check"
                                label="student"
                                checked={check}
                                onChange={updateCheck}
                            />
                            <Form.Label>Name:</Form.Label>
                        </>
                    )}
                </Form.Group>
                {!switchIntro && (
                    <div>
                        {" "}
                        {text}
                        {check ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
