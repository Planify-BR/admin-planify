import SignIn from '@pages/signIn';
import Dashboard from '@pages/dashboard';
import Subscriptions from '@root/pages/subscriptions';
import CreatePlan from '@root/pages/plan/createPlan';
import Plans from '@root/pages/plan/plans';

const routes = [
  { path: '/', element: <SignIn />, isPublicRoute: true },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/plans', element: <Plans /> },
  { path: '/plans/new', element: <CreatePlan /> },
  { path: '/subscriptions', element: <Subscriptions /> },
];

export default routes;
