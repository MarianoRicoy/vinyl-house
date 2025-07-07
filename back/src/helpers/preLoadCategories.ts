import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
  { name: 'Rap' },
  { name: 'Rock' },
  { name: 'Reggae' },
  { name: 'Jazz' },
  { name: 'Funk' },
  { name: 'Soul' },
  { name: 'Clásicos del Hip-Hop' },
  { name: 'Vinilos Edición Limitada' },
  { name: 'Instrumentales' }
];


export const preLoadCategories = async () => {
    const categories = await CategoryRepository.find();
    if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Category).values(categoriesToPreLoad).execute();
    console.log('Categories preloaded');
}