import React, {Component} from 'react';
import {connect} from 'react-redux';

import {InputText, InputEmail} from '../../components/Form';

import {
    updatePersons,
    submitPersonRequested
} from '../../actions/persons';

class Edit extends Component {

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
            <div>
                <h1> Edicion de Personas</h1>
                <br/>
                <InputText
                    key="name"
                    label="Nombre: "
                    value={name}
                    onChange={({target: {value}}) => this.handleChange({name: value})}
                />
                <br/>
                <InputText
                    key="surname"
                    label="Apellido: "
                    value={surname}
                    onChange={({target: {value}}) => this.handleChange({surname: value})}
                />
                <br/>
                <InputEmail
                    key="email"
                    label="Email: "
                    value={email}
                    onChange={({target: {value}}) => this.handleChange({email: value})}
                />
                <br/>
                <InputText
                    key="gender"
                    label="Genero: "
                    value={gender}
                    onChange={({target: {value}}) => this.handleChange({gender: value})}
                />
                <br/>
                <InputText
                    key="avatar"
                    label="Avatar: "
                    value={avatar}
                    onChange={({target: {value}}) => this.handleChange({avatar: value})}
                />
                <br/>
                <br/>
                <button
                    onClick={() => this.props.submit()}
                >
                    Salvar
                </button>
                <br/>
                <br/>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    person: state.persons.currentPersons
});

const mapDispatchToProps = dispatch => ({
    updatePerson: person => dispatch(updatePersons(person)),
    submit: () => dispatch(submitPersonRequested())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)
