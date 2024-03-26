import express from 'express';

import Controller from '../controller';
import { initDatabase, releaseDatabase } from '../../database/database';
import response from '../../middleware/response';
import parameterValidate from '../../middleware/parameter.validate';
import authorizeValidate from '../../middleware/authorize.validate';

import { TempRequest } from './model/temp.model';
import TempService from './temp.service';
import { HttpRequest, RequestWithUser } from '../../types/request';

class TempController extends Controller {
  public readonly path = '/temp';

  private tempService: TempService;

  constructor() {
    super();
    this.initializeRoutes();

    this.tempService = new TempService();
  }

  private initializeRoutes() {
    // with auth
    this.router.get(`${this.path}/auth`, authorizeValidate, parameterValidate(TempRequest), this.withAuthTemp, response, releaseDatabase);

    // without auth
    this.router.get(`${this.path}`, parameterValidate(TempRequest), this.withAuthTemp, response);
  }

  private withAuthTemp = async (req: RequestWithUser<TempRequest>, res: express.Response, next: express.NextFunction) => {
    try {
      const params = req.requestParams;

      const ticket = await this.tempService.getTempTicket();

      res.responseData = {
        code: 200,
        message: 'Success',
        data: {
          nonce: params.nonce,
          ticket,
        },
      }
    } catch (error) {
      console.log(error);
      res.responseError = error;
    }
    return next();
  }

  private temp = async (req: HttpRequest<TempRequest>, res: express.Response, next: express.NextFunction) => {
    try {
      const params = req.requestParams;

      const ticket = await this.tempService.getTempTicket();

      res.responseData = {
        code: 200,
        message: 'Success',
        data: {
          nonce: params.nonce,
          ticket,
        },
      }
    } catch (error) {
      console.log(error);
      res.responseError = error;
    }
    return next();
  }
}

export default TempController;
