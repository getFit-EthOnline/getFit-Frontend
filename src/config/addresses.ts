export const FITNESS_AGENT_ADDRESS =
  "0x054ba199Ef61ef15226e2CeB61138f7d5E2F8408";
export const MOVE_TO_EARN_CONTRACT_ADDRESS_MORPH =
  "0xf7409b94F7285d27Ab1A456638A1110A4E55bFEC";
export const MOVE_TO_EARN_CONTRACT_ADDRESS_CHILIZ =
  "0x896014E51E9d379f3EB4628554327211F19f396b";
export const FAN_BATTLE_CONTRACT_ADDRESS =
  "0x8b6cE7068F22276F00d05eb73F2D4dDD21DEDbEf";
export const FAN_TOKEN_CONTRACT_ADDRESS =
  "0x56EF69e24c3bCa5135C18574b403273F1eB2Bd74";
export const REWARD_TOKEN_MORPH_ADDRESS =
  "0x94c17DD37ED3Ca85764b35BfD4d1CCc543b1bE3E";
export const AUTOPAY_CONTRACT_ADDRESS_SEPOLIA =
  "0x36A0C6ad26868FFA23D512AD8E0ee9E090122161";
export const AUTOPAY_CONTRACT_ADDRESS_BASE =
  "0x7899070557CF9758b8be4E0BE9dfF5a200D5ef6d";
export const USDC_TOKEN_ADDRESS_SEPOLIA =
  "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
export const USDC_TOKEN_ADDRESS_BASE =
  "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
import { Address } from "viem";
import { morphHolesky } from "viem/chains";
import { spicy } from "./chains";
export const GALADRIEL_FITNESS_AGENT_ADDRESS =
  "0x054ba199Ef61ef15226e2CeB61138f7d5E2F8408";

type AddressMap = {
  [chainId: number]: {
    USDC_TOKEN_ADDRESS: Address;
    BETTING_CONTRACT_ADDRESS: Address;
  };
};

export const ADDRESS_MAP: AddressMap = {
  [morphHolesky.id]: {
    USDC_TOKEN_ADDRESS: "0x94c17DD37ED3Ca85764b35BfD4d1CCc543b1bE3E",
    BETTING_CONTRACT_ADDRESS: "0x14097485976CB545d743452f66604bEAC141Cc98",
  },
  [spicy.id]: {
    USDC_TOKEN_ADDRESS: "0xF99b791257ab50be7F235BC825E7d4B83942cf38",
    BETTING_CONTRACT_ADDRESS: "0x9d24c52916A14afc31D86B5Aa046b252383ee444",
  },
};

export const getAddressesForChain = (chainId: number) => ADDRESS_MAP[chainId];
