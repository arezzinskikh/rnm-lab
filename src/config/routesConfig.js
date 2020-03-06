import UserController from "./..UserController";

export default app => {
  // USER ROUTES
  app.get(`/api/user`, UserController.getAll);
  app.get(`/api/user/:id`, UserController.getById);
  app.post(`/api/user`, UserController.insert);
  app.put(`/api/user/:id`, UserController.update);
  app.delete(`/api/user/:id`, UserController.delete);
};
