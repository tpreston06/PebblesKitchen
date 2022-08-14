const React = require('react')
const style = {
    backgroundColor: 'pink'
  };

  class New extends React.Component {
    render() {        
        return(
            <html>
                <head></head>
                <body style = {style}>
                    <div >
                        <h1> New Menu Item </h1>
                            <form action='/pebbles'method='POST'>
                            name: <input type="text" name="name"></input><br />
                            image: <input type="text" name="img"></input>
                            price: <input type="text" name="price"></input>
                            stock: <input type="text" name="stock"></input>
                            description: <input type="text" name="description"></input>
                            category: <input type="text" name="category"></input>
                            <input type="submit" name="" value="Submit"></input>
                            </form>
                            <button>Clear Form</button>
                            <a href="/pebbles">Back to Index</a>
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = New