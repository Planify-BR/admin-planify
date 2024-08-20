import { useEffect } from 'react';
import TemplatePage from './template';
import usePlans from './hooks';

export default function Plans() {
  const hookParams = usePlans();
  const { getPlans } = hookParams;

  const sharedProps = {
    ...hookParams
  };

  useEffect(() => {
      getPlans();
  },[]);

  return (
    <>
      <TemplatePage {...sharedProps} />
    </>
  );
}
