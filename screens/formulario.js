import React, { Component } from 'react'
import { Container, Content, Item, Input, H1, Label, Button } from 'native-base'
import { Text, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'
import { agregarUsuario } from '../actions/usuarios_actions'
import { connect } from 'react-redux'

const Form = t.form.Form

const Usuario = t.struct({
  nombre: t.String,
  apellido: t.String,
  edad: t.Number,
  correo: t.String,
  telefono: t.Number,
  contrasena: t.String
})

const options = {}

class Formulario extends Component {
  state = {
    usuario: {
      nombre: '',
      apellido: '',
      edad: null,
      correo: '',
      telefono: '',
      contrasena: ''
    }
  }

  static navigationOptions = {
    title: 'Formulario'
  }

  onSubmit() {
    var usuario = this.refs.form.getValue()
    if (usuario) {
      this.props.agregarUsuario(this.state.usuario)
      this.clearForm()
    }
  }

  clearForm() {
    this.setState({ usuario: null })
  }

  onChange(usuario) {
    this.setState({ usuario })
  }

  render() {
    return (
      <Container style={{ padding: 10 }}>
        <Content>
          <Form
            ref="form"
            type={Usuario}
            options={options}
            value={this.state.usuario}
            onChange={this.onChange.bind(this)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit.bind(this)}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    )
  }
}

const styles = {
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}

function mapStateToProps({ usuarios }) {
  return { usuarios }
}

export default connect(mapStateToProps, { agregarUsuario })(Formulario)
