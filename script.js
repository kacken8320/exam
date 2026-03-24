const quizForms = document.querySelectorAll('.quiz-form');

quizForms.forEach((form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const questions = form.querySelectorAll('.question[data-answer]');
		const scoreElement = form.querySelector('.score');

		if (questions.length === 0) {
			scoreElement.textContent = 'Es sind noch keine Fragen vorhanden.';
			return;
		}

		let correctAnswers = 0;

		questions.forEach((question) => {
			const rawExpected = question.dataset.answer || '';
			const expectedAnswers = rawExpected
				.split('|')
				.map((answer) => answer.trim().toLowerCase())
				.filter((answer) => answer.length > 0);

			const checkedRadio = question.querySelector('input[type="radio"]:checked');
			const allCheckboxes = question.querySelectorAll('input[type="checkbox"]');
			const checkedCheckboxes = question.querySelectorAll('input[type="checkbox"]:checked');
			const textInput = question.querySelector('input[type="text"]');
			const selectInput = question.querySelector('select');

			let isCorrect = false;
			if (allCheckboxes.length > 0) {
				const userAnswers = Array.from(checkedCheckboxes).map((input) => input.value.trim().toLowerCase());
				isCorrect =
					userAnswers.length === expectedAnswers.length &&
					expectedAnswers.every((answer) => userAnswers.includes(answer));
			} else {
				let userAnswer = '';
				if (checkedRadio) {
					userAnswer = checkedRadio.value.trim().toLowerCase();
				} else if (textInput) {
					userAnswer = textInput.value.trim().toLowerCase();
				} else if (selectInput) {
					userAnswer = selectInput.value.trim().toLowerCase();
				}

				isCorrect = expectedAnswers.includes(userAnswer);
			}

			const resultMarker = question.querySelector('.result');

			if (isCorrect) {
				correctAnswers += 1;
			}

			if (resultMarker) {
				resultMarker.textContent = isCorrect ? ' ✅' : ' ❌';
			}
		});

		scoreElement.textContent = `Du hast ${correctAnswers} von ${questions.length} richtig.`;
	});
});
