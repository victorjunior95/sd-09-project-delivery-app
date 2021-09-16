const chai = require('chai');
const sinon = require('sinon');
const { stub } = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../api/app');

const { expect } = chai;
const { user } = require('../../database/models');
describe('POST users/login', () => {
   describe('Quando o usuário não existe no banco:', () => {
    const findUser = stub(user, 'findOne')
    let response;

    before(async () => {
      response = await chai.request(app)
        .post('/users/login')
        .send({
          email: 'emailfake@email.com',
          password: 'password-fake'
        });
    });

    after(() => {
      findUser.restore();
    });

    it('Retorna o status HTTP 404', () => {
      expect(response).to.have.status(404);
    });

    it('Retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('O objeto possui uma propriedade "message"', () => {
      expect(response.body).to.have.property('error');
    });

    it('A propriedade "message" possui a mensagem de erro', () => {
      expect(response.body.error.message).to.equal('Usuário não encontrado');
    });
  });
});