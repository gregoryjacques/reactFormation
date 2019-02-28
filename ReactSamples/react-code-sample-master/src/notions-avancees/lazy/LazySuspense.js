import React, { Suspense } from 'react';

const Lazy = React.lazy(() => import('./LazyComponent'));

const FallbackComponent = () => <p>Fallback</p>;

const Sample = () => (
  <Suspense fallback={<FallbackComponent />}>
    <Lazy />
  </Suspense>
);

export default Sample;
