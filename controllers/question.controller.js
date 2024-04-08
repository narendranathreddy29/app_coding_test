const getQuestions = async (req, res) => {
  try {
    const questions = 
    {
        "questionnaireTitle": "Geography Questions",
        "questionsText": [
            "What is the capital of Cuba?",
            "What is the capital of France?",
            "What is the capital of Poland?",
            "What is the capital of Germany?",
        ]
    }
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
    getQuestions
};
