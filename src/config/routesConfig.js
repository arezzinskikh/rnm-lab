import UserController from "./../src/controllers/UserController";

export default server => {
  // POST ROUTES
  server.get(`/api/user`, UserController.getAll);
  server.get(`/api/user/:id`, UserController.getById);
  server.post(`/api/user`, UserController.insert);
  server.put(`/api/user/:id`, UserController.update);
  server.delete(`/api/user/:id`, UserController.delete);
};
