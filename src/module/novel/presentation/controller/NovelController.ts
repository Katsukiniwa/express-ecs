import { BaseController } from "../../../../common/presentation/BaseController";
import { NovelRepository } from "../../domain/model/novel/NovelRepository";
import { PrismaNovelRepository } from "../../infrastructure/repository/PrismaNovelRespository";

export class NovelController extends BaseController {
  private novelRepository: NovelRepository;

  constructor() {
    super();

    this.novelRepository = new PrismaNovelRepository();
  }
}
