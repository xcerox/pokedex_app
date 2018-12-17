const onScrollGetBotton = nativeEvent => {
  const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

  return layoutMeasurement.height + contentOffset.y >= contentSize.height - 90;
}

const getPagination = (data, amount = 10) => {

  const pagination = [];
  let part = {};
  let hasNext = false;
  let counter = 1;
  
  do {
    if (!hasNext) {
      amount = 40;
    }

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
  return data[offset];;
}

export { onScrollGetBotton, getPagination, next };