import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

export class CardInfoDrug extends React.Component<Props> {
  render() {
    return (
      <Card>
        <Card.Content>
          <Title>{this.props.title}</Title>
          <Paragraph>{this.props.content}</Paragraph>
        </Card.Content>
      </Card>
    );
  }
}
