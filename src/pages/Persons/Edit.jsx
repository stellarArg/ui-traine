import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container, Row, Col, Form, Button} from 'reactstrap';
import {InputText, InputEmail} from '../../components/Form';

import {
    updatePersons,
    fetchPersonRequested,
    submitPersonRequested
} from '../../actions/persons';

class Edit extends Component {

    /**
     * Ciclo de Vida de los Componentes
     * componentDidMount() Este se activa ni bien termino de renderizar nuestra web app
     * 
     */
    componentDidMount() {
        console.log(this.props);
        const {id} = this.props.match.params;
        if (id) {
            console.log(id)
            this.props.fetchPerson(id);
        }
    }

    handleChange(obj) {
        const {person} = this.props;
        Object.assign(person, obj);
        this.props.updatePerson(person);
        this.forceUpdate();
    }

    render() {
        const {
            person: {
                name,
                surname,
                email,
                gender,
                avatar
            }
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col sm={{offset: 2, size: 5}}>
                    <Form>
                        <h1> Edicion de Personas</h1>
                        <hr/>
                        <InputText
                            key="name"
                            label="Nombre: "
                            value={name}
                            onChange={({target: {value}}) => this.handleChange({name: value})}
                        />
                        <InputText
                            key="surname"
                            label="Apellido: "
                            value={surname}
                            onChange={({target: {value}}) => this.handleChange({surname: value})}
                        />
                        <InputEmail
                            key="email"
                            label="Email: "
                            value={email}
                            onChange={({target: {value}}) => this.handleChange({email: value})}
                        />
                        <InputText
                            key="gender"
                            label="Genero: "
                            value={gender}
                            onChange={({target: {value}}) => this.handleChange({gender: value})}
                        />
                        <InputText
                            key="avatar"
                            label="Avatar: "
                            value={avatar}
                            onChange={({target: {value}}) => this.handleChange({avatar: value})}
                        />
                        <Button
                            color='success'
                            onClick={() => this.props.submit()}
                        >
                            Salvar
                        </Button>
                        <br/>
                        <br/>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
};

const mapStateToProps = state => ({
    person: state.persons.currentPersons
});

const mapDispatchToProps = dispatch => ({
    fetchPerson: id => dispatch(fetchPersonRequested(id)),
    updatePerson: person => dispatch(updatePersons(person)),
    submit: () => dispatch(submitPersonRequested())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)
