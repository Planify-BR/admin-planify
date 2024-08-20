import SignIn from '@pages/signIn';
import Dashboard from '@pages/dashboard';
import Plans from '@root/pages/plans';
import Subscriptions from '@root/pages/subscriptions';

const routes = [
  { path: '/', element: <SignIn />, isPublicRoute: true },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/plans', element: <Plans /> },
  { path: '/subscriptions', element: <Subscriptions /> },
];

export default routes;
