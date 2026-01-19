const Footer = () => {
	const today = new Date();

	return (
		<footer>
			<p>Copyright &copy; scarletEdge {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
