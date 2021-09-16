const tokenCustomer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJpZCI6MywibmFtZSI6IkNsaWVudGUgWsOpIEJpcml0YSIsImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTYzMTgwMTI4MiwiZXhwIjoxNjMxODg3NjgyfQ.auV_6260lvpVukLPGP3is9g1hZUPDxBJIG0F61iHors';
const tokenSeller = '';
const tokenAdmin = '';

const customer = {
  token: tokenCustomer,
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  role: 'customer',
};

const seller = {
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  role: 'seller',
  token: tokenSeller,
};

const admin = {
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: tokenAdmin,
};

module.exports = {
  customer,
  seller,
  admin,
};
