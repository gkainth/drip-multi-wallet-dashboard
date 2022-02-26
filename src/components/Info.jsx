const Info = ({ backupData }) => {
  return (
    <div className="alert alert-info">
      <ul>
        <li>Click on a wallet to see upline detail</li>
        <li>Click on Team to see downline</li>
        <li>Back up addresses and labels to a file.</li>
        <ul>
          <li>
            You can then reload the data from the back up file if you clear the
            list or clear cache.
          </li>
        </ul>
      </ul>

      <p>
        <button className="btn btn-secondary" onClick={backupData}>
          Back Up
        </button>
      </p>
      <ul>
        <li>Click on row number to remove a single row</li>

        <li>
          Br34p: Amount/Levels covered. RED when not enough to cover team depth
        </li>
        <li>
          Team: displays # of Direct referrals / Total team size / Max depth of
          team
        </li>
        <li>
          If you have BABYDRIP, turn that feature on and the table will show
          your BABYDRIP balance as well as your total token Reflections/rewards
          of Drip from the BABYDRIP contract.
        </li>
      </ul>
    </div>
  );
};

export default Info;