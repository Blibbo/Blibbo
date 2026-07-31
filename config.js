export function getEnvMode() {
  const envMode =
    process.env.VITE_ENV === 'production' ||
    process.env.VITE_ENV === 'development'
      ? process.env.VITE_ENV
      : (() => {
          throw new Error("VITE_ENV must be 'production' or 'development'");
        })();

  return envMode;
}

export function getBuildType(){
  const buildType = process.env.VITE_BUILD === 'static' ||
    process.env.VITE_BUILD === 'watch' ||
    process.env.VITE_BUILD === 'reload' ||
    process.env.VITE_BUILD === 'hmr' ?
    process.env.VITE_BUILD :
    (() => { throw new Error('VITE_BUILD must be static or watch or hmr'); })();
  
  return buildType;
}

export function getLogLevel(){
  const logLevel = process.env.VITE_LOG_LEVEL === "trace" ||
    process.env.VITE_LOG_LEVEL === "debug" ||
    process.env.VITE_LOG_LEVEL === "info" ||
    process.env.VITE_LOG_LEVEL === "warn" ||
    process.env.VITE_LOG_LEVEL === "error" ?
    process.env.VITE_LOG_LEVEL :
    (() => { throw new Error("VITE_LOG_LEVEL must be either of trace, debug, info, warn or error."); })();

  return logLevel;
}

export function isLSP(){
  const userRanVite = process.env.RUN_FROM_POWERSHELL === '1'
  const additionalAttempts =
    process.env.VSCODE_PID ||
    process.env.NVIM ||
    process.env.SVELTE_LANGUAGE_SERVER;
  
  return (!userRanVite || additionalAttempts);
}

export function getPort(){
  const rawPort = process.env.PORT_VITE;
  if (!rawPort) throw new Error("PORT_VITE not set");

  const port = Number(rawPort);
  if (!Number.isInteger(port)) throw new Error("PORT_VITE must be a number");

  return port;
}