import {environment} from '../environments/environment';

export class RestAPIUrl {
  public static get fullHostURL() {
    const protocol = `${environment.serverMetaData.protocol}://`;
    const host = `${environment.serverMetaData.hostName}:${environment.serverMetaData.portNumber}`;
    const contextPath = `${environment.serverMetaData.contextPath}`;
    return `${protocol}${host}${contextPath}`;
  }
  private constructor() {
  }
}

