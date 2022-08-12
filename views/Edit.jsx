const React = require('react')
const style = {
    backgroundColor: 'pink'
  };

  class Edit extends React.Component {
    render() {
        const pebbles = this.props.pebbles        
        return(
            <html>
                <head></head>
                <body style = {style}>
                    <div >
                        <h1> Edit Quantity </h1>
                            <form action= {`/pebbles/${pebbles.id}?_method=PUT`} method="POST">
                            name: <input type="text" name="name"></input><br />
                            image: <input type="text" name="img"></input>
                            price: <input type="text" name="price"></input>
                            stock: <input type="text" name="stock"></input>
                            description: <input type="text" name="description"></input>
                            category: <input type="text" name="category"></input>
                            <input type="submit" name="" value="Submit"></input>
                            </form>
                            <a href="/pebbles">Back to Index</a>
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = Edit