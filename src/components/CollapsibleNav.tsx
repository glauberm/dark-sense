import { useEffect, useState } from 'react';
import {
  OuiCollapsibleNav,
  OuiCollapsibleNavGroup,
  OuiFlexItem,
  OuiHeaderSectionItemButton,
  OuiIcon,
  OuiListGroup,
  OuiListGroupItemProps,
} from '@opensearch-project/oui';

const linkMapFn = (link: OuiListGroupItemProps): OuiListGroupItemProps => ({
  ...link,
  iconProps: { size: 'l' },
  onClick: () => {},
});

const OverviewLinks: OuiListGroupItemProps[] = [
  { label: 'Dashboard', iconType: 'dashboardApp' },
  { label: 'Discover', iconType: 'discoverApp' },
  { label: 'Visualize', iconType: 'visualizeApp' },
].map(linkMapFn);

const ObservabilityLinks: OuiListGroupItemProps[] = [
  { label: 'Applications', iconType: 'spacesApp' },
  { label: 'Logs', iconType: 'reportingApp', isActive: true },
  { label: 'Metrics', iconType: 'metricbeatApp' },
  { label: 'Traces', iconType: 'layers' },
  { label: 'Pipelines', iconType: 'pipelineApp' },
].map(linkMapFn);

const ToolsLinks: OuiListGroupItemProps[] = [
  { label: 'Reports', iconType: 'reporter' },
  { label: 'Alerts', iconType: 'watchesApp' },
  { label: 'Anomaly Detection', iconType: 'anomalyDetection' },
  { label: 'Search Relevance', iconType: 'searchProfilerApp' },
  { label: 'Machine Learning', iconType: 'machineLearningApp' },
].map(linkMapFn);

const ConfigurationLinks: OuiListGroupItemProps[] = [
  { label: 'General', iconType: 'managementApp' },
  { label: 'Security', iconType: 'securityApp' },
  { label: 'Notifications', iconType: 'bell' },
  { label: 'Dev Tools', iconType: 'devToolsApp' },
].map(linkMapFn);

function CollapsibleNavGroup({
  title,
  links,
}: {
  title: string;
  links: OuiListGroupItemProps[];
}) {
  return (
    <OuiCollapsibleNavGroup
      title={title}
      titleSize="xxxs"
      isCollapsible={false}
    >
      <OuiListGroup
        aria-label={title}
        listItems={links}
        gutterSize="s"
        size="s"
      />
    </OuiCollapsibleNavGroup>
  );
}

export default function CollapsibleNav() {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(true);
  const [navIsDocked, setNavIsDocked] = useState<boolean>(true);
  const [navIcon, setNavIcon] = useState<
    'menuLeft' | 'menuRight' | 'dockedLeft'
  >('menuLeft');

  useEffect(() => {
    if (navIsDocked) {
      setNavIcon('menuLeft');
    } else if (navIsOpen) {
      setNavIcon('dockedLeft');
    } else {
      setNavIcon('menuRight');
    }
  }, [navIsDocked, navIsOpen]);

  const toggleNavigation = () => {
    if (navIsDocked) {
      setNavIsDocked(false);

      if (navIsOpen) {
        setNavIsOpen(false);
      }
    } else if (navIsOpen) {
      setNavIsDocked(true);
      setNavIsOpen(false);
    } else {
      setNavIsOpen(true);
    }
  };

  return (
    <OuiCollapsibleNav
      aria-label="Main navigation"
      className="dsCollapsibleNav"
      isOpen={navIsOpen}
      isDocked={navIsDocked}
      button={
        <OuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={toggleNavigation}
        >
          <OuiIcon type={navIcon} size="l" aria-hidden="true" />
        </OuiHeaderSectionItemButton>
      }
      showButtonIfDocked={true}
      onClose={() => setNavIsOpen(false)}
    >
      <OuiFlexItem className="oui-yScroll">
        <CollapsibleNavGroup title="Overview" links={OverviewLinks} />
        <CollapsibleNavGroup title="Observability" links={ObservabilityLinks} />
        <CollapsibleNavGroup title="Tools" links={ToolsLinks} />
        <CollapsibleNavGroup title="Configuration" links={ConfigurationLinks} />
      </OuiFlexItem>
    </OuiCollapsibleNav>
  );
}
