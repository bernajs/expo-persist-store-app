import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { fetch_categorias } from '../actions/categorias_actions'

class Departamento extends Component {
  componentDidMount() { this.props.fetch_categorias() }

  renderCategorias() {
    return this.props.categorias.map((categoria, i) => {
      return (
        <ListItem key={i}>
          <Text>{categoria.name}</Text>
        </ListItem>
      )
    })
  }
  render() {
    return(
      <Container>
        <Content>
          <List>
            {this.renderCategorias()}
          </List>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps({ categorias }) { return { categorias } }

export default connect(mapStateToProps, { fetch_categorias })(Departamento)
