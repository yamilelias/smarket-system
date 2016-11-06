var MainView = React.createClass({

    getInitialState: function () {

        var data = [];
        data = data.map(function (msg) {
            return {
                key: 0,
                quantity: '',
                producttotal: '',
                description: '',
                total: 0
            }
        });

        return {
            data: data,
        };
    },

    componentWillMount: function () {

        this.pusher = new Pusher(PUSHER_CHAT_APP_KEY);
        this.chatRoom = this.pusher.subscribe('data');

    },

    componentDidMount: function () {
        this.chatRoom.bind('new_product', function (message) {
            this.setState({data: this.state.data.concat(message)})
        }, this);
    },

    render: function () {
        if (!this.props.valid) var style = {display: 'none'};

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
                    <Table data={this.state.data}/>
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
