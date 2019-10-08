import React, { Component } from 'react';
import {
   Typography, 
   TextField, 
   Button,
   Grid,
} from '@material-ui/core';
import ProductDetails from './ProductDetails';


class BillingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data :
  {
	"id": 13268,
	"firstName": "Venky",
	"lastName": "Kota",
	"state": "Karnataka",
	"addressLine1": "BTM",
	"addressLine2": "#330,3rd Cross 7th Main",
	"city": "Bangalore",
	"zipCode": "1234",
  "country": "India",
  "sFirstName": "Venkatesh",
	"sLastName": "Kota",
	"sState": "Andhra",
	"sAddressLine1": "Rajupet",
	"sAddressLine2": "D.No: 4/266",
	"sCity": "Machilipatnam",
	"sZipCode": "560021",
  "sCountry": "India",
  "orderDate":"",
  "expectedDate":"",
	"productOrders": [{
		"productId": 41936,
		"productName": "Nandini Milk",
		"unitPrice": 30.0,
		"quantity": 21.0,
		"notes": "Testing"
  },
  {
		"productId": 42000,
		"productName": "Heritage Milk",
		"unitPrice": 10.0,
		"quantity": 81.0,
		"notes": "Multiline"
	}]
}
    };
  }


onSave = () => {
  const { data } = this.state;
  console.log(data);
}


  onAddItem = () => {
    let { data: { productOrders: items = [] } } = this.state;
    items = [
      ...items,
      {
        productId: '',
        productName: '',
        unitPrice: 0,
        quantity: 0,
        notes:'',
      },
    ];
    this.onChangeItem(items);
  }

  onSave = () => {
    const { data } = this.state;
   console.log('data', data);
  }


  onChangeItem = (items) => {
    const { data = {} } = this.state;
    this.setState({
      data: {
        ...data,
        productOrders: items,
      },
    });
  }

  handleFormChanges = (event) => {
    const { data = {} } = this.state;
    const { name } = event.target;
    let { value } = event.target;
    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  }


  removeItem = (i) => {
    const { data: { productOrders: items = [] } } = this.state;
    const newItems = items.filter(item => item.productId !== i.productId);
    this.onChangeItem(newItems);
  }


render() {
  const { data = {}} = this.state;
  const {
    id = '',
    firstName = '',
    lastName = '',
    addressLine1 = '',
    addressLine2 = '',
    city = '',
    state = '',
    zipCode = '',
    country = '', 
    sFirstName = '',
    sLastName = '',
    sAddressLine1 = '',
    sAddressLine2 = '',
    sCity = '',
    sState = '',
    sZipCode = '',
    sCountry = '', 
    productOrders = [],
    orderDate,
    expectedDate,
  } = data || {};
  return (
    <div>
      <div style={{ width: '78%', margin: '10px auto' }}>
        <Grid container spacing={32} style={{boxShadow: '3px 3px 3px #D3D3D3',
      border: '1px solid #D3D3D3'}}>
          <Grid item xs={12} md={2}>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={16}>
              <Grid item xs={12} md={12}>
              <Typography variant="body2" color="secondary">
                       <h3>Billing Address</h3>
             </Typography>
              <Grid item xs={12} md={6}>
                <TextField
                    name="firstName"
                    placeholder="First Name"
                    margin="dense"
                    variant="outlined"
                    value={firstName}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="lastName"
                    placeholder="Last Name"
                    margin="dense"
                    variant="outlined"
                    value={lastName}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="addressLine1"
                    placeholder="Address Line1"
                    margin="dense"
                    variant="outlined"
                    value={addressLine1}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="addressLine2"
                    placeholder="AddressLine2"
                    margin="dense"
                    variant="outlined"
                    value={addressLine2}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="city"
                    placeholder="City"
                    margin="dense"
                    variant="outlined"
                    value={city}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="state"
                    placeholder="State"
                    margin="dense"
                    variant="outlined"
                    value={state}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="zipCode"
                    placeholder="Zipcode"
                    margin="dense"
                    variant="outlined"
                    value={zipCode}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="country"
                    placeholder="Country"
                    margin="dense"
                    variant="outlined"
                    value={country}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      name="orderDate"
                      label="Order Date"
                      type="date"
                      margin="dense"
                      variant="outlined"
                      value={orderDate}
                      InputLabelProps={{
                      shrink: true,
                     
                    }}
                    onChange={this.handleFormChanges}
                />
                </Grid>
            </Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={16}>
              <Grid item xs={12} md={12}>
              <Grid item xs={12} md={6}>
              <Typography variant="body2" color="secondary">
                       <h3>Shipping Address</h3>
             </Typography>
                <TextField
                    name="firstName"
                    placeholder="First Name"
                    margin="dense"
                    variant="outlined"
                    value={sFirstName}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="lastName"
                    placeholder="Last Name"
                    margin="dense"
                    variant="outlined"
                    value={sLastName}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="addressLine1"
                    placeholder="Address Line1"
                    margin="dense"
                  
                    variant="outlined"
                    value={sAddressLine1}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="addressLine2"
                    placeholder="AddressLine2"
                    margin="dense"
                    
                    variant="outlined"
                    value={sAddressLine2}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="city"
                    placeholder="City"
                    margin="dense"
                   
                    variant="outlined"
                    value={sCity}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="state"
                    placeholder="State"
                    margin="dense"
                   
                    variant="outlined"
                    value={sState}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="zipCode"
                    placeholder="Zipcode"
                    margin="dense"
                   
                    variant="outlined"
                    value={sZipCode}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    name="country"
                    placeholder="Country"
                    margin="dense"
                    variant="outlined"
                    value={sCountry}
                    onChange={this.handleFormChanges}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                      name="expectedDate"
                      label="Expected Date"
                      type="date"
                      margin="dense"
                      variant="outlined"
                      value={expectedDate}
                      InputLabelProps={{
                      shrink: true,
                     
                    }}
                    onChange={this.handleFormChanges}
                />
                </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop: 30, marginBottom: 30}}>
                <ProductDetails
                  items={productOrders}
                  removeItem={this.removeItem}
                  onChange={this.onChangeItem}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" color="primary" onClick={this.onAddItem}>
                        + Add Product
                </Button>
                <Button variant="contained"  color="primary" onClick={this.onSave} style={{float: 'right'}}>
                        Save
                </Button>
              </Grid>
        </div>
    </div>
  );
}
}


export default (BillingInformation);

