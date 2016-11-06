//import update from 'react-addons-update';

var Messages = React.createClass({

    propTypes: {
        messages: React.PropTypes.node.isRequired
    },

    getInitialState: function () {

        var messages = [];
        messages = this.props.messages.map(function (msg) {
            return {
                key: msg.key,
                quantity: msg.quantity,
                producttotal: msg.producttotal,
                description: msg.description,
                total: msg.total
            }
        });

        return {
            messages: messages
        };
    },

    render: function () {

        var key;
        var quantity;
        var description;
        var producttotal;
        var total;

        var appender = this.props.messages.map(function (message) {
            key = message.key;
            quantity = message.quantity;
            description = message.description;
            producttotal = message.producttotal;
            total = message.total;
        });

        return (
            <div className="data">
                <div className="col-md-6">
                    <table id="table" className="table">
                        <thead>
                            <th>Cantidad</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                        </thead>
                        <tbody>
                            <Product key={key} quantity={quantity} producttotal={producttotal} description={description}/>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6 col-centered">
                    <div className="row">$<Total key={total} total={total} /></div>
                    <div className="row">
                        <button href="#" className="btn btn-default btn-lg">Pagar</button>
                    </div>
                </div>
            </div>
        );
    }

});
