import React, { useState, useEffect, useMemo, useCallback } from 'react';

// ============================================================================
// SELF-CONTAINED SVG ICONS (React 18 Compatible)
// ============================================================================
const createSvgIcon = (paths) => ({ className = 'w-4 h-4', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {paths}
  </svg>
);

const Server = createSvgIcon(<><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></>);
const Camera = createSvgIcon(<><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>);
const PlusCircle = createSvgIcon(<><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></>);
const Trash2 = createSvgIcon(<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>);
const RefreshCw = createSvgIcon(<><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></>);
const Key = createSvgIcon(<><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></>);
const ShieldCheck = createSvgIcon(<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></>);
const AlertTriangle = createSvgIcon(<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>);
const Copy = createSvgIcon(<><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></>);
const Check = createSvgIcon(<><path d="M20 6 9 17l-5-5"/></>);
const Terminal = createSvgIcon(<><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></>);
const Cpu = createSvgIcon(<><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></>);
const HardDrive = createSvgIcon(<><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></>);
const Globe = createSvgIcon(<><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></>);
const Play = createSvgIcon(<><polygon points="6 3 20 12 6 21 6 3"/></>);
const Power = createSvgIcon(<><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></>);
const Sparkles = createSvgIcon(<><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></>);
const X = createSvgIcon(<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>);
const ChevronUp = createSvgIcon(<><path d="m18 15-6-6-6 6"/></>);
const ChevronDown = createSvgIcon(<><path d="m6 9 6 6 6-6"/></>);
const Info = createSvgIcon(<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>);
const Layers = createSvgIcon(<><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>);
const SlidersHorizontal = createSvgIcon(<><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></>);
const Lock = createSvgIcon(<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>);
const CheckCircle2 = createSvgIcon(<><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>);
const XCircle = createSvgIcon(<><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></>);
const Loader2 = createSvgIcon(<><path d="M21 12a9 9 0 1 1-6.219-8.56"/></>);
const Wifi = createSvgIcon(<><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></>);
const Star = createSvgIcon(<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>);
const Shield = createSvgIcon(<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></>);
const Network = createSvgIcon(<><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></>);
const FileCode2 = createSvgIcon(<><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m5 12-3 3 3 3"/><path d="m9 18 3-3-3-3"/></>);
const Tag = createSvgIcon(<><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></>);
const TrendingUp = createSvgIcon(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>);
const FolderKanban = createSvgIcon(<><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></>);
const Eye = createSvgIcon(<><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>);
const EyeOff = createSvgIcon(<><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></>);
const Search = createSvgIcon(<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>);

// ============================================================================
// MOCK DATA FOR INTERACTIVE DEMO MODE
// ============================================================================
const MOCK_PROJECTS = [
  {
    id: 'prj-90412',
    name: 'Production Core EU',
    description: 'Primary production web cluster & PostgreSQL database',
    token: 'demo-token-prod',
    status: 'active',
    serversCount: 3,
    monthlyEstimate: '23.08',
    mtdUsage: '11.42',
  },
  {
    id: 'prj-90488',
    name: 'Staging & QA Environment',
    description: 'Automated CI/CD preview runners & integration tests',
    token: 'demo-token-staging',
    status: 'active',
    serversCount: 2,
    monthlyEstimate: '8.14',
    mtdUsage: '4.05',
  },
  {
    id: 'prj-90519',
    name: 'AI & Media Workers',
    description: 'Batch processing & ARM64 container nodes',
    token: 'demo-token-workers',
    status: 'active',
    serversCount: 1,
    monthlyEstimate: '6.49',
    mtdUsage: '3.21',
  },
];

const MOCK_LOCATIONS = [
  { id: 1, name: 'fsn1', description: 'Falkenstein DC Park 1', country: 'DE', city: 'Falkenstein', network_zone: 'eu-central' },
  { id: 2, name: 'nbg1', description: 'Nuremberg DC Park 1', country: 'DE', city: 'Nuremberg', network_zone: 'eu-central' },
  { id: 3, name: 'hel1', description: 'Helsinki DC Park 1', country: 'FI', city: 'Helsinki', network_zone: 'eu-central' },
  { id: 4, name: 'ash', description: 'Ashburn, VA', country: 'US', city: 'Ashburn', network_zone: 'us-east' },
  { id: 5, name: 'hil', description: 'Hillsboro, OR', country: 'US', city: 'Hillsboro', network_zone: 'us-west' },
  { id: 6, name: 'sin', description: 'Singapore', country: 'SG', city: 'Singapore', network_zone: 'ap-southeast' },
];

const buildPrices = (euHourly, euMonthly, usHourly, usMonthly, sgHourly, sgMonthly) => [
  { location: 'fsn1', price_hourly: { net: euHourly, gross: (parseFloat(euHourly) * 1.19).toFixed(4) }, price_monthly: { net: euMonthly, gross: (parseFloat(euMonthly) * 1.19).toFixed(2) }, included_traffic: 21990232555520 },
  { location: 'nbg1', price_hourly: { net: euHourly, gross: (parseFloat(euHourly) * 1.19).toFixed(4) }, price_monthly: { net: euMonthly, gross: (parseFloat(euMonthly) * 1.19).toFixed(2) }, included_traffic: 21990232555520 },
  { location: 'hel1', price_hourly: { net: euHourly, gross: (parseFloat(euHourly) * 1.19).toFixed(4) }, price_monthly: { net: euMonthly, gross: (parseFloat(euMonthly) * 1.19).toFixed(2) }, included_traffic: 21990232555520 },
  { location: 'ash', price_hourly: { net: usHourly, gross: usHourly }, price_monthly: { net: usMonthly, gross: usMonthly }, included_traffic: 1099511627776 },
  { location: 'hil', price_hourly: { net: usHourly, gross: usHourly }, price_monthly: { net: usMonthly, gross: usMonthly }, included_traffic: 1099511627776 },
  { location: 'sin', price_hourly: { net: sgHourly, gross: sgHourly }, price_monthly: { net: sgMonthly, gross: sgMonthly }, included_traffic: 1099511627776 },
];

const MOCK_SERVER_TYPES = [
  {
    id: 101,
    name: 'cx22',
    description: 'CX22 (Shared vCPU Intel/AMD)',
    cores: 2,
    memory: 4,
    disk: 40,
    architecture: 'x86',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0060', '3.79', '0.0070', '4.49', '0.0085', '5.39'),
  },
  {
    id: 102,
    name: 'cx32',
    description: 'CX32 (Shared vCPU Intel/AMD)',
    cores: 4,
    memory: 8,
    disk: 80,
    architecture: 'x86',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0110', '6.80', '0.0130', '7.99', '0.0155', '9.49'),
  },
  {
    id: 103,
    name: 'cx42',
    description: 'CX42 (Shared vCPU Intel/AMD)',
    cores: 8,
    memory: 16,
    disk: 160,
    architecture: 'x86',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0260', '16.40', '0.0300', '18.90', '0.0360', '22.40'),
  },
  {
    id: 104,
    name: 'cpx11',
    description: 'CPX11 (Regular Performance AMD)',
    cores: 2,
    memory: 2,
    disk: 40,
    architecture: 'x86',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0070', '4.35', '0.0070', '4.35', '0.0085', '5.29'),
  },
  {
    id: 105,
    name: 'cpx21',
    description: 'CPX21 (Regular Performance AMD)',
    cores: 3,
    memory: 4,
    disk: 80,
    architecture: 'x86',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0120', '7.55', '0.0120', '7.55', '0.0145', '9.10'),
  },
  {
    id: 106,
    name: 'cax11',
    description: 'CAX11 (Ampere® Altra® ARM64)',
    cores: 2,
    memory: 4,
    disk: 40,
    architecture: 'arm',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0060', '3.79', '0.0068', '4.29', '0.0080', '4.99'),
  },
  {
    id: 107,
    name: 'cax21',
    description: 'CAX21 (Ampere® Altra® ARM64)',
    cores: 4,
    memory: 8,
    disk: 80,
    architecture: 'arm',
    cpu_type: 'shared',
    deprecated: false,
    prices: buildPrices('0.0105', '6.49', '0.0120', '7.49', '0.0140', '8.79'),
  },
  {
    id: 108,
    name: 'ccx13',
    description: 'CCX13 (Dedicated vCPU AMD EPYC)',
    cores: 2,
    memory: 8,
    disk: 80,
    architecture: 'x86',
    cpu_type: 'dedicated',
    deprecated: false,
    prices: buildPrices('0.0200', '12.49', '0.0230', '14.49', '0.0270', '16.99'),
  },
];

const INITIAL_MOCK_SERVERS = [
  {
    id: 48291041,
    name: 'prod-web-eu-01',
    status: 'running',
    created: '2026-08-14T09:22:11+00:00',
    public_net: {
      ipv4: { ip: '116.203.142.88' },
      ipv6: { ip: '2a01:4f8:c012:8a12::/64' },
    },
    server_type: MOCK_SERVER_TYPES[1], // cx32
    datacenter: {
      name: 'fsn1-dc14',
      location: MOCK_LOCATIONS[0],
    },
    image: {
      id: 161547269,
      name: 'ubuntu-24.04',
      description: 'Ubuntu 24.04 LTS',
      os_flavor: 'ubuntu',
    },
    labels: { env: 'production', tier: 'frontend' },
  },
  {
    id: 48291992,
    name: 'db-postgres-primary',
    status: 'running',
    created: '2026-07-02T14:05:39+00:00',
    public_net: {
      ipv4: { ip: '95.216.211.14' },
      ipv6: { ip: '2a01:4f9:c010:3341::/64' },
    },
    server_type: MOCK_SERVER_TYPES[7], // ccx13
    datacenter: {
      name: 'hel1-dc2',
      location: MOCK_LOCATIONS[2],
    },
    image: {
      id: 161547270,
      name: 'debian-12',
      description: 'Debian 12 Bookworm',
      os_flavor: 'debian',
    },
    labels: { env: 'production', role: 'database' },
  },
  {
    id: 48305110,
    name: 'arm-worker-node-01',
    status: 'off',
    created: '2026-10-19T18:44:02+00:00',
    public_net: {
      ipv4: { ip: '49.13.78.204' },
      ipv6: { ip: '2a01:4f8:1c1b:9901::/64' },
    },
    server_type: MOCK_SERVER_TYPES[5], // cax11
    datacenter: {
      name: 'nbg1-dc3',
      location: MOCK_LOCATIONS[1],
    },
    image: {
      id: 161547269,
      name: 'ubuntu-24.04',
      description: 'Ubuntu 24.04 LTS',
      os_flavor: 'ubuntu',
    },
    labels: { env: 'staging', arch: 'arm64' },
  },
];

const INITIAL_MOCK_SNAPSHOTS = [
  {
    id: 19940281,
    type: 'snapshot',
    status: 'available',
    name: null,
    description: 'prod-web-golden-image-v2.4',
    image_size: 14.82,
    disk_size: 40,
    created: '2026-11-10T03:15:00+00:00',
    os_flavor: 'ubuntu',
    os_version: '24.04',
    architecture: 'x86',
    bound_to: null,
    labels: { release: 'v2.4', hardened: 'true' },
  },
  {
    id: 19958104,
    type: 'snapshot',
    status: 'available',
    name: null,
    description: 'postgres-16-configured-base',
    image_size: 28.45,
    disk_size: 80,
    created: '2026-11-12T22:10:45+00:00',
    os_flavor: 'debian',
    os_version: '12',
    architecture: 'x86',
    bound_to: null,
    labels: { db: 'pg16' },
  },
  {
    id: 19961209,
    type: 'snapshot',
    status: 'available',
    name: null,
    description: 'arm64-docker-swarm-node',
    image_size: 9.15,
    disk_size: 40,
    created: '2026-11-14T11:30:18+00:00',
    os_flavor: 'ubuntu',
    os_version: '24.04',
    architecture: 'arm',
    bound_to: null,
    labels: { arch: 'arm64' },
  },
];

const MOCK_SSH_KEYS = [
  { id: 9012, name: 'macbook-pro-ed25519', fingerprint: 'b7:4c:91:2a:88:10:ef:43:90:12:aa:56:78:90:bc:de' },
  { id: 9015, name: 'deploy-ci-runner', fingerprint: '41:88:09:ff:12:34:56:78:9a:bc:de:f0:11:22:33:44' },
];

const MOCK_FIREWALLS = [
  { id: 7101, name: 'prod-web-fw', rules: [{ direction: 'in', protocol: 'tcp', port: '80,443' }] },
  { id: 7102, name: 'ssh-bastion-only', rules: [{ direction: 'in', protocol: 'tcp', port: '22' }] },
];

const MOCK_NETWORKS = [
  { id: 5201, name: 'prod-private-vpc', ip_range: '10.0.0.0/16' },
  { id: 5202, name: 'db-backend-net', ip_range: '10.10.0.0/16' },
];

const MOCK_VOLUMES = [
  { id: 6301, name: 'pg-data-vol-01', size: 100, location: { name: 'fsn1' }, server: null, status: 'available' },
  { id: 6302, name: 'media-assets-vol', size: 250, location: { name: 'nbg1' }, server: null, status: 'available' },
];

// ============================================================================
// UTILITY HELPERS
// ============================================================================
const formatBytesToTB = (bytes) => {
  if (!bytes) return '20 TB';
  const tb = bytes / (1024 ** 4);
  return `${tb >= 1 ? Math.round(tb) : tb.toFixed(1)} TB`;
};

const formatDate = (isoString) => {
  if (!isoString) return 'Unknown';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const generateHostname = () => {
  const prefixes = ['app', 'web', 'api', 'worker', 'node', 'cache', 'db', 'edge'];
  const regions = ['eu', 'de', 'fi', 'us', 'cloud'];
  const p = prefixes[Math.floor(Math.random() * prefixes.length)];
  const r = regions[Math.floor(Math.random() * regions.length)];
  const num = String(Math.floor(10 + Math.random() * 89));
  return `${p}-${r}-${num}`;
};

const generatePassword = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%';
  let pwd = '';
  for (let i = 0; i < 18; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pwd;
};

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Authentication & Mode State
  const [apiToken, setApiToken] = useState(() => localStorage.getItem('hetzner_cloud_token') || '');
  const [tokenInput, setTokenInput] = useState(() => localStorage.getItem('hetzner_cloud_token') || '');
  const [rememberToken, setRememberToken] = useState(() => Boolean(localStorage.getItem('hetzner_cloud_token')));
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(() => !localStorage.getItem('hetzner_cloud_token'));

  // Navigation & UI State
  const [activeTab, setActiveTab] = useState('servers'); // 'servers' | 'snapshots' | 'deploy'
  const [isLoading, setIsLoading] = useState(false);
  const [errorBanner, setErrorBanner] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [copiedText, setCopiedText] = useState(null);

  // API Console / Activity Log State
  const [apiLogs, setApiLogs] = useState([]);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  // Hetzner Resource States
  const [servers, setServers] = useState([]);
  const [snapshots, setSnapshots] = useState([]);
  const [locations, setLocations] = useState([]);
  const [serverTypes, setServerTypes] = useState([]);
  const [sshKeys, setSshKeys] = useState([]);
  const [firewalls, setFirewalls] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [snapshotPricePerGb, setSnapshotPricePerGb] = useState(0.0119); // Default €0.0119/GB/mo net

  // Demo Mode Mutable Store
  const [demoServers, setDemoServers] = useState(INITIAL_MOCK_SERVERS);
  const [demoSnapshots, setDemoSnapshots] = useState(INITIAL_MOCK_SNAPSHOTS);

  // Root Passwords Store (mapped by server ID when returned on creation, or demo defaults)
  const [serverPasswords, setServerPasswords] = useState(() => {
    try {
      const saved = localStorage.getItem('hetzner_server_passwords');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [revealedPasswordIds, setRevealedPasswordIds] = useState({});

  const saveServerRootPassword = useCallback((serverId, password) => {
    if (!serverId || !password) return;
    setServerPasswords((prev) => {
      const updated = { ...prev, [String(serverId)]: password };
      try {
        localStorage.setItem('hetzner_server_passwords', JSON.stringify(updated));
      } catch {
        // Ignore storage quota errors
      }
      return updated;
    });
  }, []);

  // Projects & Usage State
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('hetzner_cloud_projects');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [activeProjectId, setActiveProjectId] = useState(() => localStorage.getItem('hetzner_active_project_id') || '');
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectToken, setNewProjectToken] = useState('');

  // Modals State
  const [snapshotModalServer, setSnapshotModalServer] = useState(null);
  const [snapshotDesc, setSnapshotDesc] = useState('');
  const [snapshotLabelKey, setSnapshotLabelKey] = useState('');
  const [snapshotLabelVal, setSnapshotLabelVal] = useState('');
  const [shutdownBeforeSnapshot, setShutdownBeforeSnapshot] = useState(true);
  const [isCreatingSnapshot, setIsCreatingSnapshot] = useState(false);

  // Unified Safe Pipeline State (handles both "Snapshot & Delete" and "Clean Shutdown + Snapshot")
  const [pipelineModal, setPipelineModal] = useState(null);
  // pipelineModal shape:
  // {
  //   server: Object,
  //   deleteAfterSnapshot: boolean,
  //   description: string,
  //   labelKey: string,
  //   labelVal: string,
  //   phase: 'confirm' | 'running' | 'completed' | 'failed',
  //   currentStep: 1 | 2 | 3,
  //   steps: {
  //     shutdown: { status: 'pending' | 'active' | 'done' | 'skipped' | 'error', detail: string },
  //     snapshot: { status: 'pending' | 'active' | 'done' | 'error', detail: string, imageId?: number },
  //     delete:   { status: 'pending' | 'active' | 'done' | 'skipped' | 'error', detail: string },
  //   },
  //   startedAt: number | null,
  //   elapsedSeconds: number,
  //   showForcePoweroff: boolean,
  //   errorMessage: string | null,
  // }

  const [deleteServerTarget, setDeleteServerTarget] = useState(null);
  const [deleteServerConfirmText, setDeleteServerConfirmText] = useState('');
  const [isDeletingServer, setIsDeletingServer] = useState(false);

  const [deleteSnapshotTarget, setDeleteSnapshotTarget] = useState(null);
  const [isDeletingSnapshot, setIsDeletingSnapshot] = useState(false);

  // Created Server Success Receipt Modal
  const [createdServerReceipt, setCreatedServerReceipt] = useState(null);

  // Snapshot Deployment Templates State
  const [snapshotTemplates, setSnapshotTemplates] = useState(() => {
    try {
      const saved = localStorage.getItem('hetzner_snapshot_templates');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [newTemplateNameInput, setNewTemplateNameInput] = useState('');
  const [showSaveTemplateForm, setShowSaveTemplateForm] = useState(false);
  const [activeDeployingTemplateId, setActiveDeployingTemplateId] = useState(null);

  // Default Favorite Server Plan (in-memory state, defaults to 'cx22')
  const [favoritePlanName, setFavoritePlanName] = useState('cx22');

  // Deploy From Snapshot Form State
  const [selectedSnapshotId, setSelectedSnapshotId] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('fsn1');
  const [selectedServerType, setSelectedServerType] = useState('cx22');
  const [newServerName, setNewServerName] = useState(() => generateHostname());
  const [selectedSshKeyIds, setSelectedSshKeyIds] = useState([]);
  const [selectedFirewallIds, setSelectedFirewallIds] = useState([]);
  const [selectedNetworkIds, setSelectedNetworkIds] = useState([]);
  const [selectedVolumeIds, setSelectedVolumeIds] = useState([]);
  const [automountVolumes, setAutomountVolumes] = useState(true);
  const [enableIpv4, setEnableIpv4] = useState(true);
  const [enableIpv6, setEnableIpv6] = useState(true);
  const [userDataScript, setUserDataScript] = useState('');
  const [deployLabels, setDeployLabels] = useState([{ key: '', value: '' }]);
  const [showAdvancedApiOptions, setShowAdvancedApiOptions] = useState(false);
  const [startAfterCreate, setStartAfterCreate] = useState(true);
  const [archFilter, setArchFilter] = useState('all'); // 'all' | 'x86' | 'arm'
  const [planSearchQuery, setPlanSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name_asc'); // 'name_asc' | 'price_asc' | 'cores_desc' | 'ram_desc'
  const [isDeployingServer, setIsDeployingServer] = useState(false);

  // Toast helper
  const addToast = useCallback((type, title, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5500);
  }, []);

  // Copy to clipboard helper with fallback for permissions policy
  const handleCopy = (text, label = 'Copied') => {
    const fallbackCopy = (str) => {
      const textarea = document.createElement('textarea');
      textarea.value = str;
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiedText(str);
        addToast('info', label, str);
        setTimeout(() => setCopiedText(null), 2000);
      } catch (err) {
        addToast('error', 'Copy Failed', 'Unable to copy text to clipboard.');
      }
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(text);
        addToast('info', label, text);
        setTimeout(() => setCopiedText(null), 2000);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  };

  // Activity Log helper
  const logApiCall = useCallback((method, endpoint, status, durationMs, note = '') => {
    setApiLogs((prev) => [
      {
        id: Date.now() + Math.random(),
        timestamp: new Date().toLocaleTimeString(),
        method,
        endpoint,
        status,
        durationMs,
        note,
      },
      ...prev.slice(0, 49),
    ]);
  }, []);

  // Core Hetzner API Fetcher (supports Live API and Interactive Demo Mode)
  const hetznerRequest = useCallback(
    async (method, endpoint, body = null) => {
      const startTime = performance.now();
      const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

      // DEMO MODE HANDLER
      if (isDemoMode) {
        await new Promise((r) => setTimeout(r, 280));
        const duration = Math.round(performance.now() - startTime);

        if (method === 'GET' && cleanEndpoint === '/servers') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { servers: demoServers };
        }
        if (method === 'GET' && cleanEndpoint.match(/^\/servers\/\d+$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          const srv = demoServers.find((s) => s.id === srvId);
          logApiCall(method, cleanEndpoint, srv ? 200 : 404, duration, `Demo Status: ${srv?.status || 'not_found'}`);
          if (!srv) throw new Error('Server not found');
          return { server: srv };
        }
        if (method === 'POST' && cleanEndpoint.match(/^\/servers\/\d+\/actions\/shutdown$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          setDemoServers((prev) =>
            prev.map((s) => (s.id === srvId ? { ...s, status: 'stopping' } : s))
          );
          setTimeout(() => {
            setDemoServers((prev) =>
              prev.map((s) => (s.id === srvId ? { ...s, status: 'off' } : s))
            );
          }, 2600);
          logApiCall(method, cleanEndpoint, 201, duration, 'Demo ACPI Shutdown Sent');
          return { action: { id: 88101, command: 'shutdown_server', status: 'running', progress: 20 } };
        }
        if (method === 'POST' && cleanEndpoint.match(/^\/servers\/\d+\/actions\/poweroff$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          setDemoServers((prev) =>
            prev.map((s) => (s.id === srvId ? { ...s, status: 'off' } : s))
          );
          logApiCall(method, cleanEndpoint, 201, duration, 'Demo Hard Poweroff');
          return { action: { id: 88102, command: 'stop_server', status: 'success', progress: 100 } };
        }
        if (method === 'POST' && cleanEndpoint.match(/^\/servers\/\d+\/actions\/poweron$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          setDemoServers((prev) =>
            prev.map((s) => (s.id === srvId ? { ...s, status: 'starting' } : s))
          );
          setTimeout(() => {
            setDemoServers((prev) =>
              prev.map((s) => (s.id === srvId ? { ...s, status: 'running' } : s))
            );
          }, 2200);
          logApiCall(method, cleanEndpoint, 201, duration, 'Demo Power On');
          return { action: { id: 88103, command: 'start_server', status: 'running', progress: 50 } };
        }
        if (method === 'GET' && cleanEndpoint.match(/^\/images\/\d+$/)) {
          const imgId = parseInt(cleanEndpoint.split('/')[2], 10);
          const img = demoSnapshots.find((i) => i.id === imgId);
          logApiCall(method, cleanEndpoint, img ? 200 : 404, duration, `Demo Image: ${img?.status || 'not_found'}`);
          if (!img) throw new Error('Snapshot not found');
          return { image: img };
        }
        if (method === 'GET' && cleanEndpoint.startsWith('/images')) {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { images: demoSnapshots };
        }
        if (method === 'GET' && cleanEndpoint === '/locations') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { locations: MOCK_LOCATIONS };
        }
        if (method === 'GET' && cleanEndpoint === '/server_types') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { server_types: MOCK_SERVER_TYPES };
        }
        if (method === 'GET' && cleanEndpoint === '/ssh_keys') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { ssh_keys: MOCK_SSH_KEYS };
        }
        if (method === 'GET' && cleanEndpoint === '/firewalls') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { firewalls: MOCK_FIREWALLS };
        }
        if (method === 'GET' && cleanEndpoint === '/networks') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { networks: MOCK_NETWORKS };
        }
        if (method === 'GET' && cleanEndpoint === '/volumes') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { volumes: MOCK_VOLUMES };
        }
        if (method === 'GET' && cleanEndpoint === '/pricing') {
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Mode');
          return { pricing: { image: { price_per_gb_month: { net: '0.0119', gross: '0.0142' } } } };
        }
        if (method === 'POST' && cleanEndpoint.match(/^\/servers\/\d+\/actions\/create_image$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          const srv = demoServers.find((s) => s.id === srvId);
          const newSnapId = Math.floor(20000000 + Math.random() * 9000000);
          const newSnap = {
            id: newSnapId,
            type: 'snapshot',
            status: 'creating',
            name: null,
            description: body?.description || `${srv?.name || 'server'}-snapshot-${new Date().toISOString().slice(0, 10)}`,
            image_size: Number(((srv?.server_type?.disk || 40) * 0.34).toFixed(2)),
            disk_size: srv?.server_type?.disk || 40,
            created: new Date().toISOString(),
            os_flavor: srv?.image?.os_flavor || 'ubuntu',
            os_version: '24.04',
            architecture: srv?.server_type?.architecture || 'x86',
            bound_to: null,
            labels: body?.labels || {},
          };
          setDemoSnapshots((prev) => [newSnap, ...prev]);
          // Simulate snapshot finishing creation after 3.2 seconds
          setTimeout(() => {
            setDemoSnapshots((prev) =>
              prev.map((item) => (item.id === newSnapId ? { ...item, status: 'available' } : item))
            );
          }, 3200);
          logApiCall(method, cleanEndpoint, 201, duration, 'Demo Snapshot Triggered');
          return { image: newSnap, action: { id: 88123, status: 'running', progress: 15 } };
        }
        if (method === 'DELETE' && cleanEndpoint.match(/^\/servers\/\d+$/)) {
          const srvId = parseInt(cleanEndpoint.split('/')[2], 10);
          setDemoServers((prev) => prev.filter((s) => s.id !== srvId));
          logApiCall(method, cleanEndpoint, 200, duration, 'Demo Server Deleted');
          return { action: { id: 88124, status: 'success' } };
        }
        if (method === 'DELETE' && cleanEndpoint.match(/^\/images\/\d+$/)) {
          const imgId = parseInt(cleanEndpoint.split('/')[2], 10);
          setDemoSnapshots((prev) => prev.filter((img) => img.id !== imgId));
          logApiCall(method, cleanEndpoint, 204, duration, 'Demo Snapshot Deleted');
          return {};
        }
        if (method === 'POST' && cleanEndpoint === '/servers') {
          const chosenType = MOCK_SERVER_TYPES.find((t) => t.name === body.server_type) || MOCK_SERVER_TYPES[0];
          const chosenLoc = MOCK_LOCATIONS.find((l) => l.name === body.location) || MOCK_LOCATIONS[0];
          const chosenSnap = demoSnapshots.find((s) => String(s.id) === String(body.image));
          const randomOctet3 = Math.floor(10 + Math.random() * 240);
          const randomOctet4 = Math.floor(2 + Math.random() * 250);
          const enableV4 = body.public_net ? body.public_net.enable_ipv4 !== false : true;
          const enableV6 = body.public_net ? body.public_net.enable_ipv6 !== false : true;
          const createdSrv = {
            id: Math.floor(49000000 + Math.random() * 999999),
            name: body.name,
            status: body.start_after_create !== false ? 'initializing' : 'off',
            created: new Date().toISOString(),
            public_net: {
              ipv4: enableV4 ? { ip: `88.198.${randomOctet3}.${randomOctet4}` } : null,
              ipv6: enableV6 ? { ip: `2a01:4f8:c2c:${randomOctet3.toString(16)}::/64` } : null,
            },
            server_type: chosenType,
            datacenter: {
              name: `${chosenLoc.name}-dc1`,
              location: chosenLoc,
            },
            image: chosenSnap
              ? {
                  id: chosenSnap.id,
                  name: null,
                  description: chosenSnap.description,
                  os_flavor: chosenSnap.os_flavor,
                }
              : { id: 161547269, name: 'ubuntu-24.04', description: 'Ubuntu 24.04 LTS', os_flavor: 'ubuntu' },
            labels: body.labels || {},
          };
          setDemoServers((prev) => [createdSrv, ...prev]);
          if (body.start_after_create !== false) {
            setTimeout(() => {
              setDemoServers((prev) =>
                prev.map((s) => (s.id === createdSrv.id ? { ...s, status: 'running' } : s))
              );
            }, 3500);
          }
          const rootPassword = !body.ssh_keys || body.ssh_keys.length === 0 ? generatePassword() : null;
          logApiCall(method, cleanEndpoint, 201, duration, 'Demo Server Created');
          return { server: createdSrv, root_password: rootPassword };
        }
      }

      // LIVE HETZNER CLOUD API HANDLER
      if (!apiToken) {
        throw new Error('NO_TOKEN');
      }

      const url = `https://api.hetzner.cloud/v1${cleanEndpoint}`;
      const options = {
        method,
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }

      try {
        const res = await fetch(url, options);
        const duration = Math.round(performance.now() - startTime);
        let data = {};
        if (res.status !== 204) {
          data = await res.json().catch(() => ({}));
        }
        logApiCall(method, cleanEndpoint, res.status, duration, res.ok ? 'OK' : data?.error?.message || 'Error');

        if (!res.ok) {
          const errMsg = data?.error?.message || `HTTP ${res.status}: ${res.statusText}`;
          const errCode = data?.error?.code || 'api_error';
          const err = new Error(errMsg);
          err.code = errCode;
          err.status = res.status;
          err.curl = `curl -X ${method} "${url}" -H "Authorization: Bearer $HETZNER_TOKEN"${
            body ? ` -H "Content-Type: application/json" -d '${JSON.stringify(body)}'` : ''
          }`;
          throw err;
        }

        return data;
      } catch (err) {
        const duration = Math.round(performance.now() - startTime);
        if (err.name === 'TypeError' || err.message === 'Failed to fetch') {
          logApiCall(method, cleanEndpoint, 'CORS/NET', duration, 'Network or CORS blocked');
          const netErr = new Error(
            'Unable to reach api.hetzner.cloud directly from this browser environment (Network/CORS restriction or offline).'
          );
          netErr.isNetworkOrCors = true;
          netErr.curl = `curl -X ${method} "${url}" -H "Authorization: Bearer $HETZNER_TOKEN"${
            body ? ` -H "Content-Type: application/json" -d '${JSON.stringify(body)}'` : ''
          }`;
          throw netErr;
        }
        throw err;
      }
    },
    [apiToken, isDemoMode, demoServers, demoSnapshots, logApiCall]
  );

  // Sync Demo state immediately into visible state when demo data updates
  useEffect(() => {
    if (isDemoMode) {
      setServers(demoServers);
    }
  }, [isDemoMode, demoServers]);

  useEffect(() => {
    if (isDemoMode) {
      setSnapshots(demoSnapshots);
    }
  }, [isDemoMode, demoSnapshots]);

  // Ref for reading latest demoServers/demoSnapshots inside async polling loops
  const demoServersRef = React.useRef(demoServers);
  useEffect(() => {
    demoServersRef.current = demoServers;
  }, [demoServers]);

  const demoSnapshotsRef = React.useRef(demoSnapshots);
  useEffect(() => {
    demoSnapshotsRef.current = demoSnapshots;
  }, [demoSnapshots]);

  // Elapsed timer while pipeline is running
  useEffect(() => {
    if (!pipelineModal || pipelineModal.phase !== 'running' || !pipelineModal.startedAt) return;
    const interval = setInterval(() => {
      setPipelineModal((prev) => {
        if (!prev || prev.phase !== 'running') return prev;
        const elapsed = Math.floor((Date.now() - prev.startedAt) / 1000);
        return {
          ...prev,
          elapsedSeconds: elapsed,
          showForcePoweroff: prev.currentStep === 1 && elapsed >= 14 ? true : prev.showForcePoweroff,
        };
      });
    }, 500);
    return () => clearInterval(interval);
  }, [pipelineModal?.phase, pipelineModal?.startedAt]);

  // Fetch all Hetzner project resources
  const fetchAllResources = useCallback(
    async (silent = false) => {
      if (!isDemoMode && !apiToken) return;
      if (!silent) setIsLoading(true);
      setErrorBanner(null);

      try {
        const [srvRes, imgRes, locRes, typeRes, sshRes, fwRes, netRes, volRes, pricingRes] = await Promise.all([
          hetznerRequest('GET', '/servers'),
          hetznerRequest('GET', '/images?type=snapshot&per_page=50'),
          hetznerRequest('GET', '/locations'),
          hetznerRequest('GET', '/server_types?per_page=50'),
          hetznerRequest('GET', '/ssh_keys').catch(() => ({ ssh_keys: [] })),
          hetznerRequest('GET', '/firewalls').catch(() => ({ firewalls: [] })),
          hetznerRequest('GET', '/networks').catch(() => ({ networks: [] })),
          hetznerRequest('GET', '/volumes').catch(() => ({ volumes: [] })),
          hetznerRequest('GET', '/pricing').catch(() => null),
        ]);

        setServers(srvRes.servers || []);
        const snapList = imgRes.images || [];
        setSnapshots(snapList);
        setLocations(locRes.locations || []);
        const validTypes = (typeRes.server_types || []).filter((t) => !t.deprecated);
        setServerTypes(validTypes);
        setSshKeys(sshRes.ssh_keys || []);
        setFirewalls(fwRes.firewalls || []);
        setNetworks(netRes.networks || []);
        setVolumes(volRes.volumes || []);

        if (pricingRes?.pricing?.image?.price_per_gb_month?.net) {
          setSnapshotPricePerGb(parseFloat(pricingRes.pricing.image.price_per_gb_month.net));
        }

        // Default select first available snapshot if none selected
        if (snapList.length > 0 && !selectedSnapshotId) {
          const firstAvail = snapList.find((s) => s.status === 'available') || snapList[0];
          setSelectedSnapshotId(String(firstAvail.id));
        }
      } catch (err) {
        if (err.message !== 'NO_TOKEN') {
          setErrorBanner({
            message: err.message,
            isNetworkOrCors: err.isNetworkOrCors,
            curl: err.curl,
            status: err.status,
          });
        }
      } finally {
        if (!silent) setIsLoading(false);
      }
    },
    [apiToken, isDemoMode, hetznerRequest, selectedSnapshotId]
  );

  // Trigger initial load when connected
  useEffect(() => {
    if (isDemoMode || apiToken) {
      fetchAllResources();
    }
  }, [isDemoMode, apiToken]); // eslint-disable-line react-hooks/exhaustive-deps

  // Connect with Live API Token
  const handleConnectToken = (e) => {
    e.preventDefault();
    const trimmed = tokenInput.trim();
    if (!trimmed) return;
    setIsDemoMode(false);
    setApiToken(trimmed);
    if (rememberToken) {
      localStorage.setItem('hetzner_cloud_token', trimmed);
    } else {
      localStorage.removeItem('hetzner_cloud_token');
    }
    // Ensure a default project entry exists for the connected token
    setProjects((prev) => {
      if (prev.some((p) => p.token === trimmed)) {
        const found = prev.find((p) => p.token === trimmed);
        setActiveProjectId(found.id);
        localStorage.setItem('hetzner_active_project_id', found.id);
        return prev;
      }
      const newProj = {
        id: `prj-${Date.now()}`,
        name: prev.length === 0 ? 'Default Hetzner Project' : `Project #${prev.length + 1}`,
        description: 'Connected via Hetzner Cloud API Token',
        token: trimmed,
        status: 'active',
      };
      const updated = [newProj, ...prev];
      localStorage.setItem('hetzner_cloud_projects', JSON.stringify(updated));
      setActiveProjectId(newProj.id);
      localStorage.setItem('hetzner_active_project_id', newProj.id);
      return updated;
    });
    setShowTokenModal(false);
    setErrorBanner(null);
    addToast('success', 'Connected to Hetzner Cloud API', 'Fetching your project resources...');
  };

  // Switch to Interactive Demo Mode
  const handleEnableDemoMode = () => {
    setIsDemoMode(true);
    setApiToken('');
    setShowTokenModal(false);
    setErrorBanner(null);
    setDemoServers(INITIAL_MOCK_SERVERS);
    setDemoSnapshots(INITIAL_MOCK_SNAPSHOTS);
    setServerPasswords((prev) => ({
      ...prev,
      '48291041': 'Hz9#kLm29!vQx4',
      '48291992': 'Pg16$Db99@rSt2',
      '48305110': 'Arm64!Wrk77#Lp',
    }));
    setProjects(MOCK_PROJECTS);
    setActiveProjectId(MOCK_PROJECTS[0].id);
    addToast('info', 'Interactive Demo Mode Active', 'Explore servers, snapshots, current monthly usage, and projects.');
  };

  // Switch Active Project
  const handleSwitchProject = (project) => {
    setActiveProjectId(project.id);
    localStorage.setItem('hetzner_active_project_id', project.id);
    if (isDemoMode) {
      addToast('info', `Switched Project: ${project.name}`, 'Viewing simulated project context.');
      return;
    }
    if (project.token && project.token !== apiToken) {
      setApiToken(project.token);
      setTokenInput(project.token);
      if (rememberToken) {
        localStorage.setItem('hetzner_cloud_token', project.token);
      }
      addToast('success', `Switched to ${project.name}`, 'Reloading servers & snapshots for this project...');
    }
  };

  // Add New Project Entry
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim() || (!isDemoMode && !newProjectToken.trim())) return;
    const proj = {
      id: `prj-${Date.now()}`,
      name: newProjectName.trim(),
      description: newProjectDesc.trim() || 'Hetzner Cloud Project',
      token: isDemoMode ? `demo-token-${Date.now()}` : newProjectToken.trim(),
      status: 'active',
      serversCount: 0,
      monthlyEstimate: '0.00',
      mtdUsage: '0.00',
    };
    const updated = [...projects, proj];
    setProjects(updated);
    if (!isDemoMode) {
      localStorage.setItem('hetzner_cloud_projects', JSON.stringify(updated));
    }
    setNewProjectName('');
    setNewProjectDesc('');
    setNewProjectToken('');
    setShowAddProjectModal(false);
    addToast('success', 'Project Added', `"${proj.name}" added to your projects list.`);
    if (!isDemoMode && proj.token) {
      handleSwitchProject(proj);
    }
  };

  // Disconnect
  const handleDisconnect = () => {
    setIsDemoMode(false);
    setApiToken('');
    setTokenInput('');
    localStorage.removeItem('hetzner_cloud_token');
    setServers([]);
    setSnapshots([]);
    setLocations([]);
    setServerTypes([]);
    setSshKeys([]);
    setFirewalls([]);
    setNetworks([]);
    setVolumes([]);
    setErrorBanner(null);
    setShowTokenModal(true);
  };

  // ==========================================================================
  // ACTION: POWER ON / GRACEFUL SHUTDOWN INDIVIDUAL SERVER
  // ==========================================================================
  const handleToggleServerPower = async (server, actionType) => {
    try {
      await hetznerRequest('POST', `/servers/${server.id}/actions/${actionType}`);
      addToast(
        'info',
        actionType === 'shutdown' ? 'ACPI Shutdown Signal Sent' : 'Power On Signal Sent',
        `${server.name} is ${actionType === 'shutdown' ? 'shutting down gracefully' : 'booting up'}...`
      );
      if (!isDemoMode) {
        setTimeout(() => fetchAllResources(true), 2500);
      }
    } catch (err) {
      addToast('error', 'Power Action Failed', err.message);
    }
  };

  // ==========================================================================
  // ACTION: SNAPSHOT & DELETE PIPELINE (SHUTDOWN -> SNAPSHOT -> DELETE)
  // ==========================================================================
  const openSnapshotAndDeleteModal = (server, deleteAfter = true) => {
    const isAlreadyOff = server.status === 'off';
    setPipelineModal({
      server,
      deleteAfterSnapshot: deleteAfter,
      description: `${server.name}-${deleteAfter ? 'final' : 'snap'}-${new Date().toISOString().slice(0, 10)}`,
      labelKey: deleteAfter ? 'archived_from' : '',
      labelVal: deleteAfter ? server.name : '',
      phase: 'confirm',
      currentStep: 1,
      steps: {
        shutdown: {
          status: 'pending',
          detail: isAlreadyOff
            ? 'Server is already powered off (will verify before snapshot).'
            : `Server is "${server.status}". Will send ACPI shutdown & wait for "off".`,
        },
        snapshot: {
          status: 'pending',
          detail: 'Will trigger create_image & poll until snapshot status is "available".',
        },
        delete: {
          status: deleteAfter ? 'pending' : 'skipped',
          detail: deleteAfter
            ? 'Will execute DELETE /servers/{id} ONLY after snapshot succeeds.'
            : 'Server will remain intact after snapshot.',
        },
      },
      startedAt: null,
      elapsedSeconds: 0,
      showForcePoweroff: false,
      errorMessage: null,
    });
  };

  const handleForcePoweroffDuringPipeline = async () => {
    if (!pipelineModal?.server) return;
    try {
      await hetznerRequest('POST', `/servers/${pipelineModal.server.id}/actions/poweroff`);
      addToast('info', 'Hard Power-Off Sent', `Forced poweroff sent to ${pipelineModal.server.name}.`);
    } catch (err) {
      addToast('error', 'Force Power-Off Failed', err.message);
    }
  };

  const executeSafeSnapshotPipeline = async (e) => {
    if (e) e.preventDefault();
    if (!pipelineModal) return;

    const { server, deleteAfterSnapshot, description, labelKey, labelVal } = pipelineModal;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    setPipelineModal((prev) => ({
      ...prev,
      phase: 'running',
      currentStep: 1,
      startedAt: Date.now(),
      elapsedSeconds: 0,
      errorMessage: null,
      steps: {
        shutdown: { status: 'active', detail: 'Checking live server power state...' },
        snapshot: { status: 'pending', detail: 'Waiting for clean shutdown...' },
        delete: {
          status: deleteAfterSnapshot ? 'pending' : 'skipped',
          detail: deleteAfterSnapshot
            ? 'Locked until snapshot is 100% verified.'
            : 'Skipped (Snapshot-only mode).',
        },
      },
    }));

    try {
      // ----------------------------------------------------------------------
      // STEP 1: CHECK STATUS & GRACEFUL SHUTDOWN UNTIL SERVER IS 'off'
      // ----------------------------------------------------------------------
      let currentStatus = server.status;
      if (isDemoMode) {
        const latestDemo = demoServersRef.current.find((s) => s.id === server.id);
        currentStatus = latestDemo?.status || server.status;
      } else {
        const checkRes = await hetznerRequest('GET', `/servers/${server.id}`);
        currentStatus = checkRes.server?.status || server.status;
      }

      if (currentStatus === 'off') {
        setPipelineModal((prev) => ({
          ...prev,
          currentStep: 2,
          steps: {
            ...prev.steps,
            shutdown: { status: 'skipped', detail: 'Verified: Server is already powered off.' },
          },
        }));
      } else {
        setPipelineModal((prev) => ({
          ...prev,
          steps: {
            ...prev.steps,
            shutdown: {
              status: 'active',
              detail: `Server is "${currentStatus}". Sending graceful ACPI shutdown signal...`,
            },
          },
        }));

        if (currentStatus === 'running') {
          await hetznerRequest('POST', `/servers/${server.id}/actions/shutdown`);
        }

        // Poll GET /servers/{id} until status === 'off' (up to 60 attempts = 120s)
        let isOff = false;
        for (let attempt = 1; attempt <= 60; attempt++) {
          await sleep(isDemoMode ? 900 : 2000);
          let polledStatus = 'stopping';

          if (isDemoMode) {
            const latestDemo = demoServersRef.current.find((s) => s.id === server.id);
            polledStatus = latestDemo?.status || 'off';
          } else {
            const pollRes = await hetznerRequest('GET', `/servers/${server.id}`);
            polledStatus = pollRes.server?.status;
          }

          setPipelineModal((prev) => ({
            ...prev,
            steps: {
              ...prev.steps,
              shutdown: {
                status: 'active',
                detail: `Waiting for shutdown (status: "${polledStatus}", check #${attempt})...`,
              },
            },
          }));

          if (polledStatus === 'off') {
            isOff = true;
            break;
          }
        }

        if (!isOff) {
          throw new Error(
            'Timed out waiting for graceful ACPI shutdown. Server was NOT snapshotted or deleted.'
          );
        }

        setPipelineModal((prev) => ({
          ...prev,
          currentStep: 2,
          steps: {
            ...prev.steps,
            shutdown: { status: 'done', detail: 'Confirmed: Server is cleanly powered off.' },
          },
        }));
      }

      // ----------------------------------------------------------------------
      // STEP 2: CREATE SNAPSHOT & POLL UNTIL IMAGE IS 'available'
      // ----------------------------------------------------------------------
      const snapDescription = description.trim() || `${server.name}-snapshot-${new Date().toISOString().slice(0, 10)}`;
      setPipelineModal((prev) => ({
        ...prev,
        currentStep: 2,
        steps: {
          ...prev.steps,
          snapshot: {
            status: 'active',
            detail: `Requesting disk snapshot "${snapDescription}"...`,
          },
        },
      }));

      const snapPayload = {
        type: 'snapshot',
        description: snapDescription,
      };
      if (labelKey.trim() && labelVal.trim()) {
        snapPayload.labels = { [labelKey.trim()]: labelVal.trim() };
      }

      const createSnapRes = await hetznerRequest(
        'POST',
        `/servers/${server.id}/actions/create_image`,
        snapPayload
      );

      const createdImageId = createSnapRes?.image?.id;
      const createActionId = createSnapRes?.action?.id;

      if (!createdImageId) {
        throw new Error('Hetzner API did not return a snapshot image ID. Aborting before deletion.');
      }

      // Poll until snapshot image is 'available' (or action is 'success')
      // Increased timeout: up to 600 attempts at 3s intervals (~30 minutes) for large disks
      let snapshotReady = false;
      const maxSnapshotAttempts = 600;
      const pollIntervalMs = isDemoMode ? 1100 : 3000;
      for (let attempt = 1; attempt <= maxSnapshotAttempts; attempt++) {
        await sleep(pollIntervalMs);

        if (isDemoMode) {
          const snapObj = demoSnapshotsRef.current.find((img) => img.id === createdImageId);
          const snapStatus = snapObj?.status || 'creating';
          setPipelineModal((prev) => ({
            ...prev,
            steps: {
              ...prev.steps,
              snapshot: {
                status: 'active',
                imageId: createdImageId,
                detail: `Snapshotting disk (Image #${createdImageId}: ${snapStatus}, poll #${attempt}/${maxSnapshotAttempts})...`,
              },
            },
          }));
          if (snapStatus === 'available') {
            snapshotReady = true;
            break;
          }
        } else {
          // Poll image status directly (and optionally action status)
          const imgRes = await hetznerRequest('GET', `/images/${createdImageId}`);
          const imgStatus = imgRes.image?.status;

          let actionProgress = '';
          if (createActionId) {
            const actRes = await hetznerRequest('GET', `/actions/${createActionId}`).catch(() => null);
            if (actRes?.action?.status === 'error') {
              throw new Error(actRes.action.error?.message || 'Snapshot action failed on Hetzner.');
            }
            if (typeof actRes?.action?.progress === 'number') {
              actionProgress = ` (${actRes.action.progress}%)`;
            }
          }

          setPipelineModal((prev) => ({
            ...prev,
            steps: {
              ...prev.steps,
              snapshot: {
                status: 'active',
                imageId: createdImageId,
                detail: `Creating snapshot #${createdImageId}: ${imgStatus}${actionProgress} (check ${attempt}/${maxSnapshotAttempts})...`,
              },
            },
          }));

          if (imgStatus === 'available') {
            snapshotReady = true;
            break;
          }
        }
      }

      if (!snapshotReady) {
        throw new Error(
          `Snapshot #${createdImageId} did not finish within the 30-minute timeout. Server was NOT deleted for safety.`
        );
      }

      setSelectedSnapshotId(String(createdImageId));

      setPipelineModal((prev) => ({
        ...prev,
        currentStep: deleteAfterSnapshot ? 3 : 2,
        steps: {
          ...prev.steps,
          snapshot: {
            status: 'done',
            imageId: createdImageId,
            detail: `Verified: Snapshot #${createdImageId} ("${snapDescription}") is available.`,
          },
        },
      }));

      // ----------------------------------------------------------------------
      // STEP 3: DELETE SERVER (ONLY IF deleteAfterSnapshot === true)
      // ----------------------------------------------------------------------
      if (deleteAfterSnapshot) {
        setPipelineModal((prev) => ({
          ...prev,
          currentStep: 3,
          steps: {
            ...prev.steps,
            delete: {
              status: 'active',
              detail: `Deleting server "${server.name}" (#${server.id})...`,
            },
          },
        }));

        await hetznerRequest('DELETE', `/servers/${server.id}`);

        setPipelineModal((prev) => ({
          ...prev,
          phase: 'completed',
          steps: {
            ...prev.steps,
            delete: {
              status: 'done',
              detail: `Server "${server.name}" permanently deleted. Snapshot #${createdImageId} preserved.`,
            },
          },
        }));

        addToast(
          'success',
          'Snapshot & Delete Complete',
          `Snapshot #${createdImageId} created and server "${server.name}" deleted.`
        );
      } else {
        setPipelineModal((prev) => ({
          ...prev,
          phase: 'completed',
        }));
        addToast(
          'success',
          'Clean Snapshot Created',
          `Snapshot #${createdImageId} is ready in your Snapshots tab.`
        );
      }

      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      setPipelineModal((prev) => {
        if (!prev) return null;
        const failedStepKey =
          prev.currentStep === 1 ? 'shutdown' : prev.currentStep === 2 ? 'snapshot' : 'delete';
        return {
          ...prev,
          phase: 'failed',
          errorMessage: err.message,
          steps: {
            ...prev.steps,
            [failedStepKey]: {
              ...prev.steps[failedStepKey],
              status: 'error',
              detail: err.message,
            },
          },
        };
      });
      addToast('error', 'Workflow Aborted Safely', err.message);
    }
  };

  // ==========================================================================
  // ACTION: CREATE SNAPSHOT FROM SERVER (STANDALONE)
  // ==========================================================================
  const openCreateSnapshotModal = (server) => {
    setSnapshotModalServer(server);
    setSnapshotDesc(`${server.name}-snap-${new Date().toISOString().slice(0, 10)}`);
    setSnapshotLabelKey('');
    setSnapshotLabelVal('');
    setShutdownBeforeSnapshot(server.status === 'running');
  };

  const handleCreateSnapshot = async (e) => {
    e.preventDefault();
    if (!snapshotModalServer) return;

    // If server is running and user keeps clean shutdown enabled, run the safe shutdown+snapshot pipeline
    if (shutdownBeforeSnapshot && snapshotModalServer.status !== 'off') {
      const target = snapshotModalServer;
      const desc = snapshotDesc;
      const lKey = snapshotLabelKey;
      const lVal = snapshotLabelVal;
      setSnapshotModalServer(null);
      setPipelineModal({
        server: target,
        deleteAfterSnapshot: false,
        description: desc,
        labelKey: lKey,
        labelVal: lVal,
        phase: 'confirm',
        currentStep: 1,
        steps: {
          shutdown: { status: 'pending', detail: 'Will send ACPI shutdown & wait for "off".' },
          snapshot: { status: 'pending', detail: 'Will create disk snapshot once off.' },
          delete: { status: 'skipped', detail: 'Server will NOT be deleted.' },
        },
        startedAt: null,
        elapsedSeconds: 0,
        showForcePoweroff: false,
        errorMessage: null,
      });
      return;
    }

    setIsCreatingSnapshot(true);

    try {
      const payload = {
        type: 'snapshot',
        description: snapshotDesc.trim() || `${snapshotModalServer.name}-snapshot`,
      };
      if (snapshotLabelKey.trim() && snapshotLabelVal.trim()) {
        payload.labels = { [snapshotLabelKey.trim()]: snapshotLabelVal.trim() };
      }

      const res = await hetznerRequest(
        'POST',
        `/servers/${snapshotModalServer.id}/actions/create_image`,
        payload
      );

      addToast(
        'success',
        'Snapshot Creation Started',
        `Creating "${payload.description}" from ${snapshotModalServer.name}.`
      );
      setSnapshotModalServer(null);
      if (res?.image?.id) {
        setSelectedSnapshotId(String(res.image.id));
      }
      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      addToast('error', 'Snapshot Failed', err.message);
      setErrorBanner({
        message: err.message,
        isNetworkOrCors: err.isNetworkOrCors,
        curl: err.curl,
      });
    } finally {
      setIsCreatingSnapshot(false);
    }
  };

  // ==========================================================================
  // ACTION: DELETE SERVER & DELETE SNAPSHOT
  // ==========================================================================
  const handleDeleteServer = async () => {
    if (!deleteServerTarget || deleteServerConfirmText !== deleteServerTarget.name) return;
    setIsDeletingServer(true);
    try {
      await hetznerRequest('DELETE', `/servers/${deleteServerTarget.id}`);
      addToast('success', 'Server Deleted', `"${deleteServerTarget.name}" has been permanently removed.`);
      setDeleteServerTarget(null);
      setDeleteServerConfirmText('');
      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      addToast('error', 'Delete Failed', err.message);
      setErrorBanner({
        message: err.message,
        isNetworkOrCors: err.isNetworkOrCors,
        curl: err.curl,
      });
    } finally {
      setIsDeletingServer(false);
    }
  };

  const handleDeleteSnapshot = async () => {
    if (!deleteSnapshotTarget) return;
    setIsDeletingSnapshot(true);
    try {
      await hetznerRequest('DELETE', `/images/${deleteSnapshotTarget.id}`);
      addToast(
        'success',
        'Snapshot Deleted',
        `Removed snapshot "${deleteSnapshotTarget.description || `#${deleteSnapshotTarget.id}`}".`
      );
      if (String(selectedSnapshotId) === String(deleteSnapshotTarget.id)) {
        setSelectedSnapshotId('');
      }
      setDeleteSnapshotTarget(null);
      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      addToast('error', 'Snapshot Delete Failed', err.message);
    } finally {
      setIsDeletingSnapshot(false);
    }
  };

  const handleSelectSnapshotForDeploy = (snap) => {
    setSelectedSnapshotId(String(snap.id));
    if (snap.architecture) {
      setArchFilter(snap.architecture);
      const compatiblePlan =
        serverTypes.find(
          (t) =>
            t.name === favoritePlanName &&
            t.architecture === snap.architecture &&
            (!snap.disk_size || t.disk >= snap.disk_size)
        ) ||
        serverTypes.find(
          (t) => t.architecture === snap.architecture && (!snap.disk_size || t.disk >= snap.disk_size)
        );
      if (compatiblePlan) {
        setSelectedServerType(compatiblePlan.name);
      }
    }
    setActiveTab('deploy');
  };

  // ONE-CLICK SERVER CREATE FROM SAVED DEPLOY TEMPLATE
  const handleSaveDeployTemplate = () => {
    const trimmedName = newTemplateNameInput.trim();
    if (!trimmedName) {
      addToast('error', 'Template Name Required', 'Please enter a name for your Deploy Template.');
      return;
    }
    if (!selectedSnapshotId) {
      addToast('error', 'Snapshot Required', 'Select a snapshot image before saving a template.');
      return;
    }

    const newTemplate = {
      id: `tmpl-${Date.now()}`,
      name: trimmedName,
      snapshotId: String(selectedSnapshotId),
      snapshotDesc: selectedSnapshotObj?.description || `Snapshot #${selectedSnapshotId}`,
      serverType: selectedServerType,
      location: selectedLocation,
      sshKeyIds: [...selectedSshKeyIds],
      firewallIds: [...selectedFirewallIds],
      networkIds: [...selectedNetworkIds],
      volumeIds: [...selectedVolumeIds],
      automountVolumes,
      enableIpv4,
      enableIpv6,
      userDataScript,
      labels: deployLabels.filter((l) => l.key.trim()),
      startAfterCreate,
      createdAt: new Date().toISOString(),
    };

    setSnapshotTemplates((prev) => {
      const updated = [newTemplate, ...prev];
      try {
        localStorage.setItem('hetzner_snapshot_templates', JSON.stringify(updated));
      } catch {
        // Ignore storage quota errors
      }
      return updated;
    });

    setNewTemplateNameInput('');
    setShowSaveTemplateForm(false);
    addToast('success', 'Deploy Template Saved', `"${trimmedName}" is now available on your main dashboard.`);
  };

  const handleDeleteDeployTemplate = (templateId, templateNameStr) => {
    setSnapshotTemplates((prev) => {
      const updated = prev.filter((t) => t.id !== templateId);
      try {
        localStorage.setItem('hetzner_snapshot_templates', JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
    addToast('info', 'Template Removed', `Deleted template "${templateNameStr}".`);
  };

  const handleLoadTemplateIntoDeploy = (tmpl) => {
    if (tmpl.snapshotId) setSelectedSnapshotId(String(tmpl.snapshotId));
    if (tmpl.serverType) setSelectedServerType(tmpl.serverType);
    if (tmpl.location) setSelectedLocation(tmpl.location);
    setSelectedSshKeyIds(tmpl.sshKeyIds || []);
    setSelectedFirewallIds(tmpl.firewallIds || []);
    setSelectedNetworkIds(tmpl.networkIds || []);
    setSelectedVolumeIds(tmpl.volumeIds || []);
    setAutomountVolumes(tmpl.automountVolumes !== undefined ? tmpl.automountVolumes : true);
    setEnableIpv4(tmpl.enableIpv4 !== undefined ? tmpl.enableIpv4 : true);
    setEnableIpv6(tmpl.enableIpv6 !== undefined ? tmpl.enableIpv6 : true);
    setUserDataScript(tmpl.userDataScript || '');
    setDeployLabels(tmpl.labels && tmpl.labels.length > 0 ? tmpl.labels : [{ key: '', value: '' }]);
    setStartAfterCreate(tmpl.startAfterCreate !== undefined ? tmpl.startAfterCreate : true);
    const slug = tmpl.name.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').slice(0, 18);
    setNewServerName(`${slug || 'srv'}-${Math.floor(10 + Math.random() * 89)}`);
    setActiveTab('deploy');
    addToast('info', 'Template Loaded', `Loaded "${tmpl.name}" into configurator.`);
  };

  const handleOneClickDeploySavedTemplate = async (tmpl) => {
    const targetSnapshot = snapshots.find((s) => String(s.id) === String(tmpl.snapshotId));
    if (!targetSnapshot) {
      addToast(
        'error',
        'Snapshot Not Found',
        `Snapshot "${tmpl.snapshotDesc || tmpl.snapshotId}" no longer exists in this project.`
      );
      return;
    }

    setActiveDeployingTemplateId(tmpl.id);
    try {
      const slug = tmpl.name.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').slice(0, 18);
      const generatedName = `${slug || 'srv'}-${Math.floor(10 + Math.random() * 89)}`;

      const payload = {
        name: generatedName,
        server_type: tmpl.serverType,
        image: Number(tmpl.snapshotId) || tmpl.snapshotId,
        location: tmpl.location,
        start_after_create: tmpl.startAfterCreate !== false,
        public_net: {
          enable_ipv4: tmpl.enableIpv4 !== false,
          enable_ipv6: tmpl.enableIpv6 !== false,
        },
      };

      if (tmpl.sshKeyIds?.length > 0) payload.ssh_keys = tmpl.sshKeyIds;
      if (tmpl.firewallIds?.length > 0) payload.firewalls = tmpl.firewallIds.map((id) => ({ firewall: id }));
      if (tmpl.networkIds?.length > 0) payload.networks = tmpl.networkIds;
      if (tmpl.volumeIds?.length > 0) {
        payload.volumes = tmpl.volumeIds;
        payload.automount = tmpl.automountVolumes !== false;
      }
      if (tmpl.userDataScript?.trim()) payload.user_data = tmpl.userDataScript;

      const validLabels = (tmpl.labels || []).reduce((acc, item) => {
        if (item.key?.trim()) acc[item.key.trim()] = item.value?.trim() || '';
        return acc;
      }, {});
      if (Object.keys(validLabels).length > 0) payload.labels = validLabels;

      const res = await hetznerRequest('POST', '/servers', payload);
      if (res?.server?.id && res?.root_password) {
        saveServerRootPassword(res.server.id, res.root_password);
      }
      setCreatedServerReceipt({
        server: res.server,
        rootPassword: res.root_password,
        snapshot: targetSnapshot,
        pricing: getPriceForLocation(
          serverTypes.find((t) => t.name === tmpl.serverType),
          tmpl.location
        ),
      });
      addToast(
        'success',
        `Deployed "${tmpl.name}"`,
        `Server "${generatedName}" provisioned in ${tmpl.location.toUpperCase()}.`
      );
      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      addToast('error', `Template Deploy Failed (${tmpl.name})`, err.message);
      setErrorBanner({
        message: err.message,
        isNetworkOrCors: err.isNetworkOrCors,
        curl: err.curl,
      });
    } finally {
      setActiveDeployingTemplateId(null);
    }
  };

  const handleToggleFavoritePlan = (e, planName) => {
    e.stopPropagation();
    setFavoritePlanName(planName);
    setSelectedServerType(planName);
    addToast('info', 'Default Favorite Plan Updated', `${planName.toUpperCase()} is now set as your default server plan.`);
  };

  const buildCreateServerPayload = () => {
    const payload = {
      name: newServerName.trim(),
      server_type: selectedServerType,
      image: Number(selectedSnapshotId) || selectedSnapshotId,
      location: selectedLocation,
      start_after_create: startAfterCreate,
      public_net: {
        enable_ipv4: enableIpv4,
        enable_ipv6: enableIpv6,
      },
    };
    if (selectedSshKeyIds.length > 0) {
      payload.ssh_keys = selectedSshKeyIds;
    }
    if (selectedFirewallIds.length > 0) {
      payload.firewalls = selectedFirewallIds.map((id) => ({ firewall: id }));
    }
    if (selectedNetworkIds.length > 0) {
      payload.networks = selectedNetworkIds;
    }
    if (selectedVolumeIds.length > 0) {
      payload.volumes = selectedVolumeIds;
      payload.automount = automountVolumes;
    }
    if (userDataScript.trim()) {
      payload.user_data = userDataScript;
    }
    const validLabels = deployLabels.reduce((acc, item) => {
      if (item.key.trim()) {
        acc[item.key.trim()] = item.value.trim();
      }
      return acc;
    }, {});
    if (Object.keys(validLabels).length > 0) {
      payload.labels = validLabels;
    }
    return payload;
  };

  const handleDeployServer = async (e) => {
    e.preventDefault();
    if (!selectedSnapshotId || !selectedServerType || !selectedLocation || !newServerName.trim()) {
      addToast('error', 'Missing Configuration', 'Please complete all required server fields.');
      return;
    }

    setIsDeployingServer(true);
    try {
      const payload = buildCreateServerPayload();

      const res = await hetznerRequest('POST', '/servers', payload);
      if (res?.server?.id && res?.root_password) {
        saveServerRootPassword(res.server.id, res.root_password);
      }
      setCreatedServerReceipt({
        server: res.server,
        rootPassword: res.root_password,
        snapshot: selectedSnapshotObj,
        pricing: selectedPlanPricing,
      });
      addToast('success', 'Server Provisioned!', `${payload.name} is being deployed in ${selectedLocation.toUpperCase()}.`);
      setNewServerName(generateHostname());
      if (!isDemoMode) {
        await fetchAllResources(true);
      }
    } catch (err) {
      addToast('error', 'Server Creation Failed', err.message);
      setErrorBanner({
        message: err.message,
        isNetworkOrCors: err.isNetworkOrCors,
        curl: err.curl,
      });
    } finally {
      setIsDeployingServer(false);
    }
  };

  // ==========================================================================
  // COMPUTED METRICS & PRICING HELPERS
  // ==========================================================================
  const getPriceForLocation = useCallback((serverTypeObj, locName) => {
    if (!serverTypeObj?.prices?.length) {
      return { hourly: '0.0000', monthly: '0.00', traffic: '20 TB' };
    }
    const priceEntry =
      serverTypeObj.prices.find((p) => p.location === locName) || serverTypeObj.prices[0];
    return {
      hourly: parseFloat(priceEntry.price_hourly?.net || 0).toFixed(4),
      monthly: parseFloat(priceEntry.price_monthly?.net || 0).toFixed(2),
      traffic: formatBytesToTB(priceEntry.included_traffic),
    };
  }, []);

  const dashboardMetrics = useMemo(() => {
    const runningCount = servers.filter((s) => s.status === 'running').length;
    const totalVcpu = servers.reduce((acc, s) => acc + (s.server_type?.cores || 0), 0);
    const totalRam = servers.reduce((acc, s) => acc + (s.server_type?.memory || 0), 0);
    const serversMonthly = servers.reduce((acc, s) => {
      const loc = s.datacenter?.location?.name || 'fsn1';
      const p = getPriceForLocation(s.server_type, loc);
      return acc + parseFloat(p.monthly || 0);
    }, 0);
    const snapshotsMonthly = snapshots.reduce((acc, snap) => {
      return acc + (snap.image_size || 0) * snapshotPricePerGb;
    }, 0);

    // Calculate Current Month-to-Date (MTD) Usage in Euros based on elapsed hours in current month
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const hoursElapsedInMonth = Math.max(1, (now.getTime() - startOfMonth.getTime()) / (1000 * 60 * 60));

    const serversMtd = servers.reduce((acc, s) => {
      const loc = s.datacenter?.location?.name || 'fsn1';
      const p = getPriceForLocation(s.server_type, loc);
      const hourlyRate = parseFloat(p.hourly || 0);
      const monthlyCap = parseFloat(p.monthly || 0);
      const createdDate = s.created ? new Date(s.created) : startOfMonth;
      const effectiveStart = createdDate > startOfMonth ? createdDate : startOfMonth;
      const activeHours = Math.max(1, (now.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60));
      return acc + Math.min(monthlyCap, activeHours * hourlyRate);
    }, 0);

    const snapshotsMtd = snapshots.reduce((acc, snap) => {
      const monthlySnapCost = (snap.image_size || 0) * snapshotPricePerGb;
      const fractionOfMonth = Math.min(1, hoursElapsedInMonth / 730);
      return acc + monthlySnapCost * fractionOfMonth;
    }, 0);

    const currentUsageEur = (serversMtd + snapshotsMtd).toFixed(2);
    const totalMonthlyEstimate = (serversMonthly + snapshotsMonthly).toFixed(2);

    return {
      totalServers: servers.length,
      runningCount,
      totalSnapshots: snapshots.length,
      totalVcpu,
      totalRam,
      currentUsageEur,
      monthlySpend: totalMonthlyEstimate,
      snapshotsMonthly: snapshotsMonthly.toFixed(2),
      monthLabel: now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    };
  }, [servers, snapshots, snapshotPricePerGb, getPriceForLocation]);

  const selectedSnapshotObj = useMemo(
    () => snapshots.find((s) => String(s.id) === String(selectedSnapshotId)) || null,
    [snapshots, selectedSnapshotId]
  );

  const selectedLocationObj = useMemo(
    () => locations.find((l) => l.name === selectedLocation) || locations[0] || null,
    [locations, selectedLocation]
  );

  const selectedServerTypeObj = useMemo(
    () => serverTypes.find((t) => t.name === selectedServerType) || serverTypes[0] || null,
    [serverTypes, selectedServerType]
  );

  const selectedPlanPricing = useMemo(
    () => getPriceForLocation(selectedServerTypeObj, selectedLocation),
    [selectedServerTypeObj, selectedLocation, getPriceForLocation]
  );

  const filteredServerTypes = useMemo(() => {
    let list = [...serverTypes];
    if (archFilter !== 'all') {
      list = list.filter((t) => t.architecture === archFilter);
    }
    if (planSearchQuery.trim()) {
      const q = planSearchQuery.trim().toLowerCase();
      list = list.filter(
        (t) =>
          t.name?.toLowerCase().includes(q) ||
          t.description?.toLowerCase().includes(q) ||
          t.cpu_type?.toLowerCase().includes(q) ||
          `${t.cores} vcpu`.includes(q) ||
          `${t.memory} gb`.includes(q)
      );
    }
    list.sort((a, b) => {
      if (a.name === favoritePlanName) return -1;
      if (b.name === favoritePlanName) return 1;
      if (sortBy === 'name_asc') return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
      if (sortBy === 'cores_desc') return b.cores - a.cores;
      if (sortBy === 'ram_desc') return b.memory - a.memory;
      const priceA = parseFloat(getPriceForLocation(a, selectedLocation).monthly);
      const priceB = parseFloat(getPriceForLocation(b, selectedLocation).monthly);
      return priceA - priceB;
    });
    return list;
  }, [serverTypes, archFilter, planSearchQuery, sortBy, selectedLocation, getPriceForLocation, favoritePlanName]);

  // Check compatibility between selected snapshot & server type
  const compatibilityIssues = useMemo(() => {
    const issues = [];
    if (!selectedSnapshotObj || !selectedServerTypeObj) return issues;
    if (
      selectedSnapshotObj.architecture &&
      selectedServerTypeObj.architecture &&
      selectedSnapshotObj.architecture !== selectedServerTypeObj.architecture
    ) {
      issues.push(
        `Architecture mismatch: Snapshot is ${selectedSnapshotObj.architecture.toUpperCase()} but ${selectedServerTypeObj.name.toUpperCase()} is ${selectedServerTypeObj.architecture.toUpperCase()}.`
      );
    }
    if (
      selectedSnapshotObj.disk_size &&
      selectedServerTypeObj.disk &&
      selectedSnapshotObj.disk_size > selectedServerTypeObj.disk
    ) {
      issues.push(
        `Disk too small: Snapshot requires ${selectedSnapshotObj.disk_size} GB NVMe, but ${selectedServerTypeObj.name.toUpperCase()} only has ${selectedServerTypeObj.disk} GB.`
      );
    }
    return issues;
  }, [selectedSnapshotObj, selectedServerTypeObj]);

  const isConnected = isDemoMode || Boolean(apiToken);

  // ==========================================================================
  // RENDER
  // ==========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-[#D50C2D] selection:text-white">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D50C2D] flex items-center justify-center shadow-lg shadow-[#D50C2D]/25 shrink-0">
              <Server className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white">
                  Hetzner Cloud
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Manager
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                api.hetzner.cloud/v1 Console
              </p>
            </div>
          </div>

          {/* Connection Status & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isDemoMode ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Interactive Demo</span>
              </div>
            ) : apiToken ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Live API Connected</span>
                <span className="sm:hidden">Live</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Disconnected</span>
              </div>
            )}

            {isConnected && (
              <button
                onClick={() => fetchAllResources()}
                disabled={isLoading}
                title="Refresh Resources"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#D50C2D]' : ''}`} />
              </button>
            )}

            <button
              onClick={() => setShowTokenModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition"
            >
              <Key className="w-4 h-4 text-[#D50C2D]" />
              <span className="hidden md:inline">{isConnected ? 'API Settings' : 'Connect Token'}</span>
            </button>

            {isConnected && (
              <button
                onClick={handleDisconnect}
                title="Disconnect"
                className="p-2 rounded-lg bg-slate-800/70 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700/80 transition"
              >
                <Power className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {/* CORS / API ERROR BANNER */}
        {errorBanner && (
          <div className="mb-6 rounded-xl bg-red-950/50 border border-red-500/40 p-4 sm:p-5 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-red-200 text-sm sm:text-base">
                    Hetzner API Request Issue
                  </h3>
                  <p className="text-xs sm:text-sm text-red-300/90 leading-relaxed">
                    {errorBanner.message}
                  </p>
                  {errorBanner.isNetworkOrCors && (
                    <p className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      <strong>Tip:</strong> Sandboxed iframe previews sometimes block direct outbound calls to{' '}
                      <code className="text-amber-300">api.hetzner.cloud</code>. You can switch to{' '}
                      <strong>Interactive Demo Mode</strong> with one click to test the full workflow, or run the equivalent{' '}
                      <code className="text-emerald-300">curl</code> command locally:
                    </p>
                  )}
                  {errorBanner.curl && (
                    <div className="flex items-center justify-between gap-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-xs text-slate-300 overflow-x-auto">
                      <code className="truncate">{errorBanner.curl}</code>
                      <button
                        onClick={() => handleCopy(errorBanner.curl, 'cURL copied')}
                        className="shrink-0 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {!isDemoMode && (
                  <button
                    onClick={handleEnableDemoMode}
                    className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition flex items-center gap-1.5 shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Switch to Demo Mode
                  </button>
                )}
                <button
                  onClick={() => setErrorBanner(null)}
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EMPTY / NOT CONNECTED LANDING CARD */}
        {!isConnected ? (
          <div className="my-12 max-w-2xl mx-auto rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#D50C2D]/15 border border-[#D50C2D]/30 flex items-center justify-center mx-auto mb-5">
              <Server className="w-8 h-8 text-[#D50C2D]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Manage Your Hetzner Cloud Infrastructure
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Connect with a Read &amp; Write Hetzner Cloud Project API Token to inspect servers, create disk snapshots, delete instances, and deploy new servers from snapshots with live pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setShowTokenModal(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D50C2D]/25 transition"
              >
                <Key className="w-4 h-4" />
                Enter Hetzner API Token
              </button>
              <button
                onClick={handleEnableDemoMode}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                Try Interactive Demo Mode
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* USAGE & INFRASTRUCTURE SUMMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {/* Card 1: Current Month Usage in Euros */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Current Usage ({dashboardMetrics.monthLabel})
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-amber-400">
                      €{dashboardMetrics.currentUsageEur}
                    </span>
                    <span className="text-xs text-slate-400">MTD net</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Est. full month: <strong className="text-slate-300">€{dashboardMetrics.monthlySpend}</strong>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Card 2: Active Projects */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Hetzner Projects
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-white">
                      {projects.length || 1}
                    </span>
                    <span className="text-xs text-sky-400 font-medium">
                      {dashboardMetrics.totalServers} servers • {dashboardMetrics.totalSnapshots} snaps
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 truncate max-w-[190px]">
                    Active: <strong className="text-slate-300">{projects.find((p) => p.id === activeProjectId)?.name || 'Current Project'}</strong>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <FolderKanban className="w-5 h-5" />
                </div>
              </div>

              {/* Card 3: Total Compute */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Total Compute
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-white">
                      {dashboardMetrics.totalVcpu} <span className="text-sm font-normal text-slate-400">vCPU</span>
                    </span>
                    <span className="text-xs text-slate-400">
                      {dashboardMetrics.totalRam} GB RAM
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 mt-1">
                    {dashboardMetrics.runningCount} of {dashboardMetrics.totalServers} servers running
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* ALL PROJECTS DIRECTORY BAR */}
            <div className="mb-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2">
                  <FolderKanban className="w-4 h-4 text-[#D50C2D]" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    All Projects ({projects.length || 1})
                  </h2>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    — Select a project to switch context or add another Hetzner project token
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#D50C2D]" />
                  Add Project
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(projects.length > 0
                  ? projects
                  : [
                      {
                        id: 'default-active',
                        name: 'Current Hetzner Project',
                        description: 'Connected via active API token',
                        token: apiToken,
                        status: 'active',
                      },
                    ]
                ).map((proj) => {
                  const isCurrent = proj.id === activeProjectId || (projects.length === 0 && proj.id === 'default-active');
                  const displayServers = isCurrent ? servers.length : proj.serversCount ?? 0;
                  const displayMtd = isCurrent ? dashboardMetrics.currentUsageEur : proj.mtdUsage || '0.00';
                  const displayEst = isCurrent ? dashboardMetrics.monthlySpend : proj.monthlyEstimate || '0.00';

                  return (
                    <div
                      key={proj.id}
                      onClick={() => handleSwitchProject(proj)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSwitchProject(proj);
                        }
                      }}
                      className={`p-3.5 rounded-xl border transition cursor-pointer flex flex-col justify-between gap-2.5 ${
                        isCurrent
                          ? 'bg-[#D50C2D]/10 border-[#D50C2D] ring-1 ring-[#D50C2D]/60'
                          : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white truncate">{proj.name}</span>
                            {isCurrent && (
                              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#D50C2D] text-white shrink-0">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {proj.description}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 shrink-0">
                          {proj.id.slice(0, 10)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                        <span className="text-slate-400">
                          <strong className="text-slate-200">{displayServers}</strong> Servers
                        </span>
                        <span className="text-amber-400 font-semibold">
                          €{displayMtd} <span className="text-slate-500 font-normal">MTD</span>
                        </span>
                        <span className="text-emerald-400 font-semibold">
                          €{displayEst}<span className="text-slate-500 font-normal">/mo</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* SAVED DEPLOY TEMPLATES QUICK-LAUNCH BAR ON MAIN PROJECT SCREEN */}
              {snapshotTemplates.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Saved Deploy Templates ({snapshotTemplates.length})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('deploy')}
                      className="text-[11px] text-slate-400 hover:text-white transition"
                    >
                      + Create New Template
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {snapshotTemplates.map((tmpl) => {
                      const isDeployingThis = activeDeployingTemplateId === tmpl.id;
                      const planPrice = getPriceForLocation(
                        serverTypes.find((t) => t.name === tmpl.serverType),
                        tmpl.location
                      );

                      return (
                        <div
                          key={tmpl.id}
                          className="inline-flex items-center rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 overflow-hidden shadow-sm transition"
                        >
                          <button
                            type="button"
                            disabled={isDeployingThis}
                            onClick={() => handleOneClickDeploySavedTemplate(tmpl)}
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600/15 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition disabled:opacity-50"
                            title={`One-click deploy "${tmpl.name}" (${tmpl.serverType.toUpperCase()} in ${tmpl.location.toUpperCase()} from ${tmpl.snapshotDesc})`}
                          >
                            {isDeployingThis ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Play className="w-3.5 h-3.5 fill-current" />
                            )}
                            <span>Deploy Template ({tmpl.name})</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/25 text-emerald-200">
                              {tmpl.serverType ? tmpl.serverType.toUpperCase() : 'CX22'} • {tmpl.location ? tmpl.location.toUpperCase() : 'FSN1'} • €{planPrice?.monthly || '0.00'}/mo
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleLoadTemplateIntoDeploy(tmpl)}
                            title="Edit or inspect template in Create Server screen"
                            className="px-2 py-2 text-slate-400 hover:text-white hover:bg-slate-800 border-l border-slate-800 transition"
                          >
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteDeployTemplate(tmpl.id, tmpl.name)}
                            title="Remove Deploy Template"
                            className="px-2 py-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 border-l border-slate-800 transition"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* NAVIGATION TABS */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
                <button
                  onClick={() => setActiveTab('servers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    activeTab === 'servers'
                      ? 'bg-[#D50C2D] text-white shadow-md shadow-[#D50C2D]/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Server className="w-4 h-4" />
                  <span>Servers</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeTab === 'servers' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {servers.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('snapshots')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    activeTab === 'snapshots'
                      ? 'bg-[#D50C2D] text-white shadow-md shadow-[#D50C2D]/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>Snapshots</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeTab === 'snapshots' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {snapshots.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('deploy')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    activeTab === 'deploy'
                      ? 'bg-[#D50C2D] text-white shadow-md shadow-[#D50C2D]/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Deploy from Snapshot</span>
                </button>
              </div>

              {activeTab !== 'deploy' && (
                <button
                  onClick={() => setActiveTab('deploy')}
                  className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition shadow-lg shadow-emerald-950/40"
                >
                  <PlusCircle className="w-4 h-4" />
                  Create Server from Snapshot
                </button>
              )}
            </div>

            {/* ============================================================== */}
            {/* TAB 1: SERVERS LIST VIEW                                       */}
            {/* ============================================================== */}
            {activeTab === 'servers' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white">Project Cloud Servers</h2>
                    <p className="text-xs text-slate-400">
                      Inspect active instances, create disk snapshots, or permanently delete servers.
                    </p>
                  </div>
                  <button
                    onClick={() => fetchAllResources()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 transition"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                    Sync
                  </button>
                </div>

                {isLoading && servers.length === 0 ? (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-12 text-center">
                    <Loader2 className="w-8 h-8 text-[#D50C2D] animate-spin mx-auto mb-3" />
                    <p className="text-sm text-slate-400">Loading servers from Hetzner Cloud...</p>
                  </div>
                ) : servers.length === 0 ? (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-12 text-center">
                    <Server className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <h3 className="text-base font-semibold text-white mb-1">No Servers Found</h3>
                    <p className="text-sm text-slate-400 mb-5">
                      There are currently no servers in this Hetzner Cloud project.
                    </p>
                    <button
                      onClick={() => setActiveTab('deploy')}
                      className="px-4 py-2.5 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white text-sm font-semibold inline-flex items-center gap-2 transition"
                    >
                      <PlusCircle className="w-4 h-4" />
                      Deploy New Server from Snapshot
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {servers.map((srv) => {
                      const locName = srv.datacenter?.location?.name || 'fsn1';
                      const locCity = srv.datacenter?.location?.city || locName.toUpperCase();
                      const pricing = getPriceForLocation(srv.server_type, locName);
                      const ipv4 = srv.public_net?.ipv4?.ip;
                      const ipv6 = srv.public_net?.ipv6?.ip;
                      const rootPwd = serverPasswords[String(srv.id)];
                      const isPwdRevealed = Boolean(revealedPasswordIds[String(srv.id)]);
                      const isRunning = srv.status === 'running';
                      const isInitializing = srv.status === 'initializing' || srv.status === 'starting';

                      return (
                        <div
                          key={srv.id}
                          className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 transition shadow-sm"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                            {/* Left: Status, Name, ID & IP */}
                            <div className="space-y-2.5">
                              <div className="flex flex-wrap items-center gap-2.5">
                                <span
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                                    isRunning
                                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                      : isInitializing
                                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                      : 'bg-slate-800 text-slate-400 border-slate-700'
                                  }`}
                                >
                                  <span
                                    className={`w-2 h-2 rounded-full ${
                                      isRunning
                                        ? 'bg-emerald-400 animate-pulse'
                                        : isInitializing
                                        ? 'bg-amber-400 animate-ping'
                                        : 'bg-slate-500'
                                    }`}
                                  />
                                  {srv.status.toUpperCase()}
                                </span>

                                <h3 className="text-lg font-bold text-white tracking-tight">
                                  {srv.name}
                                </h3>

                                <span className="text-xs font-mono text-slate-500">
                                  #{srv.id}
                                </span>
                              </div>

                              {/* Network & Location Row */}
                              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
                                {ipv4 && (
                                  <>
                                    <button
                                      onClick={() => handleCopy(ipv4, 'IPv4 Copied')}
                                      className="inline-flex items-center gap-1.5 font-mono bg-slate-950 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-200 transition"
                                      title="Click to copy IPv4"
                                    >
                                      <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>{ipv4}</span>
                                      {copiedText === ipv4 ? (
                                        <Check className="w-3 h-3 text-emerald-400" />
                                      ) : (
                                        <Copy className="w-3 h-3 text-slate-500" />
                                      )}
                                    </button>
                                    <a
                                      href={`data:application/x-rdp;charset=utf-8,${encodeURIComponent(
                                        `full address:s:${ipv4}\nprompt for credentials:i:1\n`
                                      )}`}
                                      download={`server-${srv.id}.rdp`}
                                      className="inline-flex items-center rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 font-semibold text-sky-300 transition hover:border-sky-400/50 hover:bg-sky-500/20"
                                      title="Download a Remote Desktop connection file for this server"
                                    >
                                      RDP
                                    </a>
                                  </>
                                )}

                                {ipv6 && (
                                  <button
                                    onClick={() => handleCopy(ipv6, 'IPv6 Copied')}
                                    className="inline-flex items-center gap-1.5 font-mono bg-slate-950 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-400 hover:text-slate-200 transition"
                                    title="Click to copy IPv6"
                                  >
                                    <span>{ipv6}</span>
                                    <Copy className="w-3 h-3 text-slate-500" />
                                  </button>
                                )}

                                <div
                                  className="inline-flex items-center gap-1.5 font-mono bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-200"
                                  title={
                                    rootPwd
                                      ? 'Initial root password captured upon server creation'
                                      : 'Hetzner API only returns initial root password once upon creation without SSH keys'
                                  }
                                >
                                  <Key className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <span className="text-slate-400">root:</span>
                                  {rootPwd ? (
                                    <>
                                      <span className="text-amber-300 select-all">
                                        {isPwdRevealed ? rootPwd : '••••••••••••'}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setRevealedPasswordIds((prev) => ({
                                            ...prev,
                                            [String(srv.id)]: !prev[String(srv.id)],
                                          }))
                                        }
                                        className="p-0.5 text-slate-400 hover:text-white transition"
                                        title={isPwdRevealed ? 'Hide root password' : 'Show root password'}
                                      >
                                        {isPwdRevealed ? (
                                          <EyeOff className="w-3.5 h-3.5" />
                                        ) : (
                                          <Eye className="w-3.5 h-3.5" />
                                        )}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCopy(rootPwd, 'Root Password Copied')}
                                        className="p-0.5 text-slate-400 hover:text-emerald-400 transition"
                                        title="Copy root password"
                                      >
                                        {copiedText === rootPwd ? (
                                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                                        ) : (
                                          <Copy className="w-3.5 h-3.5" />
                                        )}
                                      </button>
                                    </>
                                  ) : (
                                    <span className="text-slate-500 italic font-sans">
                                      SSH key / not stored
                                    </span>
                                  )}
                                </div>

                                <span className="inline-flex items-center gap-1.5 text-slate-400">
                                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                                  <strong className="text-slate-200 uppercase">{locName}</strong> ({locCity})
                                </span>

                                {srv.image && (
                                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                                    <span>{srv.image.description || srv.image.name}</span>
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Middle: Hardware Specs & Price */}
                            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6 bg-slate-950/70 px-4 py-3 rounded-xl border border-slate-800/80">
                              <div>
                                <div className="text-xs font-bold uppercase text-[#D50C2D]">
                                  {srv.server_type?.name}
                                </div>
                                <div className="text-[11px] text-slate-400 uppercase">
                                  {srv.server_type?.architecture || 'x86'} • {srv.server_type?.cpu_type || 'shared'}
                                </div>
                              </div>

                              <div className="h-8 w-px bg-slate-800 hidden sm:block" />

                              <div className="flex items-center gap-4 text-xs">
                                <div>
                                  <span className="text-slate-400 block">vCPU</span>
                                  <span className="font-semibold text-white">
                                    {srv.server_type?.cores} Cores
                                  </span>
                                </div>
                                <div>
                                  <span className="text-slate-400 block">RAM</span>
                                  <span className="font-semibold text-white">
                                    {srv.server_type?.memory} GB
                                  </span>
                                </div>
                                <div>
                                  <span className="text-slate-400 block">NVMe</span>
                                  <span className="font-semibold text-white">
                                    {srv.server_type?.disk} GB
                                  </span>
                                </div>
                              </div>

                              <div className="h-8 w-px bg-slate-800 hidden sm:block" />

                              <div className="text-right">
                                <div className="text-sm font-bold text-emerald-400">
                                  €{pricing.monthly}
                                  <span className="text-xs font-normal text-slate-400">/mo</span>
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  €{pricing.hourly}/hr
                                </div>
                              </div>
                            </div>

                            {/* Right: Actions (Snapshot & Delete, Make Snapshot, Power, Delete) */}
                            <div className="flex flex-wrap items-center gap-2 shrink-0">
                              <button
                                onClick={() => openSnapshotAndDeleteModal(srv, true)}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#D50C2D] to-rose-600 hover:from-[#b80a26] hover:to-rose-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#D50C2D]/20 transition"
                                title="Gracefully shutdown server, create verified snapshot, then delete server"
                              >
                                <Camera className="w-4 h-4" />
                                <span>Snapshot &amp; Delete</span>
                              </button>

                              <button
                                onClick={() => openCreateSnapshotModal(srv)}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs sm:text-sm font-semibold transition"
                                title="Create disk snapshot only"
                              >
                                <Camera className="w-4 h-4" />
                                <span className="hidden xl:inline">Snapshot</span>
                              </button>

                              <button
                                onClick={() =>
                                  handleToggleServerPower(srv, srv.status === 'off' ? 'poweron' : 'shutdown')
                                }
                                disabled={srv.status === 'stopping' || srv.status === 'starting'}
                                className={`p-2.5 rounded-xl border transition disabled:opacity-40 ${
                                  srv.status === 'off'
                                    ? 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border-emerald-500/30'
                                    : 'bg-red-500/15 hover:bg-red-500/25 text-red-400 border-red-500/30'
                                }`}
                                title={srv.status === 'off' ? 'Power On Server' : 'Send ACPI Shutdown'}
                              >
                                <Power className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => {
                                  setDeleteServerTarget(srv);
                                  setDeleteServerConfirmText('');
                                }}
                                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 hover:border-red-600 text-xs sm:text-sm font-semibold transition"
                                title="Delete Server Immediately"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB 2: SNAPSHOTS LIST VIEW                                     */}
            {/* ============================================================== */}
            {activeTab === 'snapshots' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-bold text-white">Custom Disk Snapshots &amp; Templates</h2>
                    <p className="text-xs text-slate-400">
                      Billed at €{snapshotPricePerGb.toFixed(4)}/GB/month. Use one-click templates to deploy servers instantly.
                    </p>
                  </div>
                  <button
                    onClick={() => fetchAllResources()}
                    className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 transition"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                    Refresh Snapshots
                  </button>
                </div>

                {snapshots.length === 0 ? (
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-12 text-center">
                    <Camera className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <h3 className="text-base font-semibold text-white mb-1">No Snapshots Available</h3>
                    <p className="text-sm text-slate-400 mb-5 max-w-md mx-auto">
                      You haven&apos;t created any snapshots yet. Go to your Servers tab and click &ldquo;Make Snapshot&rdquo; on any server to capture its disk image.
                    </p>
                    <button
                      onClick={() => setActiveTab('servers')}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold inline-flex items-center gap-2 transition"
                    >
                      <Server className="w-4 h-4" />
                      Go to Servers
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {snapshots.map((snap) => {
                      const isAvailable = snap.status === 'available';
                      const estMonthlyCost = ((snap.image_size || 0) * snapshotPricePerGb).toFixed(2);

                      return (
                        <div
                          key={snap.id}
                          className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 flex flex-col justify-between gap-4 transition"
                        >
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                                  isAvailable
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                    : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                }`}
                              >
                                {isAvailable ? (
                                  <CheckCircle2 className="w-3 h-3" />
                                ) : (
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                )}
                                {snap.status.toUpperCase()}
                              </span>

                              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {snap.architecture || 'x86'}
                              </span>
                            </div>

                            <div>
                              <h3 className="text-base font-bold text-white line-clamp-1">
                                {snap.description || `Snapshot #${snap.id}`}
                              </h3>
                              <p className="text-xs font-mono text-slate-500 mt-0.5">
                                ID: {snap.id} • {snap.os_flavor || 'linux'} {snap.os_version || ''}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs">
                              <div>
                                <span className="text-slate-500 block">Image Size</span>
                                <span className="font-semibold text-white">
                                  {snap.image_size ? `${snap.image_size} GB` : '—'}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-500 block">Min Disk</span>
                                <span className="font-semibold text-white">
                                  {snap.disk_size ? `${snap.disk_size} GB` : '20 GB'}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-500 block">Storage Cost</span>
                                <span className="font-semibold text-emerald-400">
                                  €{estMonthlyCost}/mo
                                </span>
                              </div>
                            </div>

                            <div className="text-[11px] text-slate-400">
                              Created: {formatDate(snap.created)}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/80">
                            <div className="flex items-center gap-2">
                              <button
                                disabled={!isAvailable}
                                onClick={() => handleSelectSnapshotForDeploy(snap)}
                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-semibold transition"
                              >
                                <PlusCircle className="w-3.5 h-3.5" />
                                Create Server
                              </button>

                              <button
                                onClick={() => setDeleteSnapshotTarget(snap)}
                                title="Delete Snapshot"
                                className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-950/70 text-slate-400 hover:text-red-400 border border-slate-700 transition"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* ============================================================== */}
            {/* TAB 3: CREATE SERVER FROM SNAPSHOT CONFIGURATOR                */}
            {/* ============================================================== */}
            {activeTab === 'deploy' && (
              <form onSubmit={handleDeployServer} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT 2 COLUMNS: CONFIGURATION STEPS */}
                <div className="lg:col-span-2 space-y-6">
                  {/* SAVED DEPLOY TEMPLATES SELECTOR BAR */}
                  {snapshotTemplates.length > 0 && (
                    <section className="rounded-2xl bg-slate-900 border border-emerald-500/30 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          <h3 className="text-sm font-bold text-white">
                            Load Saved Deploy Template
                          </h3>
                        </div>
                        <span className="text-xs text-slate-400">
                          Click to pre-fill all settings below
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {snapshotTemplates.map((tmpl) => (
                          <button
                            type="button"
                            key={tmpl.id}
                            onClick={() => handleLoadTemplateIntoDeploy(tmpl)}
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-200 transition"
                          >
                            <span className="font-semibold text-emerald-400">{tmpl.name}</span>
                            <span className="text-slate-500">
                              ({tmpl.serverType.toUpperCase()} • {tmpl.location.toUpperCase()})
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* STEP 1: CHOOSE SNAPSHOT */}
                  <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#D50C2D] text-white text-xs font-bold flex items-center justify-center">
                        1
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        Choose Snapshot Image
                      </h2>
                    </div>

                    {snapshots.length === 0 ? (
                      <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-4 text-xs sm:text-sm text-amber-200 flex items-center justify-between gap-3">
                        <span>
                          You do not have any snapshots yet. Create one from an existing server first.
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveTab('servers')}
                          className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs"
                        >
                          View Servers
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {snapshots.map((snap) => {
                          const isSelected = String(snap.id) === String(selectedSnapshotId);
                          const isAvail = snap.status === 'available';

                          return (
                            <button
                              type="button"
                              key={snap.id}
                              disabled={!isAvail}
                              onClick={() => setSelectedSnapshotId(String(snap.id))}
                              className={`text-left p-4 rounded-xl border transition flex flex-col justify-between gap-2 ${
                                isSelected
                                  ? 'bg-[#D50C2D]/10 border-[#D50C2D] ring-1 ring-[#D50C2D]'
                                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                              } ${!isAvail ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="font-semibold text-sm text-white line-clamp-1">
                                  {snap.description || `Snapshot #${snap.id}`}
                                </span>
                                <span className="text-[11px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0">
                                  {snap.architecture || 'x86'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-xs text-slate-400">
                                <span>
                                  {snap.os_flavor || 'Linux'} • Min {snap.disk_size || 20} GB Disk
                                </span>
                                <span className="font-mono text-slate-500">#{snap.id}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </section>

                  {/* STEP 2: CHOOSE LOCATION */}
                  <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#D50C2D] text-white text-xs font-bold flex items-center justify-center">
                          2
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-white">
                          Select Datacenter Location
                        </h2>
                      </div>
                      <span className="text-xs text-slate-400">
                        Pricing updates per region
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {locations.map((loc) => {
                        const isSelected = loc.name === selectedLocation;
                        return (
                          <button
                            type="button"
                            key={loc.id}
                            onClick={() => setSelectedLocation(loc.name)}
                            className={`text-left p-3.5 rounded-xl border transition ${
                              isSelected
                                ? 'bg-[#D50C2D]/10 border-[#D50C2D] ring-1 ring-[#D50C2D]'
                                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-sm text-white uppercase">
                                {loc.name}
                              </span>
                              <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                                {loc.country}
                              </span>
                            </div>
                            <div className="text-xs text-slate-300 font-medium">{loc.city}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {loc.network_zone}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  {/* STEP 3: CHOOSE SERVER PLAN & PRICING */}
                  <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#D50C2D] text-white text-xs font-bold flex items-center justify-center">
                          3
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-white">
                          Choose Server Plan &amp; Specs
                        </h2>
                      </div>

                      {/* Search, Architecture & Sort Controls */}
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="relative flex-1 sm:flex-initial min-w-[175px]">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            value={planSearchQuery}
                            onChange={(e) => setPlanSearchQuery(e.target.value)}
                            placeholder="Search plan (e.g. cx22, dedicated)..."
                            className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                          />
                          {planSearchQuery && (
                            <button
                              type="button"
                              onClick={() => setPlanSearchQuery('')}
                              title="Clear search"
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                        {favoritePlanName && (
                          <button
                            type="button"
                            onClick={() => {
                              setArchFilter('all');
                              setPlanSearchQuery('');
                              setSelectedServerType(favoritePlanName);
                            }}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                              selectedServerType === favoritePlanName
                                ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                                : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/40'
                            }`}
                            title="Select your default favorite server plan"
                          >
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span>Favorite: {favoritePlanName.toUpperCase()}</span>
                          </button>
                        )}

                        <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                          {['all', 'x86', 'arm'].map((arch) => (
                            <button
                              type="button"
                              key={arch}
                              onClick={() => setArchFilter(arch)}
                              className={`px-2.5 py-1 rounded-md font-medium uppercase transition ${
                                archFilter === arch
                                  ? 'bg-slate-800 text-white'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {arch}
                            </button>
                          ))}
                        </div>

                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#D50C2D]"
                        >
                          <option value="name_asc">Name: A to Z</option>
                          <option value="price_asc">Price: Low to High</option>
                          <option value="cores_desc">vCPU: High to Low</option>
                          <option value="ram_desc">RAM: High to Low</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {filteredServerTypes.length === 0 ? (
                        <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-6 text-center text-xs text-slate-400">
                          No server plans match &ldquo;<span className="text-white font-semibold">{planSearchQuery}</span>&rdquo;.{' '}
                          <button
                            type="button"
                            onClick={() => {
                              setPlanSearchQuery('');
                              setArchFilter('all');
                            }}
                            className="text-[#D50C2D] hover:underline font-semibold ml-1"
                          >
                            Reset filters
                          </button>
                        </div>
                      ) : null}
                      {filteredServerTypes.map((plan) => {
                        const isSelected = plan.name === selectedServerType;
                        const isFavorite = plan.name === favoritePlanName;
                        const planPrice = getPriceForLocation(plan, selectedLocation);
                        const archMismatch =
                          selectedSnapshotObj?.architecture &&
                          plan.architecture !== selectedSnapshotObj.architecture;
                        const diskTooSmall =
                          selectedSnapshotObj?.disk_size &&
                          plan.disk < selectedSnapshotObj.disk_size;
                        const isIncompatible = archMismatch || diskTooSmall;

                        return (
                          <div
                            key={plan.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedServerType(plan.name)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedServerType(plan.name);
                              }
                            }}
                            className={`w-full text-left p-4 rounded-xl border transition cursor-pointer ${
                              isSelected
                                ? 'bg-[#D50C2D]/10 border-[#D50C2D] ring-1 ring-[#D50C2D]'
                                : isIncompatible
                                ? 'bg-slate-950/40 border-slate-800/60 opacity-60 hover:opacity-90'
                                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              {/* Plan Name & Type */}
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={(e) => handleToggleFavoritePlan(e, plan.name)}
                                    title={isFavorite ? 'Default Favorite Plan' : 'Set as Default Favorite Plan'}
                                    className={`p-1 rounded-md transition ${
                                      isFavorite
                                        ? 'text-amber-400 bg-amber-500/10'
                                        : 'text-slate-600 hover:text-amber-300 hover:bg-slate-800'
                                    }`}
                                  >
                                    <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400' : ''}`} />
                                  </button>
                                  <span className="font-bold text-base text-white uppercase">
                                    {plan.name}
                                  </span>
                                  {isFavorite && (
                                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                      Default Favorite
                                    </span>
                                  )}
                                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                    {plan.architecture}
                                  </span>
                                  <span
                                    className={`text-[11px] px-2 py-0.5 rounded capitalize ${
                                      plan.cpu_type === 'dedicated'
                                        ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                                        : 'bg-slate-800/80 text-slate-400'
                                    }`}
                                  >
                                    {plan.cpu_type} vCPU
                                  </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">{plan.description}</p>
                                {isIncompatible && (
                                  <p className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
                                    <AlertTriangle className="w-3 h-3 shrink-0" />
                                    {archMismatch
                                      ? `Requires ${selectedSnapshotObj.architecture.toUpperCase()} snapshot`
                                      : `Requires at least ${selectedSnapshotObj.disk_size} GB disk`}
                                  </p>
                                )}
                              </div>

                              {/* Characteristics */}
                              <div className="flex items-center gap-4 sm:gap-5 text-xs">
                                <div>
                                  <span className="text-slate-500 block">vCPU</span>
                                  <span className="font-bold text-slate-200">{plan.cores}</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 block">RAM</span>
                                  <span className="font-bold text-slate-200">{plan.memory} GB</span>
                                </div>
                                <div>
                                  <span className="text-slate-500 block">NVMe SSD</span>
                                  <span className="font-bold text-slate-200">{plan.disk} GB</span>
                                </div>
                                <div className="hidden md:block">
                                  <span className="text-slate-500 block">Traffic</span>
                                  <span className="font-bold text-slate-200">{planPrice.traffic}</span>
                                </div>

                                {/* Pricing */}
                                <div className="text-right pl-2 border-l border-slate-800 min-w-[88px]">
                                  <div className="text-base font-bold text-emerald-400">
                                    €{planPrice.monthly}
                                    <span className="text-xs font-normal text-slate-400">/mo</span>
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    €{planPrice.hourly}/hr
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* STEP 4: SERVER HOSTNAME, NETWORKING & API OPTIONS */}
                  <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 space-y-5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#D50C2D] text-white text-xs font-bold flex items-center justify-center">
                        4
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        Server Hostname, Networking &amp; API Options
                      </h2>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Server Hostname *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          value={newServerName}
                          onChange={(e) => setNewServerName(e.target.value)}
                          placeholder="e.g. web-eu-prod-01"
                          className="flex-1 bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setNewServerName(generateHostname())}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                        >
                          Randomize
                        </button>
                      </div>
                    </div>

                    {/* Public Network IPv4 / IPv6 Options (public_net) */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Public Network (<code className="text-slate-300 lowercase">public_net</code>)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 cursor-pointer select-none">
                          <div>
                            <span className="text-xs font-semibold text-white block">Public IPv4 Address</span>
                            <span className="text-[11px] text-slate-400">Primary IPv4 (~€0.60/mo)</span>
                          </div>
                          <input
                            type="checkbox"
                            checked={enableIpv4}
                            onChange={(e) => setEnableIpv4(e.target.checked)}
                            className="w-4 h-4 rounded accent-[#D50C2D]"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 cursor-pointer select-none">
                          <div>
                            <span className="text-xs font-semibold text-white block">Public IPv6 Subnet (/64)</span>
                            <span className="text-[11px] text-slate-400">Included free</span>
                          </div>
                          <input
                            type="checkbox"
                            checked={enableIpv6}
                            onChange={(e) => setEnableIpv6(e.target.checked)}
                            className="w-4 h-4 rounded accent-[#D50C2D]"
                          />
                        </label>
                      </div>
                    </div>

                    {sshKeys.length > 0 && (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          Project SSH Keys (<code className="text-slate-300 lowercase">ssh_keys</code>)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {sshKeys.map((key) => {
                            const checked = selectedSshKeyIds.includes(key.id);
                            return (
                              <button
                                type="button"
                                key={key.id}
                                onClick={() =>
                                  setSelectedSshKeyIds((prev) =>
                                    prev.includes(key.id)
                                      ? prev.filter((id) => id !== key.id)
                                      : [...prev, key.id]
                                  )
                                }
                                className={`flex items-center justify-between p-3 rounded-xl border text-left transition ${
                                  checked
                                    ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-semibold truncate">{key.name}</div>
                                  <div className="text-[10px] font-mono text-slate-500 truncate">
                                    {key.fingerprint}
                                  </div>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                    checked
                                      ? 'bg-emerald-500 text-slate-950'
                                      : 'border border-slate-600'
                                  }`}
                                >
                                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Firewalls from GET /firewalls */}
                    {firewalls.length > 0 && (
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          <Shield className="w-3.5 h-3.5 text-sky-400" />
                          <span>Cloud Firewalls (<code className="text-slate-300 lowercase">firewalls</code>)</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {firewalls.map((fw) => {
                            const checked = selectedFirewallIds.includes(fw.id);
                            return (
                              <button
                                type="button"
                                key={fw.id}
                                onClick={() =>
                                  setSelectedFirewallIds((prev) =>
                                    prev.includes(fw.id)
                                      ? prev.filter((id) => id !== fw.id)
                                      : [...prev, fw.id]
                                  )
                                }
                                className={`flex items-center justify-between p-3 rounded-xl border text-left transition ${
                                  checked
                                    ? 'bg-sky-500/10 border-sky-500/40 text-white'
                                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-semibold truncate">{fw.name}</div>
                                  <div className="text-[10px] text-slate-500">
                                    {fw.rules?.length || 0} rule(s) • ID #{fw.id}
                                  </div>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                    checked ? 'bg-sky-500 text-slate-950' : 'border border-slate-600'
                                  }`}
                                >
                                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Private Networks from GET /networks */}
                    {networks.length > 0 && (
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          <Network className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Private Networks (<code className="text-slate-300 lowercase">networks</code>)</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {networks.map((net) => {
                            const checked = selectedNetworkIds.includes(net.id);
                            return (
                              <button
                                type="button"
                                key={net.id}
                                onClick={() =>
                                  setSelectedNetworkIds((prev) =>
                                    prev.includes(net.id)
                                      ? prev.filter((id) => id !== net.id)
                                      : [...prev, net.id]
                                  )
                                }
                                className={`flex items-center justify-between p-3 rounded-xl border text-left transition ${
                                  checked
                                    ? 'bg-indigo-500/10 border-indigo-500/40 text-white'
                                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                <div className="min-w-0 pr-2">
                                  <div className="text-xs font-semibold truncate">{net.name}</div>
                                  <div className="text-[10px] font-mono text-slate-500">
                                    {net.ip_range} • ID #{net.id}
                                  </div>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                    checked ? 'bg-indigo-500 text-white' : 'border border-slate-600'
                                  }`}
                                >
                                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Attach Unattached Volumes in Selected Location from GET /volumes */}
                    {volumes.filter((v) => !v.server && v.location?.name === selectedLocation).length > 0 && (
                      <div className="space-y-2.5">
                        <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Attach Volumes in {selectedLocation.toUpperCase()} (<code className="text-slate-300 lowercase">volumes</code>)</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {volumes
                            .filter((v) => !v.server && v.location?.name === selectedLocation)
                            .map((vol) => {
                              const checked = selectedVolumeIds.includes(vol.id);
                              return (
                                <button
                                  type="button"
                                  key={vol.id}
                                  onClick={() =>
                                    setSelectedVolumeIds((prev) =>
                                      prev.includes(vol.id)
                                        ? prev.filter((id) => id !== vol.id)
                                        : [...prev, vol.id]
                                    )
                                  }
                                  className={`flex items-center justify-between p-3 rounded-xl border text-left transition ${
                                    checked
                                      ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                                  }`}
                                >
                                  <div className="min-w-0 pr-2">
                                    <div className="text-xs font-semibold truncate">{vol.name}</div>
                                    <div className="text-[10px] text-slate-500">
                                      {vol.size} GB NVMe • ID #{vol.id}
                                    </div>
                                  </div>
                                  <div
                                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                                      checked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-600'
                                    }`}
                                  >
                                    {checked && <Check className="w-3 h-3 stroke-[3]" />}
                                  </div>
                                </button>
                              );
                            })}
                        </div>
                        {selectedVolumeIds.length > 0 && (
                          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={automountVolumes}
                              onChange={(e) => setAutomountVolumes(e.target.checked)}
                              className="w-3.5 h-3.5 rounded accent-emerald-500"
                            />
                            <span>Automount attached volumes (<code className="text-slate-400">automount: true</code>)</span>
                          </label>
                        )}
                      </div>
                    )}

                    {/* Collapsible Cloud-Init User Data & Labels */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <button
                        type="button"
                        onClick={() => setShowAdvancedApiOptions((prev) => !prev)}
                        className="flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-white py-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileCode2 className="w-3.5 h-3.5 text-[#D50C2D]" />
                          Advanced API Parameters (Cloud-Init <code className="text-slate-400">user_data</code> &amp; <code className="text-slate-400">labels</code>)
                        </span>
                        {showAdvancedApiOptions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {showAdvancedApiOptions && (
                        <div className="mt-3 space-y-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                              Cloud-Init User Data (<code className="text-slate-300 lowercase">user_data</code>)
                            </label>
                            <textarea
                              rows={4}
                              value={userDataScript}
                              onChange={(e) => setUserDataScript(e.target.value)}
                              placeholder={'#cloud-config\npackages:\n  - htop\n  - curl'}
                              className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl p-3 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                <Tag className="w-3.5 h-3.5" />
                                <span>Resource Labels (<code className="text-slate-300 lowercase">labels</code>)</span>
                              </label>
                              <button
                                type="button"
                                onClick={() => setDeployLabels((prev) => [...prev, { key: '', value: '' }])}
                                className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold"
                              >
                                + Add Label
                              </button>
                            </div>
                            <div className="space-y-2">
                              {deployLabels.map((lbl, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={lbl.key}
                                    onChange={(e) =>
                                      setDeployLabels((prev) =>
                                        prev.map((item, i) => (i === idx ? { ...item, key: e.target.value } : item))
                                      )
                                    }
                                    placeholder="key (e.g. env)"
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none"
                                  />
                                  <input
                                    type="text"
                                    value={lbl.value}
                                    onChange={(e) =>
                                      setDeployLabels((prev) =>
                                        prev.map((item, i) => (i === idx ? { ...item, value: e.target.value } : item))
                                      )
                                    }
                                    placeholder="value (e.g. prod)"
                                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none"
                                  />
                                  {deployLabels.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => setDeployLabels((prev) => prev.filter((_, i) => i !== idx))}
                                      className="p-1.5 text-slate-500 hover:text-red-400"
                                    >
                                      <X className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
                      <input
                        type="checkbox"
                        checked={startAfterCreate}
                        onChange={(e) => setStartAfterCreate(e.target.checked)}
                        className="w-4 h-4 rounded accent-[#D50C2D]"
                      />
                      <span className="text-sm text-slate-300">
                        Boot server immediately after creation (<code className="text-xs text-slate-400">start_after_create: true</code>)
                      </span>
                    </label>
                  </section>
                </div>

                {/* RIGHT COLUMN: STICKY ORDER SUMMARY */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5 shadow-xl">
                    <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                      Deployment Summary
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Snapshot Image</span>
                        <span className="font-semibold text-white text-right truncate max-w-[180px]">
                          {selectedSnapshotObj?.description || 'None selected'}
                        </span>
                      </div>

                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Location</span>
                        <span className="font-semibold text-white uppercase">
                          {selectedLocation} ({selectedLocationObj?.city || 'EU'})
                        </span>
                      </div>

                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Server Plan</span>
                        <span className="font-semibold text-[#D50C2D] uppercase">
                          {selectedServerTypeObj?.name || '—'}
                        </span>
                      </div>

                      {selectedServerTypeObj && (
                        <div className="rounded-xl bg-slate-950 p-3 border border-slate-800/90 grid grid-cols-3 gap-2 text-center text-xs">
                          <div>
                            <span className="text-slate-500 block">vCPU</span>
                            <span className="font-bold text-white">
                              {selectedServerTypeObj.cores} Cores
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">RAM</span>
                            <span className="font-bold text-white">
                              {selectedServerTypeObj.memory} GB
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Storage</span>
                            <span className="font-bold text-white">
                              {selectedServerTypeObj.disk} GB
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Included Traffic</span>
                        <span className="font-medium text-slate-200">
                          {selectedPlanPricing.traffic}
                        </span>
                      </div>

                      <div className="flex justify-between gap-2">
                        <span className="text-slate-400">Public IP</span>
                        <span className="font-medium text-slate-200">
                          {[enableIpv4 && 'IPv4', enableIpv6 && 'IPv6'].filter(Boolean).join(' + ') || 'Private only'}
                        </span>
                      </div>

                      {(selectedFirewallIds.length > 0 || selectedNetworkIds.length > 0 || selectedVolumeIds.length > 0) && (
                        <div className="flex justify-between gap-2">
                          <span className="text-slate-400">Attachments</span>
                          <span className="font-medium text-slate-200 text-right">
                            {[
                              selectedFirewallIds.length > 0 && `${selectedFirewallIds.length} FW`,
                              selectedNetworkIds.length > 0 && `${selectedNetworkIds.length} Net`,
                              selectedVolumeIds.length > 0 && `${selectedVolumeIds.length} Vol`,
                            ]
                              .filter(Boolean)
                              .join(', ')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Live POST /servers Payload Preview */}
                    <details className="rounded-xl bg-slate-950 border border-slate-800 p-3 text-xs">
                      <summary className="cursor-pointer font-semibold text-slate-300 select-none">
                        Inspect <code className="text-[#D50C2D]">POST /servers</code> JSON Payload
                      </summary>
                      <pre className="mt-2.5 text-[11px] font-mono text-slate-400 overflow-x-auto max-h-44">
                        {JSON.stringify(buildCreateServerPayload(), null, 2)}
                      </pre>
                    </details>

                    {/* Compatibility Warnings */}
                    {compatibilityIssues.length > 0 && (
                      <div className="rounded-xl bg-red-950/60 border border-red-500/40 p-3 space-y-1.5">
                        {compatibilityIssues.map((issue, idx) => (
                          <p key={idx} className="text-xs text-red-300 flex items-start gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Total Pricing Box */}
                    <div className="pt-4 border-t border-slate-800">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-slate-400">Estimated Cost</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-400">
                            €{selectedPlanPricing.monthly}
                            <span className="text-xs font-normal text-slate-400">/mo</span>
                          </div>
                          <div className="text-xs text-slate-500">
                            €{selectedPlanPricing.hourly}/hour (excl. VAT)
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={
                        isDeployingServer ||
                        !selectedSnapshotObj ||
                        !newServerName.trim() ||
                        compatibilityIssues.length > 0
                      }
                      className="w-full py-3.5 px-4 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#D50C2D]/25 transition"
                    >
                      {isDeployingServer ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Provisioning Server...
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-4 h-4" />
                          Create Server Now
                        </>
                      )}
                    </button>

                    {/* SAVE CURRENT CONFIGURATION AS DEPLOY TEMPLATE */}
                    <div className="pt-3 border-t border-slate-800">
                      {!showSaveTemplateForm ? (
                        <button
                          type="button"
                          disabled={!selectedSnapshotObj || compatibilityIssues.length > 0}
                          onClick={() => {
                            setNewTemplateNameInput(
                              `${selectedSnapshotObj?.description?.slice(0, 16) || 'Server'}-${selectedServerType.toUpperCase()}`
                            );
                            setShowSaveTemplateForm(true);
                          }}
                          className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 disabled:opacity-40 text-emerald-300 border border-emerald-500/30 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          Save as Deploy Template
                        </button>
                      ) : (
                        <div className="space-y-2.5 bg-slate-950 p-3 rounded-xl border border-emerald-500/30">
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                            Deploy Template Name *
                          </label>
                          <input
                            type="text"
                            value={newTemplateNameInput}
                            onChange={(e) => setNewTemplateNameInput(e.target.value)}
                            placeholder="e.g. Prod Web Node"
                            className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-400 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                          />
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={handleSaveDeployTemplate}
                              className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition"
                            >
                              Save Template
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowSaveTemplateForm(false)}
                              className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            )}
          </>
        )}
      </main>

      {/* ==================================================================== */}
      {/* API TOKEN CONNECTION MODAL                                         */}
      {/* ==================================================================== */}
      {showTokenModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D50C2D]/15 border border-[#D50C2D]/30 flex items-center justify-center text-[#D50C2D]">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg">Connect Hetzner API</h3>
                  <p className="text-xs text-slate-400">Enter your project Cloud API token</p>
                </div>
              </div>
              {isConnected && (
                <button
                  onClick={() => setShowTokenModal(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <form onSubmit={handleConnectToken} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Hetzner Cloud API Token (Read/Write) *
                </label>
                <input
                  type="password"
                  required
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="e.g. jH9...secret_token_string"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-slate-600 focus:outline-none"
                />
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Generated in Hetzner Console &gt; Security &gt; API Tokens.
                </p>
              </div>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberToken}
                  onChange={(e) => setRememberToken(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#D50C2D]"
                />
                <span className="text-xs text-slate-300">Remember token in browser localStorage</span>
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white font-bold text-sm shadow-lg shadow-[#D50C2D]/25 transition flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Connect &amp; Load Resources
                </button>
                <button
                  type="button"
                  onClick={handleEnableDemoMode}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-semibold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Try Demo Mode
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* ONE-CLICK DEPLOY TEMPLATE MODAL                                    */}
      {/* ==================================================================== */}
      {/* Removed stale showTemplateModal block referencing undefined handlers */}

      {/* ==================================================================== */}
      {/* CREATED SERVER RECEIPT MODAL                                         */}
      {/* ==================================================================== */}
      {createdServerReceipt && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Server Provisioned!</h3>
                <p className="text-xs text-slate-400">
                  {createdServerReceipt.server?.name} (#{createdServerReceipt.server?.id})
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-3.5 space-y-2 text-xs">
              {createdServerReceipt.server?.public_net?.ipv4?.ip && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">IPv4 Address:</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(createdServerReceipt.server.public_net.ipv4.ip, 'IPv4 Copied')}
                    className="font-mono text-emerald-300 hover:underline flex items-center gap-1"
                  >
                    {createdServerReceipt.server.public_net.ipv4.ip}
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              )}
              {createdServerReceipt.rootPassword && (
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Root Password:</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(createdServerReceipt.rootPassword, 'Root Password Copied')}
                    className="font-mono text-amber-300 hover:underline flex items-center gap-1"
                  >
                    {createdServerReceipt.rootPassword}
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setCreatedServerReceipt(null);
                  setActiveTab('servers');
                }}
                className="px-4 py-2 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white text-xs font-semibold"
              >
                View in Servers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* SNAPSHOT & DELETE PIPELINE MODAL                                     */}
      {/* ==================================================================== */}
      {pipelineModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D50C2D]/15 border border-[#D50C2D]/30 flex items-center justify-center text-[#D50C2D]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    {pipelineModal.deleteAfterSnapshot
                      ? 'Safe Snapshot & Delete Pipeline'
                      : 'Graceful Shutdown & Disk Snapshot'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Target: <strong className="text-slate-200">{pipelineModal.server.name}</strong> (#{pipelineModal.server.id})
                  </p>
                </div>
              </div>
              {pipelineModal.phase !== 'running' && (
                <button
                  type="button"
                  onClick={() => setPipelineModal(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {pipelineModal.phase === 'confirm' && (
              <form onSubmit={executeSafeSnapshotPipeline} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Snapshot Description *
                  </label>
                  <input
                    type="text"
                    required
                    value={pipelineModal.description}
                    onChange={(e) =>
                      setPipelineModal((prev) => ({ ...prev, description: e.target.value }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="rounded-xl bg-slate-950 border border-slate-800 p-3.5 space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <span className="font-semibold text-white block">Verify &amp; ACPI Shutdown</span>
                      <span className="text-slate-400">{pipelineModal.steps.shutdown.detail}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <span className="font-semibold text-white block">Create &amp; Verify Snapshot</span>
                      <span className="text-slate-400">{pipelineModal.steps.snapshot.detail}</span>
                    </div>
                  </div>
                  {pipelineModal.deleteAfterSnapshot && (
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-950 text-red-300 border border-red-500/30 font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <span className="font-semibold text-red-300 block">Delete Server After Snapshot</span>
                        <span className="text-slate-400">{pipelineModal.steps.delete.detail}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setPipelineModal(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#D50C2D]/25"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {pipelineModal.deleteAfterSnapshot ? 'Start Snapshot & Delete' : 'Start Safe Snapshot'}
                  </button>
                </div>
              </form>
            )}

            {pipelineModal.phase !== 'confirm' && (
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-3 text-xs">
                  {(['shutdown', 'snapshot', 'delete']).map((stepKey, idx) => {
                    const step = pipelineModal.steps[stepKey];
                    if (stepKey === 'delete' && !pipelineModal.deleteAfterSnapshot) return null;
                    const titles = {
                      shutdown: 'Step 1: Graceful ACPI Shutdown',
                      snapshot: 'Step 2: Create & Verify Disk Snapshot',
                      delete: 'Step 3: Delete Server',
                    };
                    return (
                      <div key={stepKey} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {step.status === 'active' ? (
                            <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                          ) : step.status === 'done' || step.status === 'skipped' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : step.status === 'error' ? (
                            <XCircle className="w-4 h-4 text-red-400" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-slate-700 inline-block" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-white">{titles[stepKey] || `Step ${idx + 1}`}</div>
                          <div className="text-slate-400 mt-0.5 break-words">{step.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {pipelineModal.phase === 'running' && (
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Elapsed: {pipelineModal.elapsedSeconds}s</span>
                    {pipelineModal.showForcePoweroff && (
                      <button
                        type="button"
                        onClick={handleForcePoweroffDuringPipeline}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-semibold"
                      >
                        Force Hard Power-Off
                      </button>
                    )}
                  </div>
                )}

                {pipelineModal.phase !== 'running' && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setPipelineModal(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* STANDALONE CREATE SNAPSHOT MODAL                                     */}
      {/* ==================================================================== */}
      {snapshotModalServer && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Create Disk Snapshot</h3>
                  <p className="text-xs text-slate-400">From {snapshotModalServer.name}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSnapshotModalServer(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateSnapshot} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Snapshot Description *
                </label>
                <input
                  type="text"
                  required
                  value={snapshotDesc}
                  onChange={(e) => setSnapshotDesc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              {snapshotModalServer.status !== 'off' && (
                <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={shutdownBeforeSnapshot}
                    onChange={(e) => setShutdownBeforeSnapshot(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded accent-[#D50C2D]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">
                      Gracefully shutdown server first (Recommended)
                    </span>
                    <span className="text-slate-400">
                      Ensures filesystem consistency before imaging disk.
                    </span>
                  </div>
                </label>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSnapshotModalServer(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingSnapshot}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  {isCreatingSnapshot ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Camera className="w-3.5 h-3.5" />}
                  Create Snapshot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* DELETE SERVER CONFIRMATION MODAL                                     */}
      {/* ==================================================================== */}
      {deleteServerTarget && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-red-500/40 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Delete Server Permanently</h3>
                <p className="text-xs text-slate-400">
                  This will immediately destroy <strong className="text-white">{deleteServerTarget.name}</strong> and its primary disk.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                Type <strong className="text-white font-mono">{deleteServerTarget.name}</strong> to confirm:
              </label>
              <input
                type="text"
                value={deleteServerConfirmText}
                onChange={(e) => setDeleteServerConfirmText(e.target.value)}
                placeholder={deleteServerTarget.name}
                className="w-full bg-slate-950 border border-slate-800 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setDeleteServerTarget(null);
                  setDeleteServerConfirmText('');
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingServer || deleteServerConfirmText !== deleteServerTarget.name}
                onClick={handleDeleteServer}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                {isDeletingServer ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                Delete Server
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* DELETE SNAPSHOT CONFIRMATION MODAL                                   */}
      {/* ==================================================================== */}
      {deleteSnapshotTarget && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <Trash2 className="w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-bold text-white text-base">Delete Snapshot</h3>
                <p className="text-xs text-slate-400">
                  Remove <strong className="text-white">{deleteSnapshotTarget.description || `#${deleteSnapshotTarget.id}`}</strong>?
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeleteSnapshotTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingSnapshot}
                onClick={handleDeleteSnapshot}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5"
              >
                {isDeletingSnapshot ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                Delete Snapshot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* ADD HETZNER PROJECT MODAL                                            */}
      {/* ==================================================================== */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#D50C2D]/15 border border-[#D50C2D]/30 flex items-center justify-center">
                  <FolderKanban className="w-5 h-5 text-[#D50C2D]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Add Hetzner Cloud Project</h3>
                  <p className="text-xs text-slate-400">Each Hetzner project has its own API token</p>
                </div>
              </div>
              <button
                onClick={() => setShowAddProjectModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Project Name *
                </label>
                <input
                  type="text"
                  required
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="e.g. Production EU Cluster"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Description
                </label>
                <input
                  type="text"
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  placeholder="e.g. Web frontends & databases"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              {!isDemoMode && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Project API Token (Read &amp; Write) *
                  </label>
                  <input
                    type="password"
                    required
                    value={newProjectToken}
                    onChange={(e) => setNewProjectToken(e.target.value)}
                    placeholder="Paste Hetzner API token for this project..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#D50C2D] rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none"
                  />
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#D50C2D] hover:bg-[#b80a26] text-white text-xs font-semibold"
                >
                  Save &amp; Switch Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TOAST NOTIFICATIONS                                                  */}
      {/* ==================================================================== */}
      <div className="fixed bottom-14 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto rounded-xl p-3.5 shadow-xl border backdrop-blur-md flex items-start gap-3 transition ${
              t.type === 'error'
                ? 'bg-red-950/90 border-red-500/40 text-red-100'
                : t.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100'
                : 'bg-slate-900/95 border-slate-700 text-slate-100'
            }`}
          >
            {t.type === 'error' ? (
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            ) : t.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs flex-1 min-w-0">
              <div className="font-bold">{t.title}</div>
              {t.message && <div className="text-slate-300 mt-0.5 break-words">{t.message}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* COLLAPSIBLE API ACTIVITY CONSOLE DRAWER                              */}
      {/* ==================================================================== */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-900 border-t border-slate-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setIsConsoleOpen((prev) => !prev)}
            className="w-full h-10 flex items-center justify-between text-xs text-slate-400 hover:text-white transition"
          >
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#D50C2D]" />
              <span className="font-semibold text-slate-200">Hetzner API Activity Log</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300">
                {apiLogs.length} requests
              </span>
              {apiLogs[0] && (
                <span className="hidden sm:inline font-mono text-[11px] text-slate-500 truncate max-w-md">
                  Last: {apiLogs[0].method} {apiLogs[0].endpoint} ({apiLogs[0].status})
                </span>
              )}
            </div>
            {isConsoleOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>

          {isConsoleOpen && (
            <div className="py-3 border-t border-slate-800 max-h-52 overflow-y-auto space-y-1.5 font-mono text-xs">
              {apiLogs.length === 0 ? (
                <p className="text-slate-500 py-2">
                  No API calls recorded yet. Connect a token or start Demo Mode to inspect live REST calls.
                </p>
              ) : (
                apiLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex flex-wrap items-center justify-between gap-2 px-2.5 py-1.5 rounded bg-slate-950/90 border border-slate-800/80"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-slate-500">{log.timestamp}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded font-bold text-[10px] ${
                          log.method === 'GET'
                            ? 'bg-sky-500/15 text-sky-400'
                            : log.method === 'POST'
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : 'bg-red-500/15 text-red-400'
                        }`}
                      >
                        {log.method}
                      </span>
                      <span className="text-slate-200">{log.endpoint}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {log.note && <span className="text-slate-500">{log.note}</span>}
                      <span
                        className={`font-semibold ${
                          String(log.status).startsWith('2')
                            ? 'text-emerald-400'
                            : 'text-red-400'
                        }`}
                      >
                        {log.status}
                      </span>
                      <span className="text-slate-600">{log.durationMs}ms</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}