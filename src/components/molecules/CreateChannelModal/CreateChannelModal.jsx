import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const CreateChannelModal = () => {
    const { openCreateChannelModal, setOpenChannelModal } = useCreateChannelModal();

    const [channelName, setChannelName] = useState('');

    function handleClose() {
        setOpenChannelModal(false);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
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