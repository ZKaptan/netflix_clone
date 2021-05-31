import React, { useEffect, useState } from "react";
import "../style/Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
			return () => {
				window.removeEventListener("scroll");
			};
		});
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<img
				src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
				alt="netflix_logo"
				className="nav_logo"
			/>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="netflix_user_logo"
				className="nav_avatar"
			/>
		</div>
	);
}

export default Nav;
