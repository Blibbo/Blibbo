import log from '$lib/log';
import { wsApi } from '$lib/api';


if(import.meta.env.VITE_BUILD === 'reload'){

  log.debug('Reload: attempting to start live reload websocket connection.');
  const ws = wsApi('/__livereload');
  
  let pingTimer: NodeJS.Timeout;

  if(import.meta.env.VITE_CLIENT_MUST_PING === '1'){
    
    ws.onopen = () => {
      log.debug('Live reload websocket connection started, starting ping.');
      pingTimer = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send('ping');
          log.trace('Sent ping to server to keep live reload websocket alive.');
        }
      }, 1000);
    }
  }

  ws.onclose = () => {
    log.debug('Live reload websocket connection ended.');

    if(import.meta.env.VITE_CLIENT_MUST_PING === '1')
      clearInterval(pingTimer);
    
    location.reload();
    
  };

  ws.onmessage = (e) => {
    if (e.data === 'reload'){
      location.reload();
    }
  };

  ws.onerror = (err) => {
    log.warn('Live reload websocket error:', err);

    if(import.meta.env.VITE_CLIENT_MUST_PING === '1')
      clearInterval(pingTimer);
  };
}