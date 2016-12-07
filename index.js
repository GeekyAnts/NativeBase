import { setDefaultThemeStyle } from './init';
import getTheme from './theme';
import variables from './variables';
import { PickerNB } from './Components/Picker';
import Drawer from './Components/Drawer';
setDefaultThemeStyle();

// Theme
export { getTheme };
export { variables };
export { StyleProvider } from '@shoutem/theme';

export { Drawer };
export { Button } from './Components/Button';
export { Icon } from './Components/Icon';
export { IconNB } from './Components/IconNB';
export { Header } from './Components/Header';
export { InputGroup } from './Components/InputGroup';
export { Input } from './Components/Input';
export { Title } from './Components/Title';
export { Fab } from './Components/Fab';
export { Left } from './Components/Left';
export { Right } from './Components/Right';
export { Body } from './Components/Body';
export { Badge } from './Components/Badge';
export { CheckBox } from './Components/Checkbox';
export { Radio } from './Components/Radio';
export { Thumbnail } from './Components/Thumbnail';
export { Card } from './Components/Card';
export { CardItem } from './Components/CardItem';
export { H1 } from './Components/H1';
export { H2 } from './Components/H2';
export { H3 } from './Components/H3';
export { Spinner } from './Components/Spinner';
export { Switch } from './Components/Switch';
export { Container } from './Components/Container';
export { Content } from './Components/Content';
export { Footer } from './Components/Footer';
export { Tab } from './Components/Tab';
export { Tabs } from './Components/Tabs';
export { FooterTab } from './Components/FooterTab';
export { PickerNB as Picker } from './Components/Picker';
export { List } from './Components/List';
export { ListItem } from './Components/ListItem';
export { DeckSwiper } from './Components/DeckSwiper';
export { Item } from './Components/Item';
export { Label } from './Components/Label';
export { Textarea } from './Components/Textarea';


const mapPropsToStyleNames = (styleNames, props) => {
  console.log('title');
  return _.keys(props);
}

export { mapPropsToStyleNames };

export {
  Text,
} from './Components/Text';
