import React, {Component} from 'react';
import {Card, Grid, Link } from 'semantic-ui-react';
import Layout from '../../componenets/Layout';
import Campaign from '../../ethereuem/campaign';
import web3 from '../../ethereum/web3';
import ContributeFrom from '../../components/ContributeForm';
import {Link} from '../../routes';
class CampaignShow extends  {

  static async getInitialProps(props){
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();


    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }
  constructor() {

  }

  renderCards(){

    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items =  [{
      header: manager,
      meta: 'Address of manager',
      description: 'Description',
      style: {overflowWrap: 'break-word'}
    },
    {
      header: minimumContribution,
      meta: 'Minimum contribution (wei)',
      description: 'You must contribute this minimum amount'
    },
    {
      header: requestsCount,
      meta: 'Number of Requests',
      description: 'A request tries to withdraw money from the contract'
    },
    {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people who contributed to the campaign'
    },
    {
      header: web3.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description: 'How much money has the campaign to spend'
    }];
    return <Card.Group items = {items}/>;
  }

  render (){
    return (<Layout>
      <Grid>
        <Grid.Row>
        <Grid.Column width={10}>
          {this.renderCards()}
        </Grid.Column>
        <Grid.Column width ={6 Blo}>
          <ContributeForm address={this.props.address}/>
        </Grid.Column>
      </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>
          <Button primary> View Requests</Button>
        </a>
      </Link>
        </Grid.Column>
    </Grid.Row>
      </Grid>
      </Layout>);
  }
}

export default CampaignShow;
