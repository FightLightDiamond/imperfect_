import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {createQuestionAction} from '../../../../stores/redux/question/actions'
import ReactMde from "react-mde";
import {converter} from "../../../../helpers/Markdown";
import FilterComponent from "../../../components/Question/FilterComponent";
import TrueFalseComponent from "../../../components/Question/TrueFalseComponent";
import MultipleChoiceComponent from "../../../components/Question/MultipleChoiceComponent";
import MultiAnswersComponent from "../../../components/Question/MultiAnswersComponent";
import ReplyComponent from "../../../components/Frontend/Question/ReplyComponent";


class CreateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 1,
            time: 15,
            status: 0,
            level: 1,
            question: '',
            true_false: null,
            multi_choice: [
                {answer: false, reply: ''},
            ],
            multi_answer: [
                {answer: false, reply: ''},
            ]
        }
    }

    handleType = (type) => {
        this.setState({
            ...this.state, type: type
        })
    }

    handleTime = (time) => {
        this.setState({
            ...this.state, time: time
        })
    }

    handleStatus = (status) => {
        this.setState({
            ...this.state, status: status
        })
    }

    handleLevel = (level) => {
        this.setState({
            ...this.state, level: level
        })
    }

    handleAnswerTrueFalse = (true_false) => {
        this.setState({
            ...this.state, true_false: true_false
        })
    }

    handleMultiChoice = (multi_choice) => {
        this.setState({
            ...this.state, multi_choice: multi_choice
        })
    }

    handleMultiAnswer = (multi_answer) => {
        this.setState({
            ...this.state, multi_answer: multi_answer
        })
    }

    render() {
        return (
            <div>
                <h2>Question CreateView</h2>
                {JSON.stringify(this.state)}

                <ReplyComponent type={this.state.type} replies={this.state.type == 1
                    ? this.state.true_false :
                    (this.state.type == 2 ? this.state.multi_choice : this.state.multi_answer)}/>

                <div className={'row'}>
                    <div className={'col-lg-12 form-group'}>
                        <label htmlFor="">Question</label>
                        <ReactMde
                            value={this.state.question}
                            onChange={text => this.setState({question: text})}
                            selectedTab={this.state.tab}
                            onTabChange={text => this.setState({tab: text})}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </div>
                </div>

                <FilterComponent
                    time={this.state.time}
                    handleType={this.handleType}
                    handleTime={this.handleTime}
                    handleStatus={this.handleStatus}
                    handleLevel={this.handleLevel}
                />

                <div className={'row'}>
                    {
                        parseInt(this.state.type) === 1
                            ? <TrueFalseComponent
                                handleAnswerTrueFalse={this.handleAnswerTrueFalse}
                            />
                            : parseInt(this.state.type) === 2
                            ? <MultipleChoiceComponent
                                handleMultiChoice={this.handleMultiChoice}
                            />
                            : <MultiAnswersComponent
                                handleMultiAnswer={this.handleMultiAnswer}
                            />
                    }
                </div>

                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <button onClick={() => this.onCreate()} className={'btn btn-primary'}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

    onCreate = () => {
        const {createQuestionAction} = this.props
        // type: 1,
        //     time: 15,
        //     status: 0,
        //     level: 1,
        //     question: '',
        //     true_false: {},
        // multi_choice: [
        //     {answer: false, reply: ''},
        // ],
        //     multi_answer: [
        //     {answer: false, reply: ''},
        // ]

        const question = this.state;

        createQuestionAction(question);
    }
}

const mapStateToProps = ({Question}) => {
    const {question, loading, error} = Question;

    return {question, loading, error};
};

export default connect(
    mapStateToProps,
    {
        createQuestionAction
    }
)(CreateContainer);
