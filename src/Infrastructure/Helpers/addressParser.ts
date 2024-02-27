import { IAddress } from '../../Domain/ValueObjects';
import { ViaCepDto } from '../../Domain/DTO';

export const addressDtoToAddressParser = (addressDto: ViaCepDto): IAddress => {
	return {
		zipCode: addressDto.cep,
		city: addressDto.localidade,
		state: addressDto.uf,
		street: addressDto.logradouro,
		neighborhood: addressDto.bairro,
		complement: addressDto.complemento
	};
};

export const addressToAddressDtoParser = (address: IAddress): ViaCepDto => {
	return {
		cep: address.zipCode,
		localidade: address.city,
		uf: address.state,
		logradouro: address.street,
		bairro: address.neighborhood,
		complemento: address.complement
	};
};
