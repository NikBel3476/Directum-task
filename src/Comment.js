class Comment {
	_creationDate;
	_author;
	_content;

	constructor(creationDate, author, content) {
		this._creationDate = creationDate;
		this._author = author;
		this._content = content;
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

	get content() {
		return this._content;
	}

	set content(newContent) {
			this._content = newContent;
	}

	toString() {
		return `Комментарий\n` +
			`Автор: ${this._author}\n` +
			`Дата создания: ${this._creationDate.toLocaleString('ru')}\n` +
			`Содержимое: ${this._content}`;
	}

	daysFromCreation() {
		return Math.floor((Date.now() - this._creationDate) / MILLISECONDS_IN_DAY);
	}
}
