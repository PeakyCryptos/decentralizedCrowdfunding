import React, { Component } from 'react';
import { Button, Card, Grid, GridColumn } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import ContributeForm from '../../../components/ContributeForm';
import Link from 'next/link';


class campaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,  
            minContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            contributorCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            minContribution,
            balance,
            requestsCount,
            contributorCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager, 
                meta: 'Address of Manager',
                description: "Manager created this campaign. Only they can make a request to withdraw funds.",
                style: { overflowWrap: 'break-word' }
            }, 
            {
                header: minContribution, 
                meta: 'Minimum Contribution (wei)',
                description: "Must contribute at least this much wei to become a contributor.",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount, 
                meta: 'Number of Requests',
                description: "Requests are applications to withdraw money from the smart contract.",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: contributorCount, 
                meta: 'Amount of Contributors',
                description: "The amount of users who have contributed to this campaign.",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'), 
                meta: 'Balance of contract in Ether',
                description: "How much money the campaign has left to utilize.",
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
            <Grid>
                <Grid.Row>
                    <GridColumn width={10}>
                        {this.renderCards()}
                    </GridColumn>

                    <GridColumn width={6}>
                        <ContributeForm address={this.props.address} />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn width={5}>
                        <Link href={`/campaigns/${this.props.address}/requests`}>
                            <Button primary> View Requests </Button>
                        </Link>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            </Layout>
        )
    }
}

export default campaignShow;