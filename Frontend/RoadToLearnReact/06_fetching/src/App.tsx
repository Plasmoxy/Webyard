import React from 'react'
import MemeDisplay from './MemeDisplay';
import { Container } from 'reactstrap';

interface Props {

}

interface State {

}

export default class extends React.Component<Props, State> {
  render() {
    return <Container>
      <MemeDisplay />
    </Container>
  }
}