var WelcomeView = React.createClass({

    render: function () {

        var view;
        var name = this.props.name;

        if (name) {
            view = (
                <div></div>
            )
        } else {
            view = (
                /*<div style={{marginTop: '20px'}}>
                    <p className="light white">Enter your Twitter name and start chatting!</p>
                    <div style={{marginTop: '20px'}}>
                        <input id="input-name" className="swish-input" style={{width: '350'}}
                               onKeyPress={this.props._onName} placeholder="Enter Twitter ID here"/>
                        <button className="bright-blue-hover btn-white" onClick={this.props._onClick} id="try-it-out">
                            Try it out
                        </button>
                    </div>
                </div>*/
                <div id="page-top" onClick={this.props._onClick}>
                    <header id="welcome">
                        <div className="col-md-12">
                            <img src="static/images/logo-walmart.png" alt="logo_walmart" />
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
            <section>
                {view}
            </section>
        )

    }

});