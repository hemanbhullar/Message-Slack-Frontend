import axios from '@/config/axiosConfig';
import { toast } from '@/hooks/use-toast';

export const signUpRequest = async ({ email, password, username }) => {
    try {
        const response = await axios.post('/users/signup', {
            email,
            password,
            username
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const signInRequest = async ({ email, password }) => {
    try {
        const response = await axios.post('/users/signin', {
            email,
            password
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const forgotPasswordRequest = async ({ email }) => {
    try {
        const response = await axios.post('/users/forgot-password', {
            email
        }).then(() => {
            toast.success('Email sent successfully');
        }).catch((error) => {
            if(error.response.status === 404) {
                toast.error('Email not found');
            } else{
                toast.error('Something went wrong');
            }
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const resetPasswordRequest = async ({ password, token }) => {
    try {
        const response = await axios.post(`/users/reset-password/${token}`, {
            password
        }).then((response) => {
            toast.success(response.data.message);
            setTimeout(() => {
                window.location.href = '/users/signin';
            }, 3000);
        })
        .catch(()  => {
            toast.error('Your link has expired. Please try again.');
        }
        );

        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};