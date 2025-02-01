import axios from '@/config/axiosConfig';

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
        const response = await axios.post('/users/forgetPassword', {
            email
        });

        console.log(response.data);

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
            console.log(response.data.message);
            setTimeout(() => {
                window.location.href = '/auth/signin';
            }, 3000);
        })
        .catch((error)  => {
             return error;
        }
        );

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};