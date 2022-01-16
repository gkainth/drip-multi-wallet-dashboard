import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getConnection,
  getUserInfo,
  claimsAvailable,
  getContract,
  getDripBalance,
  getUplineCount,
  getBr34pBalance,
  getBnbBalance,
} from "./Contract";
import Header from "./Header";

import {
  convertDrip,
  formatCurrency,
  formatPercent,
  shortenAddress,
  backupData,
} from "./utils";

const Dashboard = () => {
  const [wallets, setWallets] = useState([]);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalAvailable, setTotalAvailable] = useState(0);
  const [totalClaimed, setTotalClaimed] = useState(0);
  const [totalDirectBonus, setTotalDirectBonus] = useState(0);
  const [totalMatch, setTotalMatch] = useState(0);
  //const [totalChildren, setTotalChildren] = useState(0);
  //const [totalTeam, setTotalTeam] = useState(0);
  const [addressList, setAddressList] = useState("");
  const [totalDripHeld, setTotalDripHeld] = useState(0);
  const [totalBnbBalance, setTotalBnbBalance] = useState(0);
  const [newAddress, setNewAddress] = useState("");
  //const [triggerType, setTriggerType] = useState("percent");
  const [flagAmount, setFlagAmount] = useState(true);
  const [flagPct, setFlagPct] = useState(true);
  const [flagLowBnb, setFlagLowBnb] = useState(true);
  const [editLabels, setEditLabels] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [dataCopied, setDataCopied] = useState(false);
  const [bnbThreshold, setBnbThreshold] = useState(0.05);
  const [expandedTable, setExpandedTable] = useState(false);
  const [hideTableControls, setHideTableControls] = useState(false);
  const TABLE_HEADERS = [
    "#",
    "Address",
    "Label",
    "Buddy",
    "Uplines",
    "BR34P",
    "Drip",
    "BNB",
    "Available",
    "ROI",
    "Deposits",
    "Claimed",
    "Rewarded",
    "Max Payout",
    "Team",
  ];
  const BASE_HEADERS = [
    "#",
    "Address",
    "Label",
    "Available",
    "ROI",
    "Deposits",
    "Claimed",
    "Rewarded",
    "Max Payout",
    "Team",
  ];
  let web3, contract;

  useEffect(() => {
    const { flagAmount, flagLowBnb, flagPct, bnbThreshold } =
      JSON.parse(localStorage.getItem("dripDashboard-config")) ?? {};

    setFlagAmount(() => flagAmount);
    setFlagLowBnb(() => flagLowBnb);
    setFlagPct(() => flagPct);
    setBnbThreshold(() => bnbThreshold);
  }, []);

  const fetchData = async () => {
    web3 = web3 ?? (await getConnection());
    contract = contract ?? (await getContract(web3));

    let storedWallets = JSON.parse(
      window.localStorage.getItem("dripAddresses")
    );
    if (storedWallets && !storedWallets[0].addr) {
      console.log("converting addresses");
      const convertedWallets = storedWallets.map((wallet) => ({
        addr: wallet,
        label: "",
      }));
      localStorage.setItem("dripAddresses", JSON.stringify(convertedWallets));
      storedWallets = convertedWallets;
    }
    const myWallets =
      storedWallets?.map((wallet) => ({
        addr: wallet.addr.trim().replace("\n", ""),
        label: wallet.label,
      })) ?? [];
    let walletCache = [];
    myWallets.forEach(async (wallet, index) => {
      const userInfo = await getUserInfo(contract, wallet.addr);
      const available = await claimsAvailable(contract, wallet.addr);
      const dripBalance = await getDripBalance(web3, wallet.addr);
      const uplineCount = await getUplineCount(contract, wallet.addr);
      const br34pBalance = await getBr34pBalance(web3, wallet.addr);
      const bnbBalance = await getBnbBalance(web3, wallet.addr);
      const valid = !!userInfo;
      walletCache = [
        ...walletCache,
        {
          index,
          ...userInfo,
          available,
          address: wallet.addr,
          label: wallet.label,
          valid,
          dripBalance,
          br34pBalance,
          uplineCount,
          bnbBalance,
        },
      ];

      setWallets(() => [...walletCache]);
      setDataCopied(false);
    });
  };

  useEffect(() => {
    const validWallets = wallets.filter((wallet) => wallet.valid);

    setTotalDeposits(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.deposits);
      }, 0)
    );
    setTotalDripHeld(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.dripBalance);
      }, 0)
    );
    setTotalBnbBalance(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.bnbBalance);
      }, 0)
    );
    setTotalAvailable(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.available);
      }, 0)
    );
    setTotalClaimed(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.payouts);
      }, 0)
    );
    setTotalDirectBonus(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.direct_bonus);
      }, 0)
    );
    setTotalMatch(() =>
      validWallets.reduce((total, wallet) => {
        return total + parseFloat(wallet.match_bonus);
      }, 0)
    );
  }, [wallets]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      autoRefresh && fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const saveAddresses = (e) => {
    e.preventDefault();
    if (wallets.length) {
      if (!window.confirm("This will clear your current list. Are you sure?"))
        return false;
    }
    const arrayOfAddresses = [
      ...new Set(
        addressList.split(/[\n,]+/).filter((addr) => addr.trim().length === 42)
      ),
    ];

    arrayOfAddresses.length === 0
      ? window.localStorage.clear()
      : window.localStorage.setItem(
          "dripAddresses",

          JSON.stringify(arrayOfAddresses.map((addr) => ({ addr, label: "" })))
        );
    setAddressList("");
    setWallets([]);
    fetchData();
  };

  const addNewAddress = async (e) => {
    e.preventDefault();
    const web3 = await getConnection();
    if (!web3.utils.isAddress(newAddress)) {
      alert("Invalid Address");
      return false;
    }
    const storedAddresses =
      JSON.parse(window.localStorage.getItem("dripAddresses")) ?? [];
    if (!storedAddresses.some((sa) => sa.addr === newAddress)) {
      storedAddresses.push({ addr: newAddress, label: "" });
      window.localStorage.setItem(
        "dripAddresses",
        JSON.stringify(storedAddresses)
      );

      setNewAddress("");
      fetchData();
    }
  };

  const highlightStyleFor = (col, wallet) => {
    let amount,
      percent,
      style = "";
    switch (col) {
      case "amt":
        if (flagAmount) {
          amount = parseFloat(convertDrip(wallet.available));
          style = amount >= 1.0 ? "hydrate" : amount >= 0.5 ? "prepare" : "";
        }
        return style;
      case "pct":
        if (flagPct) {
          percent = parseFloat(wallet.available / wallet.deposits);
          style =
            percent >= 0.01 ? "hydrate" : percent >= 0.009 ? "prepare" : "";
        }
        return style;
      case "bnb":
        return flagLowBnb && wallet.bnbBalance < bnbThreshold ? "warning" : "";

      default:
        return "";
    }
  };

  const addLabel = (index, label) => {
    let walletAddr;
    const newWallets = wallets.map((wallet) => {
      if (parseInt(wallet.index) === index) {
        walletAddr = wallet.address;
        return { ...wallet, label };
      } else {
        return { ...wallet };
      }
    });

    let storedWallets = JSON.parse(
      window.localStorage.getItem("dripAddresses")
    );
    storedWallets = storedWallets.map((wallet, index) => {
      if (walletAddr === wallet.addr) {
        return { addr: wallet.addr, label };
      } else {
        return { ...wallet };
      }
    });
    window.localStorage.setItem("dripAddresses", JSON.stringify(storedWallets));
    setWallets(newWallets);
  };

  const changeHandler = (event) => {
    event.target.files[0].text().then((t) => {
      localStorage.setItem("dripAddresses", t);
    });
    window.location.reload(true);
  };

  const copyTableData = () => {
    const tableData = [
      [...TABLE_HEADERS],
      ...wallets.map((w, index) => [
        index + 1,
        shortenAddress(w.address),
        w.label,
        shortenAddress(w.upline),
        w.uplineCount,
        convertDrip(w.dripBalance),
        parseFloat(w.bnbBalance).toFixed(3),
        convertDrip(w.available),
        formatPercent(w.available / w.deposits),
        convertDrip(w.deposits),
        convertDrip(w.payouts),
        `${convertDrip(w.direct_bonus)}/${convertDrip(w.match_bonus)}`,
        convertDrip(w.deposits * 3.65),
        `${w.referrals}/${w.total_structure}`,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    navigator.clipboard.writeText(tableData);
    setDataCopied(true);
  };

  const incrementBnbFlag = () => {
    setFlagLowBnb(true);
    let val = parseFloat(bnbThreshold);
    if (val < 0.1) {
      setBnbThreshold(
        parseFloat(parseFloat(val) + parseFloat(0.01)).toFixed(2)
      );
    }
  };

  const decrementBnbFlag = () => {
    setFlagLowBnb(true);
    let val = parseFloat(bnbThreshold);
    if (val > 0.01) {
      setBnbThreshold(
        parseFloat(parseFloat(val) - parseFloat(0.01)).toFixed(2)
      );
    }
  };

  useEffect(() => {
    const config = { flagAmount, flagLowBnb, flagPct, bnbThreshold };
    localStorage.setItem("dripDashboard-config", JSON.stringify(config));
  }, [flagAmount, flagLowBnb, flagPct, bnbThreshold]);

  return (
    <div className="container">
      {/* <Header /> */}

      <div className="main">
        {!!wallets.length && (
          <div>
            <div
              className="controls"
              style={{ display: hideTableControls ? "block" : "flex" }}
            >
              <form className="row g-3">
                <div className="col">
                  <input
                    className="form-control"
                    id="newAddressTxt"
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Add additional single wallet"
                  />
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onClick={addNewAddress}
                    disabled={!!!newAddress || newAddress.length !== 42}
                  >
                    Add
                  </button>
                </div>
                <div className="hideControlsBtn">
                  <input
                    id="hideControls"
                    type="checkbox"
                    className="btn-check"
                    autoComplete="off"
                    onChange={() => setHideTableControls(!hideTableControls)}
                  ></input>
                  <label htmlFor="hideControls" className="btn btn-primary">
                    {hideTableControls ? "Show" : "Hide"} Controls
                  </label>
                </div>
                {hideTableControls || (
                  <div className="alert">
                    <div>Available will highlight to indicate when it is</div>
                    <div>ready to claim or hydrate</div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="flagAmountChk"
                        type="checkbox"
                        checked={flagAmount}
                        onChange={() => setFlagAmount(!flagAmount)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flagAmountChk"
                      >
                        Amount -{" "}
                        <span className="prepare">light green = .5+</span>,{" "}
                        <span className="hydrate">green = 1+</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="flagPctChk"
                        type="checkbox"
                        checked={flagPct}
                        onChange={() => setFlagPct(!flagPct)}
                      />
                      <label className="form-check-label" htmlFor="flagPctChk">
                        Percent -{" "}
                        <span className="prepare">light green = .9%</span> ,{" "}
                        <span className="hydrate">green = 1%</span>
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="flagLowBnbChk"
                        type="checkbox"
                        checked={flagLowBnb}
                        onChange={() => setFlagLowBnb(!flagLowBnb)}
                      />
                      <label className="form-check-label input-spinner-label">
                        Low BNB:
                        <div className="inputSpinner">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={decrementBnbFlag}
                          >
                            -
                          </button>
                          <input
                            className="inputSpinner-control"
                            type="number"
                            value={bnbThreshold}
                            onChange={() => {}}
                            size={3}
                            disabled={true}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={incrementBnbFlag}
                          >
                            +
                          </button>
                        </div>
                        <span className="warning"> - yellow</span>
                      </label>
                    </div>
                  </div>
                )}
              </form>
              {hideTableControls || (
                <div className="alert alert-info">
                  <p>Click on a wallet to see upline detail</p>
                  <p>Click on Team to see downline</p>
                  <div>
                    <div>Back up addresses and labels to a file.</div>
                    <div>
                      You can then reload the data from the back up file if you
                      clear the list or clear cache.
                    </div>
                    <p></p>
                    <button className="btn btn-secondary" onClick={backupData}>
                      Back Up
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {!!wallets.length && (
          <div className="table-options">
            <button
              className="btn-copy btn btn-outline-secondary"
              onClick={copyTableData}
            >
              <i className={`bi bi-clipboard${dataCopied ? "-check" : ""}`}></i>
              Copy table
            </button>
            <div className="form-check">
              <input
                id="expandedTable"
                className="form-check-input"
                type="checkbox"
                checked={expandedTable}
                onChange={() => setExpandedTable(!expandedTable)}
              />
              <label htmlFor="expandedTable" className="form-check-label">
                Expanded Table
              </label>
            </div>
          </div>
        )}
        <table className="table">
          <thead className="table-light">
            <tr>
              {expandedTable
                ? TABLE_HEADERS.map((h) => <th key={h}>{h}</th>)
                : BASE_HEADERS.map((h) => <th key={h}>{h}</th>)}
            </tr>
            <tr className="table-success">
              <th> </th>
              <th>Totals - {wallets.length}</th>
              <th>
                {!!wallets.length && (
                  <div className="form-check form-switch">
                    <label className="form-check-label">Edit</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={editLabels}
                      onChange={() => {
                        setEditLabels(!editLabels);
                        setAutoRefresh(!autoRefresh);
                      }}
                    />
                  </div>
                )}
                {editLabels && <small>autorefresh paused</small>}
              </th>
              {expandedTable && <th></th>}
              {expandedTable && <th></th>}
              {expandedTable && <th></th>}
              {expandedTable && <th>{convertDrip(totalDripHeld)}</th>}
              {expandedTable && (
                <th>{parseFloat(totalBnbBalance).toFixed(3)}</th>
              )}
              <th>{convertDrip(totalAvailable)}</th>

              <th>{formatPercent(totalAvailable / totalDeposits)}%</th>

              <th>{convertDrip(totalDeposits)}</th>
              <th>{convertDrip(totalClaimed)}</th>
              <th>
                {convertDrip(totalDirectBonus)}/{convertDrip(totalMatch)}
              </th>
              <th>{convertDrip(totalDeposits * 3.65)}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wallets
              .sort((a, b) => a.index - b.index)
              .map((wallet, index) => (
                <tr key={wallet.address}>
                  <td>{index + 1}</td>
                  <td
                    className={wallet.valid ? "" : "invalid"}
                    onClick={(e) =>
                      navigator.clipboard.writeText(wallet.address)
                    }
                  >
                    <Link to={`/upline/${wallet.address}`}>
                      {shortenAddress(wallet.address)}
                    </Link>
                  </td>
                  <td>
                    {editLabels ? (
                      <input
                        size={8}
                        type="text"
                        value={wallet.label}
                        onChange={(e) => addLabel(wallet.index, e.target.value)}
                      />
                    ) : (
                      wallet.label
                    )}
                  </td>
                  {expandedTable && <td>{shortenAddress(wallet.upline)}</td>}
                  {expandedTable && <td>{wallet.uplineCount}</td>}
                  {expandedTable && (
                    <td>{formatCurrency(wallet.br34pBalance)}</td>
                  )}
                  {expandedTable && <td>{convertDrip(wallet.dripBalance)}</td>}
                  {expandedTable && (
                    <td className={highlightStyleFor("bnb", wallet)}>
                      {parseFloat(wallet.bnbBalance).toFixed(3)}
                    </td>
                  )}
                  <td className={highlightStyleFor("amt", wallet)}>
                    {convertDrip(wallet.available)}
                  </td>

                  <td className={highlightStyleFor("pct", wallet)}>
                    {formatPercent(wallet.available / wallet.deposits)}%
                  </td>

                  <td>{convertDrip(wallet.deposits)}</td>
                  <td>{convertDrip(wallet.payouts)}</td>
                  <td>
                    {convertDrip(wallet.direct_bonus)}/
                    {convertDrip(wallet.match_bonus)}
                  </td>
                  <td>{convertDrip(wallet.deposits * 3.65)}</td>
                  <td>
                    {wallet.referrals > 0 ? (
                      <Link to={`/downline/${wallet.address}`}>
                        {wallet.referrals} / {wallet.total_structure}
                      </Link>
                    ) : (
                      <span>
                        {wallet.referrals} / {wallet.total_structure}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <button
          type="button"
          className="btn btn-primary"
          onClick={saveAddresses}
          disabled={!addressList.length && !wallets.length}
        >
          {addressList.length ? "Save" : "Clear"} List
        </button>
        <div>Paste a list of addresses:</div>
        <div>
          <textarea
            className="form-control"
            id="addressList"
            rows={10}
            cols={50}
            value={addressList}
            onChange={(e) => setAddressList(e.target.value)}
          />

          <input
            className="form-control"
            type="file"
            name="file"
            onChange={changeHandler}
            placeholder="Load from Backup"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
