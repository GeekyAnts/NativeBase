/* @flow */
'use strict';

import Drawer from './Components/vendor/react-native-drawer';
import Header from './Components/Widgets/Header';
import Footer from './Components/Widgets/Footer';
import Title from './Components/Widgets/Title';
import Container from './Components/Widgets/Container';
import Content from './Components/Widgets/Content';
import Button from './Components/Widgets/Button';
import Text from './Components/Widgets/Text';
import Switch from './Components/Widgets/Switch';
import Picker from './Components/Widgets/Picker';
import List from './Components/Widgets/List';
import ListItem from './Components/Widgets/ListItem';
import CardItem from './Components/Widgets/CardItem';
import CardSwiper from './Components/Widgets/CardSwiper';
import DeckSwiper from './Components/Widgets/DeckSwiper';
import H1 from './Components/Widgets/H1';
import H2 from './Components/Widgets/H2';
import H3 from './Components/Widgets/H3';
import View from './Components/Widgets/View';
import Input from './Components/Widgets/Input';
import Textarea from './Components/Widgets/Textarea';
import InputGroup from './Components/Widgets/InputGroup';
import Icon from './Components/Widgets/Icon';
import FooterTab from './Components/Widgets/FooterTab';
import Thumbnail from './Components/Widgets/Thumbnail';
import CheckBox from './Components/Widgets/Checkbox';
import Radio from './Components/Widgets/Radio';
import Card from './Components/Widgets/Card';
import Badge from './Components/Widgets/Badge';
import Spinner from './Components/Widgets/Spinner';
// import ProgressBar from './Components/Widgets/ProgressBar';
import { Col, Row, Grid } from "react-native-easy-grid";
import ScrollableTabView from './Components/Widgets/Tabs';


module.exports = {
	Header: Header,
	Footer: Footer,
	Title: Title,
	Container: Container,
	Content: Content,
	Button: Button,
	Text: Text,
	Switch: Switch,
	Picker: Picker,
	List: List,
	ListItem: ListItem,
	CardItem: CardItem,
	H1: H1,
	H2: H2,
	H3: H3,
	View: View,
	Row: Row,
	Col: Col,
	Grid: Grid,
	InputGroup: InputGroup,
	Input: Input,
	Textarea: Textarea,
	Icon: Icon,
	Thumbnail: Thumbnail,
	Card: Card,
	CardSwiper: CardSwiper,
	DeckSwiper: DeckSwiper,
	Badge: Badge,
	Spinner: Spinner,
	CheckBox: CheckBox,
	Radio: Radio,
	// ProgressBar: ProgressBar,
	Drawer: Drawer,
	FooterTab: FooterTab,
	Tabs : ScrollableTabView
};
