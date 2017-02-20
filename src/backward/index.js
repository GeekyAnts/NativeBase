import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleProvider, connectStyle } from '@shoutem/theme';
import getTheme from '../theme/components';
import setDefaultThemeStyle from '../init';
import variables from '../theme/variables/platform';
import Drawer from '../basic/Drawer';
import { Header } from './Widgets/Header';
import { Footer } from '../basic/Footer';
import { Title } from './Widgets/Title';
import { Container } from '../basic/Container';
import { Content } from './Widgets/Content';
import { Button } from './Widgets/Button';
import { Text } from './Widgets/Text';
import { Switch } from '../basic/Switch';
import { PickerNB as Picker } from '../basic/Picker';
import { List } from './Widgets/List';
import { ListItem } from './Widgets/ListItem';
import { CardItem1 as CardItem } from './Widgets/CardItem';
import { DeckSwiper } from '../basic/DeckSwiper';
import { H1 } from '../basic/H1';
import { H2 } from '../basic/H2';
import { H3 } from '../basic/H3';
import { ViewNB as View } from './Widgets/View';
import { Input } from '../basic/Input';
import { Textarea } from '../basic/Textarea';
import { InputGroup } from './Widgets/InputGroup';
import { Icon } from './Widgets/Icon';
import { FooterTab } from './Widgets/FooterTab';
import { Tab } from '../basic/Tab';
import { Fab } from '../basic/Fab';
import { Subtitle } from './Widgets/Subtitle';
import { Thumbnail } from '../basic/Thumbnail';
import { Gravatar } from './Widgets/Gravatar';
import { CheckBox } from '../basic/Checkbox';
import { Radio } from '../basic/Radio';
import { Card } from './Widgets/Card';
import { Badge } from '../basic/Badge';
import { Spinner } from '../basic/Spinner';
// import ProgressBar from './Widgets/ProgressBar';
import { Tabs } from '../basic/Tabs';

setDefaultThemeStyle();
module.exports = {
  Header,
  Footer,
  Title,
  Container,
  Content,
  Button,
  Text,
  Switch,
  Picker,
  List,
  ListItem,
  CardItem,
  H1,
  H2,
  H3,
  View,
  Row,
  Col,
  Grid,
  InputGroup,
  Input,
  Textarea,
  Icon,
  Thumbnail,
  Gravatar,
  Card,
  DeckSwiper,
  Badge,
  Spinner,
  CheckBox,
  Radio,
  // ProgressBar: ProgressBar,
  Drawer,
  FooterTab,
  Tab,
  Fab,
  Tabs,
  Subtitle,
  StyleProvider,
  connectStyle,
  getTheme,
  variables,
};
