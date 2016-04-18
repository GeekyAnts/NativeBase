/* @flow */
'use strict';

import Toolbar from './Components/Widgets/Toolbar';
import Title from './Components/Widgets/Title';
import ButtonGroup from './Components/Widgets/ButtonGroup';
import Container from './Components/Widgets/Container';
import Content from './Components/Widgets/Content';
import Button from './Components/Widgets/Button';
import Text from './Components/Widgets/Text';
import View from './Components/Widgets/View';
import CircularButton from './Components/Widgets/CircularButton';
import Input from './Components/Widgets/Input';
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
	View: View,
	CircularButton: CircularButton,
	Input: Input,
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
