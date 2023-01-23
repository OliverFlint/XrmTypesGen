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
  choices: boolean;
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
    Options: OptionSetOption[];
  };
}

export interface AttributeMetadata {
  '@odata.type'?: string;
  AttributeType: string;
  AttributeTypeName?: {
    Value: string;
  };
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

namespace FormObject {
  export interface Form {
    Tabs: {
      $values: Tab[];
    };
  }

  export interface Tab {
    Name: string;
    Columns: {
      $values: Column[];
    };
  }

  export interface Column {
    Name: string;
    Sections: {
      $values: Section[];
    };
  }
  export interface Section {
    Name: string;
    Rows: {
      $values: Row[];
    };
  }
  export interface Row {
    Name: string;
    Cells: {
      $values: Cell[];
    };
  }
  export interface Cell {
    Control: FormObject.Control;
  }

  export interface Control {
    DataFieldName: string;
    Id: string;
    ClassId: string;
  }
}
