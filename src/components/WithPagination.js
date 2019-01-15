import React, { PureComponent } from 'react';
import { next, getPagination } from '../utils/functions/infinityScroll';
import { lowerCase } from 'lodash';


const withPagination = (WrappedComponent) => {
  return class extends PureComponent {

    state = {
      data: [],
      currentPage: 0,
      pagesLoaded: [],
      hasNext: false,
      isFilterEnable: false,
    }

    componentDidMount() {
      if (this.props.data.length > 0) {
        this.setState({
          data: getPagination(this.props.data, 9)
        }, () => {
          this.aheadPage();
        });
      }
    }

    onEndReached = () => {
      if (this.isNullOrEmpty(this.props.filter) && this.state.hasNext) {
        this.aheadPage();
      }
    }

    aheadPage = () => {
      const nextPage = next(this.state.data, this.state.currentPage);

      this.setState(prevState => {
        return {
          pagesLoaded: prevState.pagesLoaded.concat(nextPage.data),
          currentPage: nextPage.page,
          hasNext: nextPage.hasNext,
        }
      });
    }

    filterData = filter => {
      let pages = this.state.pagesLoaded;
      let hasNext = this.state.hasNext;

      if (!this.isNullOrEmpty(filter)) {
        pages = this.props.data.filter(pokemon => {
          const name = lowerCase(pokemon.name);
         return name.startsWith(lowerCase(filter))
        });
        hasNext = false;
      } 

      return {
        pages,
        hasNext,
        onEndReached: this.onEndReached,
      };
    }

    isNullOrEmpty = value => {
      return value == null || value == '';
    }

    render() {

      const pagination = this.filterData(this.props.filter);


      return (
        <WrappedComponent
          {...this.props}
          pagination={pagination}
        />
      )
    }
  }
}

export { withPagination };