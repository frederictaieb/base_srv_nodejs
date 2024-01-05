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
      <h1>Create a Candidate</h1>
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

                <label>Email:</label>
                <ErrorMessage name="email" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="email"
                    placeholder=""
                />

<               label>Phone:</label>
                <ErrorMessage name="phone" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="phone"
                    placeholder=""
                />
                
                <label>Nationality</label>
                <ErrorMessage name="nationality" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="nationality"
                    placeholder=""
                />

                <label>Languages</label>
                <ErrorMessage name="linkedin" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="languages"
                    placeholder=""
                />

                <label>Academics</label>
                <ErrorMessage name="academics" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="academics"
                    placeholder=""
                />


                <label>LinkedIn Profile</label>
                <ErrorMessage name="linkedin" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="linkedin"
                    placeholder=""
                />

                <label>Career</label>
                <ErrorMessage name="career" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="career"
                    placeholder=""
                />

                <label>Day By Day</label>
                <ErrorMessage name="daybyday" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="daybyday"
                    placeholder=""
                />

                <label>Strategy</label>
                <ErrorMessage name="strat" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="strat"
                    placeholder=""
                />

<               label>Assets</label>
                <ErrorMessage name="stratAssets" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="stratAssets"
                    placeholder=""
                />

                <label>Region</label>
                <ErrorMessage name="stratRegion" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="stratRegion"
                    placeholder=""
                />

                <label>Frequency</label>
                <ErrorMessage name="stratFreq" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="stratFreq"
                    placeholder=""
                />

                <label>Skills</label>
                <ErrorMessage name="skills" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="skills"
                    placeholder=""
                />

                <label>Needs</label>
                <ErrorMessage name="needs" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="needs"
                    name="stratFreq"
                    placeholder=""
                />

                <label>Target</label>
                <ErrorMessage name="target" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="target"
                    placeholder=""
                />

                <label>Base</label>
                <ErrorMessage name="compBase" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="compBase"
                    placeholder=""
                />

                <label>Bonus</label>
                <ErrorMessage name="compBonus" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="compBonus"
                    placeholder=""
                />

                <label>Deffered</label>
                <ErrorMessage name="compDeffered" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="compDeffered"
                    placeholder=""
                />

                <label>Expectations</label>
                <ErrorMessage name="compExpectations" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="compExpectations"
                    placeholder=""
                />

                <label>Non Compete Period</label>
                <ErrorMessage name="ncperiod" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="ncperiod"
                    placeholder=""
                />

                <label>Relocation</label>
                <ErrorMessage name="relocation" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="relocation"
                    placeholder=""
                />

                <label>Other</label>
                <ErrorMessage name="other" component="span"></ErrorMessage>
                <Field 
                    autocomplete="off"
                    id="inputCreateCandidate"
                    name="other"
                    placeholder=""
                />
             <button type="submit">Save</button>
            </Form>

        </Formik>
    </div>
  )
}

export default CreateCandidate
