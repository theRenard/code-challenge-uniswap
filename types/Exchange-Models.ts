export interface Token {
  chainId:  number;
  address:  string;
  name:     string;
  symbol:   string;
  decimals: number;
  logoURI?: string;
}

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export interface ExchangeData {
  name:      string;
  logoURI:   string;
  keywords:  string[];
  timestamp: string;
  tokens:    Token[];
  version:   Version;
}


export type Exchange = {
  [key: string]: {
    name: string,
    URI: string,
    default?: boolean;
    active: boolean;
    data?: ExchangeData
  }
}