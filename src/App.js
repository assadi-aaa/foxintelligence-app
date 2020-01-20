import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {logAction} from "./actions/logAction";
import Dashboard from "./components/Dashboard";
import backendService from "./services/backendService";

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    logAction: (data) => dispatch(logAction(data))
});

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
    ...state
});


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        backendService.getLogData().then(data => {
            this.props.logAction(data);
        })
    }


    render() {
        const {logData} = this.props.logs;
        return (
            <Dashboard logs={logData}/>
        );
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
