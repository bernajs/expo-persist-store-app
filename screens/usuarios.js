import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'

class Usuario extends Component {
  renderUsuarios() {
    return this.props.usuarios.map((usuario, i) => {
      return (
        <ListItem key={i}>
          <Text>
            {usuario.nombre} {usuario.apellido}
          </Text>
        </ListItem>
      )
    })
  }

  render() {
    return (
      <Container>
        <Content>
            <List>
                {this.renderUsuarios()}
            </List>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps({ usuarios }) {
    return { usuarios }
}

export default connect(mapStateToProps)(Usuario)
