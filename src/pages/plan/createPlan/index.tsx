import TemplatePage from './template';
import useCreatePlan from './hooks';

export default function CreatePlan() {
  const hookParams = useCreatePlan();

  const sharedProps = {
    ...hookParams,
  };

  return (
    <>
      <TemplatePage {...sharedProps} />
    </>
  );
}
