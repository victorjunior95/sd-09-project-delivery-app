// const chai = require('chai');
// const { stub } = require('sinon');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);

// const { expect } = chai;

// const app = require('../../api/app');
// const { product } = require('../../database/models');

// describe('Busca todos os produtos', () => {
//   describe('quando não existe nenhum produto cadastrado', () => {
//     const findAllStub = stub(product, 'findAll');
//     let response;
//       before(async () => {
//         response = await chai.request(app)
//             .post('/users/login')
//             .send({
//                 email: 'adm@deliveryapp.com',
//                 password: '--adm2@21!!--',
//             });
//       findAllStub.resolves([]);
//     });

//     after(() => {
//       findAllStub.restore();
//     });

//     it('Chama Product.findAll', async () => {
//       await chai.request(app)
//         .get('/customer/products')
//         .set('Authorization', response.token);

//       expect(user.findAll.calledOnce).to.be.equals(true);
//     });

//     it('o status é 200', async () => {
//       const result = await chai.request(app)
//         .get('/customer/products')
//         .set('Authorization', response.token);

//       expect(result.status).to.be.equals(200);
//     });

//     it('a resposta é um array', async () => {
//       const result = await chai.request(app)
//         .get('/customer/products')
//         .set('Authorization', response.token);

//       expect(result.body).to.be.an('array');
//     });

//     it('o array está vazio', async () => {
//       const result = await chai.request(app)
//         .get('/customer/products')
//         .set('authorization', response);

//       expect(result.body).to.be.empty;
//     });
//   });
// });
