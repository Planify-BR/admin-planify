import { usePlans } from "./hooks/usePlans";
import { Template } from "./template";

export default function Plans() {
  const hookParams = usePlans();

  const sharedProps = {
    ...hookParams,
  };

  return <Template {...sharedProps} />;
}
