import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎂" | "🍩" | "🎃" | "🎖️" | "🎆";

export function CycleHoliday(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [holiday, setHoliday] = useState<Holiday>("🎂");
    // const ordering = true;

    function AlphaHoliday(current: Holiday): void {
        if (current === "🎂") {
            setHoliday("🍩");
        } else if (current === "🍩") {
            setHoliday("🎃");
        } else if (current === "🎃") {
            setHoliday("🎖️");
        } else if (current === "🎖️") {
            setHoliday("🎆");
        } else {
            setHoliday("🎂");
        }
    }

    function DateHoliday(current: Holiday): void {
        if (current === "🎆") {
            setHoliday("🎖️");
        } else if (current === "🎖️") {
            setHoliday("🍩");
        } else if (current === "🍩") {
            setHoliday("🎂");
        } else if (current === "🎂") {
            setHoliday("🎃");
        } else {
            setHoliday("🎆");
        }
    }

    return (
        <span>
            <div>
                <Button onClick={() => AlphaHoliday(holiday)}>Alphabet </Button>
                <Button onClick={() => DateHoliday(holiday)}>Year </Button>
            </div>

            <div>Holiday: {holiday}</div>
        </span>
    );
}
