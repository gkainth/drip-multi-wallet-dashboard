import axios from "axios";

export const BSCSCAN_URL = "https://api.bscscan.com";

export const convertDrip = (drip, dripPrice, showDollarValues) => {
  const priceOfDrip = dripPrice || 1;
  const converted = formatNumber(
    //new Web3().utils.fromWei(`${drip}`)
    (Math.round((drip / Math.pow(10, 18)) * 1000) / 1000) *
      (showDollarValues ? priceOfDrip : 1)
  );
  return showDollarValues ? formatCurrency(converted) : converted;
};

export const convertBnb = (bnbAmt, bnbPrice, showDollarValues) => {
  const converted = formatNumber(bnbAmt / 10e17);

  return showDollarValues ? formatCurrency(converted * bnbPrice) : converted;
};

export const convertREV = (revAmt, revPrice, showDollarValues) => {
  return showDollarValues
    ? formatCurrency(revAmt * revPrice)
    : parseFloat(revAmt).toFixed(3);
};

export const convertTokenToUSD = (tokenAmt, tokenPrice, showDollarValues) => {
  return showDollarValues
      ? formatCurrency(tokenAmt * tokenPrice)
      : parseFloat(tokenAmt).toLocaleString();
};

export const formatCurrency = (amt) => {
  return (
    "$" +
    parseFloat(`${Math.round(amt * 1000) / 1000}`)
      .toFixed(3)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};

export const formatPercent = (amt) => {
  return parseFloat(amt * 100).toFixed(2);
};

export const formatNumber = (amt) =>
  parseFloat(amt)
    .toFixed(3)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const shortenAddress = (address) =>
  `${address.substr(0, 5)}...${address.slice(-4)}`;

export const backupData = () => {
  const data = localStorage.getItem("dripAddresses");
  const element = document.createElement("a");
  const file = new Blob([data], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "dashboardAddresses.json";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

export const findFibIndex = (n) => {
  const br34p = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  return br34p.filter((b) => b <= n).length;
};

export const getLatestVersion = async () => {
  const version = await axios
    .get(
      "https://api.github.com/repos/rpearce63/drip-multi-wallet-dashboard/tags"
    )
    .then((result) => result.data[0].name);

  return version.replace("v", "");
};

export const sortBy = (col, order) => {
  if (order === "asc") {
    return (a, b) => (a[col] > b[col] ? 1 : -1);
  } else {
    return (a, b) => (a[col] < b[col] ? 1 : -1);
  }
};


export const getStartBlock = async () => {
  const url = `${BSCSCAN_URL}/api?module=proxy&action=eth_blockNumber&apikey=9Y2EB28QQ14REAGZCK56PY2P5REW2NQGIY`;
  const latestBlockHex = await axios
      .get(url)
      .then((response) => response.data.result);
  return parseInt(`${latestBlockHex}`, 16);
};

