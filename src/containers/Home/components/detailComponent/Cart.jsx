import React, {Component, PropTypes} from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button
} from 'reactstrap';
import {connect} from 'react-redux';
import {closeCart, deleteOneProductInCart} from '../../action/index';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.any,
    modal: PropTypes.any,
    closeCart: PropTypes.func,
    deleteOneProductInCart: PropTypes.func
  };

  toggle = () => {
    this.props.closeCart();
  }

  cancelBuy = (indexOfRemoveItem) => {
    this.props.deleteOneProductInCart(indexOfRemoveItem);

  }

  checkOut = amount => (
    alert(`已從信用卡中扣除${amount}元`));

  render() {
    const totalPrice = this.props.cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>準備結帳的商品</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>品項</th>
                <th>價格</th>
                <th>取消購買</th>
              </tr>
            </thead>
            <tbody>
              {this
                .props
                .cart
                .map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.cancelBuy(index)}>取消
                      </button>
                    </td>
                  </tr>
                ))}

            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <div>總價：{totalPrice}</div>
          <Button color="primary" onClick={() => this.checkOut(totalPrice)}>結帳</Button>{' '}
          <Button color="secondary" onClick={this.props.closeCart}>取消</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


function mapStateToProps(state) {
  return {isCartOpen: state.isCartOpen,
    cart: state.cart
  };
}

export default connect(mapStateToProps, {closeCart, deleteOneProductInCart})(Cart);
