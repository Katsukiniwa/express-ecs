import { Router } from 'express';
import { NovelController } from '../../presentation/controller/NovelController';

export const novelRouter = Router();

novelRouter.get('/novels/:novelId', (request, response, next) => {
  (async () => {
    const novelController = new NovelController(request, response);
    
    return await novelController.getNovel();
  })().catch(next);
})
