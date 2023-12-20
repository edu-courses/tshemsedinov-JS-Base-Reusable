'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554434' },
  { name: 'Dimetrus Avgustinus', phone: '+380411554433' },
  { name: 'Sofia Milosskaya', phone: '+380445554832' },
  { name: 'Philipo Servantes', phone: '+380475554439' },
  { name: 'Serina Markovna', phone: '+380445554431' }
];

const findPhoneByName = (name) => {
  for (const a of phonebook) {
    if (a.name === name) return a.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
