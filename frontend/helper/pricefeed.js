import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export const getPriceInMatic = async (provider, priceInUsd) => {
  const sdk = new ThirdwebSDK(provider);

  const contract = await sdk.getContract(provider.env.CHAINLINK_FEED);

  const price =
    (await contract.call("latestAnswer")) / (await contract.call("decimals"));

  return priceInUsd / price;
};

export const getPriceInUsd = async (provider, priceInMatic) => {
  const sdk = new ThirdwebSDK(provider);

  const contract = await sdk.getContract(provider.env.CHAINLINK_FEED);

  const price =
    (await contract.call("latestAnswer")) / (await contract.call("decimals"));

  return priceInMatic * price;
};
