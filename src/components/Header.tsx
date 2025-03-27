import {
  OuiHeader,
  OuiHeaderSectionItem,
  OuiHeaderLogo,
  OuiHeaderLink,
  OuiHeaderSection,
  OuiHeaderBreadcrumbs,
  OuiAvatar,
  OuiHeaderSectionItemButton,
  OuiPopover,
  OuiFlexGroup,
  OuiFlexItem,
  OuiText,
  OuiContextMenu,
  OuiHideFor,
  OuiShowFor,
} from '@opensearch-project/oui';
// @ts-expect-error: lib doesn't provide types
import { htmlIdGenerator } from '@opensearch-project/oui/lib/services/accessibility';

import CollapsibleNav from './CollapsibleNav';
import aranciaSvg from '../images/arancia-full.svg';
import avatar from '../images/avatar.jpeg';
import { useState } from 'react';

function HeaderUserMenu() {
  const id = htmlIdGenerator()();
  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const button = (
    <OuiHeaderSectionItemButton
      aria-controls={id}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Account menu"
      onClick={onMenuButtonClick}
    >
      <OuiAvatar size="m" name="DarkSense" color={null} imageUrl={avatar} />
    </OuiHeaderSectionItemButton>
  );

  return (
    <OuiPopover
      id={id}
      button={button}
      isOpen={isOpen}
      anchorPosition="downRight"
      closePopover={closeMenu}
      panelPaddingSize="none"
    >
      <OuiContextMenu
        size="s"
        initialPanelId={0}
        panels={[
          {
            id: 0,
            title: (
              <OuiFlexGroup
                alignItems="center"
                gutterSize="s"
                responsive={false}
              >
                <OuiFlexItem grow={false}>
                  <OuiAvatar
                    size="l"
                    name="Mei Ling"
                    color={null}
                    imageUrl={avatar}
                  />
                </OuiFlexItem>

                <OuiFlexItem>
                  <OuiText>
                    <strong>Mei Ling</strong>
                  </OuiText>
                </OuiFlexItem>
              </OuiFlexGroup>
            ),
            items: [
              {
                name: 'Edit profile',
                icon: 'empty',
                href: '#',
              },
              {
                name: 'Logout',
                icon: 'empty',
                href: '#',
              },
            ],
          },
        ]}
      />
    </OuiPopover>
  );
}

function HeaderHelp() {
  const id = htmlIdGenerator()();
  const [isOpen, setIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const button = (
    <OuiHeaderSectionItemButton
      aria-controls={id}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label="Account menu"
      onClick={onMenuButtonClick}
    >
      <OuiHeaderLink iconType="help">Help</OuiHeaderLink>
    </OuiHeaderSectionItemButton>
  );

  return (
    <OuiPopover
      id={id}
      button={button}
      isOpen={isOpen}
      anchorPosition="downRight"
      closePopover={closeMenu}
      panelPaddingSize="m"
    >
      <div style={{ width: 300 }}>
        <OuiText size="s">
          <p>
            This is an open-source{' '}
            <a href="https://oui.opensearch.org/" target="_blank">
              OpenSearch UI
            </a>{' '}
            dashboard template. Check out the{' '}
            <a href="https://github.com/glauberm/dark-sense" target="_blank">
              source code
            </a>{' '}
            for more information.
          </p>
        </OuiText>
      </div>
    </OuiPopover>
  );
}

export default function Header() {
  return (
    <OuiHeader className="dsHeader" position="fixed">
      <OuiHeaderSection grow={false}>
        <OuiHeaderSectionItem border="right">
          <OuiHideFor sizes={['xs', 's', 'm']}>
            <CollapsibleNav />
          </OuiHideFor>
          <OuiShowFor sizes={['xs', 's', 'm']}>
            <CollapsibleNav isMobile />
          </OuiShowFor>
        </OuiHeaderSectionItem>

        <OuiHeaderSectionItem border="right">
          <OuiHeaderLogo iconType={aranciaSvg} iconTitle="Arancia">
            DarkSense
          </OuiHeaderLogo>
        </OuiHeaderSectionItem>
      </OuiHeaderSection>

      <OuiHeaderBreadcrumbs
        aria-label="Header breadcrumbs"
        className="oui-hideFor--xs"
        breadcrumbs={[{ text: 'Observability' }, { text: 'Logs' }]}
      />

      <OuiHeaderSection side="right">
        <OuiHeaderSectionItem>
          <HeaderUserMenu />
        </OuiHeaderSectionItem>
        <OuiHeaderSectionItem>
          <HeaderHelp />
        </OuiHeaderSectionItem>
      </OuiHeaderSection>
    </OuiHeader>
  );
}
