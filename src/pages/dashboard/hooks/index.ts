import { useState, useEffect } from 'react';
import { SubscriptionServices } from '@domain/subscriptions/services';
import { SubscriptionStats } from '@domain/subscriptions/models';

export default function useDashboard() {
  const [stats, setStats] = useState<SubscriptionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const subscriptionService = new SubscriptionServices();

  async function fetchDashboardStats() {
    try {
      setIsLoading(true);
      const response = await subscriptionService.getSubscriptionStats();
      setStats(response);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar estatísticas');
      setStats(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return {
    stats,
    isLoading,
    error,
    refreshStats: fetchDashboardStats,
  };
}
