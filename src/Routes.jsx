
import { Route, Routes} from 'react-router-dom';

import { ForgetPasswordContainer } from '@/components/organisms/Auth/ForgetPasswordContainer';
import { ResetPasswordContainer } from '@/components/organisms/Auth/ResetPasswordContainer';
import { SigninContainer } from '@/components/organisms/Auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { Auth } from '@/pages/Auth/Auth';
import { Home } from '@/pages/Home/Home';
import { NotFound } from '@/pages/NotFound/NotFound';

import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { WorkspaceLayout } from './pages/Workspace/Layout';

export const AppRoutes = () => {

    return (
        <Routes>
        <Route
          path="/auth/signup"
          element={
            <Auth>
              <SignupContainer />
            </Auth>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <Auth>
              <SigninContainer />
            </Auth>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
            <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <Auth>
              <ResetPasswordContainer />
            </Auth>
          }
        />
        <Route
          path="/auth/forget-password"
          element={
            <Auth>
              <ForgetPasswordContainer />
            </Auth>
          }
        />
        <Route
          path='/workspaces/:workspaceId'
          element={
            <ProtectedRoute>
              <WorkspaceLayout>
                Workspace
              </WorkspaceLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/workspaces/:workspaceId/channels/:channelId'
          element={
            <ProtectedRoute>
              Channel
            </ProtectedRoute>
          }
          />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
};