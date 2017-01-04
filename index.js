import { Gravatar } from 'native-base/backward';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { setDefaultThemeStyle } from './init';
import getTheme from './theme';
import variables from './theme/variables';
import Drawer from './basic/Drawer';
import { Swipeout } from './basic/Swipe';

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
