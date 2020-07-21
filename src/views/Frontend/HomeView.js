import React from "react";
// import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown/with-html'



export default class Home extends React.Component {

    render() {
        const markdown = `
# hello
## Hi
<iframe width="560" height="315" src="https://www.youtube.com/embed/auwOqLj9EUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the
 <code className="prop">escapeHtml</code> property to false.
`

        var d = Date.parse("14,Feb,2011");
        console.log(new Date(d));

        return (
            <div>
                <h2>Home</h2>
                <ReactMarkdown
                    source={markdown}
                    escapeHtml={false}
                />
            </div>
        );
    }
}
