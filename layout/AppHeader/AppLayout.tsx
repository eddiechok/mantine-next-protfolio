import { PropsWithChildren } from 'react';

import AppHeader from '@/layout/AppHeader/AppHeader';

const AppLayout = ({ children }: PropsWithChildren) => (
  <>
    <AppHeader />
    {children}
  </>
);

export default AppLayout;
