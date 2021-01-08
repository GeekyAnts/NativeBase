import PropTypes from 'prop-types';

import InteractionManager from './interactionManager';

const ViewPropTypes = {
  style: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.any
  })
};
export { InteractionManager, ViewPropTypes };
