import path from 'path';

export type TWebpackPaths = {
    root: string;
    client: string;
    server: string;
    build: string;
    buildServer: string;
    buildClient: string;
    buildClientSsr: string;
    entryClient: string;
    entryServer: string;
    statsFileClient: string;
    publicClientPathSsr: string;
    publicClientPath: string;
}

export function makeJoin(pathMain: string, additionalPath: string): string {
  if (pathMain.includes('./')) {
    if (pathMain[pathMain.length - 1] === '/' || additionalPath[additionalPath.length - 1] === '/') {
      return `${pathMain}${additionalPath}`;
    }
    return `${pathMain}/${additionalPath}`;
  }
  return path.join(pathMain, additionalPath);
}

export function getPath(this: any, rootPath: string): TWebpackPaths {
  const buildPath = makeJoin(rootPath, 'build');
  const clientPath = makeJoin(rootPath, '_client');
  const serverPath = makeJoin(rootPath, '_server');
  const buildClientPath = makeJoin(buildPath, 'client');
  const buildClientSsrPath = makeJoin(rootPath, 'public/assets/client');

  return {
    root: rootPath,
    client: clientPath,
    server: serverPath,
    build: buildPath,
    buildServer: makeJoin(buildPath, 'server'),
    buildClient: buildClientPath,
    buildClientSsr: buildClientSsrPath,
    entryClient: makeJoin(clientPath, 'index.tsx'),
    entryServer: makeJoin(serverPath, 'index.ts'),
    statsFileClient: makeJoin(buildPath, '_server/index.ts'),
    publicClientPathSsr: '/assets/client/',
    publicClientPath: '',
  };
}

export const defaultRootPath = path.resolve(__dirname, '../');

export default getPath(defaultRootPath);
