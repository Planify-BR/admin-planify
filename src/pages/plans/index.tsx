import { useEffect } from "react";
import { usePlans } from "./hooks/usePlans";
import { Template } from "./template";

export default function Plans() {
  const hookParams = usePlans();

  const { getPlans, getScopes } = hookParams;

  const sharedProps = {
    ...hookParams,
  };

  useEffect(() => {
    Promise.all([getPlans(), getScopes()]);
  }, []);

  return <Template {...sharedProps} />;
}
