//import update from 'react-addons-update';

var Table = React.createClass({

    propTypes: {
        data: React.PropTypes.node.isRequired
    },

    getInitialState: function () {

        var data = [];
        data = data.map(function (msg) {
            return {
                key: "666",
                quantity: 69,
                producttotal: 123456,
                description: "Do babes al menos entró",
                total: 666
            }
        });

        return {
            data: data,
        };
    },

    /*componentDidUpdate: function (prevProps, prevState) {
        this.setState({
            key: this.props.data.key,
            quantity: this.props.data.quantity,
            producttotal: this.props.data.producttotal,
            description: this.props.data.description,
            total: this.props.data.total
        });
    },*/

    componentWillReceiveProps: function (nextProps) {
        var key;
        var quantity;
        var description;
        var producttotal;
        var total;

        var appender = nextProps.data.map(function (message) {
            key = message.key;
            quantity = message.quantity;
            description = message.description;
            producttotal = message.producttotal;
            total = message.total;
        });

        this.setState({ data: {
                key: key,
                quantity: quantity,
                producttotal: producttotal,
                description: description,
                total: total
            }
        });
    },

    render: function () {

        var key;
        var quantity;
        var description;
        var producttotal;
        var total;

        var appender = this.props.data.map(function (message) {
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
                            { // Temporary solution
                                this.props.data.map((data) =>
                               <Product key={data.key} quantity={data.quantity} producttotal={data.producttotal} description={data.description}/>)}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6 col-centered">
                    <div className="row"><Total key={total} total={total} /></div>
                    <div className="row">
                        <button href="#" className="btn btn-default btn-lg">Pagar</button>
                    </div>
                </div>
            </div>
        );
    }
});