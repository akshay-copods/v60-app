import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const ModuleCard = ({ title, shortDescription }) => (
  <Card className="mt-3">
    <Card.Title title={null} />
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{shortDescription}</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
  </Card>
);
