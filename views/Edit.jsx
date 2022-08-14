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
                            <form action= {`/pebbles/${pebbles.category}/${pebbles.id}?_method=PUT`} method="POST">
                            name: <input type="text" name="name"></input><br/>
                            image: <input type="text" name="img"></input><br/>
                            price: <input type="text" name="price"></input><br/>
                            stock: <input type="text" name="stock"></input><br/>
                            description: <input type="text" name="description"></input><br/>
                            category: <input type="text" name="category"></input><br/>
                            <input type="submit" name="" value="Submit"></input>
                            </form><br/>
                            <button>Clear Form</button><br/>
                            <a href="/pebbles"><button>Back to Index</button></a>
                    </div>
                </body>
            </html>
        )
    }
}
module.exports = Edit