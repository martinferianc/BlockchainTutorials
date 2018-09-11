import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';


class ContributeFrom  extends Component{

  state = {
    value: '',
    errorMessage: ''
    value: false
  };
  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({loading:true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await camapign.emthods.contribute().send({
        from:accounts[0],
        value:web3.utils.toWei(this.state.value, 'ether')
      });
      Rounter.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (e) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false, value:''});
  };

  render(){
    return (
      <Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage}>

      <Form.Field>
      <label>Amount to Contribute</label>
      <Input
        value = {this.state.value}
        onChange{event =>
          this.setState({value: event.taget.value})
        }
        label="ether"
        labelPosition="right"
      />
      </Form.Field>
      </Form>
        <Message error header="Oops!" content={this.state.errorMessage}/>
      <Button primary loading={this.state.loading}>
      Contribute
      </Button>
      </Form>
    );

  }
  constructor() {

  }
}

export default ContributeFrom;
