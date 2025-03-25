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
} from '@opensearch-project/oui';

import CollapsibleNav from './CollapsibleNav';
import aranciaSvg from '../images/arancia-full.svg';
import avatar from '../images/avatar.jpeg';

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
          <OuiHeaderSectionItemButton>
            <OuiAvatar
              size="m"
              name="DarkSense"
              color={null}
              imageUrl={avatar}
            />
          </OuiHeaderSectionItemButton>
        </OuiHeaderSectionItem>
        <OuiHeaderSectionItem>
          <OuiHeaderLinks aria-label="Header navigation">
            <OuiHeaderLink iconType="help" iconSize="m">
              Help
            </OuiHeaderLink>
          </OuiHeaderLinks>
        </OuiHeaderSectionItem>
      </OuiHeaderSection>
    </OuiHeader>
  );
}
