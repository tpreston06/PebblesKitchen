const React = require('react')
const style = {
    backgroundColor: 'pink'
  };

  class Show extends React.Component {
    render() {
        const pebbles = this.props.pebbles        
        return(
            <div style = {style}>
                <h1>{pebbles.category} </h1>
                <h2> {pebbles.name} </h2>
                    <img src={pebbles.img + '.jpg'}></img>
                    <a href="/pebbles">Back to Index</a>
                    <a href={`/pebbles/${pebbles.id}/edit}`}><button type="submit">Edit</button></a>
            </div>
            
        )
    }
}
module.exports = Show