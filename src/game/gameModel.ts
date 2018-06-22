interface Question {
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}

interface Answer{
    question: string,
    reponse: string
}


export { Question, Answer }