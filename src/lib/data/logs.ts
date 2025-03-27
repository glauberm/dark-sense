import { Direction } from '@opensearch-project/oui';
// @ts-expect-error: lib doesn't provide types
import { Comparators } from '@opensearch-project/oui/lib/services/sort';

import Log, { LogLevel } from '../../types/Log';
import logsJson from '../../data/logs.json';

export const logs = logsJson as Log[];

function sort(items: Log[], sortField: string, sortDirection: 'asc' | 'desc') {
  if (sortField) {
    return items
      .slice(0)
      .sort(
        Comparators.property(sortField, Comparators.default(sortDirection))
      );
  }

  return items;
}

function paginate(items: Log[], pageIndex: number, pageSize: number) {
  if (pageIndex || pageSize) {
    const startIndex = pageIndex * pageSize;

    return items.slice(
      startIndex,
      Math.min(startIndex + pageSize, items.length)
    );
  }

  return items;
}

export function findLogs(
  logs: Log[],
  sortField: string,
  sortDirection: Direction,
  pageIndex: number,
  pageSize: number
) {
  const items = sort(logs, sortField, sortDirection);
  const pageOfItems = paginate(items, pageIndex, pageSize);

  return {
    pageOfItems,
    totalItemCount: items.length,
  };
}

export function deleteLogs(logs: Log[], ids: number[]) {
  return logs.filter((log) => !ids.includes(log.id));
}

export function filterLogsByLevel(logs: Log[], level: LogLevel) {
  return logs.filter((log) => log.level === level);
}
