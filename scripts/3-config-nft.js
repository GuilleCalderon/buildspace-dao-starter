import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xe09ec06224B9ce267db935CBB141D3d14c245a5A"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "THC",
        description: "Este NFT te da acceso a CannaDAO",
        image: readFileSync("scripts/assets/thc.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
