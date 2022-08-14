const React = require('react');
const style = {
    backgroundColor: 'pink'
  };

class Index extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
            <html>
                <head>
                </head>
            <div style={style}>
                <nav>
                    <a href="/pebbles/Brunch%20n'%20Munch/">Brunch N Munch</a>
                    <a href="/pebbles/Candy%20Lady/">Candy Lady</a>
                    <a href="/pebbles/The%20Lighter%20side/">The Lighter Side</a>
                    <a href="/pebbles/Ghetto%20Ice%20cream%20Truck/">Ghetto Ice cream Truck</a>
                </nav>
                <h1>A Southern Experience</h1>
                {pebbles.map((pebbles) => {
                    return(
                        <li>
                            <a href={`/pebbles/${pebbles.category}/${pebbles.id}`}>
                             <img src={pebbles.img} height="150px" width="150px"></img>   
                            </a>
                            {pebbles.name.charAt(0).toUpperCase() + pebbles.name.slice(1)}
                        </li>
                    );
                })}
                <a href={`/pebbles/new`}><button>Create New Item</button></a><br/>
                <a href={`/`}><button>HomePage</button></a>
            </div>
            </html>
        )
    }
}

module.exports = Index;