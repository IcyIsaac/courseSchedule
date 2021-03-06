import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import LibraryCourse from './LibraryCourse';

class Library extends Component {
    
    componentDidMount() {
        this.props.fetchCourses
    }
    
    render() {
        return (
            <div className="library">
                <h1 className="library_title">Course Schedule </h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }
}

export default connect(null, actions)(Library);