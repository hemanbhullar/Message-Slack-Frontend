import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from '@/components/ui/resizable';

import { WorkspacePanel } from '../Workspace/WorkspacePanel';
  
  export function SidePanel({children}) {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        autoSaveId={'workspace-resize'}
      >
        <ResizablePanel defaultSize={20} minSize={11} className='bg-slack-medium'>
          <WorkspacePanel />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  