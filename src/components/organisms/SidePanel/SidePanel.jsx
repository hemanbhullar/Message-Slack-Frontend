import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from '@/components/ui/resizable';
  
  export function SidePanel({children}) {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        autoSaveId={'workspace-resize'}
      >
        <ResizablePanel defaultSize={20} minSize={11} className='bg-slack-medium'>
          <div>
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  