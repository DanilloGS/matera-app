import { HttpAdapter } from '../../Infrastructure/Adapters';
import { ViaCepDto } from '../../Domain/DTO';
import { addressDtoToAddressParser } from '../../Infrastructure/Helpers/addressParser';

const CORREIOS_API_URL = 'https://viacep.com.br/ws/';

const useAddress = () => {
	const http = new HttpAdapter(CORREIOS_API_URL);

	const getAddress = async (cep: string) => {
		try {
			const response = await http.get<ViaCepDto>(`${cep}/json`, {});
			return addressDtoToAddressParser(response);
		} catch {
			console.error('Erro ao buscar endereço');
			return null;
		}
	};

	return { getAddress };
};

export default useAddress;
