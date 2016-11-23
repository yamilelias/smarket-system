/**
 * Created by yamilelias on 06/11/16.
 */

var Product = React.createClass({

    propTypes: {
        quantity: React.PropTypes.number.isRequired,
        description: React.PropTypes.string.isRequired,
        producttotal: React.PropTypes.number.isRequired
    },

    /*componentWillMount: function () {
        this.setState({
            quantity: this.props.quantity,
            description: this.props.description,
            producttotal: this.props.producttotal
        });
    },*/

    /*componentDidUpdate: function (prevProps, prevState) {
        this.setState((prevState, props) => {
            return {quantity: prevState.quantity + 1};
        });
        //return {quantity: prevState.quantity + 1};
    },*/

    componentWillReceiveProps: function (nextProps) {
        console.log("Description: " + nextProps.description + ", Quantity: " + nextProps.quantity + ", Product Total: " + nextProps.producttotal);
        /*this.setState({
            quantity: nextProps.quantity,
            description: nextProps.description,
            producttotal: nextProps.producttotal
        });*/

        // Temporal solution
        if(this.state.quantity == nextProps.quantity){
            this.setState({
                quantity: this.state.quantity + 1
            });
        }
    },

    getInitialState: function () {
        return{
            quantity: this.props.quantity,
            description: this.props.description,
            producttotal: this.props.producttotal
        };
    },

    render: function () {
        return (
            <tr>
                <td>{this.state.quantity}</td>
                <td>{this.state.description}</td>
                <td>{this.state.producttotal}</td>
            </tr>
        )
    }
});

var Total = React.createClass({
    getDefaultProps: function() {
        return{
            total: 0
        };
    },

    render: function(){
        return (
            <div className="total-price">${this.props.total}</div>
        )
    }
});