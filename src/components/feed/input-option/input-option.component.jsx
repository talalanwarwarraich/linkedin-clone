import "./input-option.styles.scss";

function InputOption({ Icon, title, color }) {
	return (
		<div className="input-option">
			{Icon && <Icon style={{ color: color }} />}
			<h4>{title}</h4>
		</div>
	);
}

export default InputOption;
