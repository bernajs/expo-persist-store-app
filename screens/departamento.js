import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { fetch_categorias } from '../actions/categorias_actions'

class Departamento extends Component {
  componentDidMount() { this.props.fetch_categorias() }

  render() {
  console.log(this.props)
    return(
      <View>
        <Text>Departamento</Text>
        <Text>Departamento</Text>
        <Text>Departamento</Text>
        <Text>Departamento</Text>
      </View>
    )
  }
}

function mapStateToProps({ categorias }) { return { categorias } }

export default connect(mapStateToProps, { fetch_categorias })(Departamento)
