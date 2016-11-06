/**
 * Created by yamilelias on 06/11/16.
 */

var Product = React.createClass({
    render: function () {
        return (
            <tr id={this.props.key}>
                <td>{this.props.quantity}</td>
                <td>{this.props.description}</td>
                <td>{this.props.producttotal}</td>
            </tr>
        )
    }
});

var Total = React.createClass({
    render: function(){
        return (
            <div>{this.props.total}</div>
        )
    }
});