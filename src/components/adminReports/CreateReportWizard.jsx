import React from 'react';
import postReport from "./postReport";
import Sidebar from "./Sidebar";
import CandidateSelect from './CandidateSelect';
import CompanySelect from './CompanySelect';
import ReportInfo from "./ReportInfo";


class CreateReportsWizard extends React.Component {
    constructor(props) {
        super(props)
            
        this.state = {
            step: 1,
            candidateId: null,
            candidateName: null,
            companyId: null,
            companyName: null,
            interviewDate: null,
            phase: null,
            status: null,
            note: null,
        }
    }
    nextStep = () => {
        if (
          (this.state.step === 1 && this.state.candidateName !== null) ||
          (this.state.step === 2 && this.state.companyName !== null)
        ) {
          this.setState({ step: this.state.step + 1 });
        } else {
          alert("You must select something!");
        }
      };
    
      submitReport = () => {
        postReport(this.state);
      };
    
      prevStep = () => {
        this.setState({ step: this.state.step - 1 });
      };
    
      getName = (candidate) => {
        this.setState({ candidateName: candidate.name, candidateId: candidate.id });
      };
    
      getCompany = (company) => {
        this.setState({ companyName: company.name, companyId: company.id });
      };
      getInterviewDate = (date) => {
        this.setState({ interviewDate: new Date(date.value) });
      };
    
      getPhase = (phase) => {
        this.setState({ phase: phase.value });
      };
    
      getStatus = (status) => {
        this.setState({ status: status.value });
      };
    
      getNote = (note) => {
        this.setState({ note: note.value });
      };
    
      render() {
        switch (this.state.step) {
          case 1:
            return (
              <div>
                
                <div className="col">
                  <div className="row">
                    <div>
                      <div className="col s4">
                        <Sidebar page={this.state.step} />
                      </div>
                    </div>
                    <div className="col s8">
                      <CandidateSelect
                        nextStep={this.nextStep}
                        getName={this.getName}
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          case 2:
            return (
              <div>
                
                <div className="col">
                  <div className="row">
                    <div >
                      <div className="col s4">
                        <Sidebar page={this.state.step} />
                        <div >
                          <h4 className="col"> {this.state.candidateName}</h4>
                          <p className="col">Candidate:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s8">
                      <CompanySelect
                        getCompany={this.getCompany}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          case 3:
            return (
              <div>
                
                <div className="col">
                  <div className="row">
                    <div className="col s4">
                      <Sidebar page={this.state.step} />
                      <div className="row">
                        <div>
                          <h4 className="col"> {this.state.candidateName}</h4>
                          <p className="col">Candidate:</p>
                          <h4 className="col"> {this.state.companyName}</h4>
                          <p className="col">Company:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col s8">
                      <ReportInfo
                        submitReport={this.submitReport}
                        getNote={this.getNote}
                        getStatus={this.getStatus}
                        getPhase={this.getPhase}
                        getInterviewDate={this.getInterviewDate}
                        prevStep={this.prevStep}
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            );
    
          default:
            return null;
        }
      }
    }
  

export default CreateReportsWizard