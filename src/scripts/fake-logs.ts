import { writeFile } from 'fs';
import { resolve, join } from 'path';
import { faker } from '@faker-js/faker';

import Log from '../types/Log';

const logs: Log[] = [];

for (let i = 1; i <= 500; i++) {
  logs.push({
    id: i,

    timestamp: faker.date.between({
      from: '2024-03-20T00:00:00.000Z',
      to: '2025-03-20T00:00:00.000Z',
    }),

    level: faker.helpers.arrayElement([
      'DEBUG',
      'INFO',
      'NOTICE',
      'WARNING',
      'ERROR',
      'CRITICAL',
    ]),

    processId: faker.number.int({ max: 1449616 }),

    sessionId: faker.string.alphanumeric(64),

    ip: {
      ipAddress: faker.internet.ipv4(),
      country: faker.helpers.arrayElement([
        { name: 'Argentina', flag: '🇦🇷' },
        { name: 'Australia', flag: '🇦🇺' },
        { name: 'Brazil', flag: '🇧🇷' },
        { name: 'Canada', flag: '🇨🇦' },
        { name: 'Chile', flag: '🇨🇱' },
        { name: 'Congo', flag: '🇨🇬' },
        { name: 'Czech Republic', flag: '🇨🇿' },
        { name: 'Fiji', flag: '🇫🇯' },
        { name: 'Greece', flag: '🇬🇷' },
        { name: 'Haiti', flag: '🇭🇹' },
        { name: 'Italy', flag: '🇮🇹' },
        { name: 'Lebanon', flag: '🇱🇧' },
        { name: 'Mexico', flag: '🇲🇽' },
        { name: 'Myanmar', flag: '🇲🇲' },
        { name: 'Netherlands', flag: '🇳🇱' },
        { name: 'Nigeria', flag: '🇳🇬' },
        { name: 'Norway', flag: '🇳🇴' },
        { name: 'Singapore', flag: '🇸🇬' },
        { name: 'Somalia', flag: '🇸🇴' },
        { name: 'South Africa', flag: '🇿🇦' },
        { name: 'Tunisia', flag: '🇹🇳' },
        { name: 'United Kingdom', flag: '🇬🇧' },
        { name: 'United States', flag: '🇺🇲' },
        { name: 'Venezuela', flag: '🇻🇪' },
        { name: 'Zambia', flag: '🇿🇲' },
      ]),
    },

    eventType: faker.helpers.arrayElement([
      'LOGIN',
      'LOGOUT',
      'FILE_ACCESS',
      'API_CALL',
      'DATABASE_QUERY',
      'CONFIG_CHANGE',
      'SECURITY_ALERT',
      'SYSTEM_STARTUP',
      'SYSTEM_SHUTDOWN',
      'ERROR',
      'PERMISSION_CHANGE',
      'RESOURCE_ALLOCATION',
    ]),

    resource: faker.helpers.arrayElement([
      '/',
      '/login',
      '/api/data',
      '/status',
      '/dashboard',
      '/uploads/report.pdf',
      '/settings',
      '/profile',
      '/logout',
      '/admin',
      '/api/user/info',
      '/search?q=test',
      '/register',
      '/reset-password',
      '/help',
      '/docs/api',
      '/metrics',
      '/download/file.zip',
      '/reports/monthly',
      '/billing',
      '/api/v2/orders',
      '/webhook/payment',
      '/image.png',
      '/js/script.js',
      '/css/styles.css',
      '/fonts/Roboto.ttf',
      '/videos/intro.mp4',
      '/sitemap.xml',
      '/robots.txt',
      '/contact',
      '/support/tickets',
      '/forum/thread/123',
      '/news/article/456',
      '/blog/post/789',
      '/checkout',
      '/cart',
      '/wishlist',
      '/notifications',
      '/privacy-policy',
      '/terms-of-service',
      '/server-status',
      '/api/errors',
      '/oauth/token',
      '/signup',
      '/data/export.csv',
      '/api/websocket',
      '/user/settings',
      '/feedback',
      '/newsletter',
      '/ads/banner.jpg',
      '/partners',
      '/downloads/manual.pdf',
      '/changelog',
      '/event/live-stream',
      '/test-page',
      '/security',
      '/backup',
      '/admin/logs',
      '/dev-tools',
      '/beta',
      '/archive',
      '/deprecated-endpoint',
    ]),
  });
}

writeFile(
  join(resolve(), 'src', 'data', 'logs.json'),
  JSON.stringify(logs),
  { flag: 'w+' },
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Logs fake data created successfully.');
    }
  }
);
