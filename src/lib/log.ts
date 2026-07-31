import log, { type LogLevelDesc } from 'loglevel';
import config from '$lib/config';

log.setLevel(config.LOG_LEVEL as LogLevelDesc);

export default log;