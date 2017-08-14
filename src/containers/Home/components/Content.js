import React, {Component, PropTypes} from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron
} from 'reactstrap';
import {connect} from 'react-redux';
import './style.css';
import getDataFun, {openCart} from '../action/index';
import ProductCard from './detailComponent/ProductCard';
import Cart from './detailComponent/Cart';


class Content extends Component {
  static propTypes = {
    products: PropTypes.any,
    cart: PropTypes.any,
    isCartOpen: PropTypes.any,
    getDataFun: PropTypes.func,
    openCart: PropTypes.func
  };

  state = {
    modal: false
  }

  componentWillMount() {

    this.props.getDataFun();
  }


  toggle = () => {
    if (this.props.cart.length) {
      this.props.openCart();
    } else {
      return;
    }
  }


  renderProductsCard = data => (

    data.map(d => (
      <ProductCard product={d} key={d.id}/>
           )));

  renderCartWindow = () => (
    <Cart modal={this.props.isCartOpen}/>
  );


  render() {
    const good = true;
    const bad = false;
    return (
      <Container>
        <Jumbotron>
          <Col md="12">
            <h1 className="display-3">美客唱片PPP</h1>
            <p className="lead">美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評</p>
            <hr className="my-2"/>
            <p>不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動進一步擴大影響力，提昇流行音樂產業的動能</p>
            <p className="lead">
              <Button
                disabled={this.props.cart.length === 0 ? good : bad}
                color="primary"
                onClick={this.toggle}>
                購物車({this.props.cart.length})
              </Button>
            </p>
          </Col>
        </Jumbotron>
        <Row>

          {this.renderProductsCard(this.props.products)}

        </Row>

        {this.renderCartWindow()}


      </Container>
    );
  }
}

function mapStateToProps(state) {

  return {
    products: state.products,
    cart: state.cart,
    isCartOpen: state.isCartOpen
  };
}

export default connect(mapStateToProps, {getDataFun, openCart})(Content);
