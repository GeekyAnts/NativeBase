import React from 'react';
import { Menu, Divider, IconButton, Icon } from 'native-base';

export default function () {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return <IconButton icon={<Icon name="menu" />} {...triggerProps} />;
      }}
    >
      {loading ? (
        <Menu.Item isDisabled>Loading</Menu.Item>
      ) : (
        <>
          <Menu.Item>Menu item 2</Menu.Item>
          <Menu.Item isDisabled>Menu item 3</Menu.Item>
          <Divider />
          <Menu.Item>Menu item 4</Menu.Item>
        </>
      )}
    </Menu>
  );
}
