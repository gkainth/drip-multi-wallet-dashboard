import {AbiItem} from "web3-utils";

export const FUR_Contract = "0x48378891d6E459ca9a56B88b406E8F4eAB2e39bF";

export const FUR_Downline_NFT_Contract = "0x6836B3E7c02896482b40Dec17d9502038Dd69DB8";

export const FURVaultContractAddress = "0x4de2b5D4a343dDFBeEf976B3ED34737440385071";

export const FURAutoCompoundContractAddress = "0x085ada50622ea5098a4bd1b0bfb292bb0770eae9";

export const USDC_Contract = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";

export const furVaultABI: AbiItem[] | AbiItem = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
    }, {"indexed": false, "internalType": "address", "name": "newAdmin", "type": "address"}],
    "name": "AdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "from_", "type": "address"}, {
        "indexed": false,
        "internalType": "address",
        "name": "to_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "AirdropSent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "beacon", "type": "address"}],
    "name": "BeaconUpgraded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "particpant_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "Bonus",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "participant_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "Claim",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "participant_", "type": "address"}],
    "name": "Complete",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "participant_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "Compound",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "participant_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "participant_", "type": "address"}],
    "name": "Maxed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "participant_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "Tax",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "recipient_",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256"}],
    "name": "TokensSent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Unpaused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "implementation", "type": "address"}],
    "name": "Upgraded",
    "type": "event"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }], "name": "addToClaimed", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }], "name": "addToCompounded", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }], "name": "addToTaxed", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "addressBook",
    "outputs": [{"internalType": "contract IAddressBook", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "address",
        "name": "referrer_",
        "type": "address"
    }], "name": "adminUpdateReferrer", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "to_", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }],
    "name": "airdrop",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "amount_", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "minBalance_",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "maxBalance_", "type": "uint256"}],
    "name": "airdropTeam",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "autoCompound",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "availableRewards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "banParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "claim",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "claimPrecheck",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "compound",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "quantity_", "type": "uint256"}, {
        "internalType": "address",
        "name": "referrer_",
        "type": "address"
    }],
    "name": "deposit",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "quantity_", "type": "uint256"}],
    "name": "deposit",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "quantity_",
        "type": "uint256"
    }],
    "name": "depositFor",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "quantity_",
        "type": "uint256"
    }, {"internalType": "address", "name": "referrer_", "type": "address"}],
    "name": "depositFor",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "getParticipant",
    "outputs": [{
        "components": [{"internalType": "uint256", "name": "startTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
        }, {"internalType": "address", "name": "referrer", "type": "address"}, {
            "internalType": "uint256",
            "name": "deposited",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "compounded", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "claimed",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "taxed", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "awarded",
            "type": "uint256"
        }, {"internalType": "bool", "name": "negative", "type": "bool"}, {
            "internalType": "bool",
            "name": "penalized",
            "type": "bool"
        }, {"internalType": "bool", "name": "maxed", "type": "bool"}, {
            "internalType": "bool",
            "name": "banned",
            "type": "bool"
        }, {"internalType": "bool", "name": "teamWallet", "type": "bool"}, {
            "internalType": "bool",
            "name": "complete",
            "type": "bool"
        }, {"internalType": "uint256", "name": "maxedRate", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "availableRewards",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "lastRewardUpdate", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "directReferrals",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "airdropSent", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "airdropReceived",
            "type": "uint256"
        }], "internalType": "struct Vault.Participant", "name": "", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [], "name": "getProperties", "outputs": [{
        "components": [{"internalType": "uint256", "name": "period", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "lookbackPeriods",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "penaltyLookbackPeriods", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "maxPayout",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "maxReturn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "neutralClaims",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "negativeClaims", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "penaltyClaims",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "depositTax", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "depositReferralBonus",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "compoundTax", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "compoundReferralBonus",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "airdropTax", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "claimTax",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "maxReferralDepth", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "teamWalletRequirement",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "teamWalletChildBonus", "type": "uint256"}, {
            "internalType": "bool",
            "name": "devWalletReceivesBonuses",
            "type": "bool"
        }], "internalType": "struct Vault.Properties", "name": "", "type": "tuple"
    }], "stateMutability": "view", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "getReferrals",
    "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getStats",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "totalParticipants",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalDeposits", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalDeposited",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalCompounds", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalCompounded",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalClaims", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalClaimed",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalTaxed", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalTaxes",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalAirdropped", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalAirdrops",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalBonused", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalBonuses",
            "type": "uint256"
        }], "internalType": "struct Vault.Stats", "name": "", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "maxPayout",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "maxThreshold",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "negativeParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "participantBalance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "participantMaxed",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "participantStatus",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "penalizeParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "remainingPayout",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "rewardRate",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "address_", "type": "address"}],
    "name": "setAddressBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "claims_", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "rate_",
        "type": "uint256"
    }], "name": "setRate", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "twentyEightDayClaims",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "unbanParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "unnegativeParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "unpenalizeParticipant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function"
}]

export const furioAutoCompoundABI: AbiItem[] | AbiItem = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
    }, {"indexed": false, "internalType": "address", "name": "newAdmin", "type": "address"}],
    "name": "AdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "beacon", "type": "address"}],
    "name": "BeaconUpgraded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Unpaused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "implementation", "type": "address"}],
    "name": "Upgraded",
    "type": "event"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}, {
        "internalType": "uint256",
        "name": "periods_",
        "type": "uint256"
    }], "name": "addPeriods", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "addressBook",
    "outputs": [{"internalType": "contract IAddressBook", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "checker_", "type": "uint256"}],
    "name": "checker",
    "outputs": [{"internalType": "bool", "name": "canExec", "type": "bool"}, {
        "internalType": "bytes",
        "name": "execPayload",
        "type": "bytes"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "id_", "type": "uint256"}],
    "name": "compound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "compounding",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "compoundsLeft",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "due",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "end",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "id_", "type": "uint256"}],
    "name": "getAddress",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "getId",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "lastCompound",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "next",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "properties",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "maxPeriods",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "period", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "maxParticipants", "type": "uint256"}],
        "internalType": "struct AutoCompoundV3.Properties",
        "name": "",
        "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "address_", "type": "address"}],
    "name": "setAddressBook",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "checkers_", "type": "uint256"}],
    "name": "setCheckers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "fee_", "type": "uint256"}],
    "name": "setFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "max_", "type": "uint256"}],
    "name": "setMaxParticipants",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "max_", "type": "uint256"}],
    "name": "setMaxPeriods",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "periods_", "type": "uint256"}],
    "name": "start",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "stats",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "compounding",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "compounds", "type": "uint256"}],
        "internalType": "struct AutoCompoundV3.Stats",
        "name": "",
        "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "participant_", "type": "address"}],
    "name": "totalCompounds",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function"
}, {"inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}];
