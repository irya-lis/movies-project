import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    }

    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <div className="row">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            value={this.state.search}
                            onChange={this.handleSearch}
                            />
                </div>
            </div>
    )
    }
}

    export default Search;
