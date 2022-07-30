import React, { Component } from 'react';
import Router from 'next/router';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
    state = {
        value: '',
        loading: '',
        errorMsg: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState( { loading: true, errorMsg: '' } );

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            Router.push(window.location.href);
        } catch (err) {
            this.setState({ errorMsg: err.message }); 
        }

        this.setState( { loading: false, value: '' } );

    }

    render() {
        return (
            <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMsg } >
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                    value= {this.state.value}
                    onChange= {event => this.setState({ value: event.target.value })} 
                    label="ether" 
                    labelPosition="right" 
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMsg} /> 
                <Button loading={this.state.loading}  primary> 
                Contribute! 
                </Button>
            </Form>
        )
    }
}

export default ContributeForm;