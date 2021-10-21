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
