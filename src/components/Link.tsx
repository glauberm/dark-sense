import { MouseEvent, RefAttributes } from 'react';
import { OuiLink, OuiLinkAnchorProps } from '@opensearch-project/oui';
import { useNavigate, useHref, LinkProps } from 'react-router';

const isModifiedEvent = (event: MouseEvent) => {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

const isLeftClickEvent = (event: MouseEvent) => {
  return event.button === 0;
};

const isTargetBlank = (event: MouseEvent<HTMLAnchorElement>): boolean => {
  const target = event.target as HTMLAnchorElement;
  const targetAttr = target.getAttribute('target');

  return !!(targetAttr && targetAttr !== '_self');
};

export default function Link({
  to,
  ...rest
}: OuiLinkAnchorProps & LinkProps & RefAttributes<HTMLAnchorElement>) {
  const navigate = useNavigate();
  const href = useHref(to);

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented) {
      return;
    }

    if (
      isModifiedEvent(event) ||
      !isLeftClickEvent(event) ||
      isTargetBlank(event)
    ) {
      return;
    }

    event.preventDefault();

    navigate(to);
  }

  const props = { ...rest, href, onClick };

  return <OuiLink {...props} />;
}
