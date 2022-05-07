import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react'
import './Widgets.css';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets_articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>            
            <Info/>
        </div>
        {newsArticle('Arthur is back', 'Top News')}
        {newsArticle('Arthur is back', 'Top News')}
        {newsArticle('Arthur is back', 'Top News')}
    </div>
  )
}

export default Widgets