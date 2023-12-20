'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554434',
  'Dimetrus Avgustinus': '+380411554433',
  'Sofia Milosskaya': '+380445554832',
  'Philipo Servantes': '+380475554439',
  'Serina Markovna': '+380445554431',
};


const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
