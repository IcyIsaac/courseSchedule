import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course_title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course_icon') }
                {/* arrow component */}
                {/* action button component */})}
                <div className="library-course_description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat porttitor tempus. Fusce nec ligula tempus, ornare diam eu, ullamcorper urna. Mauris varius mi id ante pulvinar condimentum.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;