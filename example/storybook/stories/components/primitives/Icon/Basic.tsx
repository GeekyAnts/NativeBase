import React from 'react';
import { Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function () {
  return (
    <>
      <Icon name={'menu'} type="MaterialIcons" />
      <Icon type="Ionicons" name="md-checkmark-circle" />
      <Icon name="stepforward" type="AntDesign" />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <AntDesign name="stepforward" size={24} color="black" />
      <MaterialCommunityIcons name="material-design" size={24} color="black" />
    </>
  );
}
