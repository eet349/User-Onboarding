const UserList = (props) => {
	const { userList } = props;

	const renderUserList = () => {
		return userList.map((user) => {
			return (
				<div key={user.id}>
					<h2>Name: {user.name}</h2>
					<h3>Email: {user.email}</h3>
				</div>
			);
		});
	};

	return <>{renderUserList()}</>;
};

export default UserList;
