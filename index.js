import { Col, Row, Grid } from 'react-native-easy-grid';
import { Gravatar } from './src/backward/Widgets/Gravatar';
import setDefaultThemeStyle from './init';
import getTheme from './src/theme';
import variables from './src/theme/variables';
import Drawer from './src/basic/Drawer';
import { Swipeout } from './src/basic/Swipe';

setDefaultThemeStyle();
// Theme
export { Swipeout };
export { getTheme };
export { variables };
export { StyleProvider } from '@shoutem/theme';
export { Drawer };
export { Button } from './src/basic/Button';
export { IconNB } from './src/basic/IconNB';
export { Icon } from './src/basic/Icon';
export { Header } from './src/basic/Header';
export { InputGroup } from './src/basic/InputGroup';
export { Input } from './src/basic/Input';
export { Title } from './src/basic/Title';
export { Fab } from './src/basic/Fab';
export { Left } from './src/basic/Left';
export { Right } from './src/basic/Right';
export { Body } from './src/basic/Body';
export { Badge } from './src/basic/Badge';
export { CheckBox } from './src/basic/Checkbox';
export { Radio } from './src/basic/Radio';
export { Thumbnail } from './src/basic/Thumbnail';
export { Card } from './src/basic/Card';
export { CardItem } from './src/basic/CardItem';
export { H1 } from './src/basic/H1';
export { H2 } from './src/basic/H2';
export { H3 } from './src/basic/H3';
export { Spinner } from './src/basic/Spinner';
export { Switch } from './src/basic/Switch';
export { Container } from './src/basic/Container';
export { Content } from './src/basic/Content';
export { Footer } from './src/basic/Footer';
export { Tab } from './src/basic/Tab';
export { Tabs } from './src/basic/Tabs';
export { FooterTab } from './src/basic/FooterTab';
export { PickerNB as Picker } from './src/basic/Picker';
export { List } from './src/basic/List';
export { ListItem } from './src/basic/ListItem';
export { DeckSwiper } from './src/basic/DeckSwiper';
export { Item } from './src/basic/Item';
export { Subtitle } from './src/backward/Widgets/Subtitle';
export { Label } from './src/basic/Label';
export { Textarea } from './src/basic/Textarea';
export { Gravatar };
export { Col, Row, Grid };
export { Text } from './src/basic/Text';


const mapPropsToStyleNames = (styleNames, props) => _.keys(props);

export { mapPropsToStyleNames };

