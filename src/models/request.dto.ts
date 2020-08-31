import { RefDTO } from './ref.dto';
import { PaymentDTO } from './payment.dto';
import { ItemRequestDTO } from './item-request.dto';

export interface RequestDTO {
    cliente : RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PaymentDTO;
    itens: ItemRequestDTO[];

}