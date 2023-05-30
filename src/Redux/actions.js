export const answerQuestion = (questionNumber, selectedOptions) => ({
    type: 'ANSWER_QUESTION',
    payload: {
        questionNumber,
        selectedOptions,
    },
});
