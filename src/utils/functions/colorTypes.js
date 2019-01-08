import { TYPES_COLOR } from '../constans/colorTypes-const';

const getColorTypes = types => {
  const colors = {
    primary: {
      code: TYPES_COLOR[types[0]],
      name: types[0],
      isRight: false,
    }
  };

  const secundary = TYPES_COLOR[types[1]];

  if (secundary != null) {
    colors['secundary'] = {};
    colors.secundary['code'] = secundary;
    colors.secundary['name'] = types[1];
    colors.secundary['isRight'] = true;
  }

  return colors;
}


export { getColorTypes };