import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@material-ui/core';
import TableHeader from './TableHeader';


const columnData = [
  {
    id: 'productId', numeric: false, disablePadding: true, label: 'Product Id',
  },
  {
    id: 'productName', numeric: false, disablePadding: true, label: 'Product Name',
  },
  {
    id: 'quantity', numeric: false, disablePadding: true, label: 'Quantity',
  },
  {
    id: 'price', numeric: false, disablePadding: true, label: 'Unit Price',
  },
  {
    id: 'totalPrice', numeric: false, disablePadding: true, label: 'Total Price',
  },
  {
    id: 'notes', numeric: false, disablePadding: true, label: 'Notes',
  },
  {
    id: 'action', numeric: false, disablePadding: true, label: 'Actions',
  },
];

const styles = {
    div: {
      display: 'flex',
      flexDirection: 'row wrap',
      width: '100%',
      background: '#f9f9f9',
      marginBottom: 20,
    },
    paperLeft: {
      flex: 8,
      textAlign: 'center',
      padding: 5,
      backgroundColor: '#fff',
      overflow: 'scroll',
      width: '100%',
      boxShadow: '3px 3px 3px #D3D3D3',
      border: '1px solid #D3D3D3',
    },
    tableCell: {
      textAlign: 'center',
      float:'left',
    },
    dense :{
      flex: 8,
      padding: 3,
      textAlign: 'center',
      overflow: 'scroll',
      },
  };
  

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      data: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { items = [] } = nextProps;
    return {
      data: items,
    };
  }

  handleChange = (event, index) => {
    const { name, value } = event.target;
    const { onChange } = this.props;
    const { data: modfiedItems } = this.state;
    modfiedItems[index][name] = value;
    this.setState({ data: modfiedItems });
    onChange(modfiedItems);
  }

  removeItem = (index) => {
    const { onChange } = this.props;
    const { data: modItems } = this.state;
    modItems.splice(index, 1);
    this.setState({ data: modItems });
    onChange(modItems);
  }

  render() {
    const { data = [] } = this.state ;

    return (
      <div style={styles.div}>
        <div style={styles.paperLeft}>
          <Table aria-labelledby="tableTitle">
            <TableHeader columns={columnData} />
            <TableBody>
              {data.map((n, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={n.id}
                  >
                    <TableCell style={{ color: '#f50057' }} component="th" scope="row" padding="none">
                      <TextField
                            name="productId"
                            placeholder="Product Id"
                            margin="dense"
                            style={styles.dense}
                            variant="outlined"
                            value={n.productId}
                            onChange={e => this.handleChange(e, index)}
                        />
                    </TableCell>
                    <TableCell style={{ color: '#f50057' }} component="th" scope="row" padding="none">
                        <TextField
                            name="productName"
                            type="text"
                            placeholder="Product Name"
                            margin="dense"
                            style={styles.dense}
                            variant="outlined"
                            value={n.productName}
                            onChange={e => this.handleChange(e, index)}
                        />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      <TextField
                            name="quantity"
                            placeholder="Quantity"
                            margin="dense"
                            style={styles.dense}
                            variant="outlined"
                            value={n.quantity}
                            onChange={e => this.handleChange(e, index)}
                        />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                    <TextField
                            name="unitPrice"
                            placeholder="Unit Price"
                            margin="dense"
                            style={styles.dense}
                            variant="outlined"
                            value={n.unitPrice}
                            onChange={e => this.handleChange(e, index)}
                        />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                        <TextField
                          name="TotalPrice"
                          margin="dense"
                          style={styles.dense}
                          variant="outlined"
                          value={(n.quantity * n.unitPrice)}
                          disabled
                        />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                    <TextField
                            name="notes"
                            placeholder="Notes"
                            margin="dense"
                            style={styles.dense}
                            variant="outlined"
                            value={n.notes}
                            onChange={e => this.handleChange(e, index)}
                            multiline
                        />
                      </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      <Button color="secondary" variant="contained" onClick={() => this.removeItem(index)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  items: PropTypes.instanceOf(Array),
  onChange: PropTypes.func,
};


export default ProductDetails;
