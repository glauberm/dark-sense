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
import { useLocation, useNavigate } from 'react-router-dom';

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

export default function CollapsibleNav({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(!isMobile);
  const [navIsDocked, setNavIsDocked] = useState<boolean>(!isMobile);
  const [navIcon, setNavIcon] = useState<
    'menuLeft' | 'menuRight' | 'dockedLeft'
  >(isMobile ? 'menuRight' : 'menuLeft');
  const navigate = useNavigate();
  const location = useLocation();

  const linkMapFn = (
    link: OuiListGroupItemProps & { to: string }
  ): OuiListGroupItemProps => ({
    ...link,
    iconProps: { size: 'l' },
    isActive: location.pathname === link.to,
    onClick: () => {
      navigate(link.to);
    },
  });

  const OverviewLinks: OuiListGroupItemProps[] = [
    {
      label: 'Dashboard',
      iconType: 'dashboardApp',
      to: '/dashboard',
    },
    {
      label: 'Discover',
      iconType: 'discoverApp',
      to: '/discover',
    },
    {
      label: 'Visualize',
      iconType: 'visualizeApp',
      to: '/visualize',
    },
  ].map(linkMapFn);

  const ObservabilityLinks: OuiListGroupItemProps[] = [
    {
      label: 'Applications',
      iconType: 'spacesApp',
      to: '/applications',
    },
    {
      label: 'Logs',
      iconType: 'reportingApp',
      to: '/',
    },
    {
      label: 'Metrics',
      iconType: 'metricbeatApp',
      to: '/metrics',
    },
    {
      label: 'Traces',
      iconType: 'layers',
      to: '/traces',
    },
    {
      label: 'Pipelines',
      iconType: 'pipelineApp',
      to: '/pipelines',
    },
  ].map(linkMapFn);

  const ToolsLinks: OuiListGroupItemProps[] = [
    {
      label: 'Reports',
      iconType: 'reporter',
      to: '/reports',
    },
    {
      label: 'Alerts',
      iconType: 'watchesApp',
      to: '/alerts',
    },
    {
      label: 'Anomaly Detection',
      iconType: 'anomalyDetection',
      to: '/anomaly-detection',
    },
    {
      label: 'Search Relevance',
      iconType: 'searchProfilerApp',
      to: '/search-relevance',
    },
    {
      label: 'Machine Learning',
      iconType: 'machineLearningApp',
      to: '/machine-learning',
    },
  ].map(linkMapFn);

  const ConfigurationLinks: OuiListGroupItemProps[] = [
    {
      label: 'General',
      iconType: 'managementApp',
      to: '/general-config',
    },
    {
      label: 'Security',
      iconType: 'securityApp',
      to: '/security-config',
    },
    {
      label: 'Notifications',
      iconType: 'bell',
      to: '/notifications-config',
    },
    {
      label: 'Dev Tools',
      iconType: 'devToolsApp',
      to: '/dev-tools',
    },
  ].map(linkMapFn);

  useEffect(() => {
    if (navIsDocked) {
      setNavIcon('menuLeft');
    } else if (navIsOpen) {
      setNavIcon(isMobile ? 'menuLeft' : 'dockedLeft');
    } else {
      setNavIcon('menuRight');
    }
  }, [isMobile, navIsDocked, navIsOpen]);

  const toggleNavigation = () => {
    if (navIsDocked) {
      setNavIsDocked(false);
      if (navIsOpen) setNavIsOpen(false);
    } else if (navIsOpen) {
      if (!isMobile) setNavIsDocked(true);
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
