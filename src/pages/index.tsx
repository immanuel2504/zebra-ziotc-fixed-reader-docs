import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * TEMPORARY: the handheld landing page is archived in _archive/home-index.tsx.bak.
 * While only the Fixed Reader guides exist, the site root sends readers to /guides/.
 */
export default function Home(): React.JSX.Element {
  const guidesUrl = useBaseUrl('/guides/');
  return <Redirect to={guidesUrl} />;
}
