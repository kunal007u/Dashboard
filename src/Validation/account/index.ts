import * as Yup from 'yup';

export const LoginValidationSchema = () => {
    return Yup.object().shape({
        Email: Yup.string().required('Email is required!'),
        Password: Yup.string().min(6, 'Password must be 6 character length!').required('Password is required!'),
    });
};

