import { Console_Query } from "../../../modules/mutation/w3/imported/Console_Query";
import { WrapperMetadata } from "../../types/WrapperMetadata";
import { generateModuleSchema } from "./generateModuleSchema";

export function generateSchema(wrapperMetadataList: WrapperMetadata[]): void {
  Console_Query.debug({
    message: `Generating schema...`
  });
  
  generateModuleSchema("Query", "query", wrapperMetadataList);
  generateModuleSchema("Mutation", "mutation", wrapperMetadataList);
}
