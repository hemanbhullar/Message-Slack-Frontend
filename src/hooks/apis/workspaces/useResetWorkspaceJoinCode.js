import { useMutation, useQueryClient } from '@tanstack/react-query';

import { resetWorkspaceJoinCodeRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useResetWorkspaceJoinCode = (workspaceId) => {
    const { auth } = useAuth();

    const queryClient = useQueryClient();

    const { mutateAsync: resetWorkspaceJoinCodeMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: () => resetWorkspaceJoinCodeRequest({ workspaceId, token: auth?.token }),
        onSuccess: (data) => {
            console.log('Successfully reset workspace join code', data);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
        },
        onError: (error) => {
            console.error('Failed to reset workspace join code', error);
        }
    });

    return {
        resetWorkspaceJoinCodeMutation,
        isPending,
        isSuccess,
        error
    };
};