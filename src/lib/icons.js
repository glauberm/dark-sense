import { appendIconComponentCache } from '@opensearch-project/oui/es/components/icon/icon';

import { icon as OuiIconAnomalyDetection } from '@opensearch-project/oui/es/components/icon/assets/anomaly_detection';
import { icon as OuiIconAppDashboard } from '@opensearch-project/oui/es/components/icon/assets/app_dashboard';
import { icon as OuiIconAppDevtools } from '@opensearch-project/oui/es/components/icon/assets/app_devtools';
import { icon as OuiIconAppDiscover } from '@opensearch-project/oui/es/components/icon/assets/app_discover';
import { icon as OuiIconAppMachineLearning } from '@opensearch-project/oui/es/components/icon/assets/app_ml';
import { icon as OuiIconAppManagement } from '@opensearch-project/oui/es/components/icon/assets/app_management';
import { icon as OuiIconAppMetricbeat } from '@opensearch-project/oui/es/components/icon/assets/app_metricbeat';
import { icon as OuiIconAppPipeline } from '@opensearch-project/oui/es/components/icon/assets/app_pipeline';
import { icon as OuiIconAppReporting } from '@opensearch-project/oui/es/components/icon/assets/app_reporting';
import { icon as OuiIconAppSearchProfiler } from '@opensearch-project/oui/es/components/icon/assets/app_search_profiler';
import { icon as OuiIconAppSecurity } from '@opensearch-project/oui/es/components/icon/assets/app_security';
import { icon as OuiIconAppSpaces } from '@opensearch-project/oui/es/components/icon/assets/app_spaces';
import { icon as OuiIconAppVisualize } from '@opensearch-project/oui/es/components/icon/assets/app_visualize';
import { icon as OuiIconAppWatches } from '@opensearch-project/oui/es/components/icon/assets/app_watches';
import { icon as OuiIconBell } from '@opensearch-project/oui/es/components/icon/assets/bell';
import { icon as OuiIconCross } from '@opensearch-project/oui/es/components/icon/assets/cross';
import { icon as OuiIconDockedLeft } from '@opensearch-project/oui/es/components/icon/assets/dockedLeft';
import { icon as OuiIconHelp } from '@opensearch-project/oui/es/components/icon/assets/help';
import { icon as OuiIconLayers } from '@opensearch-project/oui/es/components/icon/assets/layers';
import { icon as OuiIconMenu } from '@opensearch-project/oui/es/components/icon/assets/menu';
import { icon as OuiIconMenuLeft } from '@opensearch-project/oui/es/components/icon/assets/menuLeft';
import { icon as OuiIconMenuRight } from '@opensearch-project/oui/es/components/icon/assets/menuRight';
import { icon as OuiIconReporter } from '@opensearch-project/oui/es/components/icon/assets/reporter';

appendIconComponentCache({
  anomalyDetection: OuiIconAnomalyDetection,
  bell: OuiIconBell,
  cross: OuiIconCross,
  dashboardApp: OuiIconAppDashboard,
  devToolsApp: OuiIconAppDevtools,
  discoverApp: OuiIconAppDiscover,
  dockedLeft: OuiIconDockedLeft,
  help: OuiIconHelp,
  layers: OuiIconLayers,
  machineLearningApp: OuiIconAppMachineLearning,
  managementApp: OuiIconAppManagement,
  menu: OuiIconMenu,
  menuLeft: OuiIconMenuLeft,
  menuRight: OuiIconMenuRight,
  metricbeatApp: OuiIconAppMetricbeat,
  pipelineApp: OuiIconAppPipeline,
  reporter: OuiIconReporter,
  reportingApp: OuiIconAppReporting,
  searchProfilerApp: OuiIconAppSearchProfiler,
  securityApp: OuiIconAppSecurity,
  spacesApp: OuiIconAppSpaces,
  visualizeApp: OuiIconAppVisualize,
  watchesApp: OuiIconAppWatches,
});
