import { Console_Query, Input_generate } from "./w3";
import { WrapperMetadata } from "../../shared/types/WrapperMetadata";
import { getWrapperMetadata } from "../../shared/metadata/getWrapperMetadata";
import { pascalCase } from "../../shared/utils/pascalCase";
import { generateSchema } from "../../shared/code-gen/schema/generateSchema";
import { generateAssemblyscript } from "../../shared/code-gen/assembly-script/generateAssemblyscript";

export function generate(input: Input_generate): bool {
  const interfaces = "ens/ethereum/console.web3api.eth,ens/rinkeby/wrap-regex.eth";
  const allInterfacesList = interfaces.split(",");

  const wrapperMetadataList: WrapperMetadata[] = [];

  for(let i = 0; i < allInterfacesList.length; i++) {
    const metadata = getWrapperMetadata(allInterfacesList[i]);

    if(metadata == null) {
      Console_Query.info({
        message: `Found no schema for interface: ${allInterfacesList[i]}`
      });
      continue;
    }

    wrapperMetadataList.push(metadata);
  }
  
  generateSchema(wrapperMetadataList);
  generateAssemblyscript(wrapperMetadataList);

  return true;
}
