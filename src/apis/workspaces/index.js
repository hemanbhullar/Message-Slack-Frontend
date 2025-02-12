import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, description, token }) => {
    try {
        const response = await axios.post('/workspaces', {
            name, 
            description
        }, {
            headers: {
                'x-access-token': token
            }
        });

        console.log('Response in create workspace request', response);

        return response?.data?.data;
    } catch (error) {
        console.log('Error in create workspace request');
        throw error.response.data;
    }
};

export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axios.get('/workspaces/userworkspaces', {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in fetching workspace request');
        throw error.response.data;
    }
};

export const fetchWorkspacesDetailsRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.get(`/workspaces/${workspaceId}}`, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in fetching workspace request');
        throw error.response.data;
    }
};