import React, { Component } from 'react'
import axios from 'axios'

class CheckoutPage extends Component {

    state = {
        name:"",
        address:"",
        isOrderSave:false,
    }

    orderName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    orderAddress = (e) => {
        this.setState({
            address:e.target.value
        })
    }

    sendForm = (e) => {
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/orders",{
            name:this.state.name,
            address:this.state.address
        })
        .then(res => res.data)
        .then(({name,address}) => this.setState({
            name,
            address,
            isOrderSave:true
        }))
    }

    renderMessage = () => {
        return (
            <>
                <div className='checkout-form'>
                    Dear {this.state.name}, thank you for this order!
                    Your Address : {this.state.address}
                </div>
                
            </>
        )
    }


    renderForm() {
        return (
            <form onSubmit={this.sendForm}>
                <div className='checkout-input'>
                    <input 
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.orderName}
                    />
                </div>
                <div className='checkout-input'>
                    <input 
                        type="text"
                        placeholder="Your address"
                        value={this.state.address}
                        onChange={this.orderAddress}
                    />
                </div>
                <button type="submit" className='checkout-btn'>Send</button>

            </form>
        )
    }

    render() {

        console.log(this.state)
        return(
            <>
                <div className="page-title">Checkout</div>

                {
                    this.state.isOrderSave !== true ? this.renderForm() : this.renderMessage()
                }
            </>
        )
       
    }
}

export default CheckoutPage
