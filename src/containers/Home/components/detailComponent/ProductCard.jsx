import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {
  Col,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import {addProductToCart} from '../../action/index';

class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.any,
    cart: PropTypes.any,
    addProductToCart: PropTypes.func
  };

  isThisProductInCart = id => (this
      .props
      .cart
      .find(item => item.id === id))

  render() {
    const productObj = Object.assign({}, this.props.product);
    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.product.img}
            alt={this.props.product.title}/>
          <CardBlock>
            <CardTitle>{this.props.product.title}</CardTitle>
            <CardSubtitle>價格：{this.props.product.price}元</CardSubtitle>
            <CardText>{this.props.product.desc}</CardText>
            <Button
              className="buyBtn"
              onClick={() => this.props.addProductToCart(productObj)}
              disabled={this.isThisProductInCart(productObj.id)}>
              購買
            </Button>
          </CardBlock>
        </Card>
      </Col>

    );

  }
}

function mapStateToProps(state) {

  return {cart: state.cart};
}

export default connect(mapStateToProps, {addProductToCart})(ProductCard);
