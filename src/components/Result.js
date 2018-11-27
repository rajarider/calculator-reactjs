
import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let result = this.props.result;
        return (
            <div className="display-row">
                <span>{result}</span>
            </div>
          )
        ;
    }
}

export default ResultComponent;