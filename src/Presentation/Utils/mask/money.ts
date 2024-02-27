export const moneyMask = (value: string) => {
	let money = value.replace(/\D/g, '');

	if (Number(money) < 1 && Number(money) !== 0) {
		money = '0' + money;
	}

	money = money.replace(/^(\d{0,})(\d{2})$/, '$1,$2');

	return money;
};
