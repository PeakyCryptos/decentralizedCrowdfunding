import React, {  Component } from 'react';
import Router from 'next/router';
import Layout from '../../../components/Layout';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: '',
        errorMessage: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        this.setState({ loading:true,  errorMessage: '' })

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequests(
                description, 
                web3.utils.toWei(value, 'ether'), 
                recipient)
                .send({ from: accounts[0] });

            Router.push(`/campaigns/${this.props.address}`); 
        } catch(err) {
           this.setState({ errorMessage: err.message, loading: false}); 
        }

    }

    render() {
        return (
            <Layout>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <h3>Create a Request</h3>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={event => 
                                this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input 
                            value={this.state.value}
                            onChange={event => 
                                this.setState({ value: event.target.value })}
                        />
                    </Form.Field>


                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={event => 
                                this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>
                    
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Submit</Button>
                </Form>
            </Layout>
        )
    }
}

export default RequestNew;