const React = require('react');



class Home extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
                <html>
                    <head>
                        <title>Home Page</title>
                        <link href='./css/index.css' rel='stylesheet'></link>
                    </head>
                    <body>
                        {/* <div className= 'style'></div> */}
                        <img src="https://i.imgur.com/S0H57yf.png" height="100%" width={'100%'}></img>
                        <div className='container'>
                        <h1 className={"fonts"}>Welcome to Pebbles Kitchen!</h1>
                        <a href={`/pebbles`}><button>Enter</button></a>
                        </div>
                    </body>
                </html>
        )
    }
}

module.exports = Home;