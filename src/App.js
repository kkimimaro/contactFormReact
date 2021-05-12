import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://127.0.0.1/www.rustamb.ru/index.php",
            data:  this.state
        }).then((response)=>{
            console.log(response)
            if (response.data.status === 'success') {
                alert("Ваше сообщение отправлено!");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Возникла проблема с отправкой")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return(
            <div className="App">
                <h2>Форма обратной связи</h2>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input type="text" className="form-control" placeholder="Введите имя..." required id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email-адрес</label>
                        <input type="email" className="form-control" placeholder="Введите email..." required id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea className="form-control" rows="5" placeholder="Введите сообщение..." required id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="ОТПРАВИТЬ"/>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default App;