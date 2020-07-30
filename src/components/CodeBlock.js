import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
class CodeBlock extends PureComponent {
    // static propTypes = {
    //     value: PropTypes.string.isRequired,
    //     language: PropTypes.string
    // };
    //
    // static defaultProps = {
    //     language: null
    // };

    render() {
        const {value } = this.props;

        return (
            <SyntaxHighlighter language={'bash'} style={prism}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
