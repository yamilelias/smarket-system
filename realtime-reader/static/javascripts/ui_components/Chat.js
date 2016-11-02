var Chat = React.createClass({

    getInitialState: function () {
        return {
            name: null
        };
    },

    _onClick: function () {
        var quantity = "EliasYamil";
        this.setState({quantity: quantity});
    },

    render: function () {
        return (
            <div>
                <WelcomeView quantity={this.state.quantity} _onClick={this._onClick}/>
                <MainView quantity={this.state.quantity}/>
            </div>
        );
    }
});

React.render(<Chat />, document.getElementById('app'));