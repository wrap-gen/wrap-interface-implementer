import { WrapperMetadata } from "../../types/WrapperMetadata";
import { generateAssemblyscriptModule } from "./generateAssemblyscriptModule";

export function generateAssemblyscript(wrapperMetadataList: WrapperMetadata[]): void {
  generateAssemblyscriptModule("Query", "query", wrapperMetadataList);
  generateAssemblyscriptModule("Mutation", "mutation", wrapperMetadataList);
}