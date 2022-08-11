const React = require('react');

const style = {
    backgroundColor: 'pink',
};

const fonts = {
    color: 'White',
    font: 'Lucida Bright',
}

class Home extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
            <div>
                <html style={style}>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1 style={fonts}>Welcome to Pebbles Kitchen!</h1>
                
            </body>
            </html>
                <a href={`/`}><button type="submit">Enter</button></a>
            </div>
        )
    }
}

module.exports = Home;