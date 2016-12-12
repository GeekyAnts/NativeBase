import { Content as TabContent } from './Components/Content';
import { STabs as Tabs } from './Components/STabs';
import { SButton as Button } from './Components/SButton';
import { SHeader as Header } from './Components/SHeader';

export { TabContent };
export { Tabs };
export { Button };
export { Header };


const mapPropsToStyleNames = (styleNames, props) => _.keys(props);

export { mapPropsToStyleNames };
