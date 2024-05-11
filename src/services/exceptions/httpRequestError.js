function BadRequest(message) {
  this.name = 'BadRequest';
  this.message = message || 'Bad Request';
  this.status = 400;
}

function Unauthorized(message) {
  this.name = 'Unauthorized';
  this.message = message || 'Request Unauthorized';
  this.status = 401;
}

//Tipo de erro nativo do js que será customizado
BadRequest.prototype = new Error();
Unauthorized.prototype = new Error();

export { BadRequest, Unauthorized };
