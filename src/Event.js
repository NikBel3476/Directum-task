class Event {
	_date;
	_description;
	_participantsAmount;
	_requiredParticipantsAmount;

	constructor(date, description, participantsAmount, requiredParticipantAmount) {
		this._date = date;
		this._description = description;
		this._participantsAmount = participantsAmount;
		this._requiredParticipantsAmount = requiredParticipantAmount;
	}

	get date() {
		return this._date;
	}

	set date(newDate) {
			this._date = newDate;
	}

	get description() {
		return this._description;
	}

	set description(newDescription) {
			this._description = newDescription;
	}

	get participantsAmount() {
		return this._participantsAmount;
	}

	set participantsAmount(newAmount) {
			this._participantsAmount = newAmount;
	}

	get requiredParticipantsAmount() {
		return this._requiredParticipantsAmount;
	}

	set requiredParticipantsAmount(newAmount) {
			this._requiredParticipantsAmount = newAmount;
	}

	toString() {
		return `Мероприятие\n` +
			`Дата: ${this._date.toLocaleString('ru')}\n` +
			`Описание: ${this._description}\n` +
			`Кол-во участников: ${this._participantsAmount}\n` +
			`Необходимое кол-во участников: ${this._requiredParticipantsAmount}`;
	}

	isEnoughParticipants() {
		return this._participantsAmount - this._requiredParticipantsAmount >= 0;
	}
}
