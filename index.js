import { Gravatar } from 'native-base/backward';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { setDefaultThemeStyle } from './init';
import getTheme from './theme';
import variables from './theme/variables';
import Drawer from './basic/Drawer';
import { Swipeout } from './basic/Swipe';

<<<<<<< HEAD
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
import Tab from './Components/Widgets/Tab';
import Fab from './Components/Widgets/Fab';
import Thumbnail from './Components/Widgets/Thumbnail';
import Gravatar from './Components/Widgets/Gravatar';
import CheckBox from './Components/Widgets/Checkbox';
import Radio from './Components/Widgets/Radio';
import Card from './Components/Widgets/Card';
import Subtitle from './Components/Widgets/Subtitle';
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
  Gravatar: Gravatar,
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
  TabBar: Tab,
  Fab: Fab,
  Subtitle: Subtitle,
  Tabs : ScrollableTabView
};
=======
setDefaultThemeStyle();
// Theme
export { Swipeout };
export { getTheme };
export { variables };
export { StyleProvider } from '@shoutem/theme';
export { Drawer };
export { Button } from './basic/Button';
export { IconNB } from './basic/IconNB';
export { Icon } from './basic/Icon';
export { Header } from './basic/Header';
export { InputGroup } from './basic/InputGroup';
export { Input } from './basic/Input';
export { Title } from './basic/Title';
export { Fab } from './basic/Fab';
export { Left } from './basic/Left';
export { Right } from './basic/Right';
export { Body } from './basic/Body';
export { Badge } from './basic/Badge';
export { CheckBox } from './basic/Checkbox';
export { Radio } from './basic/Radio';
export { Thumbnail } from './basic/Thumbnail';
export { Card } from './basic/Card';
export { CardItem } from './basic/CardItem';
export { H1 } from './basic/H1';
export { H2 } from './basic/H2';
export { H3 } from './basic/H3';
export { Spinner } from './basic/Spinner';
export { Switch } from './basic/Switch';
export { Container } from './basic/Container';
export { Content } from './basic/Content';
export { Footer } from './basic/Footer';
export { Tab } from './basic/Tab';
export { Tabs } from './basic/Tabs';
export { FooterTab } from './basic/FooterTab';
export { PickerNB as Picker } from './basic/Picker';
export { List } from './basic/List';
export { ListItem } from './basic/ListItem';
export { DeckSwiper } from './basic/DeckSwiper';
export { Item } from './basic/Item';
export { Label } from './basic/Label';
export { Textarea } from './basic/Textarea';
export { Gravatar };
export { Col, Row, Grid };


const mapPropsToStyleNames = (styleNames, props) => _.keys(props);

export { mapPropsToStyleNames };

export {
  Text,
} from './basic/Text';
>>>>>>> 2cd8079e1a10ddfa478e6062e61264e74be51ec3
