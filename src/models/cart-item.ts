import { ProductDTO } from './product.dto';

export interface CartItem {
    quantidade : number;
    product : ProductDTO;
}