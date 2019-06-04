import { get } from 'lodash'
import { pickHandler } from '../reducers/api/config/pickHandler'

export const fetchLoadingSelector = requestNames => state => {
  return requestNames.some(requestName => get(state, `api.loading.${requestName}`, true));
  // return get(state, `api.loading.${requestName}`, true);
};

export const fetchErrorSelector = requestNames => state => {
  return requestNames.some(requestName => get(state, `api.error.${requestName}`));
  // return get(state, `api.loading.${requestName}`, true);
};

export const fetchDataSelector = requestNames => state => {
  return requestNames.some(requestName => get(state, `api.complete.${requestName}`));
  // return get(state, `api.loading.${requestName}`, true);
};

export const fetchSelector = requestName => state => {
  return {
    isLoading: get(state, `api.loading.${requestName}`, true),
    error: get(state, `api.error.${requestName}`, null),
    data: get(state, `api.complete.${requestName}`, pickHandler(requestName, null, {type: requestName})),
  };
};