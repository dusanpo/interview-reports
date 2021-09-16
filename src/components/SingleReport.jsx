import React from 'react'

class SingleReport extends React.Component {
    constructor(props) {
        super(props)
    
        console.log(props)
    }
    render() {
        return (
            
                <tbody>
                    <tr>
                        <td>{this.props.company}</td>
                        <td>{this.props.date}</td>
                        <td>{this.props.status}</td>
                        <td>
                            <i className="material-icons">remove_red_eye</i>
                        </td>
                    </tr>
                </tbody>
            
        )
    }
}
export default SingleReport;
