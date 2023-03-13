import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [qType, changeType] = useState<QuestionType>("short_answer_question");

    function changeQuestion(): void {
        qType === "multiple_choice_question"
            ? changeType("short_answer_question")
            : changeType("multiple_choice_question");
    }

    // Only includes <div>42</div> if `visible` is true
    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
