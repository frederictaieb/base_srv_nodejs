import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Button} from 'flowbite-react';

const CreateCandidate = ({styles})=> {

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
    <div>
      <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Candidate</h2>
      <Formik 
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        validationSchema={validationSchema}
        >
            <Form>
                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">

                    <div class="w-full">
                    <label for="lastname" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="lastname"
                        placeholder="Required"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="lastname" component="span"></ErrorMessage>
                    </div>

                    <div class="w-full">
                    <label for="firstname" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="firstname"
                        placeholder="Required"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="firstname" component="span"></ErrorMessage>
                    </div>

                    <div class="sm:col-span-2">
                    <label for="email" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="email" component="span"></ErrorMessage>
                    </div>

                    <div class="w-full">
                    <label for="phone" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="phone" component="span"></ErrorMessage>
                    </div>

                    <div class="sm:col-span-3">
                    <label for="linkedin" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Linkedin</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="linkedin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="linkedin" component="span"></ErrorMessage>
                    </div>

                    <div class="w-full">
                    <label for="nationality" className="mt-1 block text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
                    <Field 
                        autocomplete="off"
                        id="inputCreateCandidate"
                        name="nationality"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <ErrorMessage name="phone" component="span"></ErrorMessage>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div class="sm:col-span-3">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Languages</label>
                        <ErrorMessage name="linkedin" component="span"></ErrorMessage>
                        <Field as = "textArea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="languages"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div class="sm:col-span-3">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Academics</label>
                        <ErrorMessage name="academics" component="span"></ErrorMessage>
                        <Field as = "textArea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="academics"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div class="sm:col-span-3">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Career</label>
                        <ErrorMessage name="career" component="span"></ErrorMessage>
                        <Field as = "textArea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="career"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div class="sm:col-span-9">  
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"> Day By Day</label>
                        <ErrorMessage name="daybyday" component="span"></ErrorMessage>
                        <Field as = "textArea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="daybyday"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div class="sm:col-span-3">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Strategy</label>
                        <ErrorMessage name="strat" component="span"></ErrorMessage>
                        <Field as ="textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="strat"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Assets</label>
                        <ErrorMessage name="stratAssets" component="span"></ErrorMessage>
                        <Field as ="textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="stratAssets"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                        <ErrorMessage name="stratRegion" component="span"></ErrorMessage>
                        <Field as ="textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="stratRegion"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Frequency</label>
                        <ErrorMessage name="stratFreq" component="span"></ErrorMessage>
                        <Field as ="textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="stratFreq"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div className="sm:col-span-9">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                        <ErrorMessage name="skills" component="span"></ErrorMessage>
                        <Field as = "textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="skills"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div className="sm:col-span-5">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Needs</label>
                        <ErrorMessage name="needs" component="span"></ErrorMessage>
                        <Field as ="textarea"
                            autocomplete="off"
                            id="needs"
                            name="stratFreq"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    
                    <div className="sm:col-span-4">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Target</label>
                        <ErrorMessage name="target" component="span"></ErrorMessage>
                        <Field as = "textarea"
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="target"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-9 sm:gap-6">
                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Base</label>
                        <ErrorMessage name="compBase" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="compBase"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Bonus</label>
                        <ErrorMessage name="compBonus" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="compBonus"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Deffered</label>
                        <ErrorMessage name="compDeffered" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="compDeffered"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Expectations</label>
                        <ErrorMessage name="compExpectations" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="compExpectations"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">NC Period</label>
                        <ErrorMessage name="ncperiod" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="ncperiod"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Relocation</label>
                        <ErrorMessage name="relocation" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="relocation"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Other</label>
                        <ErrorMessage name="other" component="span"></ErrorMessage>
                        <Field 
                            autocomplete="off"
                            id="inputCreateCandidate"
                            name="other"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                </div>
             <Button className="mt-5" type="submit">Save</Button>
            </Form>

        </Formik>
        </div>
        </section>
    </div>
  )
}

export default CreateCandidate
