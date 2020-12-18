import { CityDTO } from './city.dto';
import { StateDTO } from './state.dto';
import { AddressDTO } from './address.dto';
export interface ClientDTO {
    id : string;
    nome: string;
    email : string;
    cpfOuCnpj: string;
    adresses?: AddressDTO;
    phones: string;
    state?: StateDTO;
    city?: CityDTO
}