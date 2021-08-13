import { Novel } from "./Novel";

export interface NovelRepository {
  findById(novelId: string): Promise<Novel>;
}
