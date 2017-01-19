import { Content as TabContent } from '../basic/Content';
import { STabs as Tabs } from '../smart/STabs';
import { SButton as Button } from '../smart/SButton';
import { SHeader as Header } from '../smart/SHeader';

export { TabContent };
export { Tabs };
export { Button };
export { Header };


const mapPropsToStyleNames = (styleNames, props) => _.keys(props);

export { mapPropsToStyleNames };
