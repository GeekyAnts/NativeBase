import PropTypes from 'prop-types';

import InteractionManager from './interactionManager';

const ViewPropTypes = {
    style:  PropTypes.shape({
        style: PropTypes.any,
    })
}
export { InteractionManager, ViewPropTypes };
