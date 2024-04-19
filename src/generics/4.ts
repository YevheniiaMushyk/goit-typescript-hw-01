type Сonsumer = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

function createOrUpdateUser(initialValues: Partial<Сonsumer>) {
	// Оновлення користувача
}

createOrUpdateUser({
	email: "user@mail.com",
	password: "password123",
});
