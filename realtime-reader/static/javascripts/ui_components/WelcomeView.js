var WelcomeView = React.createClass({

    render: function () {

        var view;
        var quantity = this.props.quantity;
        if (this.props.quantity) var style = {display: 'none'};

        if (quantity) {
            view = (
                <div></div>
            )
        } else {
            view = (
                <div id="page-top" onClick={this.props._onClick}>
                    <header id="welcome">
                        <div className="col-md-12">
                            <img src="static/images/logo-walmart.png" alt="logo_walmart"/>
                        </div>
                        <div className="title-content">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="title-content-inner">
                                    <h1 id="homeHeading">Bienvenido(a)</h1>
                                    <p>Toca para empezar a comprar</p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            )
        }

        return (
            <section style={style} id="div">
                {view}
            </section>
        )
    }
});