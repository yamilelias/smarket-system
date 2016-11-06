var Smarket = React.createClass({

    getInitialState: function () {
        return {
            name: null
        };
    },

    _onClick: function () {
        var valid = "0";
        this.setState({valid: valid});
    },

    render: function () {
        return (
            <div>
                <WelcomeView valid={this.state.valid} _onClick={this._onClick}/>
                <MainView valid={this.state.valid}/>
            </div>
        );
    }
});

React.render(<Smarket />, document.getElementById('app'));