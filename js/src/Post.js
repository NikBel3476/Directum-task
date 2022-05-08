class Post {
	_creationDate;
	_author;
	_preview;
	_description;

	constructor(creationDate, author, preview, description) {
		this._creationDate = creationDate;
		this._author = author;
		this._preview = preview;
		this._description = description;
	}

	get creationDate() {
		return this._creationDate;
	}

	set creationDate(newDate) {
		this._creationDate = newDate;
	}

	get author() {
		return this._author;
	}

	get preview() {
		return this._preview;
	}

	set preview(newPreview) {
		this._preview = newPreview;
	}

	get description() {
		return this._description;
	}

	set description(newDescription) {
		this._description = newDescription;
	}

	toString() {
		return `Пост\n` +
			`Автор: ${this._author}\n` +
			`Дата создания: ${this._creationDate.toLocaleString('ru')}\n` +
			`Превью: ${this._preview}\n` +
			`Описание: ${this._description}`;
	}

	daysFromCreation() {
		return this.daysFromCertainDate(Date.now());
	}

	daysFromCertainDate(date) {
		return Math.floor((date - this._creationDate) / MILLISECONDS_IN_DAY);
	}
}
