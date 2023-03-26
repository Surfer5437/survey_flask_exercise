from flask import Flask, render_template
from surveys import Question, Survey
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


satisfaction_survey = Survey(
    "Customer Satisfaction Survey",
    "Please fill out a survey about your experience with us.",
    [
        Question("Have you shopped here before?"),
        Question("Did someone else shop with you today?"),
        Question("On average, how much do you spend a month on frisbees?",
                 ["Less than $10,000", "$10,000 or more"]),
        Question("Are you likely to shop here again?"),
    ])

personality_quiz = Survey(
    "Rithm Personality Test",
    "Learn more about yourself with our personality quiz!",
    [
        Question("Do you ever dream about code?"),
        Question("Do you ever have nightmares about code?"),
        Question("Do you prefer porcupines or hedgehogs?",
                 ["Porcupines", "Hedgehogs"]),
        Question("Which is the worst function name, and why?",
                 ["do_stuff()", "run_me()", "wtf()"],
                 allow_text=True),
    ]
)

surveys = {
    "satisfaction": satisfaction_survey,
    "personality": personality_quiz,
}


@app.route('/survey_start')
def start():
    return render_template('survey_start.html', surveys=satisfaction_survey)


@app.route('/questions')
def questions():
    return render_template('questions.html', surveys=satisfaction_survey)


@app.route('/questions/<int:cur>')
def questions_individual(cur):
    return render_template('ind_questions.html', cur=cur, surveys=satisfaction_survey)


@app.route('/thanks/<ans>')
def thanks(ans):
    return render_template('thanks.html', ans=ans, surveys=satisfaction_survey)
