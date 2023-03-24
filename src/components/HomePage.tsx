import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";

interface Props {
	name: string;
}

interface IJoke {
	type: string;
	setup: string;
	punchline: string;
	id: number;
}

export default function HomePage(props: Props) {
	const [age, setAge] = useState<number>(10);

	const handleChangeAge = () => {
		// setAge('ten')
	};

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	const fetchJoke = async () => {
		const res = await axios.get<IJoke>("https://official-joke-api.appspot.com/random_joke");
		const data = res.data;
		console.log(data);
	};

	useEffect(() => {
		handleChangeAge();
		fetchJoke();
	}, []);

	return (
		<div>
			<h3>HomePage</h3>
			<p>{props.name}</p>
			<p>{age / 10}</p>

			<input onChange={handleOnChange} type="text" name="address" id="address" />
		</div>
	);
}
