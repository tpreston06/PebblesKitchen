const React = require('react')
const style = {
    backgroundColor: 'pink'
  };
const button = {
    cursor: 'pointer',
    borderRadius: '10px',
};

  class Show extends React.Component {
    render() {
        const pebbles = this.props.pebbles
        let qty;
        let button;
        if(pebbles.stock == 0) {
            qty = "Out of Stock"
            button = null
        } else {
            qty = pebbles.stock
            button = <form action={`/pebbles/${pebbles.category}/${pebbles.id}?_method=PUT`}method='POST'>
            <input type="hidden" name="name" value={pebbles.name}></input>
            <input type="hidden" name="img" value={pebbles.img}></input>
            <input type="hidden" name="price" value={pebbles.price}></input>
            <input type="hidden" name="stock" value={pebbles.stock -1}></input>
            <input type="hidden" name="description" value={pebbles.description}></input>
            <input type="hidden" name="category" value={pebbles.category}></input>
            <input type="submit" name="" value="Add to Cart"></input>
            </form>
        }       
        return(
            <div style = {style}>
                <h1> {pebbles.category} </h1>
                <h2> {pebbles.name} </h2>
                    <img src={pebbles.img}></img>
                    <h5> {pebbles.description} </h5>
                    <h3>Available: {qty}</h3>
                    {button}
                    
                    <a href={`/pebbles/${pebbles.category}/${pebbles.id}/edit`}><button>Edit</button></a><br/>
                    <form action={`/pebbles/${pebbles.category}/${pebbles.id}?_method=DELETE`} method='POST'>
                    <button>Delete</button><br/>
                    </form>
                    <a href="/pebbles"><button>Back to Index</button></a>
            </div>
            
        )
    }
}
module.exports = Show