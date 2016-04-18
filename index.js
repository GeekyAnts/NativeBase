/* @flow */
'use strict';

import Toolbar from './Components/Widgets/Toolbar';
import Title from './Components/Widgets/Title';
import ButtonGroup from './Components/Widgets/ButtonGroup';
import Container from './Components/Widgets/Container';
import Content from './Components/Widgets/Content';
import Button from './Components/Widgets/Button';
import Text from './Components/Widgets/Text';
import H1 from './Components/Widgets/H1';
import H2 from './Components/Widgets/H2';
import H3 from './Components/Widgets/H3';
import View from './Components/Widgets/View';
import CircularButton from './Components/Widgets/CircularButton';
import InputGroup from './Components/Widgets/InputGroup';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {RadioButtons, SegmentedControls} from 'react-native-radio-buttons';
import ScrollableTabView from './Components/vendor/react-native-scrollable-tab-view';
import Messenger from './Components/vendor/react-native-gifted-messenger';
import Spinner from 'react-native-spinkit';
import Modal from 'react-native-modalbox';

module.exports = {
	Toolbar: Toolbar,
	Title: Title,
	ButtonGroup: ButtonGroup,
	Container: Container,
	Content: Content,
	Button: Button,
	Text: Text,
	H1: H1,
	H2: H2,
	H3: H3,
	View: View,
	CircularButton: CircularButton,
	InputGroup: InputGroup,
	Icon: Icon,
	Actions: Actions,
	RadioButton: RadioButtons,
	SegmentedControl: SegmentedControls,
	Tabs: ScrollableTabView,
	Messenger: Messenger,
	Spinner: Spinner,
	Modal: Modal
};
