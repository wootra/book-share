// Render Prop
import { Formik } from 'formik';
import { Button, Form, Grid, Image, Message } from 'semantic-ui-react';
import logo from '/logo.png';
import { NavLink } from 'react-router-dom';

const LogIn = () => (
    <div className='full-size dimmed-background place-center'>
        <Grid className='center-modal bg-white rounded-lg'>
            <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}
                verticalAlign='middle'
                textAlign='center'
            >
                <Image src={logo} size='medium' className='mx-auto' />
            </Grid.Column>
            <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}
                className='relative'
            >
                <h1 className='mb-4 text-right uppercase text-sm font-extrabold text-slate-400'>
                    Log In
                </h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form
                            onSubmit={handleSubmit}
                            className='unset-position'
                        >
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder={errors.email}
                                />
                                {errors.email && touched.email && (
                                    <Message
                                        negative
                                        size='tiny'
                                        content={errors.email}
                                    />
                                )}
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && (
                                    <Message
                                        negative
                                        size='tiny'
                                        content={errors.password}
                                    />
                                )}
                            </Form.Field>
                            <div className='h-16 w-full'></div>
                            <div className='flex items-center justify-between h-16 absolute bottom-0 right-0 w-full pb-4 pr-4'>
                                <NavLink
                                    to='/sign-up'
                                    className='text-sm text-blue-500 hover:text-blue-700'
                                >
                                    Create a new account
                                </NavLink>
                                <Button
                                    type='submit'
                                    primary
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Grid.Column>
        </Grid>
    </div>
);

export default LogIn;
