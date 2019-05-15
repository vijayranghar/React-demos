import React, { Component } from 'react';
import './style.css'

class TimelineItem extends Component {
    render() {
      const { data } = this.props
      const renderItems = data.map(({ text, date, link, category: { color, tag }}, index) => (
        <div className="timeline" key={index}>
          <div className="timeline-item">
            <div className="header">
              <div className="tag" style={{background:color}}>{tag}</div>
              <div className="date">{date}</div>
            </div>
            <div className="content">
              <p>{text}</p>
              {Boolean(link) ? <a href={link.url}>{link.text}</a> : null}
            </div>
          </div>
          <span className="circle" />
        </div>
      ))
        return (
            <div className="timeline-item-container">
            {renderItems}
            </div>
        )
    }
}

export default TimelineItem
