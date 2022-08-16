const React = require('react');

class Home extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
                <html>
                    <head>
                        <title>Home Page</title>
                        <link href='./css/home.css' rel='stylesheet'></link>
                    </head>
                    <body>
                        {/* <div className= 'style'></div> */}
                        {/* <img src="https://i.imgur.com/S0H57yf.png"></img> */}
                        <div className='container'>
                        <a href={`/pebbles`}><button align="center">Enter</button></a>
                        </div>
                    </body>
                </html>
        )
    }
}

module.exports = Home;