import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import abi from "./feedabi.json";
//const multiplier = 10 ** 18;

export const getPriceInMatic = async (priceInUsd, provider) => {
  const sdk = new ThirdwebSDK(provider || process.env.PUBLIC_PROVIDER);

  const contract = await sdk.getContractFromAbi(
    process.env.CHAINLINK_FEED,
    abi
  );

  const price =
    (await contract.call("latestAnswer")) /
    10 ** (await contract.call("decimals"));

  return priceInUsd / price;
};

export const getPriceInUsd = async (priceInMatic, provider) => {
  const sdk = new ThirdwebSDK(provider || process.env.PUBLIC_PROVIDER);

  const contract = await sdk.getContractFromAbi(
    process.env.CHAINLINK_FEED,
    abi
  );
  const price =
    (await contract.call("latestAnswer")) /
    10 ** (await contract.call("decimals"));

  return priceInMatic * price;
};
