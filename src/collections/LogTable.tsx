import { useEffect, useState } from 'react';
import {
  CriteriaWithPagination,
  Direction,
  OuiButton,
  OuiFlexGroup,
  OuiFlexItem,
  OuiHealth,
  OuiSpacer,
  OuiSuperSelect,
  OuiSuperSelectOption,
  OuiTableDataType,
  OuiTableSortingType,
  Pagination,
} from '@opensearch-project/oui';
// @ts-expect-error: lib doesn't provide types
import { formatDate } from '@opensearch-project/oui/lib/services/format';

import Log, { LogIp, LogLevel } from '../types/Log';
import {
  deleteLogs,
  filterLogsByLevel,
  findLogs,
  logs,
} from '../lib/data/logs';
import Table from '../components/Table';

function LogLevelCell({ level }: { level: LogLevel }) {
  let color;

  switch (level) {
    case 'DEBUG':
      color = 'subdued';
      break;
    case 'INFO':
      color = 'text';
      break;
    case 'NOTICE':
    case 'WARNING':
      color = 'warning';
      break;
    case 'ERROR':
    case 'CRITICAL':
      color = 'danger';
      break;
  }

  return (
    <OuiHealth color={color} style={{ lineHeight: 'inherit' }}>
      <pre>{level}</pre>
    </OuiHealth>
  );
}

function DeleteButton({
  selectedItems,
  onClickDelete,
}: {
  selectedItems: Log[];
  onClickDelete: () => void;
}) {
  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <OuiButton
      color="danger"
      fill={true}
      iconType="trash"
      onClick={onClickDelete}
    >
      Delete
    </OuiButton>
  );
}

const pageSizeOptions = [5, 10, 50, 100];

const columns = [
  {
    field: 'timestamp',
    name: 'Timestamp',
    dataType: 'date' as OuiTableDataType,
    sortable: true,
    render: (timestamp: Date) => formatDate(timestamp),
  },
  {
    field: 'level',
    name: 'Level',
    render: (level: LogLevel) => <LogLevelCell level={level} />,
  },
  {
    field: 'resource',
    name: 'Resource',
  },
  {
    field: 'ip',
    name: 'IP',
    render: (ip: LogIp) => (
      <OuiFlexGroup gutterSize="xs" alignItems="center" responsive={false}>
        <OuiFlexItem grow={false}>{ip.country.flag}</OuiFlexItem>
        <OuiFlexItem grow={false}>{ip.ipAddress}</OuiFlexItem>
      </OuiFlexGroup>
    ),
  },
];

export default function LogTable() {
  const [items, setItems] = useState<Log[]>(logs);
  const [sortField, setSortField] = useState<keyof Log>('timestamp');
  const [sortDirection, setSortDirection] = useState<Direction>('desc');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedItems, setSelectedItems] = useState<Log[]>([]);
  const [filterVal, setFilterVal] = useState<LogLevel | undefined>(undefined);
  const [filteredItems, setFilteredItems] = useState<Log[]>(items);

  const { pageOfItems, totalItemCount } = findLogs(
    filteredItems,
    sortField,
    sortDirection,
    pageIndex,
    pageSize
  );

  const [rows, setRows] = useState<Log[]>(pageOfItems);

  const [pagination, setPagination] = useState<Pagination>({
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions,
  });

  const [sorting, setSorting] = useState<OuiTableSortingType<Log>>({
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  });

  useEffect(() => {
    const { pageOfItems, totalItemCount } = findLogs(
      filteredItems,
      sortField,
      sortDirection,
      pageIndex,
      pageSize
    );

    setRows(pageOfItems);
    setPagination({ pageIndex, pageSize, totalItemCount, pageSizeOptions });
    setSorting({ sort: { field: sortField, direction: sortDirection } });
  }, [filteredItems, pageIndex, pageSize, sortDirection, sortField]);

  const onTableChange = ({ sort, page }: CriteriaWithPagination<Log>) => {
    if (sort) {
      const { field, direction } = sort;
      setSortField(field);
      setSortDirection(direction);
    }

    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };

  const onSelectionChange = (selectedItems: Log[]) => {
    setSelectedItems(selectedItems);
  };

  const onClickDelete = () => {
    const selectedIds = selectedItems.map((log) => log.id);
    const newItems = deleteLogs(items, selectedIds);
    const newFilteredItems = deleteLogs(filteredItems, selectedIds);
    setItems(newItems);
    setFilteredItems(newFilteredItems);
    setSelectedItems([]);
  };

  const onFilterChange = (value: LogLevel) => {
    setFilteredItems(filterLogsByLevel(items, value));
    setFilterVal(value);
  };

  const selection = {
    selectable: (log: Log) => log.level === 'DEBUG' || log.level === 'INFO',
    onSelectionChange: onSelectionChange,
  };

  const filterOptions: Array<OuiSuperSelectOption<LogLevel>> = [
    { value: 'DEBUG', inputDisplay: <LogLevelCell level="DEBUG" /> },
    { value: 'INFO', inputDisplay: <LogLevelCell level="INFO" /> },
    { value: 'NOTICE', inputDisplay: <LogLevelCell level="NOTICE" /> },
    { value: 'WARNING', inputDisplay: <LogLevelCell level="WARNING" /> },
    { value: 'ERROR', inputDisplay: <LogLevelCell level="ERROR" /> },
    { value: 'CRITICAL', inputDisplay: <LogLevelCell level="CRITICAL" /> },
  ];

  return (
    <>
      <OuiFlexGroup alignItems="center">
        <OuiFlexItem>
          <OuiSuperSelect
            prepend="Filter by level"
            options={filterOptions}
            valueOfSelected={filterVal}
            onChange={onFilterChange}
          />
        </OuiFlexItem>
        <OuiFlexItem grow={false}>
          <DeleteButton
            selectedItems={selectedItems}
            onClickDelete={onClickDelete}
          />
        </OuiFlexItem>
      </OuiFlexGroup>

      <OuiSpacer size="l" />

      <Table
        items={rows}
        itemId="id"
        columns={columns}
        rowHeader="timestamp"
        pagination={pagination}
        sorting={sorting}
        isSelectable={true}
        selection={selection}
        onChange={onTableChange}
      />
    </>
  );
}
