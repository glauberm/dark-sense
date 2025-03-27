import { OuiEmptyPrompt, OuiPanel } from '@opensearch-project/oui';

import Link from '../components/Link';
import PageBody from '../components/PageBody';

export default function NotImplementedPage() {
  return (
    <PageBody>
      <div className="dsNotImplementedPage">
        <OuiPanel>
          <OuiEmptyPrompt
            title={<h1>Not implemented</h1>}
            body={
              <p>
                This is an open-source{' '}
                <a href="https://oui.opensearch.org/" target="_blank">
                  OpenSearch UI
                </a>{' '}
                dashboard template for demonstration purposes only. The{' '}
                <Link to="/">log index</Link> is the only page implemented. For
                more information, check out the{' '}
                <a
                  href="https://github.com/glauberm/dark-sense"
                  target="_blank"
                >
                  source code
                </a>
                .
              </p>
            }
            actions={<Link to="/">Go to log index page</Link>}
          />
        </OuiPanel>
      </div>
    </PageBody>
  );
}
