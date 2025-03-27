import {
  OuiHeader,
  OuiHeaderSectionItem,
  OuiHeaderLogo,
  OuiHeaderLinks,
  OuiHeaderLink,
  OuiHeaderSection,
  OuiHeaderBreadcrumbs,
  OuiAvatar,
  OuiHeaderSectionItemButton,
  OuiPopover,
  OuiFlexGroup,
  OuiFlexItem,
  OuiText,
  OuiSpacer,
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
      <div style={{ width: 320 }}>
        <OuiFlexGroup
          gutterSize="m"
          className="ouiHeaderProfile"
          responsive={false}
        >
          <OuiFlexItem grow={false}>
            <OuiAvatar
              size="m"
              name="DarkSense"
              color={null}
              imageUrl={avatar}
            />
          </OuiFlexItem>

          <OuiFlexItem>
            <OuiText>
              <p>DarkSense</p>
            </OuiText>

            <OuiSpacer size="m" />

            <OuiFlexGroup>
              <OuiFlexItem>
                <OuiFlexGroup justifyContent="spaceBetween">
                  <OuiFlexItem grow={false}>Edit profile</OuiFlexItem>

                  <OuiFlexItem grow={false}>Log out</OuiFlexItem>
                </OuiFlexGroup>
              </OuiFlexItem>
            </OuiFlexGroup>
          </OuiFlexItem>
        </OuiFlexGroup>
      </div>
    </OuiPopover>
  );
}

export default function Header() {
  return (
    <OuiHeader className="dsHeader" position="fixed">
      <OuiHeaderSection grow={false}>
        <OuiHeaderSectionItem border="right">
          <CollapsibleNav />
        </OuiHeaderSectionItem>

        <OuiHeaderSectionItem border="right">
          <OuiHeaderLogo iconType={aranciaSvg} iconTitle="Arancia">
            DarkSense
          </OuiHeaderLogo>
        </OuiHeaderSectionItem>
      </OuiHeaderSection>

      <OuiHeaderBreadcrumbs
        aria-label="Header breadcrumbs"
        breadcrumbs={[{ text: 'Observability' }, { text: 'Logs' }]}
      />

      <OuiHeaderSection side="right">
        <OuiHeaderSectionItem>
          <HeaderUserMenu />
        </OuiHeaderSectionItem>
        <OuiHeaderSectionItem>
          <OuiHeaderLinks aria-label="Header navigation">
            <OuiHeaderLink iconType="help">Help</OuiHeaderLink>
          </OuiHeaderLinks>
        </OuiHeaderSectionItem>
      </OuiHeaderSection>
    </OuiHeader>
  );
}
