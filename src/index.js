import { StyleProvider } from '@shoutem/theme';
import { keys } from 'lodash';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Gravatar } from './backward/Widgets/Gravatar';
import setDefaultThemeStyle from './init';
import getTheme from './theme/components';
import variables from './theme/variables/platform';
import Drawer from './basic/Drawer';
import { Swipeout } from './basic/Swipe';
import { Text } from './basic/Text';
import { ViewNB as View } from './basic/View';
import { Button } from './basic/Button';
import { IconNB } from './basic/IconNB';
import { Icon } from './basic/Icon';
import { Header } from './basic/Header';
import { InputGroup } from './basic/InputGroup';
import { Input } from './basic/Input';
import { Title } from './basic/Title';
import { Fab } from './basic/Fab';
import { Left } from './basic/Left';
import { Right } from './basic/Right';
import { Body } from './basic/Body';
import { Badge } from './basic/Badge';
import { CheckBox } from './basic/Checkbox';
import { Radio } from './basic/Radio';
import { Thumbnail } from './basic/Thumbnail';
import { Card } from './basic/Card';
import { CardItem } from './basic/CardItem';
import { H1 } from './basic/H1';
import { H2 } from './basic/H2';
import { H3 } from './basic/H3';
import { Spinner } from './basic/Spinner';
import { Switch } from './basic/Switch';
import { Container } from './basic/Container';
import { Content } from './basic/Content';
import { Footer } from './basic/Footer';
import { FooterTab } from './basic/FooterTab';
import { Form } from './basic/Form';
import { PickerNB } from './basic/Picker';
import { List } from './basic/List';
import { ListItem } from './basic/ListItem';
import { Separator } from './basic/Separator';
import { DeckSwiper } from './basic/DeckSwiper';
import { Item } from './basic/Item';
import { Label } from './basic/Label';
import { Textarea } from './basic/Textarea';
import { Tab } from './basic/Tab';
import { Tabs } from './basic/Tabs';
import { STabs } from './smart/STabs';
import { Content as TabContent } from './basic/Content';
import { Subtitle } from './backward/Widgets/Subtitle';

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
  Form,
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
  Separator,
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
  STabs,
  TabContent,
  View
};

const mapPropsToStyleNames = (styleNames, props) => keys(props);

export { mapPropsToStyleNames };
