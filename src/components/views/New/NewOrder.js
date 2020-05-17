import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class NewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
  };

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  onclick(type) {
    this.setState(prevState => {
      return {
        count: type === 'add' ? prevState.count + 1 : prevState.count - 1,
      };
    });
  }

  render() {
    const {
      loading: { active, error },
      products,
    } = this.props;

    //console.log('props', this.props);
    //console.log('products', products);

    const Wrapper = props => <div>{props.children}</div>;
    if (active || !products.length) {
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if (error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <div>
            {products.map(({ id, name, price, params }) => (
              <div key={id}>
                <Badge color='secondary' badgeContent={this.state.count}>
                  <span>{name}</span>
                </Badge>
                <ButtonGroup>
                  <Button
                    aria-label='reduce'
                    onClick={() => {
                      this.setState({ count: this.state.count - 1 });
                    }}
                  >
                    <RemoveIcon fontSize='small' />
                  </Button>
                  <Button
                    aria-label='increase'
                    onClick={() => {
                      this.setState({ count: this.state.count + 1 });
                    }}
                  >
                    <AddIcon fontSize='small' />
                  </Button>
                </ButtonGroup>
              </div>
            ))}
          </div>
        </Wrapper>
      );
    }
  }
}

export default NewOrder;
