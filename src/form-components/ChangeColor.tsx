import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    style={{ backgroundColor: "red" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "yellow" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "blue" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-blue"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "orange" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-orange"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "green" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "purple" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-purple"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "gray" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-gray"
                    label="gray"
                    value="gray"
                    checked={color === "gray"}
                />
                <Form.Check
                    inline
                    style={{ backgroundColor: "brown" }}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-check-brown"
                    label="brown"
                    value="brown"
                    checked={color === "brown"}
                />
                <div>
                    The user is feeling{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </span>
                    .
                </div>
            </div>
        </div>
    );
}
