import { useForm, Form as ReactHookForm } from 'react-hook-form';

import { Button, Grid, Image, Message } from 'semantic-ui-react';
import logo from '/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

import { SERVER_URL } from '../env';
import { EMAIL_PATTERN } from '../utils/emailPattern';
import FormInput from '../components/FormInput';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginInfo } from '../contexts/LoginContext';

const schema = yup
    .object({
        email: yup.string().required().email(),
        password: yup.string().required(),
    })
    .required();

const LogIn = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: { email: '', password: '' },
        resolver: yupResolver(schema),
    });
    const { setUser } = useLoginInfo();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const onSubmit = (data, values) => {
        console.log({ data, values });
        // values.event.nativeEvent.target.action = `${SERVER_URL}/api/log-in`;
        // values.event.nativeEvent.preventDefault() = false;

        fetch(`${SERVER_URL}/api/log-in`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
            body: values.formData,
        })
            .then(res => res.json())
            .then(res => {
                setUser(res);
            })
            .then(() => {
                navigate(-1);
            })
            .catch(err => setError(err));
        // console.log({ data, values });
    };
    return (
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

                    <ReactHookForm
                        onSubmit={handleSubmit(onSubmit)}
                        // action={`${SERVER_URL}/api/sign-up`}
                        // method='post'
                        control={control}
                        // onSuccess={() => {
                        //     console.log('success');
                        // }}
                        // onError={() => {
                        //     console.log('error');
                        // }}
                        className='unset-position ui form'
                    >
                        <FormInput
                            name='email'
                            type='email'
                            label='Email'
                            register={register}
                            errors={errors}
                            registerOptions={{
                                required: true,
                                pattern: {
                                    value: EMAIL_PATTERN,
                                    message: "Email doesn't match pattern",
                                },
                            }}
                        />
                        <FormInput
                            name='password'
                            type='password'
                            label='Password'
                            register={register}
                            errors={errors}
                            registerOptions={{
                                required: true,
                                minLength: {
                                    value: 8,
                                    message:
                                        'Password must be at least 8 characters',
                                },
                            }}
                        />

                        <div className='h-16 w-full'></div>
                        <div className='flex items-center justify-between h-16 absolute bottom-0 right-0 w-full pb-4 pr-4'>
                            <NavLink
                                to='/sign-up'
                                className='text-sm text-blue-500 hover:text-blue-700'
                            >
                                Create a new account
                            </NavLink>
                            <Button type='submit' primary>
                                Submit
                            </Button>
                        </div>
                    </ReactHookForm>
                    {error && <Message negative size='tiny' content={error} />}
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LogIn;
