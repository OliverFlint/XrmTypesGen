import fetch from 'node-fetch';
import { TokenResponse } from 'adal-node';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { env } from 'process';

/** The adal (and msal) doesn't support ROPC flow with condidential client
 * https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc
 * > As part of not recommending this flow for use, the official SDKs do not support this
 * > flow for confidential clients, those that use a secret or assertion.
 * > You may find that the SDK you wish to use does not allow you to add a secret while using ROPC.
 * Unfortunately for OnPrem we don't have other client authentication flow available */

const agent: HttpsProxyAgent<string> | undefined = env.HTTPS_PROXY
    ? new HttpsProxyAgent(env.HTTPS_PROXY)
    : undefined;

export type ResourceOwnerUsernamePasswordRequest = {
    authority: string,
    resourceRequestUri: string;
    username: string,
    password: string,
    clientId: string,
    clientSecret: string
};
export function acquireTokenByResourceOwnerPasswordCredentials(
    request: ResourceOwnerUsernamePasswordRequest,
    // eslint-disable-next-line no-unused-vars
    callback: (token: TokenResponse) => void,
) {
    const body = `grant_type=password&client_id=${encodeURIComponent(request.clientId)}&resource=${encodeURIComponent(request.resourceRequestUri)}&scope=openid&client_secret=${encodeURIComponent(request.clientSecret)}&username=${encodeURIComponent(request.username)}&password=${encodeURIComponent(request.password)}`;
    const url = `${request.authority}/oauth2/token`;
    console.log(`Fetching from ${url}`);
    return fetch(`${request.authority}/oauth2/token`, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        agent,
    }).then((response) => response.json())
    .then((response) => {
        const token = {
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            expiresIn: response.expires_in,
            expiresOn: response.expires_on,
            resource: response.resource,
            tokenType: response.token_type,
        } as TokenResponse;
        callback(token);
    }).catch((error) => {
        console.error(error);
    });
}
