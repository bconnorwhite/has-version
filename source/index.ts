import fetch, { JSONObject } from "cross-fetch-json";

type RegistryError = {
  error: string;
}

type RegistryPackage = {
  versions: {
    [version: string]: JSONObject;
  };
}

type RegistryResponse = RegistryPackage | RegistryError;

function isPackage(response?: RegistryResponse): response is RegistryPackage {
  return response !== undefined && ((response as RegistryPackage).versions !== undefined);
}

export default async function hasVersion(name: string, version: string) {
  return fetch<RegistryResponse>(`http://registry.npmjs.org/${name}`).then((response) => {
    if(isPackage(response)) {
      return response.versions[version] !== undefined;
    } else {
      return undefined;
    }
  });
}
