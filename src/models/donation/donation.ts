import { CategoryProvider as Category } from '../../providers/category/category';

export interface Donation {
  category: Category,
  amount: number
}
