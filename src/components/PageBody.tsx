import {
  OuiPageBody,
  OuiPageContentBody,
  OuiPageHeader,
  OuiPageHeaderSection,
  OuiTitle,
} from '@opensearch-project/oui';

export default function PageBody({
  title,
  restrictWidth = true,
  children,
}: React.PropsWithChildren<{ title?: string; restrictWidth?: boolean }>) {
  return (
    <OuiPageBody className="dsPageBody">
      {title && (
        <OuiPageHeader restrictWidth={restrictWidth}>
          <OuiPageHeaderSection>
            <OuiTitle size="l">
              <h1>{title}</h1>
            </OuiTitle>
          </OuiPageHeaderSection>
        </OuiPageHeader>
      )}
      <OuiPageContentBody restrictWidth={restrictWidth}>
        {children}
      </OuiPageContentBody>
    </OuiPageBody>
  );
}
