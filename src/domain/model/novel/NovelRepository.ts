import { Novel } from "./Novel";

export interface NovelRepository {
  findById(novelId: number): Promise<Novel>;
}
