import React, { Component } from 'react';
import TimelineItem from './TimelineItem'
import data from '../data'
class Timeline extends Component {
    render() {
        return (
            <div>
                <TimelineItem data={data} />
            </div>   
        )
    }
}

export default Timeline