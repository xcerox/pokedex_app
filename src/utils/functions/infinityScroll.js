const onScrollGetBotton = nativeEvent => {
  const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

  return layoutMeasurement.height + contentOffset.y >= contentSize.height - 90;
}

const getPagination = (data, amount) => {

  const pagination = [];
  let part = {};
  let hasNext = false;
  let counter = 1;
  
  do {
    part = data.splice(0, amount);
    hasNext = data.length > 0;

    pagination.push({
      data: part,
      page: counter++,
      hasNext
    });

  } while (hasNext)
  
  return pagination;
}

const next = (data, offset) => {

  let item = data.filter(item => {
    return item.page === (offset+1);
  });

  return item[0];
}

export { onScrollGetBotton, getPagination, next };