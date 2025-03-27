import { OuiBasicTable, OuiBasicTableProps } from '@opensearch-project/oui';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function Table(props: OuiBasicTableProps<any>) {
  return <OuiBasicTable {...props} className="dsBasicTable" />;
}
