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
        const response = await axios.get(`/workspaces/${workspaceId}`, {
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

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.delete(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in deleting workspace request', error);
        throw error.response.data;
    }
}; 


export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}`, {
            name
        }, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in updating workspace request', error);
        throw error.response.data;
    }
};

export const addChannelToWorkspaceRequest = async ({  workspaceId, channelName, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/channels`, {
            channelName
        }, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in adding channel to workspace request', error);
        throw error.response.data;
    }
};

export const resetWorkspaceJoinCodeRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/joinCode/reset`, {}, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in resetting workspace join code request', error);
        throw error.response.data;
    }
};

