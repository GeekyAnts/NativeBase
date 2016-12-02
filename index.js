import { setDefaultThemeStyle } from './init';
import getTheme from './theme';
import variables from './variables';
import { PickerNB } from './components/Picker';

console.log('Picker', PickerNB);
setDefaultThemeStyle();

// Theme
export { getTheme };
export { variables };
export { StyleProvider } from '@shoutem/theme';

export { Button } from './components/Button';
export { Icon } from './components/Icon';
export { Header } from './components/Header';
export { InputGroup } from './components/InputGroup';
export { Input } from './components/Input';
export { Title } from './components/Title';
export { Fab } from './components/Fab';
export { Left } from './components/Left';
export { Right } from './components/Right';
export { Body } from './components/Body';
export { Badge } from './components/Badge';
export { CheckBox } from './components/Checkbox';
export { Radio } from './components/Radio';
export { Thumbnail } from './components/Thumbnail';
export { Card } from './components/Card';
export { CardItem } from './components/CardItem';
export { H1 } from './components/H1';
export { H2 } from './components/H2';
export { H3 } from './components/H3';
export { Spinner } from './components/Spinner';
export { Switch } from './components/Switch';
export { Container } from './components/Container';
export { Content } from './components/Content';
export { Footer } from './components/Footer';
export { Tabs } from './components/Tabs';
export { FooterTab } from './components/FooterTab';
export { PickerNB as Picker } from './components/Picker';
export { List } from './components/List';
export { ListItem } from './components/ListItem';
export { DeckSwiper } from './components/DeckSwiper';
export { Item } from './components/Item';
export { Label } from './components/Label';
export { Textarea } from './components/Textarea';


const mapPropsToStyleNames = (styleNames, props) => {
  console.log('title');
  return _.keys(props);
}

export { mapPropsToStyleNames };

export {
  Text,
} from './components/Text';
