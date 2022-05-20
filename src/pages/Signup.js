import { Formik } from "formik";
import React from "react";
import { Button, Container, FormGroup } from "reactstrap";
import InputField from "../components/InputField";
import Yup from '../components/Yup';
import FForm from '../components/Form';
import logo from '../logo.svg';

class Signup extends React.Component {

    initialValues = {
        firstName: '',
        lastName: ''
    };

    validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Campo Requerido')
            .min(3, 'Logintud mímina requerida'),
        lastName: Yup.string()
            .required('Campo Requerido')
            .min(3, 'Logintud mímina requerida')
    });

    _handleSubmit = async (values) => {
        console.log('Values From handle Submit: ', values);
    }

    render() {
        return (
            <div className="App-header">
                <h1>Component Signup</h1>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <br/>
                <br/>
                <br/>
                <header>
                    <Container>
                        <Formik
                            initialValues={this.initialValues}
                            validationSchema={this.validationSchema}
                            onSubmit={this._handleSubmit}
                        >
                            <FForm>
                                <fieldset>
                                    <FormGroup>
                                        <InputField
                                            placeholder="First Name"
                                            type="text"
                                            name="firstName"
                                        />
                                        <InputField
                                            placeholder="Last Name"
                                            type="text"
                                            name="lastName"
                                        />
                                    </FormGroup>
                                    <Button>
                                        Entrar
                                    </Button>
                                </fieldset>
                            </FForm>
                        </Formik>
                    </Container>

                </header>
            </div>
        )
    }
}

export default Signup;