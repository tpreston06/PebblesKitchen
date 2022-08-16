const React = require('react')
const style = {
    backgroundColor: 'pink'
  };

  class New extends React.Component {
    render() {        
        return(
            <html>
                <head>
                <link href='./css/index.css' rel='stylesheet'></link>
                </head>
                <body style = {style}>
                    <div >
                        <h1> New Menu Item </h1>
                            <form action='/pebbles'method='POST'>
                            name: <input type="text" name="name"></input><br/>
                            image: <input type="text" name="img"></input><br/>
                            price: <input type="text" name="price"></input><br/>
                            stock: <input type="text" name="stock"></input><br/>
                            description: <input type="text" name="description"></input><br/>
                            category: <input type="text" name="category"></input><br/>
                            <input type="submit" name="" value="Submit"></input>
                            </form>
                            <button>Clear Form</button>
                            <a href="/pebbles"><button>Back to Menu</button></a>
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = New