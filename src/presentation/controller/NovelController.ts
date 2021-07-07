import { Request, Response } from "express";
import { BaseController } from "../../common/presentation/BaseController";
import { NovelRepository } from "../../domain/model/novel/NovelRepository";
import { PrismaNovelRepository } from "../../infrastructure/repository/PrismaNovelRespository";

export class NovelController extends BaseController {
  private novelRepository: NovelRepository
  
  constructor(request: Request,response: Response) {
    super(request, response);
    
    this.novelRepository = new PrismaNovelRepository();
  }

  public async getNovel() {
    const novelId = this.request.params.novelId;
    console.log(this.request.params);
    
    if (typeof novelId !== "string") {
      throw new Error('novelId is not string');
    }

    const novel = await this.novelRepository.findById(Number(novelId));

    return this.response.json({ novel })
  }
}
