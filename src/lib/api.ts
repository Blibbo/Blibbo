
let envApi = import.meta.env.VITE_API;
const protocol = location.protocol;

if (import.meta.env.MODE === 'production') {
	envApi = envApi;
} else {
	envApi = envApi + ':' + import.meta.env.VITE_GO_PORT;
}

const wsProtocol = protocol === 'https:' ? 'wss:' : 'ws:'

const API     = protocol   + '//' + envApi + '/api';
const WS_API  = wsProtocol + '//' + envApi + '/api';

export const OFFLINE_BUILD = Boolean(import.meta.env.VITE_NO_API);

export async function api<T>(path: string): Promise<T | null> {
	if(OFFLINE_BUILD){
		return null;
	}
	const res = await fetch(`${API}${path}`);
	if (!res.ok) throw new Error('API error');
	return res.json();
}

export function wsApi(path: string): WebSocket {
  return new WebSocket(`${WS_API}${path}`);
}