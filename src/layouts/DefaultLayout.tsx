import { OuiPage } from '@opensearch-project/oui';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <OuiPage paddingSize="l">
        <Outlet />
      </OuiPage>
    </>
  );
}
