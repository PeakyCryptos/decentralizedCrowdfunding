import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import Layout from '../../../components/Layout';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        console.log(props.query)

        return { address };
    }

    render() {
        return (
            <Layout>
                <h1>Requests list</h1>
                <Link  href={`/campaigns/requests/${this.props.address}/new`}>
                    <Button primary>Add Request</Button>
                </Link>
            </Layout>

        );
    }
}

export default RequestIndex;