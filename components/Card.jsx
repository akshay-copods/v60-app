import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const ModuleCard = ({ title, shortDescription }) => (
  <TouchableOpacity>
    <Card>
      <Card.Title title={''} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{shortDescription}</Text>
      </Card.Content>
      {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    </Card>
  </TouchableOpacity>
);
