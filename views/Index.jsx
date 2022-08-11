const React = require('react');

class Index extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
            <div>
                <h1>A Southern Experience</h1>
                {pebbles.map((pebbles) => {
                    return(
                        <li>
                            <a href={`/pebbles/${pebbles.id}`}>
                                {pebbles.name.charAt(0).toUpperCase() + pebbles.name.slice(1)}
                            </a>
                        </li>
                    );
                })}
                
            </div>
        )
    }
}

module.exports = Index;