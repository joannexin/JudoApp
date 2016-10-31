import React from 'react';
import AthletesPreview from './athletesPreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athleteData => <AthletesPreview key={athleteData.id} {...athleteData} />)}
        </div>
      </div>
    )
  }
}
