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
    const { state, score } = this.props.location;
    let stats, remark;

    if (score <= 30) {
      remark = "You need more Practice!";
    } else if (score > 30 && score <= 50) {
      remark = "Better luck next Time!";
    } else if (score > 50 && score <= 70) {
      remark = "You can do better";
    } else if (score >= 71 && score <= 84) {
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
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
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
