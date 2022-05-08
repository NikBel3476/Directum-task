class Logger {
	constructor() {

	}

	logPostMethods() {
		const creationDate = new Date('2022-03-01');
		const certainDate = new Date('2022-04-22');

		const post = new Post(
			creationDate,
			'author',
			'preview',
			'description'
		);

		console.log(post.toString());
		console.log(`Дней с даты создания поста - ${post.daysFromCreation()}`);
		console.log(`Дней с даты создания на ${certainDate.toLocaleString('ru')} - ${post.daysFromCertainDate(certainDate)}`);
	}

	logCommentMethods() {
		const creationDate = new Date('2019-06-01');

		const comment = new Comment(
			creationDate,
			'author',
			'content'
		);

		console.log(comment.toString());
		console.log(`Дней с даты создания комментария: ${comment.daysFromCreation()}`);
	}

	logEventMethods() {
		const eventDate = new Date('2010-05-19 18:00:00');

		const event = new Event(
			eventDate,
			'description',
			30,
			50
		);

		console.log(event.toString());
		console.log(event.isEnoughParticipants() ? 'Мероприятие состоится' : 'Недостаточно участников');

		event.participantsAmount = 60;
		console.log(event.toString());
		console.log(event.isEnoughParticipants() ? 'Мероприятие состоится' : 'Недостаточно участников');
	}
}
