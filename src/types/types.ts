export interface Wallet {
    label: string;
    address: string;
    index:  number;
    valid?: boolean;
    deposits?: number;
    maxPayout?:number;
    ref_claim_pos?: string;
    dripBalance?: number;
    bnbBalance?: number;
    available?: number;
    payouts?: number;
    br34pBalance?: number;
    referrals?: number;
    busdBalance?: number;
    r?: number;
    ndv?: number;
    coveredDepth?: number;
    teamDepth: number;
    upline?: number;
    uplineCount?: number;
    dropsBalance?: number;
    direct_bonus?: number;
    match_bonus?: number;
    total_structure?: number;
    furioStatus?: 'enabled' | 'disabled' | 'max';
    furioBalance?: number;
    furioAvailable?: number;
    furioVaultBalance?: number;
    furioRewardRate?:number;
    furioAutoCompoundEnabled?:boolean;
    furioAutoCompoundsLeft?:number;
    furioTotalAutoCompounds?:number;
}