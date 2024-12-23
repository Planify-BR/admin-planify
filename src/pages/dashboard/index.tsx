import TemplatePage from "./template";
import useDashboard from "./hooks";

export default function Dashboard() {
  const hookParams = useDashboard();

  const sharedProps = {
    ...hookParams,
  };

  return (
    <>
      <TemplatePage {...sharedProps} />
    </>
  );
}
