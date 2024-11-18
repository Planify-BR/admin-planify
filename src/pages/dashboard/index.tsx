import React from 'react';
import TemplateDashboard from './template';
import useDashboard from './hooks';

export default function Dashboard() {
  const hookParams = useDashboard();

  return <TemplateDashboard {...hookParams} />;
}
