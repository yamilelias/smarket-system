//import update from 'react-addons-update';

var Table = React.createClass({

    propTypes: {
        data: React.PropTypes.node.isRequired
    },

    /*getInitialState: function () {

        var data = [];
        data = this.props.data.map(function (data) {
            return {
                key: data.key,
                quantity: data.quantity,
                producttotal: data.producttotal,
                description: data.description,
                total: data.total
            }
        });

        return {
            data: data,
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var propsKey = nextProps.key;
        if(!isInArray(propsKey)){

        }
    },*/

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
                            {this.props.data.map((data) =>
                                <Product key={data.key} quantity={data.quantity} producttotal={data.producttotal} description={data.description}/>
                            )}
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

// Function to find in an array
function isInArray(array, obj){
    return(array.indexOf(obj) != -1);
}