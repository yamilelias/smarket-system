var MainView = React.createClass({

    getInitialState: function () {

        var messages = [];
        messages = messages.map(function (msg) {
            return {
                key: 0,
                quantity: '',
                producttotal: '',
                description: '',
                total: 0
            }
        });

        return {
            messages: messages,
        };
    },

    componentWillMount: function () {

        this.pusher = new Pusher(PUSHER_CHAT_APP_KEY);
        this.chatRoom = this.pusher.subscribe('messages');

    },

    componentDidMount: function () {
        this.chatRoom.bind('new_message', function (message) {
            this.setState({messages: this.state.messages.concat(message)})
        }, this);
    },

    render: function () {
        if (!this.props.quantity) var style = {display: 'none'};

        var body = (
            <div>
                <div className="menu-help">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <div className="icons">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <span>Buscar</span>
                            <span>Ofertas</span>
                            <span>Ayuda</span>
                        </div>
                    </div>
                </div>
                <section id="content">
                    <Messages messages={this.state.messages}/>
                </section>
            </div>

        );

        return (
            <div id="list-view" style={style}>
                {body}
            </div>
        );
    }
});
