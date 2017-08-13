import React, {Component} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap';
import './style.css';
import AlbumJson from './Album.json';

export default class Content extends Component {

  state = {
    modal: false,
    cart: []
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addToCart = (product) => {
    const newCart = this.state.cart;
    newCart.push(product);
    this.setState({cart: newCart});
  }

  cancelBuy = (removeIndex) => {
    const theCart = this.state.cart;
    const newCart = theCart.slice(removeIndex, 1);
    this.setState({cart: newCart});

  }

  checkOut = amount => (
    alert(`已從信用卡中扣除${amount}元`));

  render() {

    const totalPrice = this.state.cart.reduce((acc, item) => acc + item.price, 0);
    return (
      <Container>
        <Jumbotron>
          <Col md="12">
            <h1 className="display-3">美客唱片PPP</h1>
            <p className="lead">美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評</p>
            <hr className="my-2"/>
            <p>不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動進一步擴大影響力，提昇流行音樂產業的動能</p>
            <p className="lead">
              <Button color="primary" onClick={this.toggle}>
                購物車({this.state.cart.length})
              </Button>
            </p>
          </Col>
        </Jumbotron>
        <Row>

          {AlbumJson.map(product => (
            <Col xs="12" sm="6" md="4" lg="3">
              <Card>
                <CardImg top width="100%" src={product.img} alt={product.title}/>
                <CardBlock>
                  <CardTitle>{product.title}</CardTitle>
                  <CardSubtitle>價格：{product.price}元</CardSubtitle>
                  <CardText>{product.desc}</CardText>
                  <Button
                    className="buyBtn"
                    onClick={() => this.addToCart(product)}
                    disabled={this
                    .state
                    .cart
                    .find(item => item.id === product.id)}>
                    購買
                  </Button>
                </CardBlock>
              </Card>
            </Col>
          ))}

        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
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
                  .state
                  .cart
                  .map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td onClick={() => this.cancelBuy(index)}> 取消 </td>
                    </tr>
                  ))}

              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <div>總價：{totalPrice}</div>
            <Button color="primary" onClick={() => this.checkOut(totalPrice)}>結帳</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
