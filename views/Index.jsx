const React = require('react');

class Index extends React.Component {
    render() {
        const {pebbles} = this.props;
        return(
            <div>
                <h1>Brunch n' Munch</h1>
                {pebbles.map((pebbles, i) => {
                    return(
                        <li>
                            <a href={`/pebbles/${i}`}>
                                {pebbles.category.charAt(0).toUpperCase() + pebbles.category.slice(1)}
                            </a>
                        </li>
                    );
                })}
                <a href={`/pebbles/${pebbles.id}/edit}`}><button type="submit">Edit</button></a>
            </div>
        )
    }
}

module.exports = Index;