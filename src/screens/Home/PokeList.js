import React, { PureComponent } from 'react';
import GridView from 'react-native-super-grid';
import { connect } from 'react-redux';

import PokeCard from './PokeCard';
import LoadingFooter from '../../components/Loading/LoadingFooter';
import { withPagination } from '../../components/WithPagination';

class PokeList extends PureComponent {

  drawChild = item => (<PokeCard pokemon={item} />);

  itemLayout = (_, index) => ({ length: 80, offset: 80 * index, index });

  footer = () => (<LoadingFooter show={this.props.pagination.hasNext} />);


  render() {

    const { pagination } = this.props;

    return (
      <GridView
        itemDimension={110}
        items={pagination.pages}
        renderItem={this.drawChild}
        getItemLayout={this.itemLayout}
        extraData={pagination}
        maxToRenderPerBatch={9}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item[0].name}
        onEndReached={pagination.onEndReached}
        ListFooterComponent={this.footer}
      />
    )
  }
}

function mapStateToProps({ pokemons }) {
  return {
    data: pokemons.data,
  }
}

export default connect(mapStateToProps)(withPagination(PokeList));

