import { PrismaClient } from "@prisma/client";
import { Author } from "../../domain/model/author/Author";
import { Novel } from "../../domain/model/novel/Novel";
import { NovelRepository } from "../../domain/model/novel/NovelRepository";

export class PrismaNovelRepository implements NovelRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async findById(novelId: string): Promise<Novel> {
    const prismaNovel = await this.prisma.novels.findUnique({
      where: {
        id: novelId,
      },
      include: {
        author: true,
      },
    });

    if (prismaNovel == null) {
      throw new Error("novel not found");
    }

    return new Novel(
      '1',
      prismaNovel.title,
      [],
      new Author(
        '1',
        prismaNovel.author.name,
        prismaNovel.author.description,
        prismaNovel.author.icon
      )
    );
  }
}
