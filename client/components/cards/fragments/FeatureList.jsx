// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

// ////////////////////////
// MEMBERS
// ////////////////////////

// Render features function.
const renderFeatures = (features) => features.map((feature, i) => React.cloneElement(feature, { key: i.toString() }));

export default class FeatureList extends Component {
  render() {
    const {
      features = [
        <Feature key={0} label="Example Feature 1" enabled={false} ></Feature>,
        <Feature key={1} label="Example Feature 2" enabled={true} ></Feature>,
        <Feature key={2} label="Example Feature 3" enabled={false} ></Feature>,
        <Feature key={3} label="Example Feature 4" enabled={false} ></Feature>,
        <Feature key={4} label="Example Feature 5" enabled={true} ></Feature>,
      ],
    } = this.props;
    return (
      <ul className="list-unstyled">
        {/* featureList */}
        {renderFeatures(features)}
      </ul>
    );
  }
}

// Prop type validation.
FeatureList.propTypes = {
  features: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.instanceOf(Feature))),
  // features: PropTypes.arrayOf(PropTypes.shape({
  //   label: PropTypes.string,
  //   enabled: PropTypes.bool,
  // })),
};
