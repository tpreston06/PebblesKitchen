const React = require('react');
const style = {
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

class Index2 extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
            <html>
                <head>
                <link href='/css/index.css' rel='stylesheet'></link>
                </head>
            <div style={style}>
                <ul>
                    <li><a href="/pebbles/Brunch%20n'%20Munch/">Brunch N Munch</a></li>
                    <li><a href="/pebbles/Candy%20Lady/">Candy Lady</a></li>
                    <li><a href="/pebbles/The%20Lighter%20side/">The Lighter Side</a></li>
                    <li><a href="/pebbles/Ghetto%20Ice%20cream%20Truck/">Ghetto Ice cream Truck</a></li>
                </ul><br/>
                <h1>A Southern Experience</h1>
                <div>
                {pebbles.map((pebbles) => {
                    return(
                        <div>
                            <h3>{pebbles.name.charAt(0).toUpperCase() + pebbles.name.slice(1)}</h3>
                            <a href={`/pebbles/${pebbles.category}/${pebbles.id}`}>
                             <img src={pebbles.img} height="150px" width="150px"></img>   
                            </a>                            
                        </div>
                    );
                })}
                </div>
                <a href={`/pebbles/new`}><button>Create New Item</button></a><br/>
                <a href={`/`}><button>HomePage</button></a>
            </div>
            </html>
        )
    }
}

module.exports = Index2;