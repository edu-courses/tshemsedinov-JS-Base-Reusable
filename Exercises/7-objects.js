'use strict';

const fn = function() {
  const constObj = {
    name: 'm',
  };
  let valueObj = {
    name: 'r',
  };
  constObj.name = 'a';
  valueObj.name = 'c';

  valueObj = {};
};

module.exports = { fn };
