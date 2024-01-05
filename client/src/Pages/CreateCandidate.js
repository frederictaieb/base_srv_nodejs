import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const CreateCandidate = () => {

    const initialValues={
        lastname:"",
        firstname:""
    };

    let navigate =useNavigate();

    const onSubmit =(data) => {
        axios.post("http://localhost:3001/candidates", data).then((response) => {
            navigate('/');
        });
    }

    const validationSchema = Yup.object().shape({
        lastname:Yup.string().required("lastname missing"),
        firstname:Yup.string().required("firstname missing")
    })

  return (
    <div className='createCandidate'>
      
      <Formik 
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        validationSchema={validationSchema}
        >
            <Form className="formContainer">

                <label>Lastname:</label>
                <ErrorMessage name="lastname" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="lastname"
                    placeholder="Required"
                />

                <label>Firstname:</label>
                <ErrorMessage name="firstname" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="firstname"
                    placeholder="Required"
                />
                <button type="submit">Save</button>
            </Form>

        </Formik>
    </div>
  )
}

export default CreateCandidate
