import { OuiPanel } from '@opensearch-project/oui';

import PageBody from '../components/PageBody';
import LogTable from '../collections/LogTable';

export default function LogIndexPage() {
  return (
    <PageBody title="Logs">
      <OuiPanel paddingSize="s">
        <LogTable />
      </OuiPanel>
    </PageBody>
  );
}
