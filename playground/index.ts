import { createPublicClient, createWalletClient, http, parseAbi, keccak256, toHex } from "viem";
import { arbitrumSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import "dotenv/config";

const ABI = parseAbi([
  "function store_book(bytes32) returns (bytes32)",
  "function store_metadata(bytes32) returns (bytes32)",
  /*"function get_book() view returns (bytes32)",
  "function get_metadata() view returns (bytes32)"*/
]);

const account = privateKeyToAccount((process as any).env.PRIVATE_KEY);
const client = createWalletClient({
  chain: arbitrumSepolia,
  transport: http(),
  account,
});

const publicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

const CONTRACT_ADDRESS = "0xbfef8a9e82a77184c727afc25519c10bbebc3905";

async function storeBook(data: string) {
  try {
    const hash = keccak256(toHex(data));
    const tx = await client.writeContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "store_book",
      args: [hash],
    });
    await publicClient.waitForTransactionReceipt({ hash: tx });
    return hash;
  } catch (error) {
    console.error("Error storing book:", error);
    throw error;
  }
}

async function storeMetadata(data: string) {
  try {
    const hash = keccak256(toHex(data));
    const tx = await client.writeContract({
      abi: ABI,
      address: CONTRACT_ADDRESS,
      functionName: "store_metadata",
      args: [hash],
    });
    await publicClient.waitForTransactionReceipt({ hash: tx });
    return hash;
  } catch (error) {
    console.error("Error storing metadata:", error);
    throw error;
  }
}

/*async function getBook() {
  try {
    const result = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "get_book",
    });
    return result;
  } catch (error) {
    console.error("Error getting book:", error);
    throw error;
  }
}

async function getMetadata() {
  try {
    const result = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: "get_metadata",
    });
    return result;
  } catch (error) {
    console.error("Error getting metadata:", error);
    throw error;
  }
}*/

async function main() {
  try {
    const testData = {
      title: "Test Book",
      author: "Test Author",
      timestamp: Date.now()
    };

    console.log("Storing book data...");
    const bookHash = await storeBook(JSON.stringify(testData));
    console.log("Book hash:", bookHash);

    console.log("Storing metadata...");
    const metadataHash = await storeMetadata(JSON.stringify({ type: "book", created: Date.now() }));
    console.log("Metadata hash:", metadataHash);

    await new Promise(r => setTimeout(r, 5000));

    /*console.log("Retrieving book...");
    const storedBook = await getBook();
    console.log("Retrieved book hash:", storedBook);

    console.log("Retrieving metadata...");
    const storedMetadata = await getMetadata();
    console.log("Retrieved metadata hash:", storedMetadata);*/
  } catch (error) {
    console.error("Main error:", error);
    process.exit(1);
  }
}

main().catch(console.error);
