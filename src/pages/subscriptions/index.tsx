import { useEffect } from 'react';
import TemplatePage from './template';
import useSubscriptions from './hooks';

export default function Subscriptions() {
  const hookParams = useSubscriptions();
  const { getSubscriptions } = hookParams;

  const sharedProps = {
    ...hookParams
  };

  useEffect(() => {
      getSubscriptions();
  },[]);

  return (
    <>
      <TemplatePage {...sharedProps} />
    </>
  );
}
