import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      worngAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        ...state,
        score: (state.score / state.numberOfQuestions) * 100,
      });
    }
  }
  render() {
    const { state } = this.props.location;
    let stats, remark;

    if (state.score <= 30) {
      remark = "You need more Practice!";
    } else if (state.score > 30 && state.score <= 50) {
      remark = "Better luck next Time!";
    } else if (state.score > 50 && state.score <= 70) {
      remark = "You can do better";
    } else if (state.score >= 71 && state.score <= 84) {
      remark = "You did great!";
    } else {
      remark = "You're an absolute genius!";
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div>
            <span className="mdi mid-check-circle-outline success-icon"></span>
          </div>
          <h1>Quiz has ended</h1>
          <div className="container">
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">
              Total number of Attempted Questions:
            </span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />
            <span className="stat left">Total number of Correct Answers:</span>
            <span className="right">{this.state.correctAnswers}</span>
            <br />
            <span className="stat left">Total number of Wrong Answers:</span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />
            <span className="stat left">Hints Used:</span>
            <span className="right">{this.state.hintsUsed}</span>
            <br />
            <span className="stat left">50-50 Used:</span>
            <span className="right">{this.state.fiftyFiftyUsed}</span>
            <br />
          </div>
          <section>
            <ul>
              <li>
                <Link to="/">Back To Home</Link>
              </li>
              <li>
                <Link to="/play/quiz">Play Again</Link>
              </li>
            </ul>
          </section>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/">Back To Home</Link>
            </li>
            <li>
              <Link to="/play/quiz">Take a Quiz</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quick Quiz-Summary</title>
        </Helmet>
        {stats}
      </Fragment>
    );
  }
}
export default QuizSummary;
