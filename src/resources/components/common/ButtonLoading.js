import React, {PureComponent} from "react";
import {Button, Spinner} from 'react-bootstrap'


class ButtonLoading extends PureComponent {

    render() {
        const {loading, title, color, event} = this.props

        return (
            <Button variant={color || 'primary'} onClick={() => event()} disabled={loading ? 'disable' : ''}>
                {loading && <Spinner
                    as="span"
                    size="sm"
                    aria-hidden="true"
                    animation="border"
                    role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>} {title}
            </Button>
        );
    }
}

export default ButtonLoading;
