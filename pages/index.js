import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react'
import Layout from '../components/Layout';
import Link from 'next/link';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link href={`/campaigns/${address}`}>
                        <a>View Campaigns</a>
                    </Link>
                    ),
                fluid: true,
                style: { overflowWrap: 'break-word' }
            };
        });

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>

                    <Link href="/campaigns/new">
                        <Button 
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </Link>

                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;