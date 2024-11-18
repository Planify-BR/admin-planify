import { Providers, ProviderState } from '@microsoft/mgt-element';

/**
 * Configuration object to be passed to MSAL instance on creation.
 */

export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const TENANT_ID = import.meta.env.VITE_TENANT_ID;
export const GROUP_ID = import.meta.env.VITE_GROUP_ID ?? null;

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = {
  scopes: ['User.Read', 'Group.Read.All', 'Users.Read.All', 'GroupMember.Read.All'],
};

export const msalConfig = {
  clientId: CLIENT_ID,
  authority: `https://login.microsoftonline.com/${TENANT_ID}`,
  redirectUri: `${window.location.origin}/settings`,
  scopes: ['User.Read', 'Group.Read.All', 'User.Read.All', 'GroupMember.Read.All'],
};

export async function getGroupMembers() {
  try {
    const provider = Providers.globalProvider;

    if (provider && provider.state === ProviderState.SignedIn) {
      const accessToken = await provider.getAccessToken();

      if (!accessToken) {
        return [];
      }

      const response = await provider.graph.client
        .api(`/groups/${GROUP_ID}/members`)
        .select('id,displayName')
        .get();

      if (response && response.value) {
        return response.value;
      } else {
        return [];
      }
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar membros do grupo:', error);
    return [];
  }
}

export async function getAllUsers() {
  try {
    const provider = Providers.globalProvider;

    if (provider && provider.state === ProviderState.SignedIn) {
      const accessToken = await provider.getAccessToken();

      if (!accessToken) {
        return [];
      }

      const response = await provider.graph.client.api('/users').select('id,displayName').get();

      if (response && response.value) {
        return response.value;
      } else {
        return [];
      }
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    return [];
  }
}
