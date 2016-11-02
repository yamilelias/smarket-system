var Messages = React.createClass({

    render: function () {

        var messageList = this.props.messages.map(function (message) {
            return (
                <tr id={message.id}>
                    <td>{message.quantity}</td>
                    <td>{message.description}</td>
                    <td>{message.producttotal}</td>
                </tr>
            )
        });

        return (
            <table id="table" className="table">
                <tr>
                    <th>Cantidad</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
                {messageList}
            </table>
        );
    }

});
