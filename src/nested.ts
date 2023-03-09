import { Duplex } from "stream";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const qPublished = questions.filter(
        (q: Question): boolean => q.published === true
    );

    return qPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );

    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundID = questions.find((q: Question) => q.id === id);

    if (foundID) {
        return foundID;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const qRemoved = questions.filter((q: Question): boolean => q.id !== id);

    return qRemoved;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const namesOnly = questions.map((q: Question): string => q.name);

    return namesOnly;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, q: Question) => currentTotal + q.points,
        0
    );

    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pSum = questions
        .filter((q: Question): boolean => q.published === true)
        .reduce(
            (currentTotal: number, q: Question) => currentTotal + q.points,
            0
        );

    return pSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let finalCSV = "id,name,options,points,published\n";

    questions.map(
        (q: Question) =>
            (finalCSV += `${q.id},${q.name},${q.options.length},${q.points},${q.published}\n`)
    );

    return finalCSV.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const qA = questions.map((q: Question) => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false
    }));

    return qA;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pAllQs = questions.map(
        (q: Question): Question => ({
            ...q,
            options: [...q.options],
            published: true
        })
    );

    return pAllQs;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    } else {
        const theType = questions[0].type;

        const checkType = questions.every(
            (q: Question): boolean => q.type === theType
        );
        return checkType;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newArr = questions.map((q: Question) => ({
        ...q,
        options: [...q.options]
    }));

    const newQ = makeBlankQuestion(id, name, type);
    newArr.push(newQ);

    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQs = questions.map((q: Question) =>
        q.id === targetId
            ? { ...q, options: [...q.options], name: newName }
            : { ...q, options: [...q.options] }
    );

    return newQs;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQs = questions.map((q: Question) =>
        newQuestionType === "multiple_choice_question"
            ? q.id === targetId
                ? { ...q, options: [...q.options], type: newQuestionType }
                : { ...q, options: [...q.options] }
            : q.id === targetId
            ? { ...q, options: [], type: newQuestionType }
            : { ...q, options: [...q.options] }
    );

    return newQs;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQs = questions.map((q: Question) =>
        q.id === targetId
            ? targetOptionIndex === -1
                ? { ...q, options: [...q.options, newOption] }
                : arrCopyandInsert(q, targetOptionIndex, newOption)
            : { ...q, options: [...q.options] }
    );

    return newQs;
}

function arrCopyandInsert(
    q: Question,
    target: number,
    newOpt: string
): Question {
    const finalOpt = [...q.options];
    finalOpt.splice(target, 1, newOpt);

    return { ...q, options: finalOpt };
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    let newQz: Question[] = [];

    const index = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );

    const ogQ = questions.find((q: Question): boolean => q.id === targetId);

    if (ogQ !== undefined) {
        const dupe = duplicateQuestion(newId, ogQ);

        newQz = [...questions];
        newQz.splice(index + 1, 0, dupe);
    }

    return newQz;
}
