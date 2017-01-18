import StyleProvider from '@shoutem/theme';
import { keys } from 'lodash';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Gravatar } from './src/backward/Widgets/Gravatar';
import setDefaultThemeStyle from './init';
import getTheme from './src/theme';
import variables from './src/theme/variables';
import Drawer from './src/basic/Drawer';
import { Swipeout } from './src/basic/Swipe';
import Text from './src/basic/Text';
import Button from './src/basic/Button';
import IconNB from './src/basic/IconNB';
import Icon from './src/basic/Icon';
import Header from './src/basic/Header';
import InputGroup from './src/basic/InputGroup';
import Input from './src/basic/Input';
import Title from './src/basic/Title';
import Fab from './src/basic/Fab';
import Left from './src/basic/Left';
import Right from './src/basic/Right';
import Body from './src/basic/Body';
import Badge from './src/basic/Badge';
import CheckBox from './src/basic/Checkbox';
import Radio from './src/basic/Radio';
import Thumbnail from './src/basic/Thumbnail';
import Card from './src/basic/Card';
import CardItem from './src/basic/CardItem';
import H1 from './src/basic/H1';
import H2 from './src/basic/H2';
import H3 from './src/basic/H3';
import Spinner from './src/basic/Spinner';
import Switch from './src/basic/Switch';
import Container from './src/basic/Container';
import Content from './src/basic/Content';
import Footer from './src/basic/Footer';
import FooterTab from './src/basic/FooterTab';
import PickerNB from './src/basic/Picker';
import List from './src/basic/List';
import ListItem from './src/basic/ListItem';
import DeckSwiper from './src/basic/DeckSwiper';
import Item from './src/basic/Item';
import Label from './src/basic/Label';
import Textarea from './src/basic/Textarea';
import Tab from './src/basic/Tab';
import Tabs from './src/basic/Tabs';
import Subtitle from './src/backward/Widgets/Subtitle';

setDefaultThemeStyle();
// Theme
export {
  Swipeout,
  getTheme,
  variables,
  StyleProvider,
  Drawer,
  Button,
  IconNB,
  Icon,
  Header,
  InputGroup,
  Input,
  Title,
  Fab,
  Left,
  Right,
  Body,
  Badge,
  CheckBox,
  Radio,
  Thumbnail,
  Card,
  CardItem,
  H1,
  H2,
  H3,
  Spinner,
  Switch,
  Container,
  Content,
  Footer,
  Tab,
  Tabs,
  FooterTab,
  PickerNB as Picker,
  List,
  ListItem,
  DeckSwiper,
  Item,
  Subtitle,
  Label,
  Textarea,
  Gravatar,
  Col,
  Row,
  Grid,
  Text,
};

const mapPropsToStyleNames = (styleNames, props) => keys(props);

export { mapPropsToStyleNames };

