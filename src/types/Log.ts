export default interface Log {
  id: number;
  timestamp: Date | string;
  level: LogLevel;
  processId: number;
  sessionId: string;
  ip: LogIp;
  eventType: string;
  resource: string;
}

export type LogLevel =
  | 'DEBUG'
  | 'INFO'
  | 'NOTICE'
  | 'WARNING'
  | 'ERROR'
  | 'CRITICAL';

export type LogIp = {
  ipAddress: string;
  country: LogIpCountry;
};

export type LogIpCountry = {
  name: string;
  flag: string;
};
