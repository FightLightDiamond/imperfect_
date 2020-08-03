import React, { PureComponent } from "react";
import {Spinner} from 'react-bootstrap'


class Loading extends PureComponent {

    render() {
        return (
            <div className={'text-center'} style={{
                position: 'absolute',
                top: '50%',
                left: '50%'
            }}>
                 <Spinner
                    variant="primary"
                    as="span"
                    aria-hidden="true"
                    animation="border"
                    role="status">

                </Spinner>
            </div>

        );
    }
}

export default Loading;
