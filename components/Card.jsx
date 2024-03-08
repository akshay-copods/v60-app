import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export const ModuleCard = ({ title, shortDescription }) => (
  <Card className="mt-3">
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{shortDescription}</Text>
    </Card.Content>
  </Card>
);
