import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAddChannelToWorkspace } from '@/hooks/apis/workspaces/useAddChannnelToWorkspace';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useToast } from '@/hooks/use-toast';

export const CreateChannelModal = () => {

    const { toast } = useToast();

    const queryClient = useQueryClient();
    
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [channelName, setChannelName] = useState('');

    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace();

    const {currentWorkspace} = useCurrentWorkspace();

    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId: currentWorkspace?._id,
            channelName: channelName,
        });

        toast({
            title: 'Channel created',
            description: `Channel ${channelName} created successfully`,
            variant: 'default',
        });

        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`);
        handleClose();
        setChannelName('');
    }

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a channel</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        placeholder="Channel name e.g. #general"
                        minLength={3}
                        required
                    />
                    <div className="flex justify-end mt-4">
                        <Button>
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    );

};