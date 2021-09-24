import React from "react";
import {Link} from "react-router-dom"

const ReportInfo = ({
  prevStep,
  getInterviewDate,
  getPhase,
  getStatus,
  getNote,
  submitReport,
}) => {
  return (
    <div>
        
         
      <form>
        <div className="row">
          <div className="col">
            <label className="col">Interview Date:</label>
            <input
              className="col"
              type="date"
              onChange={(e) => getInterviewDate(e.currentTarget)}
            ></input>
          </div>
          <div className="col">
            <label className="col">Phase:</label>
            <select
              className="browser-default"
              type="select"
              onChange={(e) => getPhase(e.currentTarget)}
              required
              name="phase"
            >
              
              <option value="cv">CV</option>
              <option value="technical">Technical</option>
              <option value="hr">HR</option>
              <option value="skill">Final</option>
            </select>
          </div>
          <div className="col">
            <label className="col" htmlFor="status">
              Status:
            </label>
            <select
              className="browser-default"
              type="select"
              onChange={(e) => getStatus(e.currentTarget)}
              name="status"
              required
            >
              <option value="passed">Passed</option>
              <option value="declined">Declined</option>
            </select>
          </div>
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            type="textarea"
            onChange={(e) => getNote(e.currentTarget)}
          ></textarea>
        </div>
      </form>
      <div>
        <button className="btn-large #008B8B" onClick={prevStep}>
          Back
        </button>
        <Link to="/reportsAdministration">
          <button className="btn-large #008B8B clickButton" onClick={submitReport} type="submit">
            Submit
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ReportInfo;
