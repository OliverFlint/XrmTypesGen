import { OptionValues } from 'commander';

export interface ProgramOptions extends OptionValues {
  clientid: string;
  entities: string;
  output: string;
  password: string;
  solution: string;
  tenent: string;
  url: string;
  username: string;
  earlybound: boolean;
  choices :boolean;
  globalChoices: boolean;
  localStorage: boolean;
  localChoices: boolean;
}

export interface Form {
  description: string;
  formactivationstate: number;
  formid: string;
  formjson: string;
  name: string;
  objecttypecode: string;
  type: number;
}

export interface OptionSet {
  Name: string;
  MetadataId: string;
  Options: OptionSetOption[];
}

export interface OptionSetOption {
  Value: number;
  Label: {
    UserLocalizedLabel: {
      Label: string;
    };
  };
}

export interface OptionSetSolution {
  objectid: string;
  
}

export interface LocalOptionSet {
  LogicalName: string;
  MetadataId: string;
  OptionSet: {
    IsGlobal: boolean;
    Options:OptionSetOption[];
  };
}

export interface AttributeMetadata {
  '@odata.type'?: string;
  AttributeType: string;
  LogicalName: string;
  MetadataId: string;
  SchemaName: string;
}

export interface EntityMetadata {
  Attributes: AttributeMetadata[];
  LogicalName: string;
  MetadataId: string;
  SchemaName: string;
}
