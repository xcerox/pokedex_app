import React, { PureComponent } from 'react';
import { next } from '../utils/functions/infinityScroll';


const withPagination = (WrappedComponent) => {
  return class extends PureComponent {

    state = {
      data: [],
      currentPage: 0,
      pagesLoaded: [],
      hasNext: false
    }

    componentDidMount() {
      if (this.props.data.length > 0) {
        this.setState({
          data: this.props.data
        }, () => {
          this.aheadPage();
        });
      }
    }

    onEndReached = () => {
      if (this.state.hasNext) {
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

    render() {
      const pagination = {
        pages: this.state.pagesLoaded,
        hasNext: this.state.hasNext,
        onEndReached: this.onEndReached,
      }

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